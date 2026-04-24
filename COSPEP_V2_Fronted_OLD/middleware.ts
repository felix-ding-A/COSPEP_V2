
import createMiddleware from 'next-intl/middleware';
import { routing } from './lib/navigation';

export default createMiddleware({
    locales: ['en', 'es', 'ru', 'ar'],
    defaultLocale: 'en',
    localePrefix: 'as-needed',
    localeDetection: false
});

export const config = {
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
