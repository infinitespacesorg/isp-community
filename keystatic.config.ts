// keystatic.config.ts — bolt-keystatic (Phase 1 authoring bolt)
//
// Git-based CMS for the Infinite Spaces community blog. Defines a single
// `posts` collection stored as Markdoc (`.mdoc`) files under
// `src/content/blog/*`, plus a first-class `Story` embed component that
// authors can drop into a post body.
//
// STORAGE MODE — `github`:
//   The admin UI (mounted at /keystatic) commits directly to the repo via the
//   GitHub API from the browser. This is the fit for a static Cloudflare Pages
//   deploy (no long-running app server). The only server touchpoint is the
//   GitHub OAuth token exchange, served by a tiny Keystatic API route
//   (`/api/keystatic/[...]`):
//     - local dev  -> Vite dev-server middleware (see vite.config.ts)
//     - production -> Cloudflare Pages Function (functions/api/keystatic/[[route]].ts)
//   To run against a real repo set KEYSTATIC_GITHUB_CLIENT_ID / _SECRET and
//   KEYSTATIC_SECRET (see the integration note). Flip `storage` to
//   `{ kind: 'local' }` for a zero-config, disk-only local editing session.
//
// READING is fully static: `@keystatic/core/reader` runs at build time (see the
// `virtual:blog-posts` plugin in vite.config.ts) and emits plain JSON that the
// SPA renders — no runtime server, no reader in the client bundle.

import { config, fields, collection } from "@keystatic/core";
import { block } from "@keystatic/core/content-components";
import React from "react";

// Owner/repo for GitHub storage mode. Overridable via env so the same config
// works across forks without editing source.
const GITHUB_REPO = (import.meta.env?.VITE_KEYSTATIC_REPO ?? "infinitespacesorg/isp-community") as `${string}/${string}`;

export default config({
  // GitHub storage: browser commits straight to the repo (no app server).
  // Swap to `{ kind: 'local' }` for offline, disk-only editing in `npm run dev`.
  storage: {
    kind: "github",
    repo: GITHUB_REPO,
  },
  ui: {
    brand: { name: "Infinite Spaces — Blog" },
  },
  collections: {
    posts: collection({
      label: "Blog posts",
      slugField: "title",
      // One Markdoc file per post: src/content/blog/<slug>.mdoc
      path: "src/content/blog/*",
      // Frontmatter (YAML) + the `content` field rendered as the body.
      format: { contentField: "content" },
      entryLayout: "content",
      schema: {
        // slug field: `title` in frontmatter, filename = url slug.
        title: fields.slug({
          name: {
            label: "Title",
            validation: { length: { min: 1 } },
          },
          slug: {
            label: "URL slug",
            description: "The /blog/<slug> path segment. Lowercase, hyphenated.",
          },
        }),
        publishedDate: fields.date({
          label: "Published date",
          validation: { isRequired: true },
          defaultValue: { kind: "today" },
        }),
        author: fields.text({
          label: "Author",
          description: "Free text for now; Phase 2 links this to a community profile.",
          validation: { length: { min: 1 } },
        }),
        summary: fields.text({
          label: "Summary",
          description: "One or two sentences shown in the /blog list and as the lede.",
          multiline: true,
          validation: { length: { min: 1 } },
        }),
        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Tags",
          description: "Optional topic tags.",
          itemLabel: (props) => props.value || "Tag",
        }),
        coverImage: fields.text({
          label: "Cover image URL",
          description: "Optional. Absolute or site-relative image URL.",
        }),
        // Rich body. Markdoc (not raw MDX/JSX) so the embed surface is a
        // whitelisted set of tags — the same safety posture Phase 2 needs for
        // user-generated posts.
        content: fields.markdoc({
          label: "Body",
          extension: "mdoc",
          components: {
            // First-class Story embed. Serializes to `{% story slug="..." /%}`
            // and renders (build + runtime) via the `story` Markdoc tag.
            story: block({
              label: "Story embed",
              description:
                "Embed an interactive Infinite Spaces story by its slug (e.g. website-3dgs).",
              schema: {
                slug: fields.text({
                  label: "Story slug",
                  description: "Matches a story slug in the stories data (e.g. website-3dgs).",
                  validation: { length: { min: 1 } },
                }),
              },
              // Lightweight editor preview (kept in plain .ts via createElement).
              ContentView: (props) =>
                React.createElement(
                  "div",
                  {
                    style: {
                      border: "1px solid #789bde",
                      borderRadius: 8,
                      padding: "12px 16px",
                      fontFamily: "monospace",
                      fontSize: 13,
                      color: "#789bde",
                    },
                  },
                  `Story embed — slug: ${props.value.slug || "(none)"}`,
                ),
            }),
          },
        }),
      },
    }),
  },
});
