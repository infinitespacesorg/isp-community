import { Footer } from "@/sections/Footer";
import { PlayboxSubNav } from "@/sections/PlayboxSubNav";
import {
  ProductPage,
  ProductHero,
  ProductSection,
  HoverCard,
  ProductCta,
} from "@/sections/product";
import { parseProductContent } from "@/content/parse";
import overviewMd from "@/content/playbox-overview.md?raw";

const { hero, sections } = parseProductContent(overviewMd);
const ctaSection = sections.find((s) => s.cta);
const bodySections = sections.filter((s) => !s.cta);

// First body section is the framing "lead"; the rest render as hover cards.
const [lead, ...cardSections] = bodySections;

export const PlayboxPage = () => (
  <ProductPage>
    <PlayboxSubNav />
    <ProductHero
      title={hero.title}
      subtitle={hero.subtitle}
      ctas={hero.ctas}
      gradientHeadline
    />

    {lead && (
      <ProductSection title={lead.title}>
        <p className="max-w-3xl text-lg text-neutral-500">{lead.intro}</p>
      </ProductSection>
    )}

    <ProductSection>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cardSections.map((s) => (
          <HoverCard key={s.title}>
            <h3 className="text-xl font-semibold">{s.title}</h3>
            {s.intro && <p className="mt-2 text-sm text-neutral-500">{s.intro}</p>}
            {s.bullets.length > 0 && (
              <ul className="mt-4 space-y-1.5">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-neutral-600">
                    <span className="mt-1 text-air">—</span>
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </HoverCard>
        ))}
      </div>
    </ProductSection>

    {ctaSection && <ProductCta title={ctaSection.title} ctas={ctaSection.ctas} />}

    <Footer />
  </ProductPage>
);
