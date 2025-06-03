// Example tailwind.config.mjs
import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [
    typography,
    daisyui,
  ],
  daisyui: { // Optional DaisyUI specific config
    themes: ["light", "dark", "cupcake"],
  },
};