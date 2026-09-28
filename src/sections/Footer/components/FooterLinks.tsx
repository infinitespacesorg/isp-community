import { routeEnabled } from "@/config/routes";

// Legal links follow routes.manifest.json — a policy page disabled for this
// deploy environment drops out of the strip. Privacy points at the PlayBox
// notice (the Google Play listing URL) until a site-wide policy exists; the
// rest stay off until real documents are drafted.
const legalLinks = [
  { href: "/terms-and-conditions", text: "Terms" },
  { href: "/playbox-privacy", text: "Privacy" },
  { href: "/acceptable-use-policy", text: "Acceptable Use" },
  { href: "/disclaimer", text: "Disclaimer" },
].filter((l) => routeEnabled(l.href));

const anchorStyle =
  "relative box-border caret-transparent block rounded-sm after:md:accent-auto after:md:bg-zinc-500 after:md:box-border after:md:caret-transparent after:md:text-zinc-500 after:md:block after:md:text-xs after:md:not-italic after:md:font-normal after:md:h-px after:md:tracking-[0.18px] after:md:leading-3 after:md:list-outside after:md:list-[''] after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:uppercase after:md:origin-[100%_0%] after:md:visible after:md:w-full after:md:border-separate after:md:scale-x-0 after:md:left-0 after:md:-bottom-0.5 after:md:font-aeonik-mono";

export const FooterLinks = () => {
  if (legalLinks.length === 0) return null;
  return (
    <div className="box-border caret-transparent col-end-[span_6] col-start-1 order-8 mt-7 pb-7 md:order-none md:mt-2 md:pb-0">
      <ul className="text-xs box-border caret-transparent gap-x-1.5 flex flex-wrap leading-3 list-[''] gap-y-1.5 uppercase pl-0 font-aeonik-mono md:gap-x-2 md:gap-y-2">
        {legalLinks.map((link, i) => (
          <li
            key={link.href}
            className={
              i === legalLinks.length - 1
                ? "box-border caret-transparent flex"
                : "box-border caret-transparent flex border-zinc-500 pr-2 border-r"
            }
          >
            <a href={link.href} className={anchorStyle}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
