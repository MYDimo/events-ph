/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./src/layouts/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./src/components/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontSize: {
        'body-lg': '1rem',
        'body': '.875rem',
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
