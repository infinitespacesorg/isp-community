// Route access + visibility, driven by routes.manifest.json (repo root).
// Flip a route on/off per environment there; both the <Route> registration and
// every nav/footer link honor it. See the manifest's "//" note for env rules.

import manifest from "../../routes.manifest.json";

export type DeployEnv = "staging" | "production";

// Injected at build time via `define` in vite.config.ts.
declare const __DEPLOY_ENV__: DeployEnv;
export const deployEnv: DeployEnv = __DEPLOY_ENV__;

const routes = manifest.routes as Record<
  string,
  { staging: boolean; production: boolean } | undefined
>;

/** True when `path` is enabled for the current deploy environment.
 *  Paths not listed in the manifest are always on. */
export function routeEnabled(path: string): boolean {
  const entry = routes[path];
  if (!entry) return true;
  return entry[deployEnv];
}
