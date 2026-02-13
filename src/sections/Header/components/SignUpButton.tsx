import { ArrowRight } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export const SignUpButton = () => {
  const { isAnonymous, signup, logout } = useAuth();

  if (isAnonymous) {
    return (
      <button
        onClick={signup}
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
