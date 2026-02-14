import { Link, useLocation } from "react-router-dom";
import { features } from "@/config/features";

const linkBase =
  "relative text-[32px] font-black items-center box-border caret-transparent gap-x-1.5 inline-block tracking-[-0.36px] leading-[31.36px] gap-y-1.5 normal-case px-0 rounded-bl rounded-br rounded-tl rounded-tr font-aeonik md:text-sm md:font-normal md:tracking-[0.18px] md:leading-[14px] md:uppercase md:px-2 md:font-aeonik_mono";

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
    <ul className="items-center box-border caret-transparent flex flex-wrap list-[''] min-h-0 min-w-0 w-full pl-0 md:flex-nowrap md:min-h-[auto] md:min-w-[auto]">
      {navItems
        .filter((item) => item.visible)
        .map((item) => (
          <li
            key={item.to}
            className="box-border caret-transparent shrink-0 min-h-0 min-w-0 w-full ml-0 mt-3.5 md:min-h-[auto] md:min-w-[auto] md:w-auto md:ml-[15.36px] md:mt-0"
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
