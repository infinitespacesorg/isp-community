import { useAuth } from "@/hooks/useAuth";

export const LoginButton = () => {
  const { user, isPending, isAnonymous, login } = useAuth();

  if (isPending) {
    return (
      <div className="items-center box-border caret-transparent flex shrink-0 h-[42px] min-h-0 min-w-0 order-3 ml-4 mt-[84px] md:[align-items:normal] md:block md:h-auto md:min-h-[auto] md:min-w-[auto] md:order-none md:ml-0 md:mt-0">
        <span className="relative text-sm items-center box-border caret-transparent gap-x-1.5 flex leading-[14px] gap-y-1.5 mt-0.5 px-0 rounded-bl rounded-br rounded-tl rounded-tr font-aeonik_mono md:px-2">
          Loading...
        </span>
      </div>
    );
  }

  if (isAnonymous) {
    return (
      <div className="items-center box-border caret-transparent flex shrink-0 h-[42px] min-h-0 min-w-0 order-3 ml-4 mt-[84px] md:[align-items:normal] md:block md:h-auto md:min-h-[auto] md:min-w-[auto] md:order-none md:ml-0 md:mt-0">
        <button
          onClick={login}
          className="relative text-sm items-center box-border caret-transparent gap-x-1.5 flex leading-[14px] gap-y-1.5 mt-0.5 px-0 rounded-bl rounded-br rounded-tl rounded-tr font-aeonik_mono md:px-2 hover:text-violet-600 cursor-pointer"
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="items-center box-border caret-transparent flex shrink-0 h-[42px] min-h-0 min-w-0 order-3 ml-4 mt-[84px] md:[align-items:normal] md:block md:h-auto md:min-h-[auto] md:min-w-[auto] md:order-none md:ml-0 md:mt-0">
      <span className="relative text-sm items-center box-border caret-transparent gap-x-1.5 flex leading-[14px] gap-y-1.5 mt-0.5 px-0 rounded-bl rounded-br rounded-tl rounded-tr font-aeonik_mono md:px-2">
        {user?.user_metadata?.display_name || user?.user_metadata?.full_name || user?.email}
      </span>
    </div>
  );
};
