import { Link, useLocation } from "react-router-dom";
import { features } from "@/config/features";

const linkBase =
  "relative text-[32px] font-black inline-block tracking-[-0.36px] leading-[31.36px] normal-case px-0 rounded font-aeonik transition-colors md:text-sm md:font-normal md:tracking-[0.18px] md:leading-[14px] md:uppercase md:px-2 md:font-aeonik-mono";

const navItems = [
  { to: "/social", label: "Social", visible: features.showSocial },
  { to: "/gallery", label: "Gallery", visible: features.showGallery },
  { to: "/directory", label: "Directory", visible: features.showDirectory },
  { to: "/articles", label: "Articles", visible: true },
  { to: "/jobs", label: "Jobs", visible: true },
  { to: "/pricing", label: "Pricing", visible: features.showPricing },
];

export const NavLinks = () => {
  const location = useLocation();

  return (
    <ul className="flex flex-wrap items-center list-none w-full pl-0 md:flex-nowrap">
      {navItems
        .filter((item) => item.visible)
        .map((item) => (
          <li
            key={item.to}
            className="shrink-0 w-full ml-0 mt-3.5 md:w-auto md:ml-4 md:mt-0"
          >
            <Link
              to={item.to}
              className={`${linkBase} ${location.pathname === item.to ? "text-violet-600" : ""}`}
            >
              {item.label}
            </Link>
          </li>
        ))}
    </ul>
  );
};
