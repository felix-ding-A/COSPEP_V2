"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Beaker, Leaf, Pill, FlaskRound, Droplet, TestTube, ShoppingBag, Award, Sparkles } from "lucide-react";

// Icon mapping for categories
const categoryIcons: Record<string, any> = {
    peptides: Beaker,
    "plant-extracts": Leaf,
    supplements: Pill,
    intermediates: FlaskRound,
    cosmetics: Droplet,
    "custom-synthesis": TestTube,
    "raw-materials": ShoppingBag,
    certified: Award,
    default: Sparkles
};

interface CategoryGridProps {
    categories: Array<{
        _id?: string;
        title: string;
        slug: { current: string };
        description?: string;
        productCount?: number;
    }>;
}

export function CategoryGrid({ categories }: CategoryGridProps) {
    // Limit to first 9 categories for 3x3 grid
    const displayCategories = categories.slice(0, 9);

    const getIcon = (slug: string) => {
        const Icon = categoryIcons[slug] || categoryIcons.default;
        return Icon;
    };

    return (
        <section className="py-16 bg-gradient-to-b from-[#0A0E0D] to-[#0F1612]">
            <div className="container mx-auto px-4 md:px-6">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                    >
                        Browse by Category
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        Explore our comprehensive range of pharmaceutical ingredients and custom solutions
                    </motion.p>
                </div>

                {/* Category Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {displayCategories.map((category, index) => {
                        const Icon = getIcon(category.slug.current);

                        return (
                            <motion.div
                                key={category.slug.current}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05, duration: 0.4 }}
                            >
                                <Link
                                    href={`/products?category=${category.slug.current}`}
                                    className="group block h-full"
                                >
                                    <div className="glass h-full rounded-xl p-6 transition-all duration-300 hover:bg-white/10 hover:border-[#B8FF00]/30 border border-white/10">
                                        <div className="flex items-center gap-4">
                                            {/* Icon */}
                                            <div className="w-14 h-14 rounded-lg bg-[#B8FF00]/10 flex items-center justify-center group-hover:bg-[#B8FF00]/20 transition-colors">
                                                <Icon className="w-7 h-7 text-[#B8FF00]" />
                                            </div>

                                            {/* Text */}
                                            <div className="flex-1">
                                                <h3 className="text-lg font-semibold text-white group-hover:text-[#B8FF00] transition-colors">
                                                    {category.title}
                                                </h3>
                                                {category.productCount !== undefined && (
                                                    <p className="text-sm text-gray-400 mt-1">
                                                        {category.productCount} products
                                                    </p>
                                                )}
                                            </div>

                                            {/* Arrow */}
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                                <svg
                                                    className="w-5 h-5 text-[#B8FF00]"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9 5l7 7-7 7"
                                                    />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Description (if available) */}
                                        {category.description && (
                                            <p className="text-sm text-gray-400 mt-3 line-clamp-2">
                                                {category.description}
                                            </p>
                                        )}
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>

                {/* View All Button (if more than 9 categories) */}
                {categories.length > 9 && (
                    <div className="text-center mt-8">
                        <Link
                            href="/products"
                            className="inline-flex items-center gap-2 text-[#B8FF00] hover:text-[#A3E600] font-medium transition-colors"
                        >
                            View All Categories
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
