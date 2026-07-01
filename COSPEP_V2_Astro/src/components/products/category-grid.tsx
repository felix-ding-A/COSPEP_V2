"use client";

import { motion } from "framer-motion";
import { Link } from "@/lib/navigation";
import { Pill, Sparkles, Brain, Activity, Heart, Eye, Shield, FlaskConical } from "lucide-react";
import React from 'react';

const iconMap: Record<string, any> = {
    'metabolic-weight-management': Activity,
    'tissue-repair-recovery': Heart,
    'cognitive-enhancement': Brain,
    'anti-aging-longevity': Shield,
    'beauty-cosmetics': Sparkles,
    'wellness-recovery': Pill,
    'hair-care-growth': Sparkles,
    'skin-brightening': Eye
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
                        Explore our comprehensive range of high-purity peptides and custom synthesis services
                    </motion.p>
                </div>

                {/* Category Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
                    {categories.map((category, index) => {
                        const Icon = iconMap[category.slug.current] || FlaskConical;

                        return (
                            <motion.div
                                key={category.slug.current}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05, duration: 0.4 }}
                            >
                                <Link
                                    href={`/products?categories=${category.slug.current}`}
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
                                                {category.description && (
                                                    <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                                                        {category.description}
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
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
