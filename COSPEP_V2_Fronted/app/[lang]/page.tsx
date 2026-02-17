
import { HeroSection } from "@/components/home/hero-section";
import { TrustStatsBar } from "@/components/home/trust-stats-bar";
// 👇 1. Lazy load below-the-fold components
import dynamic from "next/dynamic";
import { client } from "@/lib/sanity";
import { getSiteSettings } from "@/lib/sanity/queries";
const ProductEcosystem = dynamic(() => import("@/components/home/product-ecosystem").then(mod => mod.ProductEcosystem));
const ManufacturingSection = dynamic(() => import("@/components/home/manufacturing-section").then(mod => mod.ManufacturingSection));
const NewsBlogs = dynamic(() => import("@/components/home/news-blogs").then(mod => mod.NewsBlogs));

// 👇 2. Explicitly define static params to FORCE Build-Time Generation (SSG)
export async function generateStaticParams() {
    return [
        { lang: 'en' },
        { lang: 'ar' },
        { lang: 'es' },
        { lang: 'ru' }
    ];
}

export default async function Home() {
    // 👇 3. Use explicit data caching strategies
    const settings = await client.fetch(getSiteSettings, {}, {
        next: { revalidate: 60 }
    });

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "COSPEP",
        "url": "https://cospep.com",
        "logo": "https://cospep.com/logo.webp",
        "description": settings?.heroSubtitle || "Pure, Potent & Naturally Derived Ingredients",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": settings?.address || "Xi'an, Shaanxi, China"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": settings?.whatsapp || "",
            "contactType": "customer service",
            "email": settings?.contactEmail
        },
        "sameAs": [
            "https://www.linkedin.com/company/cospep",
        ]
    };
    return (
        <main className="flex min-h-screen flex-col">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <HeroSection />
            <TrustStatsBar />
            <ProductEcosystem />
            <ManufacturingSection />
            <NewsBlogs />
        </main>
    );
}
