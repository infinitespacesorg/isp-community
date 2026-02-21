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

const techDemos = [
  {
    icon: "\u{1F4A0}",
    title: "Gaussian Splatting",
    description:
      "Capture real-world scenes as radiance fields. Our pipeline converts multi-view photos into real-time 3D splat compositions.",
  },
  {
    icon: "\u{1F4E1}",
    title: "MoQ Live Canvas",
    description:
      "Media over QUIC delivers sub-100ms latency streaming. Watch worlds being built live with frame-perfect synchronization.",
  },
  {
    icon: "\u{1F916}",
    title: "Agent Workspace",
    description:
      "AI agents as first-class collaborators. They observe, create, and interact with spatial content alongside human creators.",
  },
  {
    icon: "\u{1F52E}",
    title: "Liquid Glass Renderer",
    description:
      "A translucent UI system with chromatic aberration, refraction, and temporal distortion. Every surface breathes with depth.",
  },
  {
    icon: "\u{1F50A}",
    title: "Spatial Audio",
    description:
      "Positional audio anchored to 3D objects. Sound moves with the scene — walk through a world and hear it from every angle.",
  },
  {
    icon: "\u{26A1}",
    title: "Edge Deployment",
    description:
      "Run compositions on edge nodes with k3s + WASM. Low-latency rendering close to the viewer, anywhere in the world.",
  },
];

const labStats = [
  { value: "6", label: "Active Experiments" },
  { value: "<50ms", label: "Render Latency" },
  { value: "3D", label: "Native Format" },
];

const recentExperiments = [
  { name: "Garden Capture 001", author: "capture-lab", gradient: "from-green-500/20 to-emerald-500/20" },
  { name: "MoQ Relay Test", author: "streaming-team", gradient: "from-blue-500/20 to-cyan-500/20" },
  { name: "Glass Material R&D", author: "design-lab", gradient: "from-purple-500/20 to-pink-500/20" },
  { name: "Agent Collab v0.2", author: "ai-team", gradient: "from-orange-500/20 to-amber-500/20" },
  { name: "Splat Compression", author: "capture-lab", gradient: "from-violet-500/20 to-fuchsia-500/20" },
  { name: "Audio Spatializer", author: "audio-team", gradient: "from-red-500/20 to-rose-500/20" },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export const LabPage = () => (
  <GlassPage>
    <GlassHero
      title="The Lab"
      subtitle="Experimental features and cutting-edge technology demos from the Infinite Spaces platform. Everything here is in active development."
    >
      <Link
        to="/explore"
        className="rounded-full bg-white/10 px-8 py-3 text-sm font-medium text-white backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors"
      >
        Explore the Platform
      </Link>
      <Link
        to="/waitlist"
        className="rounded-full bg-blue-500/80 px-8 py-3 text-sm font-medium text-white hover:bg-blue-500 transition-colors"
      >
        Get Early Access
      </Link>
    </GlassHero>

    <GlassSection
      title="Technology Demos"
      subtitle="Active experiments pushing the boundaries of spatial computing."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {techDemos.map((demo) => (
          <GlassCard
            key={demo.title}
            icon={demo.icon}
            title={demo.title}
            description={demo.description}
          />
        ))}
      </div>
    </GlassSection>

    <GlassSection maxWidth="4xl">
      <StatGrid stats={labStats} />
    </GlassSection>

    <GlassSection title="Recent Experiments">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {recentExperiments.map((exp) => (
          <GalleryCard
            key={exp.name}
            name={exp.name}
            author={exp.author}
            gradient={exp.gradient}
          />
        ))}
      </div>
    </GlassSection>

    <GlassFooter text="Infinite Spaces Lab — Where ideas become worlds." />
    <Footer />
  </GlassPage>
);
