import { useParams, Link, Navigate } from "react-router-dom";
import { MapPin } from "lucide-react";
import { useCommunityProfiles, useStories } from "@/hooks/useData";
import type { CommunityProfileType } from "@/data/mock-data";
import { Footer } from "@/sections/Footer";

const typeLabel: Record<CommunityProfileType, string> = {
  user: "Person",
  community: "Community",
  place: "Place",
};

export const ProfilePage = () => {
  const { handle } = useParams<{ handle: string }>();
  const { data: profiles, isPending } = useCommunityProfiles();
  const { data: allStories } = useStories();

  if (isPending || !profiles) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="text-sm font-aeonik-mono uppercase">Loading...</span>
      </div>
    );
  }

  const profile = profiles.find((p) => p.handle === handle);
  if (!profile) {
    return <Navigate to="/community" replace />;
  }

  const stories = (allStories ?? []).filter(
    (s) => s.profileHandle === profile.handle && s.status === "published",
  );

  return (
    <div className="box-border caret-transparent flex flex-col min-h-screen">
      <main className="box-border caret-transparent basis-[0%] grow">
        <section className="box-border caret-transparent mb-[84px] mx-3 md:mb-40 md:mx-9">
          {/* Profile header */}
          <div className="pt-28 md:pt-32 flex items-center gap-5">
            <div className="h-20 w-20 md:h-28 md:w-28 shrink-0 overflow-hidden rounded-full bg-[#789bde]">
              {profile.avatarUrl && (
                <img
                  src={profile.avatarUrl}
                  alt={profile.displayName}
                  className="h-full w-full object-cover"
                />
              )}
            </div>
            <div>
              <span className="rounded-full bg-neutral-900 px-2 py-0.5 text-[10px] font-aeonik-mono uppercase tracking-[0.18px] text-white">
                {typeLabel[profile.type]}
              </span>
              <h1 className="text-4xl font-black tracking-[-0.36px] leading-tight mt-2 md:text-[44.8px]">
                {profile.displayName}
              </h1>
              <div className="text-neutral-500 text-sm">@{profile.handle}</div>
              {profile.location && (
                <div className="text-neutral-500 text-xs flex items-center mt-1">
                  <MapPin className="h-4 w-4 mr-1" />
                  {profile.location}
                </div>
              )}
            </div>
          </div>

          {profile.bio && (
            <p className="mt-6 max-w-2xl text-lg text-neutral-700">{profile.bio}</p>
          )}

          {/* Stories */}
          <h2 className="mt-14 mb-6 text-sm font-aeonik-mono uppercase tracking-[0.18px] text-neutral-500">
            Stories
          </h2>

          {stories.length === 0 ? (
            <div className="text-sm font-aeonik-mono uppercase text-neutral-400">
              No published stories yet
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
              {stories.map((story) => (
                <Link
                  key={story.id}
                  to={story.path}
                  className="group block overflow-hidden rounded-lg border border-neutral-200"
                >
                  <div className="aspect-video w-full bg-neutral-900 flex items-center justify-center">
                    {story.thumbnailUrl && (
                      <img
                        src={story.thumbnailUrl}
                        alt={story.title}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold leading-tight">{story.title}</h3>
                    {story.description && (
                      <p className="mt-1 text-sm text-neutral-500">{story.description}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};
