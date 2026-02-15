import { NavLinks } from "@/sections/Header/components/NavLinks";
import { LoginButton } from "@/sections/Header/components/LoginButton";
import { SignUpButton } from "@/sections/Header/components/SignUpButton";

type DesktopNavProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const DesktopNav = ({ isOpen, onClose }: DesktopNavProps) => {
  return (
    <div
      className={`fixed left-0 top-14 w-full h-dvh bg-white/95 backdrop-blur-sm flex flex-wrap content-start items-center overflow-auto px-4 pb-4 md:static md:bg-transparent md:backdrop-blur-none md:flex md:flex-nowrap md:h-auto md:justify-between md:overflow-visible md:p-0 ${
        isOpen ? "flex" : "hidden"
      }`}
    >
      <div onClick={onClose}>
        <NavLinks />
      </div>
      <LoginButton />
      <div className="shrink-0 order-2 mt-20 md:order-none md:mt-0">
        <SignUpButton />
      </div>
    </div>
  );
};
