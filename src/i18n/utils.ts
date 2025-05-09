export const languages = {
  en: 'English',
  bg: 'Bulgarian',
};

export const defaultLang = 'bg';

// Your translation strings
export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About Me',
    'nav.moments': 'Moments',
    'hero.catchphrase': "Catching smiles, love and happiness one snap at a time."
    // Add other translations
  },
  bg: {
    'nav.home': 'Начало',
    'nav.services': 'Услуги',
    'nav.about': 'За мен',
    'nav.moments': 'Моменти',
    'hero.catchphrase': "Улавяйки щастие, усмивки и любов, кадър по кадър."
    // Add other translations
  },
} as const;

// Explicit mapping between canonical paths and their localized versions
// Use URL-friendly slugs for non-default languages
export const pathTranslations = {
  '/': { en: '/', bg: '/' },
  '/услуги': { en: '/services', bg: '/услуги' },
  '/за-мен': { en: '/about-me', bg: '/за-мен' }, // Match the translation keys if possible, or use canonical paths
  '/моменти': { en: '/moments', bg: '/моменти' },
  // Add mappings for ALL your pages here
} as const;

type PathKeys = keyof typeof pathTranslations;
type LangKeys = keyof typeof languages;

// Helper function to get language from URL path
export function getLangFromUrl(url: URL): LangKeys {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in languages) return lang as LangKeys;
  return defaultLang;
}

// Helper function to find the canonical path key based on the current URL
export function getBasePathKey(pathname: string, currentLang: LangKeys): PathKeys {
    let pathToCheck = pathname;
    const potentialPrefix = `/${currentLang}`;

    // Remove language prefix if it exists and isn't the default language
    if (currentLang !== defaultLang) {
        if (pathname.startsWith(potentialPrefix + '/')) {
            pathToCheck = pathname.substring(potentialPrefix.length); // e.g., /services from /en/services
        } else if (pathname === potentialPrefix) {
            pathToCheck = '/'; // Handles root language path e.g. /en
        }
        // If it doesn't start with the prefix, assume it might be a root path or default lang path navigated to directly
    }

    // Ensure path starts with a slash for consistent matching
    if (!pathToCheck.startsWith('/')) {
      pathToCheck = '/' + pathToCheck;
    }

    // Find the canonical key ('/services', '/', etc.)
    for (const [key, translations] of Object.entries(pathTranslations)) {
        if (translations[currentLang as keyof typeof translations] === pathToCheck) {
            return key as PathKeys;
        }
        // Add a check for the default language possibly matching the key directly
        if (currentLang === defaultLang && key === pathToCheck) {
             return key as PathKeys;
        }
    }

    console.warn(`[i18n] Could not determine base path key for pathname "${pathname}" (lang: ${currentLang}). Defaulting to '/'.`);
    return '/'; // Default to home page key if no match found
}

// Make sure astro-i18next is configured in astro.config.mjs to use 'ui' as resources!