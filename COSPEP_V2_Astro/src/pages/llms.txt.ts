import { getProducts, getPosts } from '@/lib/sanity/queries';

export async function GET() {
  try {
    const products = await getProducts();
    const posts = await getPosts();
    const baseUrl = 'https://cospep.com';

    let content = `# COSPEP\n\n`;
    content += `> Leading Chinese Peptide Manufacturer & Plant Extracts Supplier. Specialist in high-purity bioactive peptides, bulk botanical extracts, and custom synthesis for global B2B sourcing.\n\n`;

    // 1. Core Products 静态板块
    content += `## Core Products\n\n`;
    content += `- [Bioactive Peptides](${baseUrl}/peptides): Comprehensive catalog of research and cosmetic peptides.\n`;
    content += `- [Plant Extracts](${baseUrl}/products): Pure, potent botanical extracts derived from natural sources.\n`;
    content += `- [Custom Synthesis](${baseUrl}/custom-manufacturing): Tailored manufacturing services from gram to kilogram scale.\n\n`;

    // 2. Key Services 静态板块
    content += `## Key Services\n\n`;
    content += `- [Manufacturing](${baseUrl}/service): cGMP compliant production facilities and quality control.\n`;
    content += `- [R&D](${baseUrl}/about): Advanced research and development for innovative ingredients.\n`;
    content += `- [Logistics](${baseUrl}/contact): Global shipping and supply chain management for pharmaceutical intermediates.\n\n`;

    // 3. 动态加载产品列表 (增加安全性检查)
    content += `## Full Product Catalog\n\n`;
    if (products && Array.isArray(products)) {
      products.forEach(product => {
        if (product?.slug?.current) {
          const desc = product.description || product.seoDesc || 'High-quality bioactive product.';
          const cleanDesc = String(desc).replace(/<[^>]*>?/gm, '').replace(/\n/g, ' ').trim();
          content += `- [${product.name}](${baseUrl}/products/${product.slug.current}): ${cleanDesc}\n`;
        }
      });
    }

    // 4. 动态加载博客文章 (增加安全性检查)
    content += `\n## Industry Insights & Blog\n\n`;
    if (posts && Array.isArray(posts)) {
      posts.forEach(post => {
        if (post?.slug?.current) {
          const excerpt = post.excerpt || post.seoDescription || 'Latest industry update.';
          const cleanExcerpt = String(excerpt).replace(/<[^>]*>?/gm, '').replace(/\n/g, ' ').trim();
          content += `- [${post.title}](${baseUrl}/industry-insights/${post.slug.current}): ${cleanExcerpt}\n`;
        }
      });
    }

    // 5. Information 静态板块
    content += `\n## Information\n\n`;
    content += `- [About COSPEP](${baseUrl}/about): Company mission, certifications, and expertise.\n`;
    content += `- [Contact](${baseUrl}/contact): Business inquiries and customer support for international buyers.\n`;
    content += `- [Industry Insights](${baseUrl}/industry-insights): Latest updates on peptide technology and market trends.\n\n`;

    // 6. Technical Details 静态板块
    content += `## Technical Details\n`;
    content += `- HQ: Xi'an International Trade & Logistics Park, China.\n`;
    content += `- Compliance: ISO, cGMP standards.\n`;
    content += `- Target Market: Pharmaceutical, Cosmetic, and Nutraceutical industries.\n`;

    return new Response(content, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=3600' // 缓存 1 小时提高性能
      },
    });
  } catch (error) {
    console.error('Error generating llms.txt:', error);
    return new Response('Error generating llms.txt', { status: 500 });
  }
}
