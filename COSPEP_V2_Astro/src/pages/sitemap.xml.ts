import { getProducts, getPosts } from '@/lib/sanity/queries';
import { languages, defaultLang } from '@/lib/i18n';

export async function GET() {
  const products = await getProducts();
  const posts = await getPosts();

  const langKeys = Object.keys(languages);
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

  const getUrl = (lang: string, path: string) => {
    const langPrefix = lang === defaultLang ? '' : `/${lang}`;
    return `${baseUrl}${langPrefix}${path}`;
  };

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return null;
    try {
      return new Date(dateStr).toISOString();
    } catch {
      return null;
    }
  };

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">`;

  // Add static pages
  staticPages.forEach(page => {
    langKeys.forEach(lang => {
      const loc = getUrl(lang, page);
      xml += `
  <url>
    <loc>${loc}</loc>`;
      
      langKeys.forEach(altLang => {
        xml += `
    <xhtml:link rel="alternate" hreflang="${altLang}" href="${getUrl(altLang, page)}" />`;
      });

      xml += `
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`;
    });
  });

  // Add dynamic products
  products.forEach(product => {
    const path = `/products/${product.slug.current}`;
    const lastmod = formatDate(product._updatedAt);
    
    langKeys.forEach(lang => {
      const loc = getUrl(lang, path);
      xml += `
  <url>
    <loc>${loc}</loc>`;

      langKeys.forEach(altLang => {
        xml += `
    <xhtml:link rel="alternate" hreflang="${altLang}" href="${getUrl(altLang, path)}" />`;
      });

      if (lastmod) {
        xml += `
    <lastmod>${lastmod}</lastmod>`;
      }
      
      xml += `
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
    });
  });

  // Add dynamic posts
  posts.forEach(post => {
    const path = `/industry-insights/${post.slug.current}`;
    const lastmod = formatDate(post._updatedAt);

    langKeys.forEach(lang => {
      const loc = getUrl(lang, path);
      xml += `
  <url>
    <loc>${loc}</loc>`;

      langKeys.forEach(altLang => {
        xml += `
    <xhtml:link rel="alternate" hreflang="${altLang}" href="${getUrl(altLang, path)}" />`;
      });

      if (lastmod) {
        xml += `
    <lastmod>${lastmod}</lastmod>`;
      }

      xml += `
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
