import { Link } from "react-router-dom";
import {
  GlassPage,
  GlassHero,
  GlassCard,
  GlassSection,
  StatGrid,
  GalleryCard,
  GlassFooter,
} from "@infinitespaces/ui";
import { Footer } from "@/sections/Footer";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
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

const stats = [
  { value: "\u221E", label: "Possible Worlds" },
  { value: "<100ms", label: "Stream Latency" },
  { value: "Open", label: "Source Platform" },
];

const compositions = [
  { name: "Neon Gardens", author: "alix.eth", gradient: "from-pink-500/20 to-purple-500/20" },
  { name: "Crystal Caverns", author: "builder_one", gradient: "from-cyan-500/20 to-blue-500/20" },
  { name: "Solar Wind", author: "nova.studio", gradient: "from-orange-500/20 to-red-500/20" },
  { name: "Deep Archive", author: "archivist", gradient: "from-green-500/20 to-emerald-500/20" },
  { name: "Pulse Network", author: "synth.lab", gradient: "from-violet-500/20 to-fuchsia-500/20" },
  { name: "Still Life #7", author: "quiet.pixel", gradient: "from-amber-500/20 to-yellow-500/20" },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export const ExplorePage = () => (
  <GlassPage>
    <GlassHero
      title="Infinite Spaces"
      subtitle="A creative platform where artists, builders, and dreamers come together to craft immersive 3D worlds, share compositions, and explore the boundaries of spatial computing."
    >
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
    </GlassHero>

    <GlassSection
      title="Built for Creators"
      subtitle="Everything you need to design, share, and experience spatial content."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <GlassCard
            key={f.title}
            icon={f.icon}
            title={f.title}
            description={f.description}
          />
        ))}
      </div>
    </GlassSection>

    <GlassSection maxWidth="4xl">
      <StatGrid stats={stats} />
    </GlassSection>

    <GlassSection title="Featured Compositions">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {compositions.map((c) => (
          <GalleryCard
            key={c.name}
            name={c.name}
            author={c.author}
            gradient={c.gradient}
          />
        ))}
      </div>
    </GlassSection>

    <GlassFooter text="Infinite Spaces Platform — Building the spatial web, one world at a time." />
    <Footer />
  </GlassPage>
);
