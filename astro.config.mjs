import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
	prefetch: false,
	integrations: [
		tailwind(),
		alpinejs({ entrypoint: "/src/entrypoint" }),
		astroI18next()
	],
	i18n: {
		defaultLocale: "bg",
		locales: ["en", "bg"],
		routing: {
			prefixDefaultLocale: false,
		},
		fallback: {
      en: "bg"
    }
	},
});
