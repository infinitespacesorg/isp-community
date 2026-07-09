import { useParams, Link, Navigate } from "react-router-dom";
import { Footer } from "@/sections/Footer";
import { getPost, formatDate } from "@/keystatic/posts";
import { renderPostBody } from "@/keystatic/render";

export const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPost(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="box-border flex flex-col min-h-screen">
      <main className="basis-[0%] grow">
        <article className="mx-auto max-w-3xl px-6 mb-[84px] md:mb-40">
          <div className="pt-28 md:pt-32">
            <Link
              to="/blog"
              className="mb-8 inline-block text-xs font-aeonik-mono uppercase tracking-[0.18px] text-air hover:underline"
            >
              &larr; Back to blog
            </Link>

            <div className="flex items-center gap-3 text-xs font-aeonik-mono uppercase tracking-[0.18px] text-neutral-500">
              {post.tags.length > 0 && (
                <>
                  <span>{post.tags.join(", ")}</span>
                  <span>·</span>
                </>
              )}
              <span>{formatDate(post.publishedDate)}</span>
              {post.author && (
                <>
                  <span>·</span>
                  <span>{post.author}</span>
                </>
              )}
            </div>

            <h1 className="mt-3 max-w-3xl text-4xl font-black tracking-[-0.36px] leading-tight md:text-[44.8px] md:tracking-[-0.48px]">
              {post.title}
            </h1>

            {post.summary && (
              <p className="mt-4 max-w-2xl text-xl text-neutral-500">{post.summary}</p>
            )}

            {post.coverImage && (
              <img
                src={post.coverImage}
                alt=""
                className="mt-8 w-full rounded-lg"
                loading="lazy"
              />
            )}

            <div className="mt-10 max-w-3xl">{renderPostBody(post.content)}</div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};
