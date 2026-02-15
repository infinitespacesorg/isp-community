import { useAuth } from "@/hooks/useAuth";

const wrapperClass = "flex items-center shrink-0 h-[42px] order-3 ml-4 mt-20 md:block md:h-auto md:order-none md:ml-0 md:mt-0";

export const LoginButton = () => {
  const { user, isPending, isAnonymous, login } = useAuth();

  if (isPending) {
    return (
      <div className={wrapperClass}>
        <span className="text-sm flex items-center gap-1.5 leading-[14px] mt-0.5 px-0 rounded font-aeonik_mono md:px-2">
          Loading...
        </span>
      </div>
    );
  }

  if (isAnonymous) {
    return (
      <div className={wrapperClass}>
        <button
          onClick={login}
          className="text-sm flex items-center gap-1.5 leading-[14px] mt-0.5 px-0 rounded font-aeonik_mono md:px-2 hover:text-violet-600 cursor-pointer transition-colors"
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div className={wrapperClass}>
      <span className="text-sm flex items-center gap-1.5 leading-[14px] mt-0.5 px-0 rounded font-aeonik_mono md:px-2">
        {user?.user_metadata?.display_name || user?.user_metadata?.full_name || user?.email}
      </span>
    </div>
  );
};
