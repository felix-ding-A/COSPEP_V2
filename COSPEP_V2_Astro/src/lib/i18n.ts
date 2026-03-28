import en from '../messages/en.json';
import es from '../messages/es.json';
import ru from '../messages/ru.json';
import ar from '../messages/ar.json';

export const languages = {
  en: 'English',
  es: 'Español',
  ru: 'Русский',
  ar: 'العربية',
};

export const defaultLang = 'en';

const messages = {
  en,
  es,
  ru,
  ar,
};

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in messages) return lang as keyof typeof messages;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof messages, namespace?: string) {
  return function t(key: string) {
    const fullKey = namespace ? `${namespace}.${key}` : key;
    const keys = fullKey.split('.');
    let value: any = messages[lang];
    for (const k of keys) {
      if (value === undefined || value === null) break;
      value = value[k];
    }
    return value || key;
  };
}
