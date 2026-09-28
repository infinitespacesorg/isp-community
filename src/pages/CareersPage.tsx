import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import Markdoc from "@markdoc/markdoc";
import { Footer } from "@/sections/Footer";
import { roles, getRole } from "@/lib/careers";

const CONTACT = "careers@infinitespaces.org";

const PageShell = ({ children }: { children: React.ReactNode }) => (
  <div className="box-border flex flex-col min-h-screen">
    <main className="basis-[0%] grow">
      <section className="mx-auto max-w-3xl px-6 mb-[84px] md:mb-40">
        <div className="pt-28 md:pt-32">{children}</div>
      </section>
    </main>
    <Footer />
  </div>
);

const roleMeta = (r: { location: string; type: string }) =>
  [r.type, r.location].filter(Boolean).join(" · ");

export const CareersPage = () => (
  <PageShell>
    <h1 className="text-3xl font-black tracking-[-0.36px] leading-[29.4px] mb-6 md:text-4xl md:tracking-[-0.48px] md:leading-[35.28px]">
      Come build with us
    </h1>
    <p className="max-w-2xl text-lg leading-relaxed text-neutral-700">
      We're a small crew in Seattle building worlds of living media, so that production
      teams can go from a design to live in a single environment.
    </p>

    <h2 className="mt-14 mb-4 text-xs font-aeonik-mono uppercase tracking-[0.18px] text-neutral-500">
      Open roles
    </h2>

    {roles.length === 0 && (
      <div className="border-y border-neutral-200 py-10">
        <p className="text-neutral-600">
          No open roles right now — but we're always glad to meet people who build.
          Tell us what you'd make:{" "}
          <a href={`mailto:${CONTACT}`} className="text-[#789bde] underline">
            {CONTACT}
          </a>
          .
        </p>
      </div>
    )}

    {roles.length > 0 && (
      <div className="divide-y divide-neutral-200 border-y border-neutral-200">
        {roles.map((r) => (
          <Link key={r.slug} to={`/careers/${r.slug}`} className="group flex flex-col gap-1 py-6">
            <h3 className="text-2xl font-semibold leading-tight group-hover:text-neutral-600">
              {r.title}
            </h3>
            <span className="text-xs font-aeonik-mono uppercase tracking-[0.18px] text-neutral-500">
              {roleMeta(r)}
            </span>
            {r.summary && <p className="mt-1 max-w-2xl text-neutral-500">{r.summary}</p>}
          </Link>
        ))}
      </div>
    )}
  </PageShell>
);

export const CareerRolePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const role = slug ? getRole(slug) : undefined;

  if (!role) {
    return <Navigate to="/careers" replace />;
  }

  return (
    <PageShell>
      <Link
        to="/careers"
        className="mb-8 inline-block text-xs font-aeonik-mono uppercase tracking-[0.18px] text-air hover:underline"
      >
        &larr; All roles
      </Link>
      <h1 className="text-3xl font-black tracking-[-0.36px] leading-tight md:text-4xl md:tracking-[-0.48px]">
        {role.title}
      </h1>
      <p className="mt-3 text-xs font-aeonik-mono uppercase tracking-[0.18px] text-neutral-500">
        {roleMeta(role)}
      </p>

      <div className="post-prose mt-10">{Markdoc.renderers.react(role.content, React)}</div>

      <div className="mt-12 border-t border-neutral-200 pt-8">
        <a
          href={`mailto:${CONTACT}?subject=${encodeURIComponent(`Application: ${role.title}`)}`}
          className="inline-block rounded-full bg-air px-6 py-2.5 text-sm font-medium text-[#0c0c14] transition-colors hover:bg-[#8aa9e4]"
        >
          Apply for this role
        </a>
        <p className="mt-3 text-sm text-neutral-500">
          Email us your work and a few lines on what you'd build — no cover-letter ritual
          required.
        </p>
      </div>
    </PageShell>
  );
};
