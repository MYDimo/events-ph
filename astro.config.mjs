// astro.config.mjs (or .ts)
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import astroI18next from "astro-i18next"; // Import the integration
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
import { imageService } from "@unpic/astro/service";

export default defineConfig({
  prefetch: false,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    astroI18next(), // Call it without inline options
    mdx(),
    svelte(),
  ],
});
