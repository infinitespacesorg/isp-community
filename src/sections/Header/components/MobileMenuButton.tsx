import { AlignRight, X } from "lucide-react";

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
      className="appearance-none text-neutral-950 flex items-center bg-transparent p-0 border-0 md:hidden cursor-pointer"
    >
      <span className="pointer-events-none">
        {isOpen ? <X className="h-6 w-6" /> : <AlignRight className="h-6 w-6" />}
      </span>
    </button>
  );
};
