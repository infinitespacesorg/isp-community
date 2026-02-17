import { useArticles } from "@/hooks/useData";
import { Footer } from "@/sections/Footer";

export const ArticlesPage = () => {
  const { data: articles, isPending, error } = useArticles();

  return (
    <div className="box-border caret-transparent flex flex-col min-h-screen">
      <main className="box-border caret-transparent basis-[0%] grow">
        <section className="box-border caret-transparent mb-[84px] mx-3 md:mb-40 md:mx-9">
          <div className="box-border caret-transparent mt-14 md:mt-20">
            <h1 className="text-4xl font-black box-border caret-transparent tracking-[-0.36px] leading-[35.28px] mb-10 md:text-[44.8px] md:tracking-[-0.48px] md:leading-[43.904px]">
              Articles
            </h1>

            {isPending && (
              <div className="box-border caret-transparent text-center py-20">
                <span className="text-sm font-aeonik-mono uppercase">Loading articles...</span>
              </div>
            )}

            {error && (
              <div className="box-border caret-transparent text-center py-20">
                <span className="text-sm font-aeonik-mono uppercase text-red-600">
                  Error loading articles
                </span>
              </div>
            )}

            {!isPending && !error && articles && articles.length === 0 && (
              <div className="box-border caret-transparent text-center py-20">
                <span className="text-sm font-aeonik-mono uppercase">No articles yet</span>
              </div>
            )}

            {!isPending && !error && articles && articles.length > 0 && (
              <div className="box-border caret-transparent grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {articles.map((article) => (
                  <div key={article.id} className="box-border caret-transparent">
                    <div className="relative content-between box-border caret-transparent flex flex-wrap w-full">
                      <div className="relative text-sm box-border caret-transparent flex justify-between leading-[21px] w-full md:text-lg md:leading-[27px]">
                        <div className="relative text-sm aspect-[16_/_10] box-border caret-transparent leading-[21px] w-full md:text-lg md:leading-[27px]">
                          <div className="absolute text-sm box-border caret-transparent h-full leading-[21px] w-full z-[1] overflow-hidden rounded-2xl right-0 top-0 md:text-lg md:leading-[27px]">
                            {article.videoSrc ? (
                              <video
                                src={article.videoSrc}
                                preload="metadata"
                                playsInline
                                muted
                                loop
                                className="absolute text-sm box-border caret-transparent h-full leading-[21px] max-w-full object-cover w-full z-[1] md:text-lg md:leading-[27px]"
                              />
                            ) : (
                              <img
                                src={article.imageSrc}
                                alt={article.title}
                                className="absolute text-sm box-border caret-transparent h-full leading-[21px] max-w-full object-cover w-full z-[1] left-0 top-0 md:text-lg md:leading-[27px]"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="box-border caret-transparent flex flex-wrap w-full mt-2">
                        <h3 className="text-2xl font-extrabold box-border caret-transparent leading-[26.4px] w-full mt-px md:text-[32px] md:leading-[35.2px]">
                          <span className="text-base font-semibold box-border caret-transparent flow-root leading-[19.2px] text-ellipsis overflow-hidden md:text-[23.04px] md:font-normal md:leading-[27.648px]">
                            {article.title}
                          </span>
                        </h3>
                        <ul className="relative box-border caret-transparent gap-x-1 flex gap-y-1 w-full overflow-hidden mt-1 pl-0">
                          {article.tags &&
                            article.tags.split(",").map((tag, index) => (
                              <li
                                key={index}
                                className="text-neutral-500 text-[10px] items-center box-border caret-transparent gap-x-1.5 flex shrink-0 justify-center leading-[15px] gap-y-1.5 uppercase border border-stone-300 overflow-hidden mt-1 px-3 py-1 rounded-[14px] border-solid"
                              >
                                {tag.trim()}
                              </li>
                            ))}
                        </ul>
                        <div className="text-neutral-500 text-xs box-border caret-transparent tracking-[0.21px] leading-[18px] w-full mt-3">
                          {new Date(article.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "2-digit",
                            year: "numeric",
                          })}{" "}
                          — {article.readTime} min read
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
