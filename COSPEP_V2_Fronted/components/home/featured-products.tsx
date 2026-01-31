"use client";

import { Link } from "@/lib/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimationWrapper } from "@/components/ui/animation-wrapper";

// Mock Data until Sanity is populated
const FEATURED_PRODUCTS = [
    {
        id: "1",
        name: "Ginseng Extract",
        cas: "90045-38-8",
        specs: ["80% Ginsenosides", "10:1 Ratio"],
        stock: "Ready to Ship",
        category: "Functional Food"
    },
    {
        id: "2",
        name: "Resveratrol",
        cas: "501-36-0",
        specs: ["98% Pure", "99% Micronized"],
        stock: "Low Stock",
        category: "Cosmetics"
    },
    {
        id: "3",
        name: "Curcumin",
        cas: "458-37-7",
        specs: ["95% Curcuminoids"],
        stock: "Made to Order",
        category: "Supplements"
    }
];

export function FeaturedProducts() {
    return (
        <section className="py-24 lg:py-32 bg-slate-50/50">
            <div className="container mx-auto px-4 md:px-6">
                <AnimationWrapper animation="fade-up" className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-foreground">Featured Ingredients</h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-lg leading-relaxed">
                        Discover our most sought-after botanical extracts, verified for quality and potency.
                    </p>
                </AnimationWrapper>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {FEATURED_PRODUCTS.map((product, index) => (
                        <AnimationWrapper
                            key={product.id}
                            animation="fade-up"
                            delay={index * 0.15}
                        >
                            <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-card text-card-foreground shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 h-full">
                                <div className="p-6 space-y-4">
                                    <div className="flex justify-between items-start">
                                        <Badge variant="secondary" className="mb-2">{product.category}</Badge>
                                        <span className={`text-xs px-2.5 py-1 rounded-full border ${product.stock === 'Ready to Ship' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-amber-50 text-amber-700 border-amber-200'}`}>
                                            {product.stock}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                                        {product.name}
                                    </h3>

                                    <div className="text-sm text-muted-foreground">
                                        <span className="font-semibold text-foreground">CAS No.: </span> {product.cas}
                                    </div>

                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {product.specs.map((spec, i) => (
                                            <span key={i} className="text-xs bg-muted px-3 py-1.5 rounded-md border border-border">
                                                {spec}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-6 pt-0 mt-auto">
                                    <Button asChild className="w-full bg-primary hover:bg-primary/90 hover:scale-[1.02] transition-all duration-300">
                                        <Link href={`/products/${product.id}`}>
                                            View Details
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </AnimationWrapper>
                    ))}
                </div>

                <AnimationWrapper animation="fade-up" delay={0.6} className="mt-16 text-center">
                    <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300 px-8">
                        <Link href="/products">View All Products</Link>
                    </Button>
                </AnimationWrapper>
            </div>
        </section>
    );
}
