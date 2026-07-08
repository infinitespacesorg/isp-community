// Cloudflare Pages Function — production admin API for bolt-keystatic.
//
// This is the ONLY server touchpoint for the CMS and it exists solely to do
// the GitHub OAuth token exchange for the admin UI (the client secret must not
// live in the browser). Actual content commits go browser -> GitHub directly.
// It is NOT part of `vite build` output — Cloudflare Pages compiles this
// separately and serves it at /api/keystatic/*. The public site stays 100%
// static; only authors hitting /keystatic exercise this route.
//
// Setup (see product/reviews/2026-07-08-bolt-keystatic-integration.md):
//   1. Create a GitHub App for the repo (Keystatic's setup flow at /keystatic
//      generates it), then set these Pages environment variables:
//        KEYSTATIC_GITHUB_CLIENT_ID
//        KEYSTATIC_GITHUB_CLIENT_SECRET
//        KEYSTATIC_SECRET            (any long random string; signs the session)
//   2. Ensure Pages Functions are enabled for the project (they are by default
//      when a functions/ directory is present).
//
// Requires `@cloudflare/workers-types` for the PagesFunction type; if that is
// not installed the file still deploys (types are erased at build).

import { makeGenericAPIRouteHandler } from "@keystatic/core/api/generic";
import keystaticConfig from "../../../keystatic.config";

interface Env {
  KEYSTATIC_GITHUB_CLIENT_ID?: string;
  KEYSTATIC_GITHUB_CLIENT_SECRET?: string;
  KEYSTATIC_SECRET?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const onRequest = async (context: {
  request: Request;
  env: Env;
}): Promise<Response> => {
  const handler = makeGenericAPIRouteHandler({
    config: keystaticConfig,
    clientId: context.env.KEYSTATIC_GITHUB_CLIENT_ID,
    clientSecret: context.env.KEYSTATIC_GITHUB_CLIENT_SECRET,
    secret: context.env.KEYSTATIC_SECRET,
  });

  const result = await handler(context.request);
  return new Response(result.body, {
    status: result.status,
    headers: result.headers as HeadersInit,
  });
};
