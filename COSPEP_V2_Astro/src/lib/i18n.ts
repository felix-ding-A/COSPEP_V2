import en from '../messages/en.json';

export const languages = {
  en: 'English',
};

export const defaultLang = 'en';

const messages = {
  en,
};

export function getLangFromUrl(url: URL) {
  return defaultLang;
}

export function useTranslations(lang: keyof typeof messages, namespace?: string) {
  return function t(key: string) {
    const fullKey = namespace ? `${namespace}.${key}` : key;
    const keys = fullKey.split('.');
    let value: any = messages.en;
    for (const k of keys) {
      if (value === undefined || value === null) break;
      value = value[k];
    }
    return value || key;
  };
}

