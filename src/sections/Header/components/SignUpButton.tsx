import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { features } from "@/config/features";

const btnClass =
  "text-white text-sm flex items-center gap-1.5 bg-neutral-950 shrink-0 h-[42px] justify-center leading-[14px] overflow-hidden ml-0 pl-5 pr-4 rounded-lg font-aeonik-mono md:ml-2 hover:bg-violet-600 transition-colors cursor-pointer";

export const SignUpButton = () => {
  const { isAnonymous, signup, logout } = useAuth();
  const navigate = useNavigate();

  const handleSignup = () => {
    if (features.waitlistMode) {
      navigate("/waitlist");
    } else {
      signup();
    }
  };

  if (isAnonymous) {
    return (
      <button onClick={handleSignup} className={btnClass}>
        {features.waitlistMode ? "Join the Waitlist" : "Sign Up"}
        <ArrowRight className="h-5 w-5" />
      </button>
    );
  }

  return (
    <button onClick={logout} className={btnClass}>
      Logout
      <ArrowRight className="h-5 w-5" />
    </button>
  );
};
