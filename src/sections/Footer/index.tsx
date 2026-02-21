import { NewsletterForm } from "@/sections/Footer/components/NewsletterForm";
import { FooterColumn } from "@/sections/Footer/components/FooterColumn";
import { FooterCredits } from "@/sections/Footer/components/FooterCredits";
import { FooterLinks } from "@/sections/Footer/components/FooterLinks";
import { features } from "@/config/features";

const accountsUrl = import.meta.env.VITE_ACCOUNTS_URL || "https://accounts.infinitespaces.io";

const footerLinkStyle =
  "relative text-stone-300 text-sm box-border caret-transparent block leading-[14px] uppercase mb-7 rounded-sm font-aeonik-mono md:mb-10 after:md:accent-auto after:md:bg-stone-300 after:md:box-border after:md:caret-transparent after:md:text-stone-300 after:md:block after:md:text-sm after:md:not-italic after:md:font-normal after:md:h-px after:md:tracking-[0.18px] after:md:leading-[14px] after:md:list-outside after:md:list-[''] after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:uppercase after:md:origin-[100%_0%] after:md:visible after:md:w-full after:md:border-separate after:md:scale-x-0 after:md:left-0 after:md:-bottom-0.5 after:md:font-aeonik-mono";

const footerLinkStyleLast = footerLinkStyle.replace("mb-7", "").replace("md:mb-10", "");

function getAuthUrl(path: string) {
  const callbackUrl = `${window.location.origin}/auth/callback`;
  return `${accountsUrl}/auth/${path}?redirect_to=${encodeURIComponent(callbackUrl)}`;
}

const allNavLinks = [
  { href: "/explore", text: "Explore", visible: true },
  { href: "/lab", text: "Lab", visible: true },
  { href: "/social", text: "Social", visible: features.showSocial },
  { href: "/gallery", text: "Gallery", visible: features.showGallery },
  { href: "/directory", text: "Directory", visible: features.showDirectory },
  { href: "/articles", text: "Articles", visible: features.showArticles },
  { href: "/jobs", text: "Jobs", visible: features.showJobs },
  { href: "/pricing", text: "Pricing", visible: features.showPricing },
];

export const Footer = () => {
  const visibleNavLinks = allNavLinks.filter((l) => l.visible);
  const navLinksFormatted = visibleNavLinks.map((l, i) => ({
    href: l.href,
    text: l.text,
    linkVariant: i === visibleNavLinks.length - 1 ? footerLinkStyleLast : footerLinkStyle,
  }));

  const signupHref = features.waitlistMode ? "/waitlist" : getAuthUrl("register");

  return (
    <footer className="relative text-zinc-500 bg-stone-950 box-border caret-transparent gap-x-4 grid grid-cols-[repeat(6,1fr)] w-full z-[1] mx-auto pt-7 pb-3.5 px-3 md:gap-x-6 md:grid-cols-[repeat(12,1fr)] md:pt-20 md:pb-10 md:px-9">
      <NewsletterForm />
      <FooterColumn
        columnVariant="col-start-1 mt-[42px] md:col-start-7"
        links={navLinksFormatted}
      />
      <FooterColumn
        columnVariant="col-start-4 mt-[42px] md:col-start-9"
        links={[
          { href: "#", text: "About", linkVariant: footerLinkStyle },
          {
            href: "#",
            text: "FAQs",
            linkVariant: footerLinkStyle.replace("uppercase", ""),
          },
          { href: "#", text: "Contact", linkVariant: footerLinkStyle },
          { href: getAuthUrl("login"), text: "Login", linkVariant: footerLinkStyle },
          { href: signupHref, text: "Sign up", linkVariant: footerLinkStyle },
          { href: "#", text: "Community Guidelines", linkVariant: footerLinkStyleLast },
        ]}
      />
      <FooterColumn
        columnVariant="col-start-1 mt-14 md:col-start-11"
        links={[
          { href: "#", text: "Bluesky", linkVariant: footerLinkStyle },
          { href: "#", text: "X / Twitter", linkVariant: footerLinkStyle },
          { href: "#", text: "Instagram", linkVariant: footerLinkStyle },
          { href: "#", text: "LinkedIn", linkVariant: footerLinkStyle },
          {
            href: "https://github.com/infinitespacesorg",
            text: "GitHub",
            linkVariant: footerLinkStyleLast,
          },
        ]}
      />
      <FooterCredits
        variant="flex col-end-[span_6] col-start-1 justify-between order-7 mt-7"
        primaryText="Infinite Spaces © 2026"
        secondaryText="All rights reserved"
      />
      <FooterCredits
        variant="col-end-[span_3] col-start-4 order-6 text-right mt-14 md:col-end-[span_2] md:col-start-9 md:order-none md:text-start md:mt-20"
        primaryText="Branding"
        showBreak={true}
        breakClassName="box-border caret-transparent inline text-right md:hidden md:text-start"
        linkUrl="#"
        linkText="Geist"
      />
      <FooterLinks />
    </footer>
  );
};
