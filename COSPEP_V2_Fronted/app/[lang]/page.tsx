import { HeroSection } from "@/components/home/hero-section";
import { TrustStatsBar } from "@/components/home/trust-stats-bar";
import { FeaturedProducts } from "@/components/home/featured-products";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { useTranslations } from "next-intl";

export default function Home() {
    const t = useTranslations('Index'); // Placeholder

    return (
        <main className="flex min-h-screen flex-col">
            <HeroSection />
            <TrustStatsBar />
            <FeaturedProducts />
            <WhyChooseUs />
        </main>
    );
}
