import { MetadataRoute } from 'next';
import { client } from '@/lib/sanity';
import { groq } from 'next-sanity';

const baseUrl = 'https://cospsp.com';
const locales = ['en', 'ar', 'es', 'ru'];

// Static routes relative to base URL
const staticRoutes = [
    '',
    '/about',
    '/products',
    '/service',
    '/services/after-sales-support',
    '/services/packaging-logistics',
    '/custom-manufacturing',
    '/industry-insights',
    '/resources',
    '/contact',
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const sitemapEntries: MetadataRoute.Sitemap = [];

    // 1. Add static routes for all locales
    staticRoutes.forEach(route => {
        locales.forEach(locale => {
            sitemapEntries.push({
                url: `${baseUrl}/${locale}${route}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: route === '' ? 1 : 0.8,
            });
        });
    });

    // 2. Fetch all products and posts
    // We fetch only slugs to minimize data transfer
    const productsQuery = groq`*[_type == "product" && defined(slug.current)][].slug.current`;
    const postsQuery = groq`*[_type == "post" && defined(slug.current)][].slug.current`;

    const [productSlugs, postSlugs] = await Promise.all([
        client.fetch(productsQuery),
        client.fetch(postsQuery)
    ]);

    // 3. Add product pages
    productSlugs.forEach((slug: string) => {
        locales.forEach(locale => {
            sitemapEntries.push({
                url: `${baseUrl}/${locale}/products/${slug}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.7,
            });
        });
    });

    // 4. Add blog post pages
    postSlugs.forEach((slug: string) => {
        locales.forEach(locale => {
            sitemapEntries.push({
                url: `${baseUrl}/${locale}/industry-insights/${slug}`,
                lastModified: new Date(), // Ideally we'd capture publishedAt
                changeFrequency: 'monthly',
                priority: 0.6,
            });
        });
    });

    return sitemapEntries;
}
