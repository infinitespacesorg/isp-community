import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@infinitespaces/ui";
import { Footer } from "@/sections/Footer";
import { PlayboxSubNav } from "@/sections/PlayboxSubNav";
import { ProductPage, ProductHero } from "@/sections/product";

// NOTE: prices are DRAFT placeholders (Q20) — final tiers/numbers TBD by Steve.
// Layout mirrors the realhorizons.ai /pricing pattern: 4 tiers, one highlighted,
// "Everything in X, plus" feature lists, single CTA per tier, FAQ below.
const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    blurb: "For trying Playbox and beaming your first world.",
    features: ["1 published world", "Community profile", "Browser authoring", "Watermarked exports"],
    cta: "Get Started",
    to: "/waitlist",
  },
  {
    name: "Creator",
    price: "$19",
    period: "/month",
    blurb: "For individual artists shipping regularly.",
    features: [
      "Everything in Free, plus",
      "Unlimited published worlds",
      "Desktop app + live preview",
      "No watermark",
      "Custom profile handle",
    ],
    cta: "Get Started",
    to: "/waitlist",
    featured: true,
  },
  {
    name: "Studio",
    price: "$49",
    period: "/month",
    blurb: "For teams and communities building together.",
    features: [
      "Everything in Creator, plus",
      "Community & place profiles",
      "Real-time co-authoring",
      "Promotion to the community home",
      "Priority capacity",
    ],
    cta: "Get Started",
    to: "/waitlist",
  },
  {
    name: "Venue",
    price: "Custom",
    period: "",
    blurb: "For places and events with live audiences.",
    features: [
      "Everything in Studio, plus",
      "Live performance streaming",
      "Dedicated capacity",
      "SSO & admin controls",
      "Onboarding support",
    ],
    cta: "Contact Us",
    to: "/contact",
  },
];

const faqs = [
  { q: "What counts as a \"world\"?", a: "A world is a published, interactive space you build in Playbox — people can beam in and take part." },
  { q: "Can I try before paying?", a: "Yes. The Free tier lets you publish one world with no time limit so you can see the whole arc." },
  { q: "What's the difference between a user, community, and place profile?", a: "A user profile is you. A community profile is a shared brand or collective. A place profile represents a venue. Community and place profiles are available on Studio and above." },
  { q: "Do you take a cut of anything?", a: "No. Your subscription is the price; what you build is yours." },
  { q: "Can I change plans later?", a: "Anytime, up or down. Changes are prorated." },
  { q: "Is there a discount for annual billing?", a: "Annual pricing is coming; for now all plans are billed monthly." },
];

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
    <ProductHero
      title="Simple pricing for world-builders"
      subtitle="Start free. Upgrade when you're ready to publish more, build together, or go live."
    />

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
                Most Popular
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
