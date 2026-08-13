import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    tsConfigPaths(),
    ViteImageOptimizer({
      // public/ contient déjà des images optimisées une fois pour toutes
      // (voir commit a71d360) — les ré-optimiser à chaque build les
      // recompresserait avec perte à répétition. On ne cible que les
      // assets qui passent par src/ (hashés dans dist/assets/).
      includePublic: false,
      jpg: { quality: 75 },
      jpeg: { quality: 75 },
      png: { quality: 75 },
      webp: { lossless: false, quality: 75 },
    }),
  ],
});
