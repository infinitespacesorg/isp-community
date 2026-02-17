import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

type CompositionEntry = {
  id: string;
  name: string;
  description: string;
  path: string;
  visible: boolean;
  promoted: boolean;
  publishedAt: string;
  thumbnail: string;
};

export function useCompositionsManifest() {
  const [entries, setEntries] = useState<CompositionEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("/pages/compositions-manifest.json")
      .then((r) => (r.ok ? r.json() : []))
      .then((data: CompositionEntry[]) => setEntries(data))
      .catch(() => setEntries([]))
      .finally(() => setLoaded(true));
  }, []);

  return { entries, loaded };
}

export const CompositionPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { entries, loaded } = useCompositionsManifest();

  if (!loaded) {
    return (
      <div className="flex items-center justify-center" style={{ height: "calc(100vh - 92px)" }}>
        <div className="animate-pulse text-neutral-400 text-sm font-aeonik-mono uppercase">
          Loading...
        </div>
      </div>
    );
  }

  const entry = entries.find((e) => e.id === slug && e.visible);

  if (!entry) {
    return <Navigate to="/" replace />;
  }

  return (
    <iframe
      src={entry.path}
      title={entry.name}
      className="w-full border-0"
      style={{ height: "calc(100vh - 92px)" }}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
    />
  );
};
