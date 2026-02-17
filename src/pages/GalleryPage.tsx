import { useGalleryProjects } from "@/hooks/useData";
import { Footer } from "@/sections/Footer";

export const GalleryPage = () => {
  const { data: projects, isPending, error } = useGalleryProjects();

  return (
    <div className="box-border caret-transparent flex flex-col min-h-screen">
      <main className="box-border caret-transparent basis-[0%] grow">
        <section className="box-border caret-transparent mb-[84px] mx-3 md:mb-40 md:mx-9">
          <div className="box-border caret-transparent mt-14 md:mt-20">
            <h1 className="text-4xl font-black box-border caret-transparent tracking-[-0.36px] leading-[35.28px] mb-10 md:text-[44.8px] md:tracking-[-0.48px] md:leading-[43.904px]">
              Gallery
            </h1>

            {isPending && (
              <div className="box-border caret-transparent text-center py-20">
                <span className="text-sm font-aeonik-mono uppercase">Loading projects...</span>
              </div>
            )}

            {error && (
              <div className="box-border caret-transparent text-center py-20">
                <span className="text-sm font-aeonik-mono uppercase text-red-600">
                  Error loading projects
                </span>
              </div>
            )}

            {!isPending && !error && projects && projects.length === 0 && (
              <div className="box-border caret-transparent text-center py-20">
                <span className="text-sm font-aeonik-mono uppercase">No projects yet</span>
              </div>
            )}

            {!isPending && !error && projects && projects.length > 0 && (
              <div className="box-border caret-transparent grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    className="box-border caret-transparent group cursor-pointer"
                  >
                    <div className="relative aspect-video box-border caret-transparent w-full overflow-hidden rounded-2xl mb-4">
                      {project.videoSrc ? (
                        <video
                          src={project.videoSrc}
                          autoPlay
                          playsInline
                          muted
                          loop
                          className="absolute box-border caret-transparent h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <img
                          src={project.imageSrc}
                          alt={project.title}
                          className="absolute box-border caret-transparent h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      )}
                    </div>
                    <div className="box-border caret-transparent">
                      <div className="text-neutral-950 text-xs items-center bg-transparent box-border caret-transparent gap-x-1.5 inline-flex justify-center leading-[18px] gap-y-1.5 uppercase border border-stone-300 px-3 py-1 rounded-[14px] border-solid mb-2">
                        {index % 2 === 0 ? "project" : "experiment"}
                      </div>
                      <h3 className="text-2xl font-extrabold box-border caret-transparent leading-6 md:text-[32px] md:leading-8">
                        {project.title}
                      </h3>
                      {project.description && (
                        <p className="text-neutral-500 text-sm box-border caret-transparent mt-2 leading-[21px]">
                          {project.description}
                        </p>
                      )}
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
