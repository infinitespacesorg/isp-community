import { Link } from "react-router-dom";
import { Footer } from "@/sections/Footer";
import { posts, formatDate } from "@/keystatic/posts";

export const BlogPage = () => {
  return (
    <div className="box-border caret-transparent flex flex-col min-h-screen">
      <main className="box-border caret-transparent basis-[0%] grow">
        <section className="box-border caret-transparent mb-[84px] mx-3 md:mb-40 md:mx-9">
          <div className="pt-28 md:pt-32">
            <h1 className="text-3xl font-black tracking-[-0.36px] leading-[29.4px] mb-3 md:text-4xl md:tracking-[-0.48px] md:leading-[35.28px]">
              Blog
            </h1>
            <p className="text-neutral-500 font-aeonik-mono text-sm uppercase tracking-[0.18px] mb-10">
              Notes on spatial computing, splats &amp; the community
            </p>

            {posts.length === 0 && (
              <div className="py-20 text-center">
                <span className="text-sm font-aeonik-mono uppercase">No posts yet</span>
              </div>
            )}

            {posts.length > 0 && (
              <div className="divide-y divide-neutral-200 border-y border-neutral-200">
                {posts.map((p) => (
                  <article key={p.slug} className="flex flex-col gap-1 py-6">
                    <div className="flex items-center gap-3 text-xs font-aeonik-mono uppercase tracking-[0.18px] text-neutral-500">
                      {p.tags.length > 0 && (
                        <>
                          <span>{p.tags.join(", ")}</span>
                          <span>·</span>
                        </>
                      )}
                      <span>{formatDate(p.publishedDate)}</span>
                      {p.author && (
                        <>
                          <span>·</span>
                          <span>{p.author}</span>
                        </>
                      )}
                    </div>
                    <Link to={`/blog/${p.slug}`}>
                      <h2 className="text-2xl font-semibold leading-tight hover:text-neutral-600 md:text-3xl">
                        {p.title}
                      </h2>
                    </Link>
                    {p.summary && (
                      <p className="mt-1 max-w-2xl text-neutral-500">{p.summary}</p>
                    )}
                  </article>
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
