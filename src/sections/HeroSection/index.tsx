import { HeroImage } from "@/sections/HeroSection/components/HeroImage";
import { HeroTitle } from "@/sections/HeroSection/components/HeroTitle";

export const HeroSection = () => {
  return (
    <section className="relative box-border caret-transparent flex flex-wrap justify-center mb-14 mx-3 md:mb-20 md:mx-9">
      <HeroImage />
      <HeroTitle />
    </section>
  );
};
