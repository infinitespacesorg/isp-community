import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, type Plugin, type Connect } from "vite";
import path from "path";
import type { ServerResponse } from "node:http";

// ---------------------------------------------------------------------------
// bolt-keystatic — build-time content reader (static, no runtime server).
//
// `@keystatic/core/reader` is Node-only (uses node:fs), so it CANNOT ship in
// the client bundle. Instead we run it here at build time, transform each
// post's Markdoc AST into a plain-JSON renderable tree, and expose the result
// as the `virtual:blog-posts` module. The SPA imports that JSON and renders it
// with Markdoc's React renderer — zero server at runtime.
// ---------------------------------------------------------------------------
const BLOG_POSTS_ID = "virtual:blog-posts";

function blogPostsPlugin(): Plugin {
  return {
    name: "keystatic-blog-posts",
    resolveId(id) {
      if (id === BLOG_POSTS_ID) return "\0" + BLOG_POSTS_ID;
    },
    async load(id) {
      if (id !== "\0" + BLOG_POSTS_ID) return;

      // Imported lazily so a load failure surfaces here (with context) rather
      // than at config-evaluation time.
      const [{ createReader }, keystaticConfigMod, MarkdocMod, { markdocConfig }] =
        await Promise.all([
          import("@keystatic/core/reader"),
          import("./keystatic.config"),
          import("@markdoc/markdoc"),
          import("./src/keystatic/markdoc-config"),
        ]);

      const Markdoc = (MarkdocMod as unknown as { default: typeof import("@markdoc/markdoc").default }).default
        ?? (MarkdocMod as unknown as typeof import("@markdoc/markdoc").default);
      const keystaticConfig = (keystaticConfigMod as { default: unknown }).default;

      const reader = createReader(process.cwd(), keystaticConfig as never);
      const entries = await reader.collections.posts.all();

      const posts = await Promise.all(
        entries.map(async ({ slug, entry }) => {
          const e = entry as Record<string, unknown> & {
            content: () => Promise<{ node: unknown }>;
          };
          const { node } = await e.content();
          const renderable = Markdoc.transform(node as never, markdocConfig as never);
          return {
            slug,
            title: e.title,
            publishedDate: e.publishedDate,
            author: e.author,
            summary: e.summary,
            tags: e.tags ?? [],
            coverImage: e.coverImage || undefined,
            content: renderable,
          };
        }),
      );

      // Newest first.
      posts.sort((a, b) =>
        String(b.publishedDate ?? "").localeCompare(String(a.publishedDate ?? "")),
      );

      return `export const posts = ${JSON.stringify(posts)};`;
    },
  };
}

// ---------------------------------------------------------------------------
// bolt-keystatic — DEV-ONLY admin API (`/api/keystatic/*`).
//
// The Keystatic admin UI (mounted at /keystatic) needs a small API route for
// the GitHub OAuth token exchange (and, in local storage mode, file I/O).
// In `npm run dev` we serve it from Vite middleware. In production the same
// route is served by a Cloudflare Pages Function
// (functions/api/keystatic/[[route]].ts) — the static build itself ships no
// server. Everything here is guarded so a missing env var never crashes the
// dev server; the route simply returns errors when exercised unconfigured.
// ---------------------------------------------------------------------------
function keystaticDevApi(): Plugin {
  return {
    name: "keystatic-dev-api",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use(
        "/api/keystatic",
        (req: Connect.IncomingMessage, res: ServerResponse, next: Connect.NextFunction) => {
          (async () => {
            try {
              const { makeGenericAPIRouteHandler } = await import("@keystatic/core/api/generic");
              const keystaticConfig = (await import("./keystatic.config")).default;
              const handler = makeGenericAPIRouteHandler({ config: keystaticConfig as never });

              const chunks: Buffer[] = [];
              for await (const chunk of req) chunks.push(chunk as Buffer);
              const bodyText = Buffer.concat(chunks).toString("utf8");

              const url = `http://${req.headers.host ?? "localhost"}${req.url ?? ""}`;
              const keystaticReq = {
                method: req.method ?? "GET",
                url,
                headers: {
                  get: (name: string) => {
                    const v = req.headers[name.toLowerCase()];
                    return Array.isArray(v) ? v.join(", ") : (v ?? null);
                  },
                },
                json: async () => (bodyText ? JSON.parse(bodyText) : undefined),
              };

              const result = await handler(keystaticReq as never);
              res.statusCode = result.status ?? 200;
              for (const [k, v] of Object.entries(result.headers ?? {})) {
                if (typeof v === "string") res.setHeader(k, v);
              }
              res.end(result.body ?? null);
            } catch (err) {
              // Never take down the dev server — report and move on.
              console.error("[keystatic-dev-api]", err);
              if (!res.headersSent) res.statusCode = 500;
              res.end("Keystatic dev API error (see server logs). Check KEYSTATIC_* env vars.");
              void next;
            }
          })();
        },
      );
    },
  };
}

// ---------------------------------------------------------------------------
// Deploy environment for the routes manifest (routes.manifest.json).
// "production" only on the main-branch Cloudflare Pages deploy (or an explicit
// DEPLOY_ENV override); local dev and preview deploys are "staging".
// ---------------------------------------------------------------------------
const deployEnv =
  process.env.DEPLOY_ENV ??
  (process.env.CF_PAGES_BRANCH === "main" ? "production" : "staging");

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react(), blogPostsPlugin(), keystaticDevApi()],
  define: {
    __DEPLOY_ENV__: JSON.stringify(deployEnv),
  },
  publicDir: "./static",
  base: "./",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    // Force single instances of React for linked @infinitespaces/ui package
    dedupe: ["react", "react-dom"],
  },
  server: {
    port: 5174,
    fs: {
      // Allow serving files from the linked UI package in the monorepo
      allow: ["..", path.resolve(__dirname, "../isp-account-management")],
    },
  },
});
