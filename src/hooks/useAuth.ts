import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import type { User } from "@supabase/supabase-js";
import type { ReactNode } from "react";
import { createElement } from "react";

const accountsUrl = import.meta.env.VITE_ACCOUNTS_URL || "https://accounts.infinitespaces.io";

type AuthState = {
  user: User | null;
  isPending: boolean;
  isAnonymous: boolean;
  login: () => void;
  signup: () => void;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
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

  const login = useCallback(() => {
    const redirectTo = `${window.location.origin}/auth/callback`;
    window.location.href = `${accountsUrl}/auth/login?redirect_to=${encodeURIComponent(redirectTo)}`;
  }, []);

  const signup = useCallback(() => {
    const redirectTo = `${window.location.origin}/auth/callback`;
    window.location.href = `${accountsUrl}/auth/register?redirect_to=${encodeURIComponent(redirectTo)}`;
  }, []);

  const logout = useCallback(async () => {
    if (supabase) {
      await supabase.auth.signOut();
    }
    setUser(null);
  }, []);

  return createElement(
    AuthContext.Provider,
    {
      value: {
        user,
        isPending,
        isAnonymous: !user,
        login,
        signup,
        logout,
      },
    },
    children,
  );
}

export function useAuth(): AuthState {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
}
