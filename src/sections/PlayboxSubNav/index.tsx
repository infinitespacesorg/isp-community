import { Link, useLocation } from "react-router-dom";
import { cn } from "@infinitespaces/ui";

const tabs = [
  { label: "Overview", href: "/playbox" },
  { label: "Features", href: "/playbox/features" },
  { label: "Showcase", href: "/playbox/showcase" },
  { label: "Pricing", href: "/playbox/pricing" },
];

/**
 * Secondary navigation for the Playbox product section. Sits below the global
 * floating nav; mirrors the Features/Showcase/Pricing sub-page pattern from the
 * realhorizons.ai review (product/reviews/2026-07-08-realhorizons-review-playbox-ia.md).
 */
export const PlayboxSubNav = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex justify-center px-4 pt-24 md:pt-28">
      <nav className="flex items-center gap-1 rounded-full border border-neutral-200 bg-white/70 p-1 backdrop-blur-md">
        {tabs.map((tab) => {
          const active =
            tab.href === "/playbox"
              ? pathname === "/playbox"
              : pathname.startsWith(tab.href);
          return (
            <Link
              key={tab.href}
              to={tab.href}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                active
                  ? "bg-air text-[#0c0c14]"
                  : "text-neutral-600 hover:text-neutral-900",
              )}
            >
              {tab.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
