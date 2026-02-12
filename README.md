# isp-community

Public community website for [Infinite Spaces](https://github.com/infinitespacesorg).

## Prerequisites

- Node.js 18+
- npm

## Getting Started

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:5173`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Production build to `dist/` |

## Stack

- **React 18** + **Vite 6** (SPA)
- **React Router DOM v6** (client-side routing)
- **Tailwind CSS v3** + **Radix UI** primitives
- **Lucide React** icons
- **TypeScript**

## Project Structure

```
src/
  App.tsx              # Routes
  index.tsx            # Entry point
  data/
    mock-data.ts       # Static mock data (types + seed data)
  hooks/
    useData.ts         # Data hooks (mock, will migrate to Supabase)
    useAuth.ts         # Auth placeholder (will integrate OIDC)
  pages/               # Route-level page components
    HomePage.tsx
    SocialPage.tsx
    GalleryPage.tsx
    DirectoryPage.tsx
    ArticlesPage.tsx
    JobsPage.tsx
    PricingPage.tsx
  sections/            # Shared layout sections
    Header/
    Footer/
    HeroSection/
    FreshPicksSection/
    DirectorySection/
    ArticlesSection/
  components/          # Reusable UI components
public/
  _redirects           # Cloudflare Pages SPA routing
```

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/social` | Social feed |
| `/gallery` | Project gallery |
| `/directory` | Member directory |
| `/articles` | Articles & blog |
| `/jobs` | Job board |
| `/pricing` | Pricing plans |

## Data

Currently uses static mock data in `src/data/mock-data.ts`. The hooks in `src/hooks/useData.ts` return this data with a React Query-like interface (`{ data, isPending, error }`), making the future migration to Supabase client-side queries straightforward (ADR-001).

## Auth

Placeholder hook in `src/hooks/useAuth.ts`. Will integrate `@infinitespaces/auth` with OIDC redirect to Fabric Console (ADR-008).

## Deployment

Cloudflare Pages (static files). The `public/_redirects` file handles SPA routing.

```bash
npm run build
# Deploy dist/ to Cloudflare Pages
```

## Architecture

Design doc: [community_design.md](https://github.com/infinitespacesorg/isp-architecture/blob/main/components/community/community_design.md)
