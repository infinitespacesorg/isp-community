import { SectionHeader } from "@/components/SectionHeader";
import { ArticlesCarousel } from "@/sections/ArticlesSection/components/ArticlesCarousel";

export const ArticlesSection = () => {
  return (
    <section className="box-border caret-transparent mb-[84px] mx-3 md:mb-40 md:mx-9">
      <SectionHeader
        title="Articles"
        linkHref="/articles"
        linkText="View All Articles"
      />
      <ArticlesCarousel />
    </section>
  );
};
