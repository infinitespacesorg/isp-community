// Legal/policy pages rendered from markdown (canonical home:
// business/marketing/website/community/legal/, synced into src/content/legal/).
// Parsed client-side with Markdoc — the renderer is already in the bundle for
// blog posts — and styled with the same .post-prose rules.

import React from "react";
import Markdoc from "@markdoc/markdoc";
import { Footer } from "@/sections/Footer";
import playboxPrivacyMd from "@/content/legal/playbox-privacy.md?raw";
import playboxDataDeletionMd from "@/content/legal/playbox-data-deletion.md?raw";

function renderLegal(raw: string) {
  // Drop the sync banner (and any other comment lines) before parsing.
  const src = raw
    .split(/\r?\n/)
    .filter((l) => !l.trimStart().startsWith("<!--"))
    .join("\n");
  return Markdoc.renderers.react(Markdoc.transform(Markdoc.parse(src)), React);
}

const LegalPage = ({ content }: { content: React.ReactNode }) => (
  <div className="box-border flex flex-col min-h-screen">
    <main className="basis-[0%] grow">
      <article className="mx-auto max-w-3xl px-6 pb-24 pt-28 md:pt-32">
        <div className="post-prose">{content}</div>
      </article>
    </main>
    <Footer />
  </div>
);

const playboxPrivacy = renderLegal(playboxPrivacyMd);
const playboxDataDeletion = renderLegal(playboxDataDeletionMd);

export const PlayboxPrivacyPage = () => <LegalPage content={playboxPrivacy} />;
export const PlayboxDataDeletionPage = () => <LegalPage content={playboxDataDeletion} />;
