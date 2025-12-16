import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { metaImagesPlugin } from "./vite-plugin-meta-images";

// 1. Setup __dirname for ESM
const __dirname = path.dirname(new URL(import.meta.url).pathname);

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    // 2. REMOVED tailwindcss() from here. 
    // Tailwind v3 uses postcss.config.js automatically.
    metaImagesPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "client/dist"),
    emptyOutDir: true,
  },
});