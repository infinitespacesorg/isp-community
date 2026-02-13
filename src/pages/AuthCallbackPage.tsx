import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "@/lib/supabase";

export const AuthCallbackPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleCallback = async () => {
      const sessionParam = searchParams.get("session");

      if (!sessionParam) {
        setError("No session token received");
        return;
      }

      if (!supabase) {
        setError("Supabase not configured");
        return;
      }

      try {
        const decoded = JSON.parse(atob(decodeURIComponent(sessionParam)));
        const { access_token, refresh_token } = decoded;

        if (!access_token || !refresh_token) {
          setError("Invalid session token format");
          return;
        }

        const { error: authError } = await supabase.auth.setSession({
          access_token,
          refresh_token,
        });

        if (authError) {
          setError(authError.message);
          return;
        }

        navigate("/", { replace: true });
      } catch {
        setError("Failed to process session token");
      }
    };

    handleCallback();
  }, [searchParams, navigate]);

  if (error) {
    return (
      <div className="box-border caret-transparent flex flex-col items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-extrabold box-border caret-transparent mb-4">
            Authentication Error
          </h1>
          <p className="text-neutral-500 text-base box-border caret-transparent mb-6">
            {error}
          </p>
          <button
            onClick={() => navigate("/")}
            className="text-white text-sm items-center bg-neutral-950 box-border caret-transparent gap-x-1.5 inline-flex h-[42px] justify-center leading-[14px] gap-y-1.5 uppercase px-6 rounded-lg font-aeonik_mono hover:bg-violet-600 cursor-pointer"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="box-border caret-transparent flex flex-col items-center justify-center min-h-screen">
      <span className="text-sm font-aeonik_mono uppercase">Signing you in...</span>
    </div>
  );
};
