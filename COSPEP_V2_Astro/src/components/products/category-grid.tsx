"use client";

import { motion } from "framer-motion";
import { Link } from "@/lib/navigation";
import { Leaf, Apple, Pill, FlaskConical } from "lucide-react";
import React from 'react';

// Main categories to display
const mainCategories = [
    {
        title: "Botanical Extracts",
        value: "botanical-extracts",
        icon: Leaf,
        description: "Natural plant-based extracts and compounds"
    },
    {
        title: "Fruit & Vegetable Powders",
        value: "fruit-vegetable-powders",
        icon: Apple,
        description: "Premium quality fruit and vegetable powders"
    },
    {
        title: "Peptides",
        value: "peptides",
        icon: Pill,
        description: "High-purity peptide compounds"
    },
    {
        title: "Custom Solutions",
        value: "custom-solutions",
        icon: FlaskConical,
        description: "Tailored formulations for your needs"
    }
];

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
                        Explore our comprehensive range of pharmaceutical ingredients and custom solutions
                    </motion.p>
                </div>

                {/* Category Grid - 2x2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
                    {mainCategories.map((category, index) => {
                        const Icon = category.icon;

                        return (
                            <motion.div
                                key={category.value}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                            >
                                <Link
                                    href={`/products?parentCategory=${category.value}`}
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
                                                <p className="text-sm text-gray-400 mt-1">
                                                    {category.description}
                                                </p>
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
