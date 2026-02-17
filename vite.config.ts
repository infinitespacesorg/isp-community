import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  publicDir: "./static",
  base: "./",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    // Force single instances of React for linked @infinitespaces/ui package
    dedupe: ["react", "react-dom"],
  },
  server: {
    port: 5174,
    fs: {
      // Allow serving files from the linked UI package in the monorepo
      allow: ["..", path.resolve(__dirname, "../isp-account-management")],
    },
  },
});
