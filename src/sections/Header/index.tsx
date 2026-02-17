import { useState, useEffect } from "react";
import { Logo } from "@/sections/Header/components/Logo";
import { MobileMenuButton } from "@/sections/Header/components/MobileMenuButton";
import { DesktopNav } from "@/sections/Header/components/DesktopNav";
import { MobileMenuOverlay } from "@/sections/Header/components/MobileMenuOverlay";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 flex items-center justify-between w-full h-14 px-4 md:px-9 transition-all duration-300 ${
        scrolled
          ? "bg-transparent backdrop-blur-none border-transparent"
          : "bg-white/95 backdrop-blur-xs border-b border-border/40"
      }`}
    >
      <Logo />
      <nav className="flex items-center gap-2 uppercase">
        <MobileMenuButton isOpen={mobileMenuOpen} onToggle={() => setMobileMenuOpen(!mobileMenuOpen)} />
        <DesktopNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
        <MobileMenuOverlay isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      </nav>
    </header>
  );
};
