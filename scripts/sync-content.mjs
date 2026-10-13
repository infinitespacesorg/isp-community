#!/usr/bin/env node
// Sync website copy from its canonical home in the workspace into src/content.
//
// Canonical sources (edit copy THERE):
//   business/marketing/website/*.md          ->  src/content/*.md          (page copy)
//   business/marketing/website/legal/*.md    ->  src/content/legal/*.md    (legal pages)
//   business/recruiting/open-positions/*.md  ->  src/content/careers/*.md  (open roles; a mirror)
//   business/marketing/website/blog/*.md     ->  src/content/blog/*.mdoc   (blog posts)
//
// The synced copies are committed so CI/Cloudflare builds work without the
// marketing folder present — when the source dirs are missing (e.g. in CI)
// this script is a no-op and the committed copies are the build input.
//
// Page copies get an HTML-comment banner (skipped by src/content/parse.ts).
// Blog posts get a YAML-comment banner inside the frontmatter, so the Markdoc
// body and the Keystatic schema are untouched.
//
// Usage: npm run sync-content   (also runs automatically before npm run build)
// Override the source root with WEBSITE_CONTENT_DIR (points at .../website).

import { readdirSync, readFileSync, writeFileSync, existsSync, mkdirSync, unlinkSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const websiteDir =
  process.env.WEBSITE_CONTENT_DIR ??
  resolve(projectRoot, "..", "..", "business", "marketing", "website");

let synced = 0;

function mdFiles(dir) {
  return readdirSync(dir).filter((f) => f.endsWith(".md"));
}

// --- Page copy: *.md -> src/content/*.md (HTML-comment banner) --------------
// Top-level page copy lives directly in website/ (README.md and _-prefixed
// files are skipped); legal pages in website/legal/.
const pagesDest = join(projectRoot, "src", "content");
function syncPages(srcDir, destDir, label) {
  if (!existsSync(srcDir)) {
    console.warn(`[sync-content] page source not found, skipping: ${srcDir}`);
    return;
  }
  mkdirSync(destDir, { recursive: true });
  const files = mdFiles(srcDir).filter(
    (f) => !f.startsWith("_") && f.toLowerCase() !== "readme.md",
  );
  for (const file of files) {
    const banner = `<!-- SYNCED COPY - do not edit. Edit business/marketing/website/${label}${file} and run \`npm run sync-content\`. -->\n`;
    writeFileSync(join(destDir, file), banner + readFileSync(join(srcDir, file), "utf8"));
    console.log(`[sync-content] ${label}${file} -> ${destDir.slice(projectRoot.length + 1)}\\${file}`);
    synced++;
  }
}
syncPages(websiteDir, pagesDest, "");
syncPages(join(websiteDir, "legal"), join(pagesDest, "legal"), "legal/");

// --- Careers: business/recruiting/open-positions/*.md -> src/content/careers/*.md
// Job descriptions are generated in business/recruiting (roles/generate-jds.mjs
// writes open-positions/). This is a mirror: a JD that is no longer in
// open-positions is deleted from src/content/careers. YAML-comment banner inside
// the frontmatter (the careers loader parses frontmatter itself). Files starting
// with "_" (e.g. _template.md) are skipped. When the source dir is missing (CI),
// nothing is copied or deleted.
// Override the source with CAREERS_CONTENT_DIR (points at .../open-positions).
const careersSrc =
  process.env.CAREERS_CONTENT_DIR ??
  resolve(projectRoot, "..", "..", "business", "recruiting", "open-positions");
const careersDest = join(projectRoot, "src", "content", "careers");
if (existsSync(careersSrc)) {
  mkdirSync(careersDest, { recursive: true });
  const openFiles = mdFiles(careersSrc).filter((f) => !f.startsWith("_"));
  for (const file of openFiles) {
    const body = readFileSync(join(careersSrc, file), "utf8");
    const banner = `# SYNCED COPY - do not edit. Generated from business/recruiting/roles/; see business/recruiting/roles/README.md.\n`;
    let out;
    if (body.startsWith("---")) {
      const nl = body.indexOf("\n");
      out = body.slice(0, nl + 1) + banner + body.slice(nl + 1);
    } else {
      console.warn(`[sync-content] open-positions/${file} has no frontmatter — copied without banner.`);
      out = body;
    }
    writeFileSync(join(careersDest, file), out);
    console.log(`[sync-content] open-positions/${file} -> src/content/careers/${file}`);
    synced++;
  }
  for (const file of mdFiles(careersDest).filter((f) => !openFiles.includes(f))) {
    unlinkSync(join(careersDest, file));
    console.log(`[sync-content] removed src/content/careers/${file} (no longer in open-positions)`);
    synced++;
  }
} else {
  console.warn(`[sync-content] careers source not found, skipping: ${careersSrc}`);
}

// --- Blog: blog/*.md -> src/content/blog/*.mdoc (YAML-comment banner) -------
const blogSrc = join(websiteDir, "blog");
const blogDest = join(projectRoot, "src", "content", "blog");
if (existsSync(blogSrc)) {
  mkdirSync(blogDest, { recursive: true });
  for (const file of mdFiles(blogSrc)) {
    const body = readFileSync(join(blogSrc, file), "utf8");
    const banner = `# SYNCED COPY - do not edit. Edit business/marketing/website/blog/${file} and run \`npm run sync-content\`.\n`;
    let out;
    if (body.startsWith("---")) {
      // Insert the banner as a YAML comment right after the opening fence.
      const nl = body.indexOf("\n");
      out = body.slice(0, nl + 1) + banner + body.slice(nl + 1);
    } else {
      console.warn(`[sync-content] blog/${file} has no frontmatter — copied without banner.`);
      out = body;
    }
    const dest = file.replace(/\.md$/, ".mdoc");
    writeFileSync(join(blogDest, dest), out);
    console.log(`[sync-content] blog/${file} -> src/content/blog/${dest}`);
    synced++;
  }
} else {
  console.warn(`[sync-content] blog source not found, skipping: ${blogSrc}`);
}

if (synced === 0) {
  console.warn("[sync-content] nothing synced; building from the committed copies in src/content.");
} else {
  console.log(`[sync-content] synced ${synced} file(s) from ${websiteDir}`);
}
