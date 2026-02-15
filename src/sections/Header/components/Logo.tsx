import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <div className="shrink-0 mr-2.5">
      <Link to="/" aria-label="Home" className="flex items-center rounded-sm">
        <div className="h-9 w-9 bg-neutral-950 rounded-lg flex items-center justify-center text-white text-sm font-bold">
          IS
        </div>
      </Link>
    </div>
  );
};
