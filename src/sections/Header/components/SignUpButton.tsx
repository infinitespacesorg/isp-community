import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { features } from "@/config/features";

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
      <button
        onClick={handleSignup}
        className="relative text-white text-sm items-center bg-neutral-950 box-border caret-transparent gap-x-1.5 flex shrink-0 h-[42px] justify-center leading-[14px] gap-y-1.5 overflow-hidden ml-0 pl-5 pr-[15px] rounded-lg font-aeonik_mono md:ml-2 hover:bg-violet-600 cursor-pointer"
      >
        Sign Up
        <ArrowRight className="h-5 w-5" />
      </button>
    );
  }

  return (
    <button
      onClick={logout}
      className="relative text-white text-sm items-center bg-neutral-950 box-border caret-transparent gap-x-1.5 flex shrink-0 h-[42px] justify-center leading-[14px] gap-y-1.5 overflow-hidden ml-0 pl-5 pr-[15px] rounded-lg font-aeonik_mono md:ml-2 hover:bg-violet-600 cursor-pointer"
    >
      Logout
      <ArrowRight className="h-5 w-5" />
    </button>
  );
};
