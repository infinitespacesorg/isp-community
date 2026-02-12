import { Link, useLocation } from "react-router-dom";

export const NavLinks = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <ul className="items-center box-border caret-transparent flex flex-wrap list-[''] min-h-0 min-w-0 w-full pl-0 md:flex-nowrap md:min-h-[auto] md:min-w-[auto]">
      <li className="box-border caret-transparent shrink-0 min-h-0 min-w-0 w-full ml-0 mt-3.5 md:min-h-[auto] md:min-w-[auto] md:w-auto md:ml-[15.36px] md:mt-0">
        <Link
          to="/social"
          className={`relative text-[32px] font-black items-center box-border caret-transparent gap-x-1.5 inline-block tracking-[-0.36px] leading-[31.36px] gap-y-1.5 normal-case px-0 rounded-bl rounded-br rounded-tl rounded-tr font-aeonik md:text-sm md:font-normal md:tracking-[0.18px] md:leading-[14px] md:uppercase md:px-2 md:font-aeonik_mono ${
            isActive("/social") ? "text-violet-600" : ""
          }`}
        >
          Social
        </Link>
      </li>
      <li className="box-border caret-transparent shrink-0 min-h-0 min-w-0 w-full ml-0 mt-3.5 md:min-h-[auto] md:min-w-[auto] md:w-auto md:ml-[15.36px] md:mt-0">
        <Link
          to="/gallery"
          className={`relative text-[32px] font-black items-center box-border caret-transparent gap-x-1.5 inline-block tracking-[-0.36px] leading-[31.36px] gap-y-1.5 normal-case px-0 rounded-bl rounded-br rounded-tl rounded-tr font-aeonik md:text-sm md:font-normal md:tracking-[0.18px] md:leading-[14px] md:uppercase md:px-2 md:font-aeonik_mono ${
            isActive("/gallery") ? "text-violet-600" : ""
          }`}
        >
          Gallery
        </Link>
      </li>
      <li className="box-border caret-transparent shrink-0 min-h-0 min-w-0 w-full ml-0 mt-3.5 md:min-h-[auto] md:min-w-[auto] md:w-auto md:ml-[15.36px] md:mt-0">
        <Link
          to="/directory"
          className={`relative text-[32px] font-black items-center box-border caret-transparent gap-x-1.5 inline-block tracking-[-0.36px] leading-[31.36px] gap-y-1.5 normal-case px-0 rounded-bl rounded-br rounded-tl rounded-tr font-aeonik md:text-sm md:font-normal md:tracking-[0.18px] md:leading-[14px] md:uppercase md:px-2 md:font-aeonik_mono ${
            isActive("/directory") ? "text-violet-600" : ""
          }`}
        >
          Directory
        </Link>
      </li>
      <li className="box-border caret-transparent shrink-0 min-h-0 min-w-0 w-full ml-0 mt-3.5 md:min-h-[auto] md:min-w-[auto] md:w-auto md:ml-[15.36px] md:mt-0">
        <Link
          to="/articles"
          className={`relative text-[32px] font-black items-center box-border caret-transparent gap-x-1.5 inline-block tracking-[-0.36px] leading-[31.36px] gap-y-1.5 normal-case px-0 rounded-bl rounded-br rounded-tl rounded-tr font-aeonik md:text-sm md:font-normal md:tracking-[0.18px] md:leading-[14px] md:uppercase md:px-2 md:font-aeonik_mono ${
            isActive("/articles") ? "text-violet-600" : ""
          }`}
        >
          Articles
        </Link>
      </li>
      <li className="box-border caret-transparent shrink-0 min-h-0 min-w-0 w-full ml-0 mt-3.5 md:min-h-[auto] md:min-w-[auto] md:w-auto md:ml-[15.36px] md:mt-0">
        <Link
          to="/jobs"
          className={`relative text-[32px] font-black items-center box-border caret-transparent gap-x-1.5 inline-block tracking-[-0.36px] leading-[31.36px] gap-y-1.5 normal-case px-0 rounded-bl rounded-br rounded-tl rounded-tr font-aeonik md:text-sm md:font-normal md:tracking-[0.18px] md:leading-[14px] md:uppercase md:px-2 md:font-aeonik_mono ${
            isActive("/jobs") ? "text-violet-600" : ""
          }`}
        >
          Jobs
        </Link>
      </li>
      <li className="box-border caret-transparent shrink-0 min-h-0 min-w-0 w-full ml-0 mt-3.5 md:min-h-[auto] md:min-w-[auto] md:w-auto md:ml-[15.36px] md:mt-0">
        <Link
          to="/pricing"
          className={`relative text-[32px] font-black items-center box-border caret-transparent gap-x-1.5 inline-block tracking-[-0.36px] leading-[31.36px] gap-y-1.5 normal-case px-0 rounded-bl rounded-br rounded-tl rounded-tr font-aeonik md:text-sm md:font-normal md:tracking-[0.18px] md:leading-[14px] md:uppercase md:px-2 md:font-aeonik_mono ${
            isActive("/pricing") ? "text-violet-600" : ""
          }`}
        >
          Pricing
        </Link>
      </li>
    </ul>
  );
};
