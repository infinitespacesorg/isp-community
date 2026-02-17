import { GlobalNavbar, type NavItem } from "@infinitespaces/ui";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { features } from "@/config/features";

const RouterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => <Link to={href}>{children}</Link>;

const navItems: NavItem[] = [
  { label: "Social", href: "/social", visible: features.showSocial },
  { label: "Gallery", href: "/gallery", visible: features.showGallery },
  { label: "Directory", href: "/directory", visible: features.showDirectory },
  { label: "Articles", href: "/articles" },
  { label: "Jobs", href: "/jobs" },
  { label: "Pricing", href: "/pricing", visible: features.showPricing },
];

export const Header = () => {
  const { user, isPending, isAnonymous, login, signup, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (features.waitlistMode) {
      navigate("/waitlist");
    } else {
      signup();
    }
  };

  return (
    <GlobalNavbar
      logo={
        <Link to="/" aria-label="Home" className="flex items-center">
          <div className="h-9 w-9 bg-neutral-950 rounded-lg flex items-center justify-center text-white text-sm font-bold">
            IS
          </div>
        </Link>
      }
      navItems={navItems}
      auth={{
        status: isPending
          ? "loading"
          : isAnonymous
            ? "unauthenticated"
            : "authenticated",
        user: user
          ? {
              displayName:
                user.user_metadata?.display_name ||
                user.user_metadata?.full_name,
              email: user.email,
              avatarUrl: user.user_metadata?.avatar_url,
            }
          : undefined,
      }}
      onLogin={login}
      onSignUp={handleSignUp}
      onLogout={async () => {
        await logout();
        navigate("/");
      }}
      linkComponent={RouterLink}
      activePath={location.pathname}
    />
  );
};
