
import { HeroSection } from "@/components/home/hero-section";
import { TrustStatsBar } from "@/components/home/trust-stats-bar";
// 👇 1. Lazy load below-the-fold components
import nextDynamic from "next/dynamic";
import { client } from "@/lib/sanity";
import { getSiteSettings } from "@/lib/sanity/queries";
const ProductEcosystem = nextDynamic(() => import("@/components/home/product-ecosystem").then(mod => mod.ProductEcosystem));
const ManufacturingSection = nextDynamic(() => import("@/components/home/manufacturing-section").then(mod => mod.ManufacturingSection));
const NewsBlogs = nextDynamic(() => import("@/components/home/news-blogs").then(mod => mod.NewsBlogs));

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const baseUrl = 'https://cospep.com';
    const currentUrl = lang === 'en' ? baseUrl : `${baseUrl}/${lang}`;
    
    return {
        title: "Top Chinese Peptide Suppliers & Plant Extracts | COSPEP",
        description: "Looking for high-quality peptides from China? COSPEP is a leading manufacturer offering direct peptide wholesale China and premium plant extracts for global B2B buyers.",
        keywords: "chinese peptide suppliers, peptide wholesale china, peptides from china, COSPEP, plant extracts supplier, raw cosmetic ingredients",
        alternates: {
            canonical: currentUrl,
            languages: {
                'en': baseUrl,
                'ar': `${baseUrl}/ar`,
                'es': `${baseUrl}/es`,
                'ru': `${baseUrl}/ru`,
            },
        },
    };
}

// 👇 2. Explicitly define static params to FORCE Build-Time Generation (SSG)
export async function generateStaticParams() {
    return [
        { lang: 'en' },
        { lang: 'ar' },
        { lang: 'es' },
        { lang: 'ru' }
    ];
}

export const dynamic = 'force-static';
export const revalidate = 60;

export default async function Home() {
    // 👇 3. Use explicit data caching strategies
    const settings = await client.fetch(getSiteSettings);

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
