import { StackedImages } from "@/sections/FreshPicksSection/components/StackedImages";
import { GalleryInfo } from "@/sections/FreshPicksSection/components/GalleryInfo";

export const FeaturedGallery = () => {
  return (
    <div className="box-border caret-transparent">
      <div className="box-border caret-transparent pl-0 pr-9 pb-9 md:pl-[72px] md:pr-0 md:pb-[72px]">
        <StackedImages />
      </div>
      <GalleryInfo />
    </div>
  );
};
