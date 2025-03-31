import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import astroI18next from "astro-i18next";

import mdx from "@astrojs/mdx";

import react from "@astrojs/react";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
    prefetch: false,
    integrations: [
      tailwind(),
      alpinejs({ entrypoint: "/src/entrypoint" }),
      astroI18next(),
      mdx(),
      react(),
      svelte()
    ]
});