import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Header } from "@/sections/Header";
import { HomePage } from "@/pages/HomePage";
import { SocialPage } from "@/pages/SocialPage";
import { GalleryPage } from "@/pages/GalleryPage";
import { DirectoryPage } from "@/pages/DirectoryPage";
import { ArticlesPage } from "@/pages/ArticlesPage";
import { JobsPage } from "@/pages/JobsPage";
import { PricingPage } from "@/pages/PricingPage";
import { AuthCallbackPage } from "@/pages/AuthCallbackPage";
import { CompositionPage } from "@/pages/CompositionPage";
import { PlayboxPage } from "@/pages/PlayboxPage";
import { LabPage } from "@/pages/LabPage";
import { CommunityPage } from "@/pages/CommunityPage";
import { ProfilePage } from "@/pages/ProfilePage";
import { AdminPage } from "@/pages/AdminPage";
import { PlayboxFeaturesPage } from "@/pages/PlayboxFeaturesPage";
import { PlayboxShowcasePage } from "@/pages/PlayboxShowcasePage";
import { PlayboxPricingPage } from "@/pages/PlayboxPricingPage";
import { BlogPage } from "@/pages/BlogPage";
import { BlogPostPage } from "@/pages/BlogPostPage";
import { AboutPage } from "@/pages/AboutPage";
import { ContactPage } from "@/pages/ContactPage";
import { WaitlistPage } from "@/pages/WaitlistPage";
import { PlayboxPrivacyPage, PlayboxDataDeletionPage } from "@/pages/LegalPage";
import { CareersPage, CareerRolePage } from "@/pages/CareersPage";
import { routeEnabled } from "@/config/routes";

// bolt-keystatic admin UI — lazy so @keystatic/core (config, fields, editor)
// stays out of the main SPA bundle and only loads on /keystatic.
const KeystaticPage = lazy(() =>
  import("@/pages/KeystaticPage").then((m) => ({ default: m.KeystaticPage })),
);

const MainLayout = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
  </>
);

// Access side of routes.manifest.json: a disabled route renders as a redirect
// home (its nav/footer links are hidden separately, via the same manifest).
const GatedRoute = ({ path, children }: { path: string; children: React.ReactNode }) =>
  routeEnabled(path) ? <>{children}</> : <Navigate to="/" replace />;

export const App = () => {
  return (
    <div className="text-neutral-950 text-base not-italic font-normal accent-auto bg-white box-border caret-transparent block tracking-[0.18px] leading-[24px] list-outside list-disc min-h-[1000px] overflow-x-clip pointer-events-auto text-start indent-[0px] normal-case visible w-full border-separate font-aeonik">
      <Routes>
        <Route path="/auth/callback" element={<AuthCallbackPage />} />
        {/* bolt-keystatic admin UI — full-screen, outside the site chrome.
            Manages its own routing under the /keystatic base path. */}
        <Route
          path="/keystatic/*"
          element={
            <Suspense fallback={null}>
              <KeystaticPage />
            </Suspense>
          }
        />
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/community"
            element={
              <GatedRoute path="/community">
                <CommunityPage />
              </GatedRoute>
            }
          />
          <Route path="/p/:handle" element={<ProfilePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route
            path="/playbox"
            element={
              <GatedRoute path="/playbox">
                <PlayboxPage />
              </GatedRoute>
            }
          />
          <Route
            path="/playbox/features"
            element={
              <GatedRoute path="/playbox/features">
                <PlayboxFeaturesPage />
              </GatedRoute>
            }
          />
          <Route
            path="/playbox/showcase"
            element={
              <GatedRoute path="/playbox/showcase">
                <PlayboxShowcasePage />
              </GatedRoute>
            }
          />
          <Route
            path="/playbox/pricing"
            element={
              <GatedRoute path="/playbox/pricing">
                <PlayboxPricingPage />
              </GatedRoute>
            }
          />
          <Route
            path="/blog"
            element={
              <GatedRoute path="/blog">
                <BlogPage />
              </GatedRoute>
            }
          />
          <Route
            path="/blog/:slug"
            element={
              <GatedRoute path="/blog">
                <BlogPostPage />
              </GatedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <GatedRoute path="/about">
                <AboutPage />
              </GatedRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <GatedRoute path="/contact">
                <ContactPage />
              </GatedRoute>
            }
          />
          <Route
            path="/lab"
            element={
              <GatedRoute path="/lab">
                <LabPage />
              </GatedRoute>
            }
          />
          <Route
            path="/social"
            element={
              <GatedRoute path="/social">
                <SocialPage />
              </GatedRoute>
            }
          />
          <Route
            path="/gallery"
            element={
              <GatedRoute path="/gallery">
                <GalleryPage />
              </GatedRoute>
            }
          />
          <Route
            path="/directory"
            element={
              <GatedRoute path="/directory">
                <DirectoryPage />
              </GatedRoute>
            }
          />
          <Route
            path="/articles"
            element={
              <GatedRoute path="/articles">
                <ArticlesPage />
              </GatedRoute>
            }
          />
          <Route
            path="/jobs"
            element={
              <GatedRoute path="/jobs">
                <JobsPage />
              </GatedRoute>
            }
          />
          <Route
            path="/pricing"
            element={
              <GatedRoute path="/pricing">
                <PricingPage />
              </GatedRoute>
            }
          />
          <Route
            path="/waitlist"
            element={
              <GatedRoute path="/waitlist">
                <WaitlistPage />
              </GatedRoute>
            }
          />
          <Route
            path="/careers"
            element={
              <GatedRoute path="/careers">
                <CareersPage />
              </GatedRoute>
            }
          />
          <Route
            path="/careers/:slug"
            element={
              <GatedRoute path="/careers">
                <CareerRolePage />
              </GatedRoute>
            }
          />
          {/* Legal pages. /playbox-privacy is the privacy URL for the PlayBox
              app on both Google Play and the Apple App Store — keep these paths
              stable so a domain-level redirect preserves them after cutover. */}
          <Route
            path="/playbox-privacy"
            element={
              <GatedRoute path="/playbox-privacy">
                <PlayboxPrivacyPage />
              </GatedRoute>
            }
          />
          <Route
            path="/playbox-data-deletion"
            element={
              <GatedRoute path="/playbox-data-deletion">
                <PlayboxDataDeletionPage />
              </GatedRoute>
            }
          />
          <Route path="/pages/:slug" element={<CompositionPage />} />
          <Route path="/pages/:slug/*" element={<CompositionPage />} />
        </Route>
      </Routes>
    </div>
  );
};
