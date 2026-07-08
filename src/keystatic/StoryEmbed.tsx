// StoryEmbed — the runtime component behind the Markdoc `{% story %}` tag.
//
// Resolves a story by slug from the stories data and renders it inline as a
// full-width iframe of the story's served path, with a caption and a
// fallback link. If the slug does not resolve, we render a safe placeholder
// rather than an empty/broken frame.

import { stories } from "@/data/mock-data";

type StoryEmbedProps = {
  slug?: string;
};

export const StoryEmbed = ({ slug }: StoryEmbedProps) => {
  const story = slug ? stories.find((s) => s.slug === slug) : undefined;

  if (!story) {
    return (
      <div className="my-10 rounded-lg border border-neutral-200 bg-neutral-50 px-5 py-6 text-center">
        <p className="text-sm font-aeonik-mono uppercase tracking-[0.18px] text-neutral-500">
          Story not found{slug ? `: ${slug}` : ""}
        </p>
      </div>
    );
  }

  return (
    <figure className="my-12 -mx-3 md:-mx-9">
      <div className="overflow-hidden border-y border-neutral-200 bg-black">
        <iframe
          src={story.path}
          title={story.title}
          className="w-full border-0"
          style={{ height: "min(80vh, 720px)" }}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
        />
      </div>
      <figcaption className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1 px-3 md:px-9">
        <span className="text-sm font-semibold">{story.title}</span>
        {story.description && (
          <span className="text-sm text-neutral-500">{story.description}</span>
        )}
        <a
          href={story.path}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-aeonik-mono uppercase tracking-[0.18px] text-air hover:underline"
        >
          Open full screen &rarr;
        </a>
      </figcaption>
    </figure>
  );
};
