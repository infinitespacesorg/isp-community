import { Menu, X } from "lucide-react";

type MobileMenuButtonProps = {
  isOpen: boolean;
  onToggle: () => void;
};

export const MobileMenuButton = ({ isOpen, onToggle }: MobileMenuButtonProps) => {
  return (
    <button
      onClick={onToggle}
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={isOpen}
      className="appearance-none text-neutral-950 items-center bg-white caret-transparent flex min-h-[auto] min-w-[auto] text-center normal-case border-neutral-950 p-0 border-0 border-none md:hidden cursor-pointer"
    >
      <span className="text-neutral-950 box-border caret-transparent flex min-h-[auto] min-w-[auto] pointer-events-none">
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </span>
    </button>
  );
};
