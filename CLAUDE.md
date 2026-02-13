# CLAUDE.md

Architecture context: see [isp-architecture](https://github.com/infinitespacesorg/isp-architecture)
Local architecture repo: `../../isp-architecture/`
Component design: `../../isp-architecture/components/community/community_design.md`

## Project
Public community website for Infinite Spaces. React + Vite SPA deployed to Cloudflare Pages.

## Stack
- React 18 + Vite 6 (SPA)
- React Router DOM v6 (client-side routing)
- Tailwind CSS v3 + Radix UI primitives
- Lucide React icons
- TypeScript

## Commands
- `npm run dev` — start dev server
- `npm run build` — build to `dist/`

## Deploy Target
Cloudflare Pages (static files). SPA routing via `_redirects` file.

## Data
Data hooks in `src/hooks/useData.ts` query Supabase tables via `@supabase/supabase-js` (ADR-001). Falls back to static mock data (`src/data/mock-data.ts`) when Supabase is not configured.

Tables: `community_posts`, `community_gallery`, `profiles`, `community_articles`, `community_jobs`, `pricing_plans`, `newsletter_subscriptions`.

## Auth
Uses Supabase auth session management via `src/hooks/useAuth.ts`. Login/signup redirects to Fabric Console (OIDC). See ADR-008.
