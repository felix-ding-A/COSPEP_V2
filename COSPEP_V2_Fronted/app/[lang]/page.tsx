import { HeroSection } from "@/components/home/hero-section";
import { TrustStatsBar } from "@/components/home/trust-stats-bar";
import { ProductEcosystem } from "@/components/home/product-ecosystem";
import { ManufacturingSection } from "@/components/home/manufacturing-section";
import { NewsBlogs } from "@/components/home/news-blogs";
import { client } from "@/lib/sanity";
import { getSiteSettings } from "@/lib/sanity/queries";

export default async function Home() {
    const settings = await client.fetch(getSiteSettings);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "COSPEP",
        "url": "https://cospsp.com",
        "logo": "https://cospsp.com/logo.png",
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
            // Add other social links if available in settings or config
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
