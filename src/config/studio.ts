// The "Infinite Spaces Studio" space. Owner/Admin/Operator members of this
// space are community website admins (see useStudioRole).
//
// The UUID lives only in the live DB and must be provided via env — do NOT
// hardcode a guess. Populate VITE_STUDIO_SPACE_ID from:
//   select id from spaces
//   where name = 'space-infinite-spaces'
//      or display_name ilike '%infinite spaces studio%';
// and mirror it into community_settings.studio_space_id (migration 00037).
export const STUDIO_SPACE_ID: string | undefined =
  import.meta.env.VITE_STUDIO_SPACE_ID || undefined;

// Roles that count as a community website admin, ranked (see 00008_rbac_model).
export const ADMIN_ROLES = ["owner", "admin", "operator"] as const;
