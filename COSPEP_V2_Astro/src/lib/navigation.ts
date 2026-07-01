import { useTranslations as useAstroTranslations } from '@/lib/i18n';
import { Link } from '@/components/Link';
import React from 'react';

export { Link };

// Simple shim for useLocale
export function useLocale() {
  return 'en';
}

export function useParams() {
    return { lang: 'en' };
}

export function useSearchParams() {
    if (typeof window === 'undefined') return new URLSearchParams();
    return new URLSearchParams(window.location.search);
}

// Custom hook to mimic next-intl useTranslations
export function useTranslations(namespace?: string) {
    return useAstroTranslations('en', namespace);
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
        window.location.replace(url); 
    },
    back: () => { window.history.back(); },
  };
}
