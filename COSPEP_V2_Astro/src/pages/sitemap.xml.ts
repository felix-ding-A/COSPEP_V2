import { getProducts, getPosts } from '@/lib/sanity/queries';

export async function GET() {
  const products = await getProducts();
  const posts = await getPosts();

  const langs = [''];
  const baseUrl = 'https://cospep.com';

  const staticPages = [
    '',
    '/about',
    '/contact',
    '/products',
    '/peptides',
    '/service',
    '/custom-manufacturing',
    '/services/after-sales-support',
    '/services/packaging-logistics',
    '/resources/sustainability',
    '/industry-insights',
    '/terms',
    '/privacy',
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add static pages for each language
  langs.forEach(lang => {
    const langPrefix = lang ? `/${lang}` : '';
    staticPages.forEach(page => {
      xml += `
  <url>
    <loc>${baseUrl}${langPrefix}${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`;
    });
  });

  // Add dynamic products for each language
  products.forEach(product => {
    langs.forEach(lang => {
      const langPrefix = lang ? `/${lang}` : '';
      xml += `
  <url>
    <loc>${baseUrl}${langPrefix}/products/${product.slug.current}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
    });
  });

  // Add dynamic posts for each language
  posts.forEach(post => {
    langs.forEach(lang => {
      const langPrefix = lang ? `/${lang}` : '';
      xml += `
  <url>
    <loc>${baseUrl}${langPrefix}/industry-insights/${post.slug.current}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
    });
  });

  xml += `
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
