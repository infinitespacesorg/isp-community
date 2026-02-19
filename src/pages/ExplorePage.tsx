import { Link } from "react-router-dom";
import { Footer } from "@/sections/Footer";

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

const HeroSection = () => (
  <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-8 text-center">
    {/* Gradient orbs for visual depth behind the glass navbar */}
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="absolute top-60 right-1/4 h-[400px] w-[400px] rounded-full bg-purple-500/15 blur-[100px]" />
      <div className="absolute bottom-20 left-1/3 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[100px]" />
    </div>

    <h1 className="relative z-10 mb-6 text-5xl font-extrabold tracking-tight text-white md:text-6xl">
      Infinite Spaces
    </h1>
    <p className="relative z-10 mb-10 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl">
      A creative platform where artists, builders, and dreamers come together
      to craft immersive 3D worlds, share compositions, and explore the
      boundaries of spatial computing.
    </p>
    <div className="relative z-10 flex flex-col gap-4 sm:flex-row">
      <Link
        to="/gallery"
        className="rounded-full bg-white/10 px-8 py-3 text-sm font-medium text-white backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors"
      >
        Start Exploring
      </Link>
      <Link
        to="/waitlist"
        className="rounded-full bg-blue-500/80 px-8 py-3 text-sm font-medium text-white hover:bg-blue-500 transition-colors"
      >
        Create a World
      </Link>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/*  Features                                                           */
/* ------------------------------------------------------------------ */

const features = [
  {
    icon: "\u{1F3A8}",
    title: "Playbox Canvas",
    description:
      "A real-time 3D editor with live MoQ streaming. Build worlds collaboratively with sub-100ms latency.",
  },
  {
    icon: "\u{1F310}",
    title: "Community Hub",
    description:
      "Share compositions, browse galleries, and connect with other spatial artists in a curated community space.",
  },
  {
    icon: "\u{1F52E}",
    title: "Liquid Glass UI",
    description:
      "A translucent design system inspired by depth-of-field rendering. Every surface breathes with the content behind it.",
  },
  {
    icon: "\u{1F4E1}",
    title: "MoQ Streaming",
    description:
      "Media over QUIC delivers ultra-low-latency video and data. Watch worlds being built in real time.",
  },
  {
    icon: "\u{1F3D7}\u{FE0F}",
    title: "Fabric Console",
    description:
      "Manage your account, worlds, API keys, and deployments from a single unified control plane.",
  },
  {
    icon: "\u{1F916}",
    title: "Agent-First",
    description:
      "AI agents are first-class participants. They can create, modify, and interact with worlds alongside humans.",
  },
];

const FeaturesSection = () => (
  <section className="mx-auto max-w-6xl px-8 py-24">
    <h2 className="mb-4 text-3xl font-bold text-white">Built for Creators</h2>
    <p className="mb-12 max-w-xl text-white/50">
      Everything you need to design, share, and experience spatial content.
    </p>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {features.map((f) => (
        <div
          key={f.title}
          className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-8 backdrop-blur-sm transition-colors hover:bg-white/[0.06]"
        >
          <div className="mb-4 text-3xl">{f.icon}</div>
          <h3 className="mb-3 text-lg font-semibold text-white">{f.title}</h3>
          <p className="text-sm leading-relaxed text-white/50">
            {f.description}
          </p>
        </div>
      ))}
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/*  Stats                                                              */
/* ------------------------------------------------------------------ */

const stats = [
  { value: "\u221E", label: "Possible Worlds" },
  { value: "<100ms", label: "Stream Latency" },
  { value: "Open", label: "Source Platform" },
];

const StatsSection = () => (
  <section className="mx-auto max-w-4xl px-8 py-24">
    <div className="grid gap-12 text-center md:grid-cols-3">
      {stats.map((s) => (
        <div key={s.label}>
          <div className="mb-2 text-5xl font-bold text-blue-400">{s.value}</div>
          <div className="text-sm text-white/40">{s.label}</div>
        </div>
      ))}
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/*  Featured Compositions                                              */
/* ------------------------------------------------------------------ */

const compositions = [
  { name: "Neon Gardens", author: "alix.eth", color: "from-pink-500/20 to-purple-500/20" },
  { name: "Crystal Caverns", author: "builder_one", color: "from-cyan-500/20 to-blue-500/20" },
  { name: "Solar Wind", author: "nova.studio", color: "from-orange-500/20 to-red-500/20" },
  { name: "Deep Archive", author: "archivist", color: "from-green-500/20 to-emerald-500/20" },
  { name: "Pulse Network", author: "synth.lab", color: "from-violet-500/20 to-fuchsia-500/20" },
  { name: "Still Life #7", author: "quiet.pixel", color: "from-amber-500/20 to-yellow-500/20" },
];

const GallerySection = () => (
  <section className="mx-auto max-w-6xl px-8 py-24">
    <h2 className="mb-12 text-3xl font-bold text-white">
      Featured Compositions
    </h2>
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {compositions.map((c) => (
        <div
          key={c.name}
          className={`aspect-video rounded-xl border border-white/[0.06] bg-gradient-to-br ${c.color} p-6 flex flex-col justify-end transition-transform hover:scale-[1.02]`}
        >
          <div className="text-base font-medium text-white">{c.name}</div>
          <div className="text-xs text-white/40">{c.author}</div>
        </div>
      ))}
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export const ExplorePage = () => (
  <div className="bg-[#06060f] font-inter">
    <HeroSection />
    <FeaturesSection />
    <StatsSection />
    <GallerySection />
    <Footer />
  </div>
);
