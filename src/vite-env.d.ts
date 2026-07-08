/// <reference types="vite/client" />

declare module "*.md?raw" {
  const content: string;
  export default content;
}

// bolt-keystatic — build-time blog collection (see vite.config.ts).
declare module "virtual:blog-posts" {
  import type { RenderableTreeNode } from "@markdoc/markdoc";
  export const posts: Array<{
    slug: string;
    title: string;
    publishedDate: string;
    author: string;
    summary: string;
    tags: string[];
    coverImage?: string;
    content: RenderableTreeNode;
  }>;
}

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
  readonly VITE_ACCOUNTS_URL: string;
  readonly VITE_STUDIO_SPACE_ID?: string;
  readonly VITE_KEYSTATIC_REPO?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
