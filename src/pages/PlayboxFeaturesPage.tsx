import { Footer } from "@/sections/Footer";
import { PlayboxSubNav } from "@/sections/PlayboxSubNav";
import {
  ProductPage,
  ProductHero,
  NumberedSections,
  ProductCta,
} from "@/sections/product";
import { parseProductContent } from "@/content/parse";
import featuresMd from "@/content/playbox-features.md?raw";

const { hero, sections } = parseProductContent(featuresMd);
const ctaSection = sections.find((s) => s.cta);
const items = sections
  .filter((s) => !s.cta)
  .map((s) => ({ title: s.title, intro: s.intro, bullets: s.bullets, badge: s.badge }));

export const PlayboxFeaturesPage = () => (
  <ProductPage>
    <PlayboxSubNav />
    <ProductHero title={hero.title} subtitle={hero.subtitle} ctas={hero.ctas} />
    <NumberedSections items={items} />
    {ctaSection && <ProductCta title={ctaSection.title} ctas={ctaSection.ctas} />}
    <Footer />
  </ProductPage>
);
