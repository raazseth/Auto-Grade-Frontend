import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": "/src/Components",
      "@pages": "/src/Pages",
      "@utils": "/src/Utils",
      "@api": "/src/APIs",
      "@typed": "/src/Types",
      "@assets": "/src/Assets",
      "@layout": "/src/Layout",
      "@store": "/src/Store",
    },
  },
});
