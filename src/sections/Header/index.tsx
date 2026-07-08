import { useState, useEffect, useRef } from "react";
import { Button, cn, Sheet, SheetContent, SheetTrigger, SheetTitle, Separator } from "@infinitespaces/ui";
import { Menu } from "lucide-react";
import logoSrc from "@/assets/logo-light.svg";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useStudioRole } from "@/hooks/useStudioRole";
import { features } from "@/config/features";

const navItems = [
  { label: "Playbox", href: "/playbox" },
  { label: "Community", href: "/community" },
  { label: "Blog", href: "/blog" },
  // Retained but not primary nav: /lab. Gated flag routes below.
  { label: "Social", href: "/social", visible: features.showSocial },
  { label: "Gallery", href: "/gallery", visible: features.showGallery },
  { label: "Directory", href: "/directory", visible: features.showDirectory },
  { label: "Jobs", href: "/jobs", visible: features.showJobs },
];

function useScrollVisibility(threshold = 50) {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScrollY = (y: number) => {
      if (y === 0) {
        setIsVisible(true);
      } else if (y > lastScrollY.current && y > threshold) {
        setIsVisible(false);
      } else if (y < lastScrollY.current) {
        setIsVisible(true);
      }
      lastScrollY.current = y;
    };
    const onScroll = () => onScrollY(window.scrollY);
    // Compositions render in a same-origin iframe, so the parent window never
    // scrolls on those pages; bundles post their scroll position instead
    // (isp:scroll bridge — publishing contract, community README).
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== window.location.origin) return;
      if (e.data?.type === "isp:scroll" && typeof e.data.y === "number") {
        onScrollY(e.data.y);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("message", onMessage);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("message", onMessage);
    };
  }, [threshold]);

  return isVisible;
}

export const Header = () => {
  const { user, isPending, isAnonymous, login, logout } = useAuth();
  const location = useLocation();
  const isVisible = useScrollVisibility();
  const [mobileOpen, setMobileOpen] = useState(false);

  const { isAdmin } = useStudioRole();

  const visibleItems = [
    ...navItems.filter((item) => item.visible !== false),
    ...(isAdmin ? [{ label: "Admin", href: "/admin" }] : []),
  ];

  return (
    <div
      className={cn(
        "fixed top-5 left-1/2 z-[1000] w-[90%] max-w-[1200px]",
        "transition-transform duration-400 ease-[cubic-bezier(0.33,1,0.68,1)]",
        isVisible
          ? "translate-x-[-50%] translate-y-0"
          : "translate-x-[-50%] translate-y-[-150%]",
      )}
    >
      <header
        className={cn(
          "flex items-center rounded-full px-6 py-3",
          "transition-all duration-300",
          "bg-[rgba(255,255,255,0.72)]",
          "backdrop-blur-[16px] backdrop-saturate-[180%]",
          "border border-[rgba(0,0,0,0.08)]",
          "shadow-[0_8px_32px_rgba(0,0,0,0.10)]",
        )}
      >
        {/* Logo — brand mark + Domaine Display wordmark (dark-ink variant for the light pill) */}
        <div className="mr-4 flex shrink-0">
          <Link to="/" aria-label="Infinite Spaces — Home" className="flex items-center">
            <img src={logoSrc} alt="Infinite Spaces" className="h-9 w-auto" />
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {visibleItems.map((item) => (
            <Link key={item.href} to={item.href}>
              <span
                className={cn(
                  "text-sm font-medium transition-colors hover:text-neutral-900",
                  location.pathname === item.href
                    ? "text-neutral-900"
                    : "text-neutral-600",
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
              <Button
                size="sm"
                onClick={login}
                className="bg-[#789bde] text-[#0c0c14] hover:bg-[#8aa9e4]"
              >
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
                  <Button
                    size="sm"
                    onClick={login}
                    className="bg-[#789bde] text-[#0c0c14] hover:bg-[#8aa9e4]"
                  >
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
