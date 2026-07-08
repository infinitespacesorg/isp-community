// Community website admin gate.
//
// A user is a website admin iff they hold owner/admin/operator on the
// "Infinite Spaces Studio" space. Space roles ride in the Supabase JWT as the
// `resource_roles` claim (injected by the custom-access-token Edge Function),
// so this is a zero-round-trip check. Ported from the console's
// accessControlProvider.ts (getResourceRolesFromJwt + resolveSpaceRole).
//
// Fallback: if the claim is absent, query role_assignments directly — allowed
// by the role_assignments_read_own RLS policy. The client gate is UX-only;
// writes are enforced by RLS keyed on the same Studio-space role (00037).

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/hooks/useAuth";
import { STUDIO_SPACE_ID, ADMIN_ROLES } from "@/config/studio";

type ResourceRole = {
  resource_type: string;
  resource_id: string | null;
  role: string;
};

function decodeResourceRoles(accessToken: string): ResourceRole[] {
  try {
    const payload = JSON.parse(atob(accessToken.split(".")[1]));
    return (payload.resource_roles as ResourceRole[]) ?? [];
  } catch {
    return [];
  }
}

function isAdminRole(role: string | undefined): boolean {
  return !!role && (ADMIN_ROLES as readonly string[]).includes(role);
}

/**
 * Returns whether the logged-in user is a community website admin
 * (owner/admin/operator on the Studio space). `isPending` is true until the
 * check resolves. Degrades closed: if STUDIO_SPACE_ID is unset or there is no
 * session, `isAdmin` is false.
 */
export function useStudioRole(): { isAdmin: boolean; isPending: boolean } {
  const { user, isPending: authPending } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const check = async () => {
      setIsPending(true);

      if (!supabase || !user || !STUDIO_SPACE_ID) {
        if (!cancelled) {
          setIsAdmin(false);
          setIsPending(false);
        }
        return;
      }

      const {
        data: { session },
      } = await supabase.auth.getSession();

      // Primary: read the role from the JWT resource_roles claim.
      if (session?.access_token) {
        const roles = decodeResourceRoles(session.access_token);
        const match = roles.find(
          (r) => r.resource_type === "space" && r.resource_id === STUDIO_SPACE_ID,
        );
        if (match) {
          if (!cancelled) {
            setIsAdmin(isAdminRole(match.role));
            setIsPending(false);
          }
          return;
        }
      }

      // Fallback: direct query (permitted by role_assignments_read_own RLS).
      const { data, error } = await supabase
        .from("role_assignments")
        .select("role")
        .eq("principal_id", user.id)
        .eq("principal_type", "user")
        .eq("resource_type", "space")
        .eq("resource_id", STUDIO_SPACE_ID)
        .maybeSingle();

      if (!cancelled) {
        setIsAdmin(!error && isAdminRole(data?.role as string | undefined));
        setIsPending(false);
      }
    };

    if (!authPending) check();

    return () => {
      cancelled = true;
    };
  }, [user, authPending]);

  return { isAdmin, isPending };
}
