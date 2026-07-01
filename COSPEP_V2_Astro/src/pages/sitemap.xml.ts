import { getProducts, getPosts } from '@/lib/sanity/queries';

export async function GET() {
  const products = await getProducts();
  const posts = await getPosts();

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

  const getUrl = (path: string): string => {
    return `${baseUrl}${path}`;
  };

  const formatDate = (dateStr?: string): string | null => {
    if (!dateStr) return null;
    try {
      return new Date(dateStr).toISOString();
    } catch {
      return null;
    }
  };

  const buildUrlEntry = (
    loc: string,
    opts: { changefreq: string; priority: string; lastmod?: string | null }
  ): string => {
    const lines: string[] = [];
    lines.push('  <url>');
    lines.push(`    <loc>${loc}</loc>`);
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
    const loc = getUrl(page);
    urlEntries.push(
      buildUrlEntry(loc, {
        changefreq: 'weekly',
        priority: page === '' ? '1.0' : '0.8',
      })
    );
  }

  // Dynamic products
  for (const product of products) {
    const path = `/products/${product.slug.current}`;
    const lastmod = formatDate(product._updatedAt);
    const loc = getUrl(path);
    urlEntries.push(
      buildUrlEntry(loc, {
        changefreq: 'monthly',
        priority: '0.7',
        lastmod,
      })
    );
  }

  // Dynamic posts
  for (const post of posts) {
    const path = `/industry-insights/${post.slug.current}`;
    const lastmod = formatDate(post._updatedAt);
    const loc = getUrl(path);
    urlEntries.push(
      buildUrlEntry(loc, {
        changefreq: 'monthly',
        priority: '0.6',
        lastmod,
      })
    );
  }

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urlEntries,
    '</urlset>',
  ].join('\n');

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
