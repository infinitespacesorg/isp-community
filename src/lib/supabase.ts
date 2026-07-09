import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    "Supabase not configured — set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env",
  );
}

// Auth-as-a-service (Path A): the community app authenticates directly against
// the shared ISP Supabase identity provider using the PKCE flow. We exchange
// the code explicitly in AuthCallbackPage (detectSessionInUrl:false) for
// deterministic control. See
// product/atlas/components/account-management/design/2026-07-09-account-auth-as-a-service-design.md
export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        flowType: "pkce",
        detectSessionInUrl: false,
        persistSession: true,
        autoRefreshToken: true,
      },
    })
  : null;
