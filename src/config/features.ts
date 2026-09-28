// Page access/visibility flags moved to routes.manifest.json (repo root) —
// see src/config/routes.ts. Only non-route feature toggles live here.
export const features = {
  waitlistMode: import.meta.env.VITE_WAITLIST_MODE !== "false",
};
