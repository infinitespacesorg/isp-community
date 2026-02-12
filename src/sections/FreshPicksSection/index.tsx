import { SectionHeader } from "@/components/SectionHeader";
import { FeaturedGallery } from "@/sections/FreshPicksSection/components/FeaturedGallery";

export const FreshPicksSection = () => {
  return (
    <section className="box-border caret-transparent mb-[84px] mx-3 md:mb-40 md:mx-9">
      <SectionHeader
        title="Fresh Picks"
        linkHref="/gallery"
        linkText="View Gallery"
      />
      <FeaturedGallery />
    </section>
  );
};
