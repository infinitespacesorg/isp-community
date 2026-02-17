import { useArticles } from "@/hooks/useData";
import { ArticleCard } from "@/sections/ArticlesSection/components/ArticleCard";

export const ArticlesCarousel = () => {
  const { data: articles, isPending, error } = useArticles({ limit: 10 });

  if (isPending) {
    return (
      <div className="relative box-border caret-transparent overflow-x-hidden overflow-y-auto w-screen -ml-3 md:-ml-9">
        <div className="box-border caret-transparent px-3 py-8 text-center md:px-9">
          <span className="text-sm font-aeonik-mono uppercase">Loading articles...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative box-border caret-transparent overflow-x-hidden overflow-y-auto w-screen -ml-3 md:-ml-9">
        <div className="box-border caret-transparent px-3 py-8 text-center md:px-9">
          <span className="text-sm font-aeonik-mono uppercase text-red-600">
            Error loading articles
          </span>
        </div>
      </div>
    );
  }

  if (!articles || articles.length === 0) {
    return (
      <div className="relative box-border caret-transparent overflow-x-hidden overflow-y-auto w-screen -ml-3 md:-ml-9">
        <div className="box-border caret-transparent px-3 py-8 text-center md:px-9">
          <span className="text-sm font-aeonik-mono uppercase">No articles yet</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative box-border caret-transparent overflow-x-hidden overflow-y-auto w-screen -ml-3 md:-ml-9">
      <ul className="box-border caret-transparent inline-flex list-[''] text-nowrap w-screen overflow-auto px-3 scroll-px-3 scroll-py-0 md:snap-none md:px-9 md:scroll-p-[auto]">
        {articles.map((article, index) => (
          <ArticleCard
            key={article.id}
            videoSrc={article.videoSrc}
            imageSrc={article.imageSrc}
            imageAlt={article.title}
            imageSizes="33.333333333333vw"
            href={`#/articles/${article.id}`}
            title={article.title}
            tags={article.tags ? article.tags.split(",").map((t) => t.trim()) : []}
            date={new Date(article.date).toLocaleDateString("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            })}
            readTime={article.readTime.toString()}
            variant={index < articles.length - 1 ? "mr-4 md:mr-6" : ""}
          />
        ))}
      </ul>
    </div>
  );
};
