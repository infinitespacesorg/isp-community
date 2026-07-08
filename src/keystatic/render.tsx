// render.tsx — turn a build-time Markdoc renderable tree into React.
//
// The `virtual:blog-posts` plugin runs `@keystatic/core/reader` at build time,
// gets each post's Markdoc AST, and `Markdoc.transform`s it into a plain-JSON
// renderable tree (see vite.config.ts). Here we only render that tree — no
// parsing, no Node APIs — so it is safe in the browser bundle.
//
// Element styling is supplied via the `components` map (Markdoc names each
// standard node with its HTML tag, so we can override them). The custom
// `story` tag was transformed with `render: "Story"`, so it maps to StoryEmbed.

import React from "react";
import Markdoc, { type RenderableTreeNode } from "@markdoc/markdoc";
import { StoryEmbed } from "./StoryEmbed";

export { markdocConfig } from "./markdoc-config";

const cx = "text-neutral-800";

const components = {
  Story: StoryEmbed,
  h1: (p: { children?: React.ReactNode }) => (
    <h2 className="mt-12 mb-4 text-3xl font-black tracking-[-0.36px]" {...p} />
  ),
  h2: (p: { children?: React.ReactNode }) => (
    <h2 className="mt-12 mb-4 text-2xl font-bold tracking-[-0.24px] md:text-3xl" {...p} />
  ),
  h3: (p: { children?: React.ReactNode }) => (
    <h3 className="mt-8 mb-3 text-xl font-semibold" {...p} />
  ),
  p: (p: { children?: React.ReactNode }) => (
    <p className={`my-5 text-lg leading-8 ${cx}`} {...p} />
  ),
  a: (p: { href?: string; children?: React.ReactNode }) => (
    <a className="text-air underline underline-offset-2 hover:no-underline" {...p} />
  ),
  ul: (p: { children?: React.ReactNode }) => (
    <ul className="my-5 list-disc space-y-2 pl-6 text-lg leading-8" {...p} />
  ),
  ol: (p: { children?: React.ReactNode }) => (
    <ol className="my-5 list-decimal space-y-2 pl-6 text-lg leading-8" {...p} />
  ),
  li: (p: { children?: React.ReactNode }) => <li className={cx} {...p} />,
  blockquote: (p: { children?: React.ReactNode }) => (
    <blockquote
      className="my-6 border-l-2 border-air pl-5 text-lg italic text-neutral-600"
      {...p}
    />
  ),
  hr: () => <hr className="my-10 border-neutral-200" />,
  img: (p: { src?: string; alt?: string }) => (
    <img className="my-6 w-full rounded-lg" loading="lazy" {...p} />
  ),
  code: (p: { children?: React.ReactNode }) => (
    <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-aeonik-mono text-[0.9em]" {...p} />
  ),
  pre: (p: { children?: React.ReactNode }) => (
    <pre
      className="my-6 overflow-x-auto rounded-lg bg-neutral-900 p-4 font-aeonik-mono text-sm text-neutral-100"
      {...p}
    />
  ),
};

export function renderPostBody(content: RenderableTreeNode) {
  return Markdoc.renderers.react(content, React, { components });
}
