import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";

import { name } from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  base: `/${name}/`,
  plugins: [Vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "image-js": ["image-js"],
        },
      },
    },
  },
});
