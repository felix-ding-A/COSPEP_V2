import { useTranslations as useAstroTranslations } from '@/lib/i18n';
import { Link } from '@/components/Link';
import React from 'react';

export { Link };

// Simple shim for useLocale
export function useLocale() {
  if (typeof window === 'undefined') return 'en';
  const [, lang] = window.location.pathname.split('/');
  return ['en', 'es', 'ru', 'ar'].includes(lang) ? lang : 'en';
}

export function useParams() {
    const locale = useLocale();
    return { lang: locale };
}

export function useSearchParams() {
    if (typeof window === 'undefined') return new URLSearchParams();
    return new URLSearchParams(window.location.search);
}

// Custom hook to mimic next-intl useTranslations
export function useTranslations(namespace?: string) {
    const locale = useLocale();
    return useAstroTranslations(locale as any, namespace);
}

// ... the rest of existing shims
export function usePathname() {
  if (typeof window === 'undefined') return '/';
  return window.location.pathname;
}

export function useRouter() {
  return {
    push: (url: string) => { window.location.href = url; },
    replace: (url: string, options?: { locale?: string }) => { 
        if (options?.locale) {
            const parts = window.location.pathname.split('/');
            const currentLocale = ['en', 'es', 'ru', 'ar'].find(l => l === parts[1]);
            
            if (currentLocale) {
                if (options.locale === 'en') {
                    parts.splice(1, 1);
                } else {
                    parts[1] = options.locale;
                }
            } else {
                if (options.locale !== 'en') {
                    parts.splice(1, 0, options.locale);
                }
            }
            
            const newPath = parts.join('/') || '/';
            window.location.replace(newPath + window.location.search);
        } else {
            window.location.replace(url); 
        }
    },
    back: () => { window.history.back(); },
  };
}
