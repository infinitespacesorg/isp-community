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
Currently uses static mock data in `src/data/`. Will migrate to Supabase client-side queries (ADR-001).

## Auth
Currently placeholder. Will integrate `@infinitespaces/auth` with OIDC redirect to Fabric Console (ADR-008).
