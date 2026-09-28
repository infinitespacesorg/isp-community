// Minimal, dependency-free parser for product-page content markdown.
// Convention (edit the copy in the .md files, rebuild to regenerate):
//   # Hero title
//   > Hero subtitle line
//   [Label](/href){primary}        <- a CTA (before the first ## = hero CTA)
//   ## Section title {badge:New}    <- a section; {cta} marks the closing band
//   Intro paragraph.
//   - bullet
//   - bullet

export type Cta = { label: string; href: string; variant: "primary" | "ghost" };
export type Section = {
  title: string;
  intro: string;
  bullets: string[];
  badge?: string;
  cta?: boolean;
  ctas: Cta[];
};
export type ProductContent = {
  hero: { title: string; subtitle?: string; ctas: Cta[] };
  sections: Section[];
};

const CTA_RE = /^\[([^\]]+)\]\(([^)]+)\)(\{primary\})?\s*$/;

function parseFlags(raw: string): { title: string; badge?: string; cta?: boolean } {
  let title = raw;
  let badge: string | undefined;
  let cta = false;
  title = title.replace(/\{badge:([^}]+)\}/, (_, b) => {
    badge = b.trim();
    return "";
  });
  title = title.replace(/\{cta\}/, () => {
    cta = true;
    return "";
  });
  return { title: title.trim(), badge, cta };
}

export function parseProductContent(md: string): ProductContent {
  const hero: ProductContent["hero"] = { title: "", ctas: [] };
  const sections: Section[] = [];
  let current: Section | null = null;

  for (const rawLine of md.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line) continue;
    if (line.startsWith("<!--")) continue; // sync banner / comments

    if (line.startsWith("# ")) {
      hero.title = line.slice(2).trim();
      continue;
    }
    if (line.startsWith("## ")) {
      const { title, badge, cta } = parseFlags(line.slice(3).trim());
      current = { title, intro: "", bullets: [], badge, cta, ctas: [] };
      sections.push(current);
      continue;
    }
    if (line.startsWith("> ")) {
      const text = line.slice(2).trim();
      if (current) current.intro = current.intro ? `${current.intro} ${text}` : text;
      else hero.subtitle = hero.subtitle ? `${hero.subtitle} ${text}` : text;
      continue;
    }
    const ctaMatch = line.match(CTA_RE);
    if (ctaMatch) {
      const cta: Cta = {
        label: ctaMatch[1],
        href: ctaMatch[2],
        variant: ctaMatch[3] ? "primary" : "ghost",
      };
      (current ? current.ctas : hero.ctas).push(cta);
      continue;
    }
    if (line.startsWith("- ")) {
      if (current) current.bullets.push(line.slice(2).trim());
      continue;
    }
    // Plain paragraph → intro of current section (or hero subtitle if none yet)
    if (current) current.intro = current.intro ? `${current.intro} ${line}` : line;
    else hero.subtitle = hero.subtitle ? `${hero.subtitle} ${line}` : line;
  }

  return { hero, sections };
}
