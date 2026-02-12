import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <div className="box-border caret-transparent shrink-0 mr-2.5">
      <Link
        to="/"
        aria-label="Home"
        className="items-center box-border caret-transparent flex rounded-sm"
      >
        <span className="box-border caret-transparent block">
          <span className="relative box-border caret-transparent">
            <div className="box-border caret-transparent h-9 w-9 bg-neutral-950 rounded-lg flex items-center justify-center text-white text-sm font-bold">
              IS
            </div>
          </span>
        </span>
      </Link>
    </div>
  );
};
