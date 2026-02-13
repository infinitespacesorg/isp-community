import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import type { User } from "@supabase/supabase-js";

const accountsUrl = import.meta.env.VITE_ACCOUNTS_URL || "https://accounts.infinitespaces.io";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    if (!supabase) {
      setIsPending(false);
      return;
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setIsPending(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const login = () => {
    const redirectTo = `${window.location.origin}/auth/callback`;
    window.location.href = `${accountsUrl}/auth/login?redirect_to=${encodeURIComponent(redirectTo)}`;
  };

  const signup = () => {
    const redirectTo = `${window.location.origin}/auth/callback`;
    window.location.href = `${accountsUrl}/auth/register?redirect_to=${encodeURIComponent(redirectTo)}`;
  };

  const logout = async () => {
    if (supabase) {
      await supabase.auth.signOut();
    }
    setUser(null);
  };

  return {
    user,
    isPending,
    isAnonymous: !user,
    login,
    signup,
    logout,
  };
}
