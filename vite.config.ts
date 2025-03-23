import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": "/src/Components",
      "@apis": "/src/Apis",
      "@pages": "/src/Pages",
      "@utils": "/src/Utils",
      "@typed": "/src/Types",
      "@assets": "/src/Assets",
      "@layout": "/src/Layout",
      "@store": "/src/Store",
    },
  },
});
