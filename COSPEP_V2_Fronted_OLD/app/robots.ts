import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://cospep.com'; // 您的域名

    return {
        rules: [
            {
                // 1. 允许所有常规爬虫 (如 Google, Bing)
                userAgent: '*',
                allow: '/',
                // 如果有后台管理页面不想被搜到，可以在这里加：
                // disallow: '/admin/',
            },
            {
                // 2. 屏蔽常见的 AI 训练爬虫 (防止内容被白嫖)
                userAgent: [
                    'GPTBot',             // ChatGPT
                    'ClaudeBot',          // Claude
                    'CCBot',              // Common Crawl (很多 AI 的数据源)
                    'Amazonbot',          // Alexa / Amazon Q
                    'Applebot-Extended',  // Apple Intelligence
                    'Bytespider',         // 字节跳动 (抖音/TikTok)
                    'FacebookBot',        // Meta
                    'Google-Extended',    // Google Gemini 训练 (不影响 SEO 排名)
                ],
                disallow: '/',
            },
        ],
        // 3. 指路：告诉爬虫 Sitemap 在哪
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}