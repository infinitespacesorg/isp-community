import { useSocialPosts, useCreatePost } from "@/hooks/useData";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import { Footer } from "@/sections/Footer";

export const SocialPage = () => {
  const { data: posts, isPending, error } = useSocialPosts();
  const { create, isPending: isCreating } = useCreatePost();
  const { user, isAnonymous } = useAuth();
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    try {
      await create({ content: content.trim() });
      setContent("");
    } catch (err) {
      console.error("Failed to create post:", err);
    }
  };

  return (
    <div className="box-border caret-transparent flex flex-col min-h-screen">
      <main className="box-border caret-transparent basis-[0%] grow">
        <section className="box-border caret-transparent mb-[84px] mx-3 md:mb-40 md:mx-9">
          <div className="box-border caret-transparent mt-14 md:mt-20">
            <h1 className="text-4xl font-black box-border caret-transparent tracking-[-0.36px] leading-[35.28px] mb-10 md:text-[44.8px] md:tracking-[-0.48px] md:leading-[43.904px]">
              Social Feed
            </h1>

            {!isAnonymous && (
              <div className="box-border caret-transparent mb-14 p-6 border border-stone-300 rounded-2xl md:mb-20">
                <form onSubmit={handleSubmit}>
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="What's on your mind?"
                    disabled={isCreating}
                    className="text-neutral-950 text-lg box-border caret-transparent w-full min-h-[120px] p-4 border border-stone-300 rounded-lg resize-none font-aeonik focus:outline-none focus:border-violet-600"
                  />
                  <div className="box-border caret-transparent flex justify-end mt-4">
                    <button
                      type="submit"
                      disabled={isCreating || !content.trim()}
                      className="text-white text-sm items-center bg-neutral-950 box-border caret-transparent gap-x-1.5 flex h-[42px] justify-center leading-[14px] gap-y-1.5 uppercase px-6 rounded-lg font-aeonik_mono hover:bg-violet-600 disabled:opacity-50 cursor-pointer"
                    >
                      {isCreating ? "Posting..." : "Post"}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {isPending && (
              <div className="box-border caret-transparent text-center py-20">
                <span className="text-sm font-aeonik_mono uppercase">Loading posts...</span>
              </div>
            )}

            {error && (
              <div className="box-border caret-transparent text-center py-20">
                <span className="text-sm font-aeonik_mono uppercase text-red-600">
                  Error loading posts
                </span>
              </div>
            )}

            {!isPending && !error && posts && posts.length === 0 && (
              <div className="box-border caret-transparent text-center py-20">
                <span className="text-sm font-aeonik_mono uppercase">No posts yet</span>
              </div>
            )}

            {!isPending && !error && posts && posts.length > 0 && (
              <div className="box-border caret-transparent space-y-6">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="box-border caret-transparent p-6 border border-stone-300 rounded-2xl hover:border-violet-600 transition-colors"
                  >
                    <div className="box-border caret-transparent flex items-start gap-4">
                      <div className="box-border caret-transparent flex-1">
                        <p className="text-lg box-border caret-transparent leading-[27px] whitespace-pre-wrap">
                          {post.content}
                        </p>
                        <div className="text-neutral-500 text-xs box-border caret-transparent mt-4 uppercase font-aeonik_mono">
                          {new Date(post.createdAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "2-digit",
                            year: "numeric",
                          })}
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
