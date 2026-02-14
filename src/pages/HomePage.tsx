import { HeroSection } from "@/sections/HeroSection";
import { FreshPicksSection } from "@/sections/FreshPicksSection";
import { DirectorySection } from "@/sections/DirectorySection";
import { ArticlesSection } from "@/sections/ArticlesSection";
import { Footer } from "@/sections/Footer";
import { useCompositionsManifest } from "@/pages/CompositionPage";

const PromotedHero = ({ path, name }: { path: string; name: string }) => (
  <section className="w-full" style={{ height: "calc(100vh - 92px)" }}>
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

  return (
    <div className="box-border caret-transparent flex flex-col min-h-[936px] md:min-h-[884px]">
      <main className="box-border caret-transparent basis-[0%] grow">
        <section className="box-border caret-transparent">
          <div className="box-border caret-transparent">
            {promoted.length > 0 ? (
              <PromotedHero path={promoted[0].path} name={promoted[0].name} />
            ) : (
              <HeroSection />
            )}
            <FreshPicksSection />
            <DirectorySection />
            <ArticlesSection />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
