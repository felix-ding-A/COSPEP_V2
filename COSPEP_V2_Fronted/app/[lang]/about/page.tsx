import { Link } from "@/lib/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, SearchCheck, FlaskConical, Sprout } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">

            {/* Hero Section */}
            <section className="relative py-24 lg:py-32 bg-slate-900 border-b border-primary/10 overflow-hidden">
                {/* Background Map Graphic (Conceptual) */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <circle cx="75" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
                        <circle cx="75" cy="50" r="10" fill="currentColor" className="text-primary" />
                    </svg>
                </div>

                <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                        Bridging Nature's Purity with <span className="text-primary">Scientific Innovation</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
                        Where the ancient wisdom of the Qinling Mountains meets modern scientific precision.
                    </p>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto space-y-20">

                        {/* Phase 1: The Origin */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
                                    <MapPin className="w-4 h-4 mr-2" />
                                    33°N, 107°E — The Origin
                                </div>
                                <h2 className="text-3xl font-bold">From the Heart of Qinling</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Since 2015, COSPEP has been dedicated to bridging the gap between China's premium botanical resources and the global market. Our journey begins at <strong className="text-primary">33°N, 107°E</strong>—the heart of the <strong className="text-primary">Qinling Mountains</strong>, known as the 'Gene Bank' of wild flora.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    We have established a rigorous sourcing network covering a 500km radius around this biodiversity hotspot, ensuring every plant extract we supply benefits from the ideal climate and soil conditions essential for maximum potency.
                                </p>
                            </div>
                            <div className="relative aspect-square md:aspect-auto md:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl border border-border/50">
                                <Carousel
                                    plugins={[
                                        Autoplay({
                                            delay: 4000,
                                        }),
                                    ]}
                                    className="w-full h-full"
                                >
                                    <CarouselContent className="h-full ml-0">
                                        {[
                                            "/images/about/qinling-1.jpg",
                                            "/images/about/qinling-2.jpg",
                                            "/images/about/qinling-3.jpg",
                                            "/images/about/qinling-4.jpg"
                                        ].map((src, index) => (
                                            <CarouselItem key={index} className="pl-0 h-full">
                                                <div className="relative w-full h-full">
                                                    <Image
                                                        src={src}
                                                        alt={`Qinling Mountains Scenery ${index + 1}`}
                                                        fill
                                                        className="object-cover"
                                                        priority={index === 0}
                                                    />
                                                    {/* Gradient overlay for better text contrast if needed, or just aesthetic */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                                                </div>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    {/* Optional: Add navigation buttons if desired, but autoplay is usually sufficient for this hero-like section */}
                                    {/* <CarouselPrevious className="left-4" /> */}
                                    {/* <CarouselNext className="right-4" /> */}
                                </Carousel>
                            </div>
                        </div>

                        {/* Phase 2 & 3 */}
                        <div className="grid md:grid-cols-2 gap-16 md:gap-8">
                            {/* Phase 2: More Than a Trader */}
                            <div className="flex flex-col h-full border-l-4 border-primary/20 pl-8 py-2 hover:border-primary transition-colors duration-300">
                                <h3 className="text-2xl font-bold mb-4 flex items-center">
                                    <SearchCheck className="w-6 h-6 mr-3 text-primary" />
                                    More Than a Trader: We Are Curators
                                </h3>
                                <p className="text-muted-foreground leading-relaxed flex-grow">
                                    We define ourselves as an innovation-driven partner, not just a trader. We understand that quality starts at the source. That’s why we don’t just buy and sell; we screen, audit, and integrate. We have filtered through hundreds of manufacturers to partner exclusively with those who meet the highest GMP and ISO standards, acting as your eyes and ears on the ground to ensure consistency and purity.
                                </p>
                            </div>

                            {/* Phase 3: The Fusion of Bio & Nature */}
                            <div className="flex flex-col h-full border-l-4 border-primary/20 pl-8 py-2 hover:border-primary transition-colors duration-300">
                                <h3 className="text-2xl font-bold mb-4 flex items-center">
                                    <FlaskConical className="w-6 h-6 mr-3 text-primary" />
                                    The Fusion of Bio & Nature
                                </h3>
                                <p className="text-muted-foreground leading-relaxed flex-grow">
                                    The name COSPEP reflects our dual expertise: Cosmetics/Nature and Peptides/Science. Beyond our botanical roots, we are pioneers in supplying high-purity bioactive peptides. By combining the ancient wisdom of herbal medicine with modern synthetic biology, we provide comprehensive ingredient solutions for the pharmaceutical, nutraceutical, and cosmetic industries.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="py-20 bg-muted/30 border-y border-border/50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold mb-4">Core Values</h2>
                        <p className="text-muted-foreground">The pillars of our commitment to quality and innovation.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <Card className="bg-background border-border/50 hover:shadow-lg transition-shadow duration-300">
                            <CardContent className="pt-8 text-center flex flex-col items-center">
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                                    <Sprout className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Geo-Authentic Sourcing</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Leveraging our strategic location in the Qinling region to secure raw materials with the highest active content.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Feature 2 */}
                        <Card className="bg-background border-border/50 hover:shadow-lg transition-shadow duration-300">
                            <CardContent className="pt-8 text-center flex flex-col items-center">
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                                    <SearchCheck className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Rigorous Supplier Screening</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    We enforce a strict 4-step audit process for our manufacturing partners, ensuring compliance with global standards (GMP/ISO).
                                </p>
                            </CardContent>
                        </Card>

                        {/* Feature 3 */}
                        <Card className="bg-background border-border/50 hover:shadow-lg transition-shadow duration-300">
                            <CardContent className="pt-8 text-center flex flex-col items-center">
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                                    <FlaskConical className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Innovation & Customization</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    From standard extracts to custom peptide synthesis and OEM formulation, we adapt our supply chain to your R&D needs.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}
