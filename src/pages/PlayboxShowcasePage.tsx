import { Link } from "react-router-dom";
import { Footer } from "@/sections/Footer";
import { PlayboxSubNav } from "@/sections/PlayboxSubNav";
import {
  ProductPage,
  ProductHero,
  ProductSection,
  HoverCard,
  ProductCta,
} from "@/sections/product";
import { useStories } from "@/hooks/useData";

export const PlayboxShowcasePage = () => {
  const { data: stories } = useStories();
  const published = (stories ?? []).filter((s) => s.status === "published");

  return (
    <ProductPage>
      <PlayboxSubNav />
      <ProductHero
        title="Showcase"
        subtitle="Real spaces, brought to life with Playbox. Explore what creators, communities, and places have built and beamed."
      />

      <ProductSection>
        {published.length === 0 ? (
          <div className="py-16 text-center text-sm font-aeonik-mono uppercase text-neutral-400">
            No published worlds yet
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {published.map((story) => (
              <Link key={story.id} to={story.path} className="block">
                <HoverCard className="p-0">
                  <div className="aspect-video w-full overflow-hidden rounded-t-2xl bg-neutral-100">
                    {story.thumbnailUrl && (
                      <img
                        src={story.thumbnailUrl}
                        alt={story.title}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold">{story.title}</h3>
                    <p className="mt-1 text-sm text-neutral-500">@{story.profileHandle}</p>
                  </div>
                </HoverCard>
              </Link>
            ))}
          </div>
        )}
      </ProductSection>

      <ProductCta
        title="Turn your space into a world"
        ctas={[
          { label: "Start creating", href: "/waitlist", variant: "primary" },
          { label: "See pricing", href: "/playbox/pricing", variant: "ghost" },
        ]}
      />
      <Footer />
    </ProductPage>
  );
};
