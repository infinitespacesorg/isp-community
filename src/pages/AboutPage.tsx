import { Footer } from "@/sections/Footer";

const values = [
  {
    title: "Real spaces, real stories",
    body: "We turn captures of the physical world into interactive, navigable experiences — not just images of a place, but a place you can move through.",
  },
  {
    title: "Open by default",
    body: "The platform is built on open standards — Media over QUIC, Gaussian splatting, an open community. Your work is yours.",
  },
  {
    title: "Agents as participants",
    body: "People and AI agents build together. Agents are first-class collaborators in every world, not bolted-on features.",
  },
];

export const AboutPage = () => (
  <div className="box-border caret-transparent flex flex-col min-h-screen">
    <main className="box-border caret-transparent basis-[0%] grow">
      <section className="box-border caret-transparent mb-[84px] mx-3 md:mb-40 md:mx-9">
        <div className="pt-28 md:pt-32 max-w-3xl">
          <h1 className="text-4xl font-black tracking-[-0.36px] leading-[35.28px] mb-6 md:text-[44.8px] md:tracking-[-0.48px] md:leading-[43.904px]">
            About Infinite Spaces
          </h1>
          <p className="text-xl leading-relaxed text-neutral-700">
            Infinite Spaces is a platform for the spatial web — a place to capture real
            spaces, build immersive 3D worlds, and publish them as interactive stories that
            anyone can explore. Playbox is our creative studio; the community is where those
            worlds are shared.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title}>
                <h2 className="text-lg font-semibold mb-2">{v.title}</h2>
                <p className="text-sm leading-relaxed text-neutral-600">{v.body}</p>
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
