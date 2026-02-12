import { NavLinks } from "@/sections/Header/components/NavLinks";
import { LoginButton } from "@/sections/Header/components/LoginButton";
import { SignUpButton } from "@/sections/Header/components/SignUpButton";

export const DesktopNav = () => {
  return (
    <div className="fixed content-start items-center bg-white box-border caret-transparent hidden flex-wrap h-[940px] justify-start min-h-0 min-w-0 w-full overflow-auto pb-3.5 px-3 left-0 top-[60px] md:static md:bg-transparent md:flex md:flex-nowrap md:h-auto md:justify-between md:min-h-[auto] md:min-w-[auto] md:overflow-visible md:pb-0 md:px-0 md:left-auto md:top-auto">
      <NavLinks />
      <LoginButton />
      <div className="box-border caret-transparent shrink-0 min-h-0 min-w-0 order-2 mt-[84px] md:min-h-[auto] md:min-w-[auto] md:order-none md:mt-0">
        <SignUpButton />
      </div>
    </div>
  );
};
