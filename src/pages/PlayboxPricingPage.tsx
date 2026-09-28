import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@infinitespaces/ui";
import { Footer } from "@/sections/Footer";
import { PlayboxSubNav } from "@/sections/PlayboxSubNav";
import { ProductPage, ProductHero } from "@/sections/product";
import { parseProductContent } from "@/content/parse";
import pricingMd from "@/content/playbox-pricing.md?raw";
import faqMd from "@/content/faq.md?raw";

// NOTE: prices are DRAFT placeholders (Q20) — final tiers/numbers TBD by Steve.
// Layout mirrors the realhorizons.ai /pricing pattern: 4 tiers, one highlighted,
// "Everything in X, plus" feature lists, single CTA per tier, FAQ below.
//
// Tier copy lives in business/marketing/website/playbox-pricing.md (synced into
// src/content). Each `##` section is one tier: `Name — Price period`, with
// `{badge:...}` marking the highlighted card, the intro as the blurb, bullets
// as the feature list, and the section link as the CTA.
const pricing = parseProductContent(pricingMd);

const tiers = pricing.sections
  .filter((s) => !s.cta)
  .map((s) => {
    const [name, priceRaw = ""] = s.title.split("—").map((t) => t.trim());
    const [price = "", ...periodParts] = priceRaw.split(/\s+/);
    return {
      name,
      price,
      period: periodParts.join(" "),
      blurb: s.intro,
      features: s.bullets,
      cta: s.ctas[0]?.label ?? "Get Started",
      to: s.ctas[0]?.href ?? "/waitlist",
      featured: Boolean(s.badge),
      badge: s.badge,
    };
  });

// FAQ copy lives in business/marketing/website/community/faq.md (synced into src/content).
const faqs = parseProductContent(faqMd)
  .sections.filter((s) => !s.cta)
  .map((s) => ({ q: s.title, a: s.intro }));

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-neutral-200">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-base font-medium">{q}</span>
        <span className="ml-4 text-neutral-400">{open ? "−" : "+"}</span>
      </button>
      {open && <p className="pb-5 text-sm text-neutral-500">{a}</p>}
    </div>
  );
}

export const PlayboxPricingPage = () => (
  <ProductPage>
    <PlayboxSubNav />
    <ProductHero title={pricing.hero.title} subtitle={pricing.hero.subtitle} />

    <div className="mx-auto max-w-6xl px-6 pb-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={cn(
              "relative flex flex-col rounded-2xl border p-6",
              t.featured
                ? "border-air/40 bg-gradient-to-br from-air/15 via-air/5 to-transparent shadow-[0_12px_32px_rgba(120,155,222,0.18)]"
                : "border-neutral-200 bg-white",
            )}
          >
            {t.featured && (
              <span className="absolute -top-3 left-6 rounded-full bg-air px-3 py-0.5 text-[10px] font-aeonik-mono uppercase tracking-[0.18px] text-[#0c0c14]">
                {t.badge}
              </span>
            )}
            <h3 className="text-lg font-semibold">{t.name}</h3>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-3xl font-bold">{t.price}</span>
              {t.period && <span className="text-sm text-neutral-400">{t.period}</span>}
            </div>
            <p className="mt-2 text-sm text-neutral-500">{t.blurb}</p>
            <ul className="mt-6 flex-1 space-y-2">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-neutral-600">
                  <span className="mt-1 text-air">—</span>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              to={t.to}
              className={cn(
                "mt-6 rounded-full px-6 py-2.5 text-center text-sm font-medium transition-colors",
                t.featured
                  ? "bg-air text-[#0c0c14] hover:bg-[#8aa9e4]"
                  : "border border-neutral-300 hover:bg-neutral-100",
              )}
            >
              {t.cta}
            </Link>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-neutral-400">
        Pricing shown is a draft placeholder — final tiers and prices are not yet set.
      </p>
    </div>

    <div className="mx-auto max-w-3xl px-6 pb-24">
      <h2 className="mb-4 mt-16 text-2xl font-semibold">Frequently asked questions</h2>
      <div>
        {faqs.map((f) => (
          <FaqItem key={f.q} q={f.q} a={f.a} />
        ))}
      </div>
    </div>

    <Footer />
  </ProductPage>
);
