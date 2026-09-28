# CLAUDE.md

Architecture context: see [isp-architecture](https://github.com/infinitespacesorg/isp-architecture)
Local architecture repo: `../../isp-architecture/`
Component design: `../../isp-architecture/components/community/community_design.md`

## Project
Public community website for Infinite Spaces. React + Vite SPA deployed to Cloudflare Pages.

## Stack
- React 18 + Vite 6 (SPA)
- React Router DOM v6 (client-side routing)
- Tailwind CSS v4 (`@theme inline` in `tailwind.css`) + Radix UI primitives
- Lucide React icons
- TypeScript

## Commands
- `npm run dev` — start dev server
- `npm run sync-content` — pull copy from `business/marketing/website/` into `src/content/` (also runs as prebuild)
- `npm run build` — build to `dist/`

## Content
Copy markdown is canonical in `business/marketing/website/` (top-level `*.md` → page copy, `legal/` → legal pages, `careers/` → open roles, `blog/` → blog posts). Files in `src/content/` carry a `SYNCED COPY` banner — never edit them directly; edit the canonical source and run `npm run sync-content`.

## Routes manifest
`routes.manifest.json` (repo root) enables/disables each page per deploy environment (`staging`/`production`). Disabled routes redirect home and their header/footer/sub-nav links disappear. Env comes from `DEPLOY_ENV` at build time. CI currently builds every deploy as `staging`: isp-community.pages.dev is the staging site, and the public production site is still infinitespaces.org. A production build gets added when infinitespaces.org cuts over to this site.

## Deploy Target
Cloudflare Pages (static files). SPA routing via `_redirects` file. GitHub Actions deploys every branch: `main` → isp-community.pages.dev, others → a Pages preview URL. All use the manifest's `staging` column for now.

## Data
Data hooks in `src/hooks/useData.ts` query Supabase tables via `@supabase/supabase-js` (ADR-001). Falls back to static mock data (`src/data/mock-data.ts`) when Supabase is not configured.

Tables: `community_posts`, `community_gallery`, `profiles`, `community_articles`, `community_jobs`, `pricing_plans`, `newsletter_subscriptions`.

## Auth
Uses Supabase auth session management via `src/hooks/useAuth.ts`. Login/signup redirects to Fabric Console (OIDC). See ADR-008.
