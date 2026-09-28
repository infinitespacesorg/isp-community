import { Footer } from "@/sections/Footer";
import { parseProductContent } from "@/content/parse";
import aboutMd from "@/content/about.md?raw";

const { hero, sections } = parseProductContent(aboutMd);
const values = sections.filter((s) => !s.cta);

export const AboutPage = () => (
  <div className="box-border caret-transparent flex flex-col min-h-screen">
    <main className="box-border caret-transparent basis-[0%] grow">
      <section className="box-border caret-transparent mb-[84px] mx-3 md:mb-40 md:mx-9">
        <div className="pt-28 md:pt-32 max-w-3xl">
          <h1 className="text-3xl font-black tracking-[-0.36px] leading-[29.4px] mb-6 md:text-4xl md:tracking-[-0.48px] md:leading-[35.28px]">
            {hero.title}
          </h1>
          <p className="text-lg leading-relaxed text-neutral-700">{hero.subtitle}</p>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title}>
                <h2 className="text-lg font-semibold mb-2">{v.title}</h2>
                <p className="text-sm leading-relaxed text-neutral-600">{v.intro}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 border-t border-neutral-200 pt-8">
            <p className="text-sm text-neutral-500">
              Questions, press, or partnership enquiries?{" "}
              <a href="/contact" className="text-[#789bde] underline">
                Get in touch
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);
