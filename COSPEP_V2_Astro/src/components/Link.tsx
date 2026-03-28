import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export function Link({ href, children, ...props }: LinkProps) {
  // Simple client-side locale detection from path
  const getLocale = () => {
    if (typeof window === 'undefined') return 'en';
    const [, lang] = window.location.pathname.split('/');
    return ['en', 'es', 'ru', 'ar'].includes(lang) ? lang : 'en';
  };

  const locale = getLocale();
  
  // Only prefix internal links that don't already have a locale prefix
  const isInternal = href.startsWith('/') && !href.startsWith('//');
  const hasLocalePrefix = /^\/(en|es|ru|ar)(\/|$)/.test(href);
  
  let finalHref = href;
  if (isInternal && !hasLocalePrefix && locale !== 'en') {
    finalHref = `/${locale}${href === '/' ? '' : href}`;
  }

  return (
    <a href={finalHref} {...props}>
      {children}
    </a>
  );
}
