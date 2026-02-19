import { useCompositionsManifest } from "@/pages/CompositionPage";
import { Navigate } from "react-router-dom";

const PromotedHero = ({ path, name }: { path: string; name: string }) => (
  <section className="w-full h-screen">
    <iframe
      src={path}
      title={name}
      className="w-full h-full border-0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
    />
  </section>
);

export const HomePage = () => {
  const { entries, loaded } = useCompositionsManifest();

  const promoted = loaded
    ? entries
        .filter((e) => e.promoted && e.visible)
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    : [];

  if (loaded && promoted.length === 0) {
    return <Navigate to="/explore" replace />;
  }

  if (!loaded) {
    return null;
  }

  return <PromotedHero path={promoted[0].path} name={promoted[0].name} />;
};
