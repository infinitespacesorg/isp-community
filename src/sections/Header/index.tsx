import { useState, useEffect, useRef } from "react";
import { Button, cn, Sheet, SheetContent, SheetTrigger, SheetTitle, Separator } from "@infinitespaces/ui";
import { Menu } from "lucide-react";
import logoSrc from "@/assets/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { features } from "@/config/features";

const navItems = [
  { label: "Explore", href: "/explore" },
  { label: "Lab", href: "/lab" },
  { label: "Social", href: "/social", visible: features.showSocial },
  { label: "Gallery", href: "/gallery", visible: features.showGallery },
  { label: "Directory", href: "/directory", visible: features.showDirectory },
  { label: "Articles", href: "/articles", visible: features.showArticles },
  { label: "Jobs", href: "/jobs", visible: features.showJobs },
  { label: "Pricing", href: "/pricing", visible: features.showPricing },
];

function useScrollVisibility(threshold = 50) {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y === 0) {
        setIsVisible(true);
      } else if (y > lastScrollY.current && y > threshold) {
        setIsVisible(false);
      } else if (y < lastScrollY.current) {
        setIsVisible(true);
      }
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return isVisible;
}

export const Header = () => {
  const { user, isPending, isAnonymous, login, logout } = useAuth();
  const location = useLocation();
  const isVisible = useScrollVisibility();
  const [mobileOpen, setMobileOpen] = useState(false);

  const visibleItems = navItems.filter((item) => item.visible !== false);

  return (
    <div
      className={cn(
        "dark",
        "fixed top-5 left-1/2 z-[1000] w-[90%] max-w-[1200px]",
        "transition-transform duration-400 ease-[cubic-bezier(0.33,1,0.68,1)]",
        isVisible
          ? "translate-x-[-50%] translate-y-0"
          : "translate-x-[-50%] translate-y-[-150%]",
      )}
    >
      <header
        style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}
        className={cn(
          "flex items-center rounded-full px-6 py-3",
          "transition-all duration-300",
          "bg-[rgba(18,18,20,0.88)]",
          "backdrop-blur-[16px] backdrop-saturate-[180%]",
          "border border-[rgba(255,255,255,0.08)]",
          "shadow-[0_8px_32px_rgba(0,0,0,0.18)]",
        )}
      >
        {/* Logo */}
        <div className="mr-4 flex shrink-0">
          <Link to="/" aria-label="Home" className="flex items-center gap-2.5">
            <img src={logoSrc} alt="Infinite Spaces" className="h-8 w-8" />
            <span className="text-sm font-semibold tracking-tight text-white">
              Infinite Spaces
            </span>
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {visibleItems.map((item) => (
            <Link key={item.href} to={item.href}>
              <span
                className={cn(
                  "text-sm font-medium transition-colors hover:text-foreground",
                  location.pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground",
                )}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* Auth + mobile toggle */}
        <div className="flex flex-1 items-center justify-end gap-2">
          {/* Desktop auth */}
          <div className="hidden md:flex">
            {!isPending && isAnonymous && (
              <Button size="sm" onClick={login}>
                Login
              </Button>
            )}
            {!isPending && !isAnonymous && user && (
              <Button variant="ghost" size="sm" onClick={logout}>
                Logout
              </Button>
            )}
          </div>

          {/* Mobile nav */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="top">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <nav className="flex flex-col gap-4 pt-4">
                {visibleItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                  >
                    <span
                      className={cn(
                        "text-base font-medium transition-colors hover:text-foreground",
                        location.pathname === item.href
                          ? "text-foreground"
                          : "text-muted-foreground",
                      )}
                    >
                      {item.label}
                    </span>
                  </Link>
                ))}
                <Separator />
                {!isPending && isAnonymous && (
                  <Button size="sm" onClick={login}>
                    Login
                  </Button>
                )}
                {!isPending && !isAnonymous && user && (
                  <Button variant="ghost" size="sm" onClick={logout}>
                    Logout
                  </Button>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </div>
  );
};
