// posts.ts — typed access to the build-time blog collection.
//
// `virtual:blog-posts` is produced by the Vite plugin in vite.config.ts, which
// runs `@keystatic/core/reader` at build time. This module is the single
// client-facing entry point for that data.

import type { RenderableTreeNode } from "@markdoc/markdoc";
// @ts-expect-error — virtual module provided by vite.config.ts at build time.
import { posts as rawPosts } from "virtual:blog-posts";

export type BlogPost = {
  slug: string;
  title: string;
  publishedDate: string;
  author: string;
  summary: string;
  tags: string[];
  coverImage?: string;
  content: RenderableTreeNode;
};

export const posts: BlogPost[] = rawPosts as BlogPost[];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(date: string): string {
  if (!date) return "";
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return date;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}
