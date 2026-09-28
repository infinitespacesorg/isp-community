// careers.ts — typed access to the markdown careers collection.
//
// Role files are canonical in business/marketing/website/careers/ and synced
// into src/content/careers/ (one .md per role; filename = /careers/<slug>).
// Loaded eagerly at build time via Vite glob, frontmatter parsed here, body
// rendered with Markdoc (same pipeline as the legal pages).

import Markdoc, { type RenderableTreeNode } from "@markdoc/markdoc";

export type CareerRole = {
  slug: string;
  title: string;
  location: string;
  type: string;
  posted: string;
  summary: string;
  visible: boolean;
  content: RenderableTreeNode;
};

const files = import.meta.glob("../content/careers/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

// Minimal frontmatter parser: `--- key: value ... ---` header, YAML comments
// (the sync banner) ignored. Everything after the closing fence is the body.
function parseRole(path: string, raw: string): CareerRole {
  const slug = path.split("/").pop()!.replace(/\.md$/, "");
  const meta: Record<string, string> = {};
  let body = raw;

  const lines = raw.split(/\r?\n/);
  if (lines[0]?.trim() === "---") {
    const end = lines.findIndex((l, i) => i > 0 && l.trim() === "---");
    if (end > 0) {
      for (const line of lines.slice(1, end)) {
        if (line.trimStart().startsWith("#")) continue; // sync banner / comments
        const m = line.match(/^([A-Za-z_-]+):\s*(.*)$/);
        if (m) meta[m[1]] = m[2].trim();
      }
      body = lines.slice(end + 1).join("\n");
    }
  }

  // Every JD carries a Benefits section, but it only renders once comp is
  // final (`showBenefits: true` in frontmatter).
  if (meta.showBenefits?.toLowerCase() !== "true") {
    body = body.replace(/^## Benefits\n[\s\S]*?(?=^## |^\*You're|$(?![\s\S]))/m, "");
  }

  return {
    slug,
    title: meta.title ?? slug,
    location: meta.location ?? "",
    type: meta.type ?? "",
    posted: meta.posted ?? "",
    summary: meta.summary ?? "",
    // Hide/show per role: `visible: false` in frontmatter pulls a JD from the
    // list AND its detail route (defaults to visible when absent).
    visible: meta.visible?.toLowerCase() !== "false",
    content: Markdoc.transform(Markdoc.parse(body)),
  };
}

export const roles: CareerRole[] = Object.entries(files)
  .map(([path, raw]) => parseRole(path, raw))
  .filter((r) => r.visible)
  .sort((a, b) => b.posted.localeCompare(a.posted));

export function getRole(slug: string): CareerRole | undefined {
  return roles.find((r) => r.slug === slug);
}
