// render.tsx — turn a build-time Markdoc renderable tree into React.
//
// The `virtual:blog-posts` plugin runs `@keystatic/core/reader` at build time,
// gets each post's Markdoc AST, and `Markdoc.transform`s it into a plain-JSON
// renderable tree (see vite.config.ts). Here we only render that tree.
//
// Native block/inline tags (h2, p, ul, ...) are NOT overridable via the
// `components` map — Markdoc's React renderer only substitutes custom
// (capitalized) tags like `Story`. So the prose is styled with scoped CSS on
// the `.post-prose` wrapper (see tailwind.css), which also survives Tailwind's
// preflight reset. Only the custom `Story` embed goes through `components`.

import React from "react";
import Markdoc, { type RenderableTreeNode } from "@markdoc/markdoc";
import { StoryEmbed } from "./StoryEmbed";

export { markdocConfig } from "./markdoc-config";

const components = { Story: StoryEmbed };

export function renderPostBody(content: RenderableTreeNode) {
  return (
    <div className="post-prose">
      {Markdoc.renderers.react(content, React, { components })}
    </div>
  );
}
