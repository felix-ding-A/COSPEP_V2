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

  const getUrl = (lang: string, path: string): string => {
    const langPrefix = lang === defaultLang ? '' : `/${lang}`;
    return `${baseUrl}${langPrefix}${path}`;
  };

  const formatDate = (dateStr?: string): string | null => {
    if (!dateStr) return null;
    try {
      return new Date(dateStr).toISOString();
    } catch {
      return null;
    }
  };

  /**
   * Build a single <url> block deterministically using an array of lines,
   * then join with '\n'. This avoids the SSR streaming whitespace injection
   * that occurs when using string concatenation (+=) with template literals.
   */
  const buildUrlEntry = (
    loc: string,
    altLinks: Array<{ lang: string; href: string }>,
    opts: { changefreq: string; priority: string; lastmod?: string | null }
  ): string => {
    const lines: string[] = [];
    lines.push('  <url>');
    lines.push(`    <loc>${loc}</loc>`);
    for (const { lang, href } of altLinks) {
      lines.push(`    <xhtml:link rel="alternate" hreflang="${lang}" href="${href}" />`);
    }
    if (opts.lastmod) {
      lines.push(`    <lastmod>${opts.lastmod}</lastmod>`);
    }
    lines.push(`    <changefreq>${opts.changefreq}</changefreq>`);
    lines.push(`    <priority>${opts.priority}</priority>`);
    lines.push('  </url>');
    return lines.join('\n');
  };

  const urlEntries: string[] = [];

  // Static pages
  for (const page of staticPages) {
    for (const lang of langKeys) {
      const loc = getUrl(lang, page);
      const altLinks = langKeys.map(l => ({ lang: l, href: getUrl(l, page) }));
      urlEntries.push(
        buildUrlEntry(loc, altLinks, {
          changefreq: 'weekly',
          priority: page === '' ? '1.0' : '0.8',
        })
      );
    }
  }

  // Dynamic products
  for (const product of products) {
    const path = `/products/${product.slug.current}`;
    const lastmod = formatDate(product._updatedAt);
    for (const lang of langKeys) {
      const loc = getUrl(lang, path);
      const altLinks = langKeys.map(l => ({ lang: l, href: getUrl(l, path) }));
      urlEntries.push(
        buildUrlEntry(loc, altLinks, {
          changefreq: 'monthly',
          priority: '0.7',
          lastmod,
        })
      );
    }
  }

  // Dynamic posts
  for (const post of posts) {
    const path = `/industry-insights/${post.slug.current}`;
    const lastmod = formatDate(post._updatedAt);
    for (const lang of langKeys) {
      const loc = getUrl(lang, path);
      const altLinks = langKeys.map(l => ({ lang: l, href: getUrl(l, path) }));
      urlEntries.push(
        buildUrlEntry(loc, altLinks, {
          changefreq: 'monthly',
          priority: '0.6',
          lastmod,
        })
      );
    }
  }

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...urlEntries,
    '</urlset>',
  ].join('\n');

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
