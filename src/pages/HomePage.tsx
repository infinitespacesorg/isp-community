import { useEffect, useRef } from "react";
import { useCompositionsManifest } from "@/pages/CompositionPage";
import { Navigate } from "react-router-dom";
import { Footer } from "@/sections/Footer";

const PromotedHero = ({ path, name }: { path: string; name: string }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Scroll handoff with the composition (isp:scroll bridge, publishing
  // contract): the composition posts `isp:scroll-overflow` when the user
  // scrolls past its last beat, and we glide the page to the footer; on
  // overflow up we glide back. The composition needs to know whether the
  // parent is scrolled so it can yield wheel-up events instead of consuming
  // them, so we mirror our scroll state into the iframe.
  useEffect(() => {
    const postParentScroll = () => {
      iframeRef.current?.contentWindow?.postMessage(
        { type: "isp:parent-scroll", scrolled: window.scrollY > 0 },
        window.location.origin,
      );
    };
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== window.location.origin) return;
      if (e.data?.type !== "isp:scroll-overflow") return;
      if (e.data.direction === "down") {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
      } else if (e.data.direction === "up") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
    window.addEventListener("scroll", postParentScroll, { passive: true });
    window.addEventListener("message", onMessage);
    return () => {
      window.removeEventListener("scroll", postParentScroll);
      window.removeEventListener("message", onMessage);
    };
  }, []);

  return (
    <section className="w-full h-screen">
      <iframe
        ref={iframeRef}
        src={path}
        title={name}
        className="w-full h-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
      />
    </section>
  );
};

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

  return (
    <>
      <PromotedHero path={promoted[0].path} name={promoted[0].name} />
      <Footer />
    </>
  );
};
