// astro-i18next.config.ts (place this at the root of your project)
import { defaultLang, languages, ui } from './src/i18n/utils.ts'; // ADJUST PATH if utils.ts is elsewhere

/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: defaultLang, // Should be 'bg' from your utils
  locales: Object.keys(languages), // Should be ['en', 'bg']
  namespaces: ['translation'], // Default namespace, assuming your keys like 'nav.home' belong here
  defaultNamespace: 'translation',
  i18nextServer: { // Config for i18next during SSR/build time
    debug: true, // Enable for detailed logs on Netlify build
    resources: {
      en: { translation: ui.en }, // Structure: lang: { namespace: { translations } }
      bg: { translation: ui.bg },
    },
  },
  i18nextClient: { // Config for i18next on the client-side (if you use client:visible components with i18n)
    debug: true,
    resources: {
      en: { translation: ui.en },
      bg: { translation: ui.bg },
    },
  },
};