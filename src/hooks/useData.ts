// Data hooks — Supabase queries with mock data fallback
// Replaces @animaapp/playground-react-sdk (Phase 2, ADR-001)

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import {
  socialPosts as mockSocialPosts,
  galleryProjects as mockGalleryProjects,
  userProfiles as mockUserProfiles,
  articles as mockArticles,
  jobs as mockJobs,
  pricingPlans as mockPricingPlans,
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

// Generic hook for Supabase select queries with mock fallback
function useSupabaseQuery<T>(
  table: string,
  mockData: T[],
  mapRow: (row: Record<string, unknown>) => T,
  options?: { limit?: number; orderBy?: string },
): QueryResult<T> {
  const [data, setData] = useState<T[] | undefined>(undefined);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!supabase) {
      // No Supabase configured — use mock data
      const result = options?.limit ? mockData.slice(0, options.limit) : mockData;
      setData(result);
      setIsPending(false);
      return;
    }

    let cancelled = false;

    const fetchData = async () => {
      setIsPending(true);
      setError(null);

      let query = supabase.from(table).select("*");

      if (options?.orderBy) {
        query = query.order(options.orderBy, { ascending: false });
      }

      if (options?.limit) {
        query = query.limit(options.limit);
      }

      const { data: rows, error: fetchError } = await query;

      if (cancelled) return;

      if (fetchError) {
        setError(new Error(fetchError.message));
        setIsPending(false);
        return;
      }

      setData((rows ?? []).map(mapRow));
      setIsPending(false);
    };

    fetchData();

    return () => {
      cancelled = true;
    };
  }, [table, options?.limit, options?.orderBy]);

  return { data, isPending, error };
}

export function useSocialPosts(): QueryResult<SocialPost> {
  return useSupabaseQuery(
    "community_posts",
    mockSocialPosts,
    (row) => ({
      id: String(row.id),
      content: String(row.content ?? ""),
      createdAt: String(row.created_at ?? ""),
    }),
    { orderBy: "created_at" },
  );
}

export function useGalleryProjects(): QueryResult<GalleryProject> {
  return useSupabaseQuery(
    "community_gallery",
    mockGalleryProjects,
    (row) => ({
      id: String(row.id),
      title: String(row.title ?? ""),
      description: row.description ? String(row.description) : undefined,
      videoSrc: row.video_src ? String(row.video_src) : undefined,
      imageSrc: row.image_src ? String(row.image_src) : undefined,
      createdAt: String(row.created_at ?? ""),
    }),
    { orderBy: "created_at" },
  );
}

export function useUserProfiles(options?: { limit?: number }): QueryResult<UserProfile> {
  return useSupabaseQuery(
    "profiles",
    mockUserProfiles,
    (row) => ({
      id: String(row.id),
      username: String(row.username ?? ""),
      location: String(row.location ?? ""),
      createdAt: String(row.created_at ?? ""),
    }),
    { limit: options?.limit, orderBy: "created_at" },
  );
}

export function useArticles(options?: { limit?: number }): QueryResult<Article> {
  return useSupabaseQuery(
    "community_articles",
    mockArticles,
    (row) => ({
      id: String(row.id),
      title: String(row.title ?? ""),
      tags: String(row.tags ?? ""),
      date: String(row.date ?? ""),
      readTime: Number(row.read_time ?? 0),
      videoSrc: row.video_src ? String(row.video_src) : undefined,
      imageSrc: row.image_src ? String(row.image_src) : undefined,
    }),
    { limit: options?.limit, orderBy: "date" },
  );
}

export function useJobs(): QueryResult<Job> {
  return useSupabaseQuery(
    "community_jobs",
    mockJobs,
    (row) => ({
      id: String(row.id),
      title: String(row.title ?? ""),
      company: String(row.company ?? ""),
      location: String(row.location ?? ""),
      description: row.description ? String(row.description) : undefined,
      type: String(row.type ?? ""),
      salary: row.salary ? String(row.salary) : undefined,
      createdAt: String(row.created_at ?? ""),
    }),
    { orderBy: "created_at" },
  );
}

export function usePricingPlans(): QueryResult<PricingPlan> {
  return useSupabaseQuery(
    "pricing_plans",
    mockPricingPlans,
    (row) => ({
      id: String(row.id),
      name: String(row.name ?? ""),
      price: Number(row.price ?? 0),
      description: row.description ? String(row.description) : undefined,
      features: row.features ? String(row.features) : undefined,
      featured: row.featured === true,
    }),
    { orderBy: "price" },
  );
}

export function useCreatePost() {
  const [isPending, setIsPending] = useState(false);

  const create = async (data: { content: string }) => {
    if (!supabase) {
      // No Supabase — silently no-op
      await new Promise((resolve) => setTimeout(resolve, 500));
      return;
    }

    setIsPending(true);
    const { error } = await supabase.from("community_posts").insert({
      content: data.content,
    });
    setIsPending(false);

    if (error) {
      throw new Error(error.message);
    }
  };

  return { create, isPending };
}

export function useNewsletterSubscribe() {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const create = async (data: { email: string }) => {
    if (!supabase) {
      // No Supabase — silently no-op
      await new Promise((resolve) => setTimeout(resolve, 500));
      return;
    }

    setIsPending(true);
    setError(null);

    const { error: insertError } = await supabase
      .from("newsletter_subscriptions")
      .insert({ email: data.email });

    setIsPending(false);

    if (insertError) {
      setError(new Error(insertError.message));
      throw insertError;
    }
  };

  return { create, isPending, error };
}
