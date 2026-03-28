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
            // Simple logic to replace locale in URL
            const parts = window.location.pathname.split('/');
            if (['en', 'es', 'ru', 'ar'].includes(parts[1])) {
                parts[1] = options.locale;
            } else {
                parts.splice(1, 0, options.locale);
            }
            window.location.replace(parts.join('/'));
        } else {
            window.location.replace(url); 
        }
    },
    back: () => { window.history.back(); },
  };
}
