import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@infinitespaces/ui";

/* ------------------------------------------------------------------ *
 *  Light product-page component set. Mirrors the realhorizons.ai
 *  formatting (light palette, numbered sections, hover-gradient cards)
 *  using the brand colorway (Air/Light/Earth). Dark values live in the
 *  theme tokens so a future dark mode is a token flip, not a rewrite.
 * ------------------------------------------------------------------ */

/** Light page wrapper — warm off-white base, dark text, clears the pill. */
export function ProductPage({ children }: { children: ReactNode }) {
  return <div className="bg-[#fafafa] text-neutral-900 font-aeonik">{children}</div>;
}

type Cta = { label: string; href: string; variant?: "primary" | "ghost" };

function CtaLink({ label, href, variant = "ghost" }: Cta) {
  const internal = href.startsWith("/");
  const cls = cn(
    "inline-flex rounded-full px-7 py-3 text-sm font-medium transition-colors",
    variant === "primary"
      ? "bg-air text-[#0c0c14] hover:bg-[#8aa9e4]"
      : "border border-neutral-300 text-neutral-900 hover:bg-neutral-100",
  );
  return internal ? (
    <Link to={href} className={cls}>
      {label}
    </Link>
  ) : (
    <a href={href} className={cls}>
      {label}
    </a>
  );
}

/** Big hero. `gradientHeadline` renders the title in the warm brand signature. */
export function ProductHero({
  title,
  subtitle,
  ctas = [],
  gradientHeadline = false,
}: {
  title: string;
  subtitle?: string;
  ctas?: Cta[];
  gradientHeadline?: boolean;
}) {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-40 pb-16 text-center md:pt-48">
      <h1
        className={cn(
          "text-4xl font-black leading-[1.05] tracking-[-0.02em] md:text-6xl",
          gradientHeadline &&
            "bg-gradient-to-br from-light to-earth bg-clip-text text-transparent",
        )}
      >
        {title}
      </h1>
      {subtitle && (
        <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-500 md:text-xl">
          {subtitle}
        </p>
      )}
      {ctas.length > 0 && (
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          {ctas.map((c) => (
            <CtaLink key={c.label} {...c} />
          ))}
        </div>
      )}
    </section>
  );
}

/** Card with the realhorizons hover-gradient: a blue→violet→fuchsia layer
 *  fades in over the white surface on hover, with a lift and tinted border. */
export function HoverCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6",
        "transition-all duration-300 hover:-translate-y-0.5 hover:border-air/40 hover:shadow-[0_12px_32px_rgba(120,155,222,0.15)]",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-air/15 via-violet-400/10 to-fuchsia-400/15 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="relative">{children}</div>
    </div>
  );
}

/** Section wrapper with optional heading + lead. */
export function ProductSection({
  title,
  lead,
  children,
  className,
}: {
  title?: string;
  lead?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("mx-auto max-w-6xl px-6 py-16 md:py-20", className)}>
      {(title || lead) && (
        <div className="mb-10 max-w-2xl">
          {title && (
            <h2 className="text-3xl font-bold tracking-[-0.01em] md:text-4xl">{title}</h2>
          )}
          {lead && <p className="mt-3 text-lg text-neutral-500">{lead}</p>}
        </div>
      )}
      {children}
    </section>
  );
}

export type NumberedItem = {
  title: string;
  intro: string;
  bullets: string[];
  badge?: string;
};

/** realhorizons /features layout: numbered stacked sections. */
export function NumberedSections({ items }: { items: NumberedItem[] }) {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-8">
      {items.map((f, i) => (
        <section key={f.title} className="border-t border-neutral-200 py-14 first:border-t-0">
          <div className="grid gap-8 md:grid-cols-[auto_1fr]">
            <div className="bg-gradient-to-br from-air to-earth bg-clip-text font-aeonik-mono text-4xl font-bold tabular-nums text-transparent">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div>
              <div className="mb-3 flex items-center gap-3">
                <h3 className="text-2xl font-semibold md:text-3xl">{f.title}</h3>
                {f.badge && (
                  <span className="rounded-full bg-air px-2 py-0.5 text-[10px] font-aeonik-mono uppercase tracking-[0.18px] text-[#0c0c14]">
                    {f.badge}
                  </span>
                )}
              </div>
              <p className="mb-6 max-w-2xl text-lg text-neutral-500">{f.intro}</p>
              <ul className="grid gap-2 sm:grid-cols-2">
                {f.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-neutral-600">
                    <span className="mt-1 text-air">—</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

/** Final call-to-action band. */
export function ProductCta({ title, ctas = [] }: { title: string; ctas?: Cta[] }) {
  return (
    <section className="border-t border-neutral-200">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="bg-gradient-to-br from-light to-earth bg-clip-text text-3xl font-black tracking-[-0.01em] text-transparent md:text-5xl">
          {title}
        </h2>
        {ctas.length > 0 && (
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {ctas.map((c) => (
              <CtaLink key={c.label} {...c} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
