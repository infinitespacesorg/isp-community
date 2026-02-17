import { useUserProfiles } from "@/hooks/useData";
import { DirectoryCard } from "@/sections/DirectorySection/components/DirectoryCard";

export const DirectoryCarousel = () => {
  const { data: profiles, isPending, error } = useUserProfiles({ limit: 10 });

  if (isPending) {
    return (
      <div className="relative box-border caret-transparent overflow-x-hidden overflow-y-auto w-screen -ml-3 md:-ml-9">
        <div className="box-border caret-transparent px-3 py-8 text-center md:px-9">
          <span className="text-sm font-aeonik-mono uppercase">Loading profiles...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative box-border caret-transparent overflow-x-hidden overflow-y-auto w-screen -ml-3 md:-ml-9">
        <div className="box-border caret-transparent px-3 py-8 text-center md:px-9">
          <span className="text-sm font-aeonik-mono uppercase text-red-600">
            Error loading profiles
          </span>
        </div>
      </div>
    );
  }

  if (!profiles || profiles.length === 0) {
    return (
      <div className="relative box-border caret-transparent overflow-x-hidden overflow-y-auto w-screen -ml-3 md:-ml-9">
        <div className="box-border caret-transparent px-3 py-8 text-center md:px-9">
          <span className="text-sm font-aeonik-mono uppercase">No profiles yet</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative box-border caret-transparent overflow-x-hidden overflow-y-auto w-screen -ml-3 md:-ml-9">
      <ul className="box-border caret-transparent inline-flex list-[''] text-nowrap w-screen overflow-auto px-3 scroll-px-3 scroll-py-0 md:snap-none md:px-9 md:scroll-p-[auto]">
        {profiles.map((profile, index) => (
          <DirectoryCard
            key={profile.id}
            avatarSrc={`https://api.dicebear.com/7.x/avataaars/svg?seed=${profile.username}`}
            avatarAlt={`${profile.username}'s avatar photo`}
            avatarClassName="aspect-[auto_1800_/_1800]"
            badgeClassName={index % 2 === 0 ? "bg-neutral-950" : "bg-violet-600"}
            name={profile.username}
            profileUrl={`#/u/${profile.username}`}
            username={profile.username}
            location={profile.location}
            listItemClassName={index < profiles.length - 1 ? "mr-4 md:mr-6" : ""}
          />
        ))}
      </ul>
    </div>
  );
};
