import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  base: "https://github.com/NELUxP/NELUxP.git", // Replace with your repository name
  integrations: [react()],
});