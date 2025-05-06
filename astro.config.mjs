import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import astroI18next from "astro-i18next";

import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";

import { ui, defaultLang, languages } from './src/i18n/utils';

// https://astro.build/config
export default defineConfig({
    prefetch: false,
    vite: {
      plugins: [tailwindcss()],
    },  
    integrations: [
      astroI18next({
        config: {
        lng: defaultLang, 
        supportedLngs: Object.keys(languages),
        fallbackLng: defaultLang, // Good practice
        resources: ui,
        }
      }),  
      mdx(),
      svelte()
    ]
});