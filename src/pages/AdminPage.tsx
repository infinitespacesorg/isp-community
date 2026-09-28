import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Button } from "@infinitespaces/ui";
import { useStudioRole } from "@/hooks/useStudioRole";
import { useStories } from "@/hooks/useData";
import { STUDIO_SPACE_ID } from "@/config/studio";
import { Footer } from "@/sections/Footer";

export const AdminPage = () => {
  const { isAdmin, isPending } = useStudioRole();
  const { data: stories } = useStories();

  // Local promotion state stands in for the home_promotions table until the
  // DB lands (gate G-D). Writes will go through Supabase then.
  const [promoted, setPromoted] = useState<Set<string>>(new Set());

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="text-sm font-aeonik-mono uppercase">Checking access...</span>
      </div>
    );
  }

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  const published = (stories ?? []).filter((s) => s.status === "published");
  const toggle = (id: string) =>
    setPromoted((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  return (
    <div className="box-border caret-transparent flex flex-col min-h-screen">
      <main className="box-border caret-transparent basis-[0%] grow">
        <section className="box-border caret-transparent mb-[84px] mx-3 md:mb-40 md:mx-9">
          <div className="pt-28 md:pt-32">
            <h1 className="text-3xl font-black tracking-[-0.36px] leading-tight mb-3 md:text-4xl">
              Admin
            </h1>
            <p className="text-neutral-500 font-aeonik-mono text-sm uppercase tracking-[0.18px] mb-2">
              Promote published stories to the home page
            </p>

            {!STUDIO_SPACE_ID && (
              <div className="mb-8 rounded-md border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
                <strong>Config needed:</strong> <code>VITE_STUDIO_SPACE_ID</code> is unset,
                so role checks can't run against the real Studio space. Populate it from the
                live DB (see <code>src/config/studio.ts</code>).
              </div>
            )}

            <div className="mt-8 divide-y divide-neutral-200 border-y border-neutral-200">
              {published.length === 0 && (
                <div className="py-8 text-sm font-aeonik-mono uppercase text-neutral-400">
                  No published stories
                </div>
              )}
              {published.map((story) => (
                <div key={story.id} className="flex items-center justify-between gap-4 py-4">
                  <div className="min-w-0">
                    <div className="font-semibold leading-tight">{story.title}</div>
                    <div className="text-xs text-neutral-500">
                      @{story.profileHandle} · {story.slug}
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant={promoted.has(story.id) ? "default" : "outline"}
                    onClick={() => toggle(story.id)}
                    className={promoted.has(story.id) ? "bg-[#789bde] text-[#0c0c14]" : ""}
                  >
                    {promoted.has(story.id) ? "Promoted" : "Promote"}
                  </Button>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs text-neutral-400">
              Promotion writes to <code>home_promotions</code> once the schema (migration
              00037) is applied; the home page then renders promoted stories in rank order.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
