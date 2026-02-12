import { Logo } from "@/sections/Header/components/Logo";
import { MobileMenuButton } from "@/sections/Header/components/MobileMenuButton";
import { DesktopNav } from "@/sections/Header/components/DesktopNav";
import { MobileMenuOverlay } from "@/sections/Header/components/MobileMenuOverlay";

export const Header = () => {
  return (
    <header className="relative items-center box-border caret-transparent flex justify-between w-full z-[1000] px-3 py-3.5 left-0 top-0 md:px-9 md:py-10">
      <Logo />
      <nav className="items-center box-border caret-transparent gap-x-2 flex justify-end gap-y-2 uppercase w-full md:gap-x-[normal] md:justify-normal md:gap-y-[normal]">
        <MobileMenuButton />
        <DesktopNav />
        <MobileMenuOverlay />
      </nav>
    </header>
  );
};
