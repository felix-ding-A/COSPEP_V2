import createMiddleware from 'next-intl/middleware';
import { routing } from './lib/navigation';

export default createMiddleware(routing);

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(cn|en|es)/:path*']
};
