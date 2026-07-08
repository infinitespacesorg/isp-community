// markdoc-config.ts — the Markdoc tag contract for blog post bodies.
//
// Kept free of any client/React imports so it can be imported by both the
// build-time reader (vite.config.ts) and the client renderer (render.tsx).
// The `story` tag is the whitelisted embed surface: authors get exactly this
// one tag, nothing arbitrary — the safety posture Phase 2 (UGC) also needs.

export const markdocConfig = {
  tags: {
    story: {
      render: "Story",
      selfClosing: true,
      attributes: {
        slug: { type: String, required: true },
      },
    },
  },
} as const;
