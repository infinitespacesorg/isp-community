// Static mock data — will be replaced with Supabase queries (ADR-001)

export type SocialPost = {
  id: string;
  content: string;
  createdAt: string;
};

export type GalleryProject = {
  id: string;
  title: string;
  description?: string;
  videoSrc?: string;
  imageSrc?: string;
  createdAt: string;
};

export type UserProfile = {
  id: string;
  username: string;
  location: string;
  createdAt: string;
};

export type Article = {
  id: string;
  title: string;
  tags: string;
  date: string;
  readTime: number;
  videoSrc?: string;
  imageSrc?: string;
};

export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  description?: string;
  type: string;
  salary?: string;
  createdAt: string;
};

export type PricingPlan = {
  id: string;
  name: string;
  price: number;
  description?: string;
  features?: string;
  featured?: boolean;
};

export type NewsletterSubscription = {
  id: string;
  email: string;
};

export const socialPosts: SocialPost[] = [
  {
    id: "1",
    content: "Just launched our new community website! Excited to connect with everyone here.",
    createdAt: "2026-02-10T12:00:00Z",
  },
  {
    id: "2",
    content: "Working on some incredible spatial computing projects. The future of collaboration is here.",
    createdAt: "2026-02-09T15:30:00Z",
  },
  {
    id: "3",
    content: "Love seeing the creative work in the gallery. Keep sharing your projects!",
    createdAt: "2026-02-08T09:15:00Z",
  },
];

export const galleryProjects: GalleryProject[] = [
  {
    id: "1",
    title: "Spatial Canvas",
    description: "A real-time collaborative 3D workspace built with WebGPU.",
    imageSrc: "https://placehold.co/800x500/1a1a1a/ffffff?text=Spatial+Canvas",
    createdAt: "2026-02-10T10:00:00Z",
  },
  {
    id: "2",
    title: "Media Fabric Demo",
    description: "Live video processing pipeline with AI inference.",
    imageSrc: "https://placehold.co/800x500/4c1d95/ffffff?text=Media+Fabric",
    createdAt: "2026-02-08T14:00:00Z",
  },
  {
    id: "3",
    title: "Agent Playground",
    description: "Interactive sandbox for testing AI agent workflows.",
    imageSrc: "https://placehold.co/800x500/0a0a0a/ffffff?text=Agent+Playground",
    createdAt: "2026-02-06T11:00:00Z",
  },
  {
    id: "4",
    title: "Gaussian Splat Viewer",
    description: "Web-based 3D Gaussian Splatting visualization tool.",
    imageSrc: "https://placehold.co/800x500/1e1b4b/ffffff?text=Splat+Viewer",
    createdAt: "2026-02-04T08:00:00Z",
  },
  {
    id: "5",
    title: "Federated Identity",
    description: "Cross-platform identity resolution with DID support.",
    imageSrc: "https://placehold.co/800x500/292524/ffffff?text=Federated+ID",
    createdAt: "2026-02-02T16:00:00Z",
  },
  {
    id: "6",
    title: "World Model Editor",
    description: "Visual editor for semantic world models.",
    imageSrc: "https://placehold.co/800x500/3b0764/ffffff?text=World+Editor",
    createdAt: "2026-01-30T12:00:00Z",
  },
];

export const userProfiles: UserProfile[] = [
  { id: "1", username: "alex", location: "San Francisco, CA", createdAt: "2026-01-15T00:00:00Z" },
  { id: "2", username: "jordan", location: "London, UK", createdAt: "2026-01-16T00:00:00Z" },
  { id: "3", username: "sam", location: "Berlin, DE", createdAt: "2026-01-17T00:00:00Z" },
  { id: "4", username: "river", location: "Tokyo, JP", createdAt: "2026-01-18T00:00:00Z" },
  { id: "5", username: "casey", location: "Melbourne, AU", createdAt: "2026-01-19T00:00:00Z" },
  { id: "6", username: "taylor", location: "Toronto, CA", createdAt: "2026-01-20T00:00:00Z" },
  { id: "7", username: "morgan", location: "Amsterdam, NL", createdAt: "2026-01-21T00:00:00Z" },
  { id: "8", username: "riley", location: "Seoul, KR", createdAt: "2026-01-22T00:00:00Z" },
];

export const articles: Article[] = [
  {
    id: "1",
    title: "Building Spatial Collaboration Tools",
    tags: "spatial,webgpu,collaboration",
    date: "2026-02-10T00:00:00Z",
    readTime: 8,
    imageSrc: "https://placehold.co/800x500/1a1a1a/ffffff?text=Spatial+Collab",
  },
  {
    id: "2",
    title: "The Future of Agent-First Architecture",
    tags: "agents,architecture,ai",
    date: "2026-02-07T00:00:00Z",
    readTime: 12,
    imageSrc: "https://placehold.co/800x500/4c1d95/ffffff?text=Agent+First",
  },
  {
    id: "3",
    title: "Media Over QUIC: Real-Time Video at Scale",
    tags: "video,moq,streaming",
    date: "2026-02-04T00:00:00Z",
    readTime: 10,
    imageSrc: "https://placehold.co/800x500/0a0a0a/ffffff?text=MoQ+Video",
  },
  {
    id: "4",
    title: "Federated Social Networking with AT Protocol",
    tags: "social,atproto,decentralized",
    date: "2026-02-01T00:00:00Z",
    readTime: 6,
    imageSrc: "https://placehold.co/800x500/292524/ffffff?text=AT+Protocol",
  },
];

export const jobs: Job[] = [
  {
    id: "1",
    title: "Spatial Computing Engineer",
    company: "Infinite Spaces",
    location: "Remote",
    description: "Build real-time 3D collaboration tools using WebGPU and Rust.",
    type: "Full-time",
    salary: "$150k - $200k",
    createdAt: "2026-02-10T00:00:00Z",
  },
  {
    id: "2",
    title: "AI Agent Developer",
    company: "Infinite Spaces",
    location: "Remote",
    description: "Design and implement autonomous agent workflows for the Fabric platform.",
    type: "Full-time",
    salary: "$130k - $180k",
    createdAt: "2026-02-08T00:00:00Z",
  },
  {
    id: "3",
    title: "Community Manager",
    company: "Infinite Spaces",
    location: "Remote",
    description: "Grow and nurture the Infinite Spaces developer community.",
    type: "Part-time",
    createdAt: "2026-02-06T00:00:00Z",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "1",
    name: "Free",
    price: 0,
    description: "For hobbyists and exploration.",
    features: "1 Space,3 Playboxes,Community access,Static deployments",
  },
  {
    id: "2",
    name: "Starter",
    price: 15,
    description: "For creators getting started.",
    features: "3 Spaces,10 Playboxes,Sandbox deployments,Agent scheduling,Priority support",
    featured: true,
  },
  {
    id: "3",
    name: "Growth",
    price: 49,
    description: "For teams and production workloads.",
    features: "Unlimited Spaces,Unlimited Playboxes,Production deployments,GPU compute,Custom domains,SSO",
  },
];
