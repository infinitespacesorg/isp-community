import { Footer } from "@/sections/Footer";

const channels = [
  { label: "General", value: "hello@infinitespaces.org", href: "mailto:hello@infinitespaces.org" },
  { label: "Support", value: "support@infinitespaces.org", href: "mailto:support@infinitespaces.org" },
  { label: "Press & partnerships", value: "press@infinitespaces.org", href: "mailto:press@infinitespaces.org" },
];

export const ContactPage = () => (
  <div className="box-border caret-transparent flex flex-col min-h-screen">
    <main className="box-border caret-transparent basis-[0%] grow">
      <section className="box-border caret-transparent mb-[84px] mx-3 md:mb-40 md:mx-9">
        <div className="pt-28 md:pt-32 max-w-2xl">
          <h1 className="text-3xl font-black tracking-[-0.36px] leading-[29.4px] mb-3 md:text-4xl md:tracking-[-0.48px] md:leading-[35.28px]">
            Contact
          </h1>
          <p className="text-neutral-500 font-aeonik-mono text-sm uppercase tracking-[0.18px] mb-10">
            We'd love to hear from you
          </p>

          <div className="divide-y divide-neutral-200 border-y border-neutral-200">
            {channels.map((c) => (
              <div key={c.label} className="flex items-center justify-between py-5">
                <span className="text-sm font-aeonik-mono uppercase tracking-[0.18px] text-neutral-500">
                  {c.label}
                </span>
                <a href={c.href} className="text-base font-medium text-[#789bde] hover:underline">
                  {c.value}
                </a>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-neutral-500">
            Building on Playbox and need a hand? The{" "}
            <a href="/community" className="text-[#789bde] underline">
              community
            </a>{" "}
            is the fastest way to get answers.
          </p>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);
