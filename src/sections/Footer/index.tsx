import { NewsletterForm } from "@/sections/Footer/components/NewsletterForm";
import { FooterColumn } from "@/sections/Footer/components/FooterColumn";
import { FooterCredits } from "@/sections/Footer/components/FooterCredits";
import { FooterLinks } from "@/sections/Footer/components/FooterLinks";
import { routeEnabled } from "@/config/routes";

const footerLinkStyle =
  "relative text-stone-300 text-sm box-border caret-transparent block leading-[14px] uppercase mb-7 rounded-sm font-aeonik-mono md:mb-10 after:md:accent-auto after:md:bg-stone-300 after:md:box-border after:md:caret-transparent after:md:text-stone-300 after:md:block after:md:text-sm after:md:not-italic after:md:font-normal after:md:h-px after:md:tracking-[0.18px] after:md:leading-[14px] after:md:list-outside after:md:list-[''] after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:uppercase after:md:origin-[100%_0%] after:md:visible after:md:w-full after:md:border-separate after:md:scale-x-0 after:md:left-0 after:md:-bottom-0.5 after:md:font-aeonik-mono";

const footerLinkStyleLast = footerLinkStyle.replace("mb-7", "").replace("md:mb-10", "");

// Link visibility follows routes.manifest.json — a page disabled for this
// deploy environment drops out of the footer automatically. `gate` overrides
// which route decides (e.g. FAQs live on the pricing page).
const allNavLinks = [
  { href: "/playbox", text: "Playbox" },
  { href: "/lab", text: "Lab" },
  { href: "/social", text: "Social" },
  { href: "/gallery", text: "Gallery" },
  { href: "/directory", text: "Directory" },
  { href: "/articles", text: "Articles" },
  { href: "/pricing", text: "Pricing" },
];

const secondaryLinks = [
  { href: "/about", text: "About" },
  { href: "/careers", text: "Careers" },
  { href: "/playbox/pricing", text: "FAQs", lowercase: true },
  { href: "/contact", text: "Contact" },
  { href: "/community-guidelines", text: "Community Guidelines" },
];

const formatColumn = (links: { href: string; text: string; lowercase?: boolean }[]) => {
  const visible = links.filter((l) => routeEnabled(l.href));
  return visible.map((l, i) => {
    let linkVariant = i === visible.length - 1 ? footerLinkStyleLast : footerLinkStyle;
    if (l.lowercase) linkVariant = linkVariant.replace("uppercase", "");
    return { href: l.href, text: l.text, linkVariant };
  });
};

export const Footer = () => {
  const navLinksFormatted = formatColumn(allNavLinks);

  return (
    <footer className="relative text-zinc-500 bg-stone-950 box-border caret-transparent gap-x-4 grid grid-cols-[repeat(6,1fr)] w-full z-[1] mx-auto pt-7 pb-3.5 px-3 md:gap-x-6 md:grid-cols-[repeat(12,1fr)] md:pt-20 md:pb-10 md:px-9">
      <NewsletterForm />
      <FooterColumn
        columnVariant="col-start-1 mt-[42px] md:col-start-7"
        links={navLinksFormatted}
      />
      <FooterColumn
        columnVariant="col-start-4 mt-[42px] md:col-start-9"
        links={formatColumn(secondaryLinks)}
      />
      <FooterColumn
        columnVariant="col-start-1 mt-14 md:col-start-11"
        links={[
          { href: "https://bsky.app/profile/infinitespaces.bsky.social", text: "Bluesky", linkVariant: footerLinkStyle },
          { href: "https://www.instagram.com/infinite.spaces/", text: "Instagram", linkVariant: footerLinkStyle },
          { href: "https://www.tiktok.com/@infinite.spaces.studios", text: "TikTok", linkVariant: footerLinkStyleLast },
        ]}
      />
      <FooterCredits
        variant="flex col-end-[span_6] col-start-1 justify-between order-7 mt-7"
        primaryText="Infinite Spaces © 2026"
        secondaryText="All rights reserved"
      />
      <FooterLinks />
    </footer>
  );
};
