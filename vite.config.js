import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico"],
      manifest: {
        name: "Coolming AI Lab",
        short_name: "CoolmingLab",
        description: "AI로 만들고, 기록하고, 확장하는 Coolming AI Lab",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/coolming-ai-lab/",
        scope: "/coolming-ai-lab/",
        icons: [
          {
            src: "/coolming-ai-lab/pwa-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/coolming-ai-lab/pwa-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/coolming-ai-lab/pwa-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  base: "/coolming-ai-lab/",
});
