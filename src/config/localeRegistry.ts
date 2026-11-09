/**
 * Locale Registry — Viettel IDC Multilingual Support
 * Single Source of Truth (SSOT) for Locales and Route Prefixes.
 */

export interface LocaleConfig {
  locale: string;           // e.g. 'vi-VN', 'en-VN', 'en', 'lo-LA'
  languageCode: string;     // e.g. 'vi', 'en', 'lo'
  marketCode: string;       // e.g. 'vn', 'int', 'la', 'ph', 'mm', 'kh'
  displayName: string;
  nativeName: string;
  routePrefix: string;      // e.g. '', '/en-vn', '/en', '/la'
  htmlLang: string;         // e.g. 'vi-VN', 'en-VN', 'en'
  robotsIndex: boolean;
}

export const LOCALE_REGISTRY: Record<string, LocaleConfig> = {
  'vi-VN': {
    locale: 'vi-VN',
    languageCode: 'vi',
    marketCode: 'vn',
    displayName: 'Tiếng Việt',
    nativeName: 'Tiếng Việt',
    routePrefix: '',
    htmlLang: 'vi-VN',
    robotsIndex: true,
  },
  'en-VN': {
    locale: 'en-VN',
    languageCode: 'en',
    marketCode: 'vn',
    displayName: 'English (Vietnam)',
    nativeName: 'English (Vietnam)',
    routePrefix: '/en-vn',
    htmlLang: 'en-VN',
    robotsIndex: true,
  },
  'en': {
    locale: 'en',
    languageCode: 'en',
    marketCode: 'int',
    displayName: 'English (Global)',
    nativeName: 'English',
    routePrefix: '/en',
    htmlLang: 'en',
    robotsIndex: true,
  },
  'lo-LA': {
    locale: 'lo-LA',
    languageCode: 'lo',
    marketCode: 'la',
    displayName: 'Lao',
    nativeName: 'ພາສາລາວ',
    routePrefix: '/la',
    htmlLang: 'lo-LA',
    robotsIndex: false,
  },
  'en-LA': {
    locale: 'en-LA',
    languageCode: 'en',
    marketCode: 'la',
    displayName: 'English (Laos)',
    nativeName: 'English (Laos)',
    routePrefix: '/la-en',
    htmlLang: 'en-LA',
    robotsIndex: false,
  },
  'fil-PH': {
    locale: 'fil-PH',
    languageCode: 'fil',
    marketCode: 'ph',
    displayName: 'Filipino',
    nativeName: 'Tagalog',
    routePrefix: '/ph',
    htmlLang: 'fil-PH',
    robotsIndex: false,
  },
  'en-PH': {
    locale: 'en-PH',
    languageCode: 'en',
    marketCode: 'ph',
    displayName: 'English (Philippines)',
    nativeName: 'English (Philippines)',
    routePrefix: '/ph-en',
    htmlLang: 'en-PH',
    robotsIndex: false,
  },
  'my-MM': {
    locale: 'my-MM',
    languageCode: 'my',
    marketCode: 'mm',
    displayName: 'Burmese',
    nativeName: 'မြန်မာ',
    routePrefix: '/mm',
    htmlLang: 'my-MM',
    robotsIndex: false,
  },
  'en-MM': {
    locale: 'en-MM',
    languageCode: 'en',
    marketCode: 'mm',
    displayName: 'English (Myanmar)',
    nativeName: 'English (Myanmar)',
    routePrefix: '/mm-en',
    htmlLang: 'en-MM',
    robotsIndex: false,
  },
  'km-KH': {
    locale: 'km-KH',
    languageCode: 'km',
    marketCode: 'kh',
    displayName: 'Khmer',
    nativeName: 'ភាសាខ្မែរ',
    routePrefix: '/kh',
    htmlLang: 'km-KH',
    robotsIndex: false,
  },
  'en-KH': {
    locale: 'en-KH',
    languageCode: 'en',
    marketCode: 'kh',
    displayName: 'English (Cambodia)',
    nativeName: 'English (Cambodia)',
    routePrefix: '/kh-en',
    htmlLang: 'en-KH',
    robotsIndex: false,
  },
};

export function getLocaleConfig(localeKey: string): LocaleConfig {
  return LOCALE_REGISTRY[localeKey] || LOCALE_REGISTRY['vi-VN'];
}

export function parseLocalePrefixFromPath(pathname: string): { locale: LocaleConfig | null; pureSlug: string } {
  const cleanPath = (pathname.split('?')[0].split('#')[0] || '/').toLowerCase();

  // Ordered by longest prefix length
  const sortedLocales = Object.values(LOCALE_REGISTRY)
    .filter((l) => l.routePrefix !== '')
    .sort((a, b) => b.routePrefix.length - a.routePrefix.length);

  for (const item of sortedLocales) {
    if (cleanPath === item.routePrefix || cleanPath === `${item.routePrefix}/`) {
      return { locale: item, pureSlug: '/' };
    }
    if (cleanPath.startsWith(`${item.routePrefix}/`)) {
      const pure = cleanPath.substring(item.routePrefix.length) || '/';
      return { locale: item, pureSlug: pure };
    }
  }

  return { locale: null, pureSlug: cleanPath || '/' };
}
