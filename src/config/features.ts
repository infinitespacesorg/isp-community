export const features = {
  showSocial: import.meta.env.VITE_SHOW_SOCIAL === "true",
  showGallery: import.meta.env.VITE_SHOW_GALLERY === "true",
  showDirectory: import.meta.env.VITE_SHOW_DIRECTORY === "true",
  showArticles: import.meta.env.VITE_SHOW_ARTICLES === "true",
  showJobs: import.meta.env.VITE_SHOW_JOBS === "true",
  showPricing: import.meta.env.VITE_SHOW_PRICING === "true",
  waitlistMode: import.meta.env.VITE_WAITLIST_MODE !== "false",
};
