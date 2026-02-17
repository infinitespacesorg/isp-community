import { useJobs } from "@/hooks/useData";
import { Footer } from "@/sections/Footer";

export const JobsPage = () => {
  const { data: jobs, isPending, error } = useJobs();

  return (
    <div className="box-border caret-transparent flex flex-col min-h-screen">
      <main className="box-border caret-transparent basis-[0%] grow">
        <section className="box-border caret-transparent mb-[84px] mx-3 md:mb-40 md:mx-9">
          <div className="box-border caret-transparent mt-14 md:mt-20">
            <h1 className="text-4xl font-black box-border caret-transparent tracking-[-0.36px] leading-[35.28px] mb-10 md:text-[44.8px] md:tracking-[-0.48px] md:leading-[43.904px]">
              Jobs
            </h1>

            {isPending && (
              <div className="box-border caret-transparent text-center py-20">
                <span className="text-sm font-aeonik-mono uppercase">Loading jobs...</span>
              </div>
            )}

            {error && (
              <div className="box-border caret-transparent text-center py-20">
                <span className="text-sm font-aeonik-mono uppercase text-red-600">
                  Error loading jobs
                </span>
              </div>
            )}

            {!isPending && !error && jobs && jobs.length === 0 && (
              <div className="box-border caret-transparent text-center py-20">
                <span className="text-sm font-aeonik-mono uppercase">No jobs yet</span>
              </div>
            )}

            {!isPending && !error && jobs && jobs.length > 0 && (
              <div className="box-border caret-transparent space-y-6">
                {jobs.map((job) => (
                  <div
                    key={job.id}
                    className="box-border caret-transparent p-6 border border-stone-300 rounded-2xl hover:border-violet-600 transition-colors"
                  >
                    <div className="box-border caret-transparent flex flex-wrap gap-4 md:flex-nowrap md:justify-between">
                      <div className="box-border caret-transparent flex-1">
                        <h3 className="text-2xl font-extrabold box-border caret-transparent leading-6 mb-2 md:text-[32px] md:leading-8">
                          {job.title}
                        </h3>
                        <div className="text-neutral-500 text-sm box-border caret-transparent mb-4 leading-[21px]">
                          {job.company} • {job.location}
                        </div>
                        {job.description && (
                          <p className="text-base box-border caret-transparent leading-[24px] mb-4">
                            {job.description}
                          </p>
                        )}
                        <div className="box-border caret-transparent flex flex-wrap gap-2">
                          <div className="text-neutral-950 text-xs items-center bg-transparent box-border caret-transparent gap-x-1.5 inline-flex justify-center leading-[18px] gap-y-1.5 uppercase border border-stone-300 px-3 py-1 rounded-[14px] border-solid">
                            {job.type}
                          </div>
                          {job.salary && (
                            <div className="text-neutral-950 text-xs items-center bg-transparent box-border caret-transparent gap-x-1.5 inline-flex justify-center leading-[18px] gap-y-1.5 uppercase border border-stone-300 px-3 py-1 rounded-[14px] border-solid">
                              {job.salary}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="box-border caret-transparent flex items-start">
                        <button className="text-white text-sm items-center bg-neutral-950 box-border caret-transparent gap-x-1.5 flex h-[42px] justify-center leading-[14px] gap-y-1.5 uppercase px-6 rounded-lg font-aeonik-mono hover:bg-violet-600 cursor-pointer">
                          Apply
                        </button>
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
