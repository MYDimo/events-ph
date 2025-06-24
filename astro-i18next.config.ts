// astro-i18next.config.ts (place this at the root of your project)
import { defaultLang, languages, ui, pathTranslations } from './src/i18n/utils.ts'; // ADJUST PATH if utils.ts is elsewhere

/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: defaultLang, // Should be 'bg' from your utils
  locales: Object.keys(languages), // Should be ['en', 'bg']
  pages: pathTranslations, // <--- ADD THIS LINE! This is crucial for localizePath
  namespaces: ['translation'],
  defaultNamespace: 'translation',
  i18nextServer: {
    debug: true,
    resources: {
      en: { translation: ui.en },
      bg: { translation: ui.bg },
    },
  },
  i18nextClient: {
    debug: true,
    resources: {
      en: { translation: ui.en },
      bg: { translation: ui.bg },
    },
  },
  // Optional: If you want to configure routing behavior (e.g., prefixDefaultLocale)
  // routing: {
  //   prefixDefaultLocale: false, // Set to true if you want /bg/ for default too
  //   strategy: 'pathname',
  // },
};