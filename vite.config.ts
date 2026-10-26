import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// 前端：web/ → public/（Workers Static Assets 目录）
export default defineConfig({
  root: "web",
  publicDir: "static",
  plugins: [react(), tailwindcss()],
  build: { outDir: "../public", emptyOutDir: true, target: "es2022", chunkSizeWarningLimit: 1200 },
});
