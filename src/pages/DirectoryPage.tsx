import { MapPin } from "lucide-react";
import { useUserProfiles } from "@/hooks/useData";
import { Footer } from "@/sections/Footer";

export const DirectoryPage = () => {
  const { data: profiles, isPending, error } = useUserProfiles();

  return (
    <div className="box-border caret-transparent flex flex-col min-h-screen">
      <main className="box-border caret-transparent basis-[0%] grow">
        <section className="box-border caret-transparent mb-[84px] mx-3 md:mb-40 md:mx-9">
          <div className="box-border caret-transparent mt-14 md:mt-20">
            <h1 className="text-4xl font-black box-border caret-transparent tracking-[-0.36px] leading-[35.28px] mb-10 md:text-[44.8px] md:tracking-[-0.48px] md:leading-[43.904px]">
              Directory
            </h1>

            {isPending && (
              <div className="box-border caret-transparent text-center py-20">
                <span className="text-sm font-aeonik_mono uppercase">Loading profiles...</span>
              </div>
            )}

            {error && (
              <div className="box-border caret-transparent text-center py-20">
                <span className="text-sm font-aeonik_mono uppercase text-red-600">
                  Error loading profiles
                </span>
              </div>
            )}

            {!isPending && !error && profiles && profiles.length === 0 && (
              <div className="box-border caret-transparent text-center py-20">
                <span className="text-sm font-aeonik_mono uppercase">No profiles yet</span>
              </div>
            )}

            {!isPending && !error && profiles && profiles.length > 0 && (
              <div className="box-border caret-transparent grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-6">
                {profiles.map((profile, index) => (
                  <div key={profile.id} className="box-border caret-transparent">
                    <div className="relative content-between box-border caret-transparent flex flex-wrap w-full">
                      <div className="relative text-sm box-border caret-transparent flex justify-between leading-[21px] w-full md:text-lg md:leading-[27px]">
                        <div className="relative text-sm aspect-[3_/_4] box-border caret-transparent leading-[21px] w-full md:text-lg md:leading-[27px]">
                          <div className="absolute text-sm box-border caret-transparent h-[96%] leading-[21px] w-[96%] z-[1] overflow-hidden rounded-[2%] right-0 top-0 md:text-lg md:leading-[27px]">
                            <img
                              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${profile.username}`}
                              alt={`${profile.username}'s avatar`}
                              className="absolute text-sm box-border caret-transparent h-full leading-[21px] max-w-full object-cover w-full z-[1] left-0 top-0 md:text-lg md:leading-[27px]"
                            />
                          </div>
                          <div
                            className={`absolute text-sm box-border caret-transparent h-full leading-[21px] w-full right-0 top-0 md:text-lg md:leading-[27px] ${
                              index % 2 === 0 ? "bg-neutral-950" : "bg-violet-600"
                            }`}
                          ></div>
                        </div>
                      </div>
                      <div className="box-border caret-transparent flex flex-wrap w-full mt-2">
                        <div className="items-center box-border caret-transparent flex">
                          <div className="box-border caret-transparent ml-1.5">
                            <div className="box-border caret-transparent">
                              <h3 className="text-2xl font-extrabold box-border caret-transparent flex leading-6 md:text-[32px] md:leading-8">
                                <span className="text-base font-semibold box-border caret-transparent flow-root leading-[19.2px] text-ellipsis overflow-hidden md:text-[23.04px] md:font-normal md:leading-[27.648px]">
                                  {profile.username}
                                </span>
                              </h3>
                            </div>
                            <div className="text-neutral-500 text-xs items-center box-border caret-transparent flex leading-3 mt-0.5">
                              <div className="box-border caret-transparent tracking-[0.21px] leading-[18px]">
                                @{profile.username}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-neutral-500 text-xs items-center box-border caret-transparent flex tracking-[0.21px] leading-[18px] w-full ml-0.5 mt-2">
                          <span className="box-border caret-transparent block mr-[5px]">
                            <MapPin className="h-5 w-5 inline text-neutral-500" />
                          </span>
                          {profile.location}
                        </div>
                      </div>
                    </div>
                  </div>
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
