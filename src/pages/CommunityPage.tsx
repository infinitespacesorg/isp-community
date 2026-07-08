import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { useCommunityProfiles } from "@/hooks/useData";
import type { CommunityProfileType } from "@/data/mock-data";
import { Footer } from "@/sections/Footer";

const typeLabel: Record<CommunityProfileType, string> = {
  user: "Person",
  community: "Community",
  place: "Place",
};

const typeAccent: Record<CommunityProfileType, string> = {
  user: "bg-neutral-800",
  community: "bg-[#789bde]",
  place: "bg-violet-600",
};

export const CommunityPage = () => {
  const { data: profiles, isPending, error } = useCommunityProfiles();

  return (
    <div className="box-border caret-transparent flex flex-col min-h-screen">
      <main className="box-border caret-transparent basis-[0%] grow">
        <section className="box-border caret-transparent mb-[84px] mx-3 md:mb-40 md:mx-9">
          <div className="box-border caret-transparent pt-28 md:pt-32">
            <h1 className="text-4xl font-black box-border caret-transparent tracking-[-0.36px] leading-[35.28px] mb-3 md:text-[44.8px] md:tracking-[-0.48px] md:leading-[43.904px]">
              Community
            </h1>
            <p className="text-neutral-500 font-aeonik-mono text-sm uppercase tracking-[0.18px] mb-10">
              People, communities &amp; places publishing stories
            </p>

            {isPending && (
              <div className="text-center py-20">
                <span className="text-sm font-aeonik-mono uppercase">Loading profiles...</span>
              </div>
            )}

            {error && (
              <div className="text-center py-20">
                <span className="text-sm font-aeonik-mono uppercase text-red-600">
                  Error loading profiles
                </span>
              </div>
            )}

            {!isPending && !error && profiles && profiles.length === 0 && (
              <div className="text-center py-20">
                <span className="text-sm font-aeonik-mono uppercase">No profiles yet</span>
              </div>
            )}

            {!isPending && !error && profiles && profiles.length > 0 && (
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-6">
                {profiles.map((profile) => (
                  <Link
                    key={profile.id}
                    to={`/p/${profile.handle}`}
                    className="group box-border caret-transparent"
                  >
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2%]">
                      {profile.avatarUrl ? (
                        <img
                          src={profile.avatarUrl}
                          alt={profile.displayName}
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      ) : (
                        <div className={`absolute inset-0 ${typeAccent[profile.type]}`} />
                      )}
                      <span className="absolute left-2 top-2 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-aeonik-mono uppercase tracking-[0.18px] text-white">
                        {typeLabel[profile.type]}
                      </span>
                    </div>
                    <div className="mt-2 ml-0.5">
                      <h3 className="text-base font-semibold leading-tight text-ellipsis overflow-hidden md:text-lg">
                        {profile.displayName}
                      </h3>
                      <div className="text-neutral-500 text-xs tracking-[0.21px] leading-[18px]">
                        @{profile.handle}
                      </div>
                      {profile.location && (
                        <div className="text-neutral-500 text-xs items-center flex tracking-[0.21px] leading-[18px] mt-1">
                          <MapPin className="h-4 w-4 inline mr-1 text-neutral-500" />
                          {profile.location}
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
