import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
	prefetch: false,
	integrations: [
		tailwind(),
		alpinejs({ entrypoint: "/src/entrypoint" }),
	],
	i18n: {
		defaultLocale: "bg",
		locales: ["en", "bg"],
		routing: {
			prefixDefaultLocale: true,
		},
	},
});
