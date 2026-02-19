import { MetadataRoute } from 'next';
import { client } from '@/lib/sanity';
import { groq } from 'next-sanity';

const baseUrl = 'https://cospep.com';
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
    // We fetch slug and _updatedAt
    const productsQuery = groq`*[_type == "product" && defined(slug.current) && (isVisible == true || !defined(isVisible))]{ "slug": slug.current, _updatedAt }`;
    const postsQuery = groq`*[_type == "post" && defined(slug.current) && (isVisible == true || !defined(isVisible))]{ "slug": slug.current, _updatedAt }`;

    const [products, posts] = await Promise.all([
        client.fetch(productsQuery),
        client.fetch(postsQuery)
    ]);

    // 3. Add product pages
    products.forEach((product: any) => {
        locales.forEach(locale => {
            sitemapEntries.push({
                url: `${baseUrl}/${locale}/products/${product.slug}`,
                lastModified: new Date(product._updatedAt),
                changeFrequency: 'weekly',
                priority: 0.7,
            });
        });
    });

    // 4. Add blog post pages
    posts.forEach((post: any) => {
        locales.forEach(locale => {
            sitemapEntries.push({
                url: `${baseUrl}/${locale}/industry-insights/${post.slug}`,
                lastModified: new Date(post._updatedAt),
                changeFrequency: 'monthly',
                priority: 0.6,
            });
        });
    });

    return sitemapEntries;
}
