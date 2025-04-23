import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";

import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
    prefetch: false,
    integrations: [
      tailwind(),
      astroI18next({
        config: {
          // Set your default language
          defaultLocale: 'bg', // Or 'en'
          locales: ['bg', 'en'],
        }
      }),  
      mdx(),
      svelte()
    ]
});