import { Menu } from "lucide-react";

export const MobileMenuButton = () => {
  return (
    <button
      aria-label="Navigation menu toggle"
      className="appearance-none text-neutral-950 items-center bg-white caret-transparent flex min-h-[auto] min-w-[auto] text-center normal-case border-neutral-950 p-0 border-0 border-none md:text-black md:[align-items:normal] md:bg-zinc-100 md:hidden md:min-h-0 md:min-w-0 md:px-1.5 md:py-px md:border-2 md:border-black"
    >
      <span className="text-neutral-950 box-border caret-transparent flex min-h-[auto] min-w-[auto] pointer-events-none md:text-black md:inline md:min-h-0 md:min-w-0 md:pointer-events-auto">
        <Menu className="h-6 w-6" />
      </span>
    </button>
  );
};
