import { SectionHeader } from "@/components/SectionHeader";
import { DirectoryCarousel } from "@/sections/DirectorySection/components/DirectoryCarousel";

export const DirectorySection = () => {
  return (
    <section className="box-border caret-transparent mb-[84px] mx-3 md:mb-40 md:mx-9">
      <SectionHeader
        title="Community"
        linkHref="/directory"
        linkText="View Directory"
      />
      <DirectoryCarousel />
    </section>
  );
};
