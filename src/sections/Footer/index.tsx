import { NewsletterForm } from "@/sections/Footer/components/NewsletterForm";
import { FooterColumn } from "@/sections/Footer/components/FooterColumn";
import { FooterCredits } from "@/sections/Footer/components/FooterCredits";
import { FooterLinks } from "@/sections/Footer/components/FooterLinks";

const accountsUrl = import.meta.env.VITE_ACCOUNTS_URL || "https://accounts.infinitespaces.io";

function getAuthUrl(path: string) {
  const callbackUrl = `${window.location.origin}/auth/callback`;
  return `${accountsUrl}/auth/${path}?redirect_to=${encodeURIComponent(callbackUrl)}`;
}

export const Footer = () => {
  return (
    <footer className="relative text-zinc-500 bg-stone-950 box-border caret-transparent gap-x-4 grid grid-cols-[repeat(6,1fr)] w-full z-[1] mx-auto pt-7 pb-3.5 px-3 md:gap-x-6 md:grid-cols-[repeat(12,1fr)] md:pt-20 md:pb-10 md:px-9">
      <NewsletterForm />
      <FooterColumn
        columnVariant="col-start-1 mt-[42px] md:col-start-7"
        links={[
          {
            href: "/social",
            text: "Social",
            linkVariant:
              "relative text-stone-300 text-sm box-border caret-transparent block leading-[14px] uppercase mb-7 rounded-sm font-aeonik_mono md:mb-10 after:md:accent-auto after:md:bg-stone-300 after:md:box-border after:md:caret-transparent after:md:text-stone-300 after:md:block after:md:text-sm after:md:not-italic after:md:font-normal after:md:h-px after:md:tracking-[0.18px] after:md:leading-[14px] after:md:list-outside after:md:list-[''] after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:uppercase after:md:origin-[100%_0%] after:md:visible after:md:w-full after:md:border-separate after:md:scale-x-0 after:md:left-0 after:md:-bottom-0.5 after:md:font-aeonik_mono",
          },
          {
            href: "/gallery",
            text: "Gallery",
            linkVariant:
              "relative text-stone-300 text-sm box-border caret-transparent block leading-[14px] uppercase mb-7 rounded-sm font-aeonik_mono md:mb-10 after:md:accent-auto after:md:bg-stone-300 after:md:box-border after:md:caret-transparent after:md:text-stone-300 after:md:block after:md:text-sm after:md:not-italic after:md:font-normal after:md:h-px after:md:tracking-[0.18px] after:md:leading-[14px] after:md:list-outside after:md:list-[''] after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:uppercase after:md:origin-[100%_0%] after:md:visible after:md:w-full after:md:border-separate after:md:scale-x-0 after:md:left-0 after:md:-bottom-0.5 after:md:font-aeonik_mono",
          },
          {
            href: "/directory",
            text: "Directory",
            linkVariant:
              "relative text-stone-300 text-sm box-border caret-transparent block leading-[14px] uppercase mb-7 rounded-sm font-aeonik_mono md:mb-10 after:md:accent-auto after:md:bg-stone-300 after:md:box-border after:md:caret-transparent after:md:text-stone-300 after:md:block after:md:text-sm after:md:not-italic after:md:font-normal after:md:h-px after:md:tracking-[0.18px] after:md:leading-[14px] after:md:list-outside after:md:list-[''] after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:uppercase after:md:origin-[100%_0%] after:md:visible after:md:w-full after:md:border-separate after:md:scale-x-0 after:md:left-0 after:md:-bottom-0.5 after:md:font-aeonik_mono",
          },
          {
            href: "/articles",
            text: "Articles",
            linkVariant:
              "relative text-stone-300 text-sm box-border caret-transparent block leading-[14px] uppercase mb-7 rounded-sm font-aeonik_mono md:mb-10 after:md:accent-auto after:md:bg-stone-300 after:md:box-border after:md:caret-transparent after:md:text-stone-300 after:md:block after:md:text-sm after:md:not-italic after:md:font-normal after:md:h-px after:md:tracking-[0.18px] after:md:leading-[14px] after:md:list-outside after:md:list-[''] after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:uppercase after:md:origin-[100%_0%] after:md:visible after:md:w-full after:md:border-separate after:md:scale-x-0 after:md:left-0 after:md:-bottom-0.5 after:md:font-aeonik_mono",
          },
          {
            href: "/jobs",
            text: "Jobs",
            linkVariant:
              "relative text-stone-300 text-sm box-border caret-transparent block leading-[14px] uppercase mb-7 rounded-sm font-aeonik_mono md:mb-10 after:md:accent-auto after:md:bg-stone-300 after:md:box-border after:md:caret-transparent after:md:text-stone-300 after:md:block after:md:text-sm after:md:not-italic after:md:font-normal after:md:h-px after:md:tracking-[0.18px] after:md:leading-[14px] after:md:list-outside after:md:list-[''] after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:uppercase after:md:origin-[100%_0%] after:md:visible after:md:w-full after:md:border-separate after:md:scale-x-0 after:md:left-0 after:md:-bottom-0.5 after:md:font-aeonik_mono",
          },
          {
            href: "/pricing",
            text: "Pricing",
            linkVariant:
              "relative text-stone-300 text-sm box-border caret-transparent block leading-[14px] uppercase rounded-sm font-aeonik_mono after:md:accent-auto after:md:bg-stone-300 after:md:box-border after:md:caret-transparent after:md:text-stone-300 after:md:block after:md:text-sm after:md:not-italic after:md:font-normal after:md:h-px after:md:tracking-[0.18px] after:md:leading-[14px] after:md:list-outside after:md:list-[''] after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:uppercase after:md:origin-[100%_0%] after:md:visible after:md:w-full after:md:border-separate after:md:scale-x-0 after:md:left-0 after:md:-bottom-0.5 after:md:font-aeonik_mono",
          },
        ]}
      />
      <FooterColumn
        columnVariant="col-start-4 mt-[42px] md:col-start-9"
        links={[
          {
            href: "#",
            text: "About",
            linkVariant:
              "relative text-stone-300 text-sm box-border caret-transparent block leading-[14px] uppercase mb-7 rounded-sm font-aeonik_mono md:mb-10 after:md:accent-auto after:md:bg-stone-300 after:md:box-border after:md:caret-transparent after:md:text-stone-300 after:md:block after:md:text-sm after:md:not-italic after:md:font-normal after:md:h-px after:md:tracking-[0.18px] after:md:leading-[14px] after:md:list-outside after:md:list-[''] after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:uppercase after:md:origin-[100%_0%] after:md:visible after:md:w-full after:md:border-separate after:md:scale-x-0 after:md:left-0 after:md:-bottom-0.5 after:md:font-aeonik_mono",
          },
          {
            href: "#",
            text: "FAQs",
            linkVariant:
              "relative text-stone-300 text-sm box-border caret-transparent block leading-[14px] mb-7 rounded-sm font-aeonik_mono md:mb-10 after:md:accent-auto after:md:bg-stone-300 after:md:box-border after:md:caret-transparent after:md:text-stone-300 after:md:block after:md:text-sm after:md:not-italic after:md:font-normal after:md:h-px after:md:tracking-[0.18px] after:md:leading-[14px] after:md:list-outside after:md:list-[''] after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:origin-[100%_0%] after:md:visible after:md:w-full after:md:border-separate after:md:scale-x-0 after:md:left-0 after:md:-bottom-0.5 after:md:font-aeonik_mono",
          },
          {
            href: "#",
            text: "Contact",
            linkVariant:
              "relative text-stone-300 text-sm box-border caret-transparent block leading-[14px] uppercase mb-7 rounded-sm font-aeonik_mono md:mb-10 after:md:accent-auto after:md:bg-stone-300 after:md:box-border after:md:caret-transparent after:md:text-stone-300 after:md:block after:md:text-sm after:md:not-italic after:md:font-normal after:md:h-px after:md:tracking-[0.18px] after:md:leading-[14px] after:md:list-outside after:md:list-[''] after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:uppercase after:md:origin-[100%_0%] after:md:visible after:md:w-full after:md:border-separate after:md:scale-x-0 after:md:left-0 after:md:-bottom-0.5 after:md:font-aeonik_mono",
          },
          {
            href: getAuthUrl("login"),
            text: "Login",
            linkVariant:
              "relative text-stone-300 text-sm box-border caret-transparent block leading-[14px] uppercase mb-7 rounded-sm font-aeonik_mono md:mb-10 after:md:accent-auto after:md:bg-stone-300 after:md:box-border after:md:caret-transparent after:md:text-stone-300 after:md:block after:md:text-sm after:md:not-italic after:md:font-normal after:md:h-px after:md:tracking-[0.18px] after:md:leading-[14px] after:md:list-outside after:md:list-[''] after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:uppercase after:md:origin-[100%_0%] after:md:visible after:md:w-full after:md:border-separate after:md:scale-x-0 after:md:left-0 after:md:-bottom-0.5 after:md:font-aeonik_mono",
          },
          {
            href: getAuthUrl("register"),
            text: "Sign up",
            linkVariant:
              "relative text-stone-300 text-sm box-border caret-transparent block leading-[14px] uppercase mb-7 rounded-sm font-aeonik_mono md:mb-10 after:md:accent-auto after:md:bg-stone-300 after:md:box-border after:md:caret-transparent after:md:text-stone-300 after:md:block after:md:text-sm after:md:not-italic after:md:font-normal after:md:h-px after:md:tracking-[0.18px] after:md:leading-[14px] after:md:list-outside after:md:list-[''] after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:uppercase after:md:origin-[100%_0%] after:md:visible after:md:w-full after:md:border-separate after:md:scale-x-0 after:md:left-0 after:md:-bottom-0.5 after:md:font-aeonik_mono",
          },
          {
            href: "#",
            text: "Community Guidelines",
            linkVariant:
              "relative text-stone-300 text-sm box-border caret-transparent block leading-[14px] uppercase rounded-sm font-aeonik_mono after:md:accent-auto after:md:bg-stone-300 after:md:box-border after:md:caret-transparent after:md:text-stone-300 after:md:block after:md:text-sm after:md:not-italic after:md:font-normal after:md:h-px after:md:tracking-[0.18px] after:md:leading-[14px] after:md:list-outside after:md:list-[''] after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:uppercase after:md:origin-[100%_0%] after:md:visible after:md:w-full after:md:border-separate after:md:scale-x-0 after:md:left-0 after:md:-bottom-0.5 after:md:font-aeonik_mono",
          },
        ]}
      />
      <FooterColumn
        columnVariant="col-start-1 mt-14 md:col-start-11"
        links={[
          {
            href: "#",
            text: "Bluesky",
            linkVariant:
              "relative text-stone-300 text-sm box-border caret-transparent block leading-[14px] uppercase mb-7 rounded-sm font-aeonik_mono md:mb-10 after:md:accent-auto after:md:bg-stone-300 after:md:box-border after:md:caret-transparent after:md:text-stone-300 after:md:block after:md:text-sm after:md:not-italic after:md:font-normal after:md:h-px after:md:tracking-[0.18px] after:md:leading-[14px] after:md:list-outside after:md:list-[''] after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:uppercase after:md:origin-[100%_0%] after:md:visible after:md:w-full after:md:border-separate after:md:scale-x-0 after:md:left-0 after:md:-bottom-0.5 after:md:font-aeonik_mono",
          },
          {
            href: "#",
            text: "X / Twitter",
            linkVariant:
              "relative text-stone-300 text-sm box-border caret-transparent block leading-[14px] uppercase mb-7 rounded-sm font-aeonik_mono md:mb-10 after:md:accent-auto after:md:bg-stone-300 after:md:box-border after:md:caret-transparent after:md:text-stone-300 after:md:block after:md:text-sm after:md:not-italic after:md:font-normal after:md:h-px after:md:tracking-[0.18px] after:md:leading-[14px] after:md:list-outside after:md:list-[''] after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:uppercase after:md:origin-[100%_0%] after:md:visible after:md:w-full after:md:border-separate after:md:scale-x-0 after:md:left-0 after:md:-bottom-0.5 after:md:font-aeonik_mono",
          },
          {
            href: "#",
            text: "Instagram",
            linkVariant:
              "relative text-stone-300 text-sm box-border caret-transparent block leading-[14px] uppercase mb-7 rounded-sm font-aeonik_mono md:mb-10 after:md:accent-auto after:md:bg-stone-300 after:md:box-border after:md:caret-transparent after:md:text-stone-300 after:md:block after:md:text-sm after:md:not-italic after:md:font-normal after:md:h-px after:md:tracking-[0.18px] after:md:leading-[14px] after:md:list-outside after:md:list-[''] after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:uppercase after:md:origin-[100%_0%] after:md:visible after:md:w-full after:md:border-separate after:md:scale-x-0 after:md:left-0 after:md:-bottom-0.5 after:md:font-aeonik_mono",
          },
          {
            href: "#",
            text: "LinkedIn",
            linkVariant:
              "relative text-stone-300 text-sm box-border caret-transparent block leading-[14px] uppercase mb-7 rounded-sm font-aeonik_mono md:mb-10 after:md:accent-auto after:md:bg-stone-300 after:md:box-border after:md:caret-transparent after:md:text-stone-300 after:md:block after:md:text-sm after:md:not-italic after:md:font-normal after:md:h-px after:md:tracking-[0.18px] after:md:leading-[14px] after:md:list-outside after:md:list-[''] after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:uppercase after:md:origin-[100%_0%] after:md:visible after:md:w-full after:md:border-separate after:md:scale-x-0 after:md:left-0 after:md:-bottom-0.5 after:md:font-aeonik_mono",
          },
          {
            href: "https://github.com/infinitespacesorg",
            text: "GitHub",
            linkVariant:
              "relative text-stone-300 text-sm box-border caret-transparent block leading-[14px] uppercase rounded-sm font-aeonik_mono after:md:accent-auto after:md:bg-stone-300 after:md:box-border after:md:caret-transparent after:md:text-stone-300 after:md:block after:md:text-sm after:md:not-italic after:md:font-normal after:md:h-px after:md:tracking-[0.18px] after:md:leading-[14px] after:md:list-outside after:md:list-[''] after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:uppercase after:md:origin-[100%_0%] after:md:visible after:md:w-full after:md:border-separate after:md:scale-x-0 after:md:left-0 after:md:-bottom-0.5 after:md:font-aeonik_mono",
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
