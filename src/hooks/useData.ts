// Simple data hooks replacing @animaapp/playground-react-sdk
// Will be replaced with Supabase client queries (ADR-001)

import { useState } from "react";
import {
  socialPosts,
  galleryProjects,
  userProfiles,
  articles,
  jobs,
  pricingPlans,
  type SocialPost,
  type GalleryProject,
  type UserProfile,
  type Article,
  type Job,
  type PricingPlan,
} from "@/data/mock-data";

type QueryResult<T> = {
  data: T[] | undefined;
  isPending: boolean;
  error: Error | null;
};

export function useSocialPosts(): QueryResult<SocialPost> {
  return { data: socialPosts, isPending: false, error: null };
}

export function useGalleryProjects(): QueryResult<GalleryProject> {
  return { data: galleryProjects, isPending: false, error: null };
}

export function useUserProfiles(options?: { limit?: number }): QueryResult<UserProfile> {
  const data = options?.limit ? userProfiles.slice(0, options.limit) : userProfiles;
  return { data, isPending: false, error: null };
}

export function useArticles(options?: { limit?: number }): QueryResult<Article> {
  const data = options?.limit ? articles.slice(0, options.limit) : articles;
  return { data, isPending: false, error: null };
}

export function useJobs(): QueryResult<Job> {
  return { data: jobs, isPending: false, error: null };
}

export function usePricingPlans(): QueryResult<PricingPlan> {
  return { data: pricingPlans, isPending: false, error: null };
}

export function useCreatePost() {
  const [isPending, setIsPending] = useState(false);

  const create = async (_data: { content: string }) => {
    setIsPending(true);
    // Placeholder — will connect to Supabase
    await new Promise((resolve) => setTimeout(resolve, 500));
    setIsPending(false);
  };

  return { create, isPending };
}

export function useNewsletterSubscribe() {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const create = async (_data: { email: string }) => {
    setIsPending(true);
    setError(null);
    // Placeholder — will connect to Supabase or Cloudflare Worker
    await new Promise((resolve) => setTimeout(resolve, 500));
    setIsPending(false);
  };

  return { create, isPending, error };
}
