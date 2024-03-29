import { defineConfig } from 'astro/config';
import { astroImageTools } from "astro-imagetools";
import tailwind from "@astrojs/tailwind";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  prefetch: false,
  integrations: [tailwind(), astroImageTools, alpinejs({ entrypoint: '/src/entrypoint' })]
});