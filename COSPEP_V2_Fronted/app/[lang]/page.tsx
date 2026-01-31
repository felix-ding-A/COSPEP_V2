import { HeroSection } from "@/components/home/hero-section";
import { TrustStatsBar } from "@/components/home/trust-stats-bar";
import { ProductEcosystem } from "@/components/home/product-ecosystem";
import { ManufacturingSection } from "@/components/home/manufacturing-section";
import { NewsBlogs } from "@/components/home/news-blogs";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col">
            <HeroSection />
            <TrustStatsBar />
            <ProductEcosystem />
            <ManufacturingSection />
            <NewsBlogs />
        </main>
    );
}
