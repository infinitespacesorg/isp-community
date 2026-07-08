// KeystaticPage — the git-based CMS admin UI, mounted at /keystatic/*.
//
// The Keystatic UI is a large dependency tree (ProseMirror, Slate, Yjs, the
// keystar-ui design system). It is code-split via React.lazy so it forms its
// own chunk and never weighs down the main SPA bundle — it loads only when an
// author actually visits /keystatic.
//
// The component manages its own routing under the /keystatic base path and
// talks to /api/keystatic/* (Vite middleware in dev; a Cloudflare Pages
// Function in prod) for GitHub OAuth. See keystatic.config.ts for storage mode.

import { lazy, Suspense } from "react";
import keystaticConfig from "../../keystatic.config";

const Keystatic = lazy(() =>
  import("@keystatic/core/ui").then((m) => ({ default: m.Keystatic })),
);

export const KeystaticPage = () => (
  <Suspense
    fallback={
      <div className="flex min-h-screen items-center justify-center">
        <span className="text-sm font-aeonik-mono uppercase tracking-[0.18px] text-neutral-500">
          Loading editor...
        </span>
      </div>
    }
  >
    <Keystatic config={keystaticConfig} />
  </Suspense>
);
