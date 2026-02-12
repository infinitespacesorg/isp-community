import { HeroSection } from "@/sections/HeroSection";
import { FreshPicksSection } from "@/sections/FreshPicksSection";
import { DirectorySection } from "@/sections/DirectorySection";
import { ArticlesSection } from "@/sections/ArticlesSection";
import { Footer } from "@/sections/Footer";

export const HomePage = () => {
  return (
    <div className="box-border caret-transparent flex flex-col min-h-[936px] md:min-h-[884px]">
      <main className="box-border caret-transparent basis-[0%] grow">
        <section className="box-border caret-transparent">
          <div className="box-border caret-transparent">
            <HeroSection />
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
