import { Routes, Route } from "react-router-dom";
import { Header } from "@/sections/Header";
import { HomePage } from "@/pages/HomePage";
import { SocialPage } from "@/pages/SocialPage";
import { GalleryPage } from "@/pages/GalleryPage";
import { DirectoryPage } from "@/pages/DirectoryPage";
import { ArticlesPage } from "@/pages/ArticlesPage";
import { JobsPage } from "@/pages/JobsPage";
import { PricingPage } from "@/pages/PricingPage";

export const App = () => {
  return (
    <div className="text-neutral-950 text-lg not-italic font-normal accent-auto bg-white box-border caret-transparent block tracking-[0.18px] leading-[27px] list-outside list-disc min-h-[1000px] overflow-x-clip pointer-events-auto text-start indent-[0px] normal-case visible w-full border-separate font-aeonik">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/social" element={<SocialPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/directory" element={<DirectoryPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </div>
  );
};
