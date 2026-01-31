"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const products = [
    {
        title: "Bio-Active Peptides",
        description: "Advanced peptide formulations for targeted health outcomes",
        image: "/images/product-peptides.png",
        link: "/products/peptides"
    },
    {
        title: "Pharmaceutical Intermediates",
        description: "High-purity intermediates for pharmaceutical manufacturing",
        image: "/images/product-intermediates.png",
        link: "/products/intermediates"
    },
    {
        title: "Natural Plant Extracts",
        description: "Premium botanical extracts with verified potency",
        image: "/images/product-plants.png",
        link: "/products/extracts"
    },
    {
        title: "Custom Health Supplements",
        description: "Tailored supplement solutions for your needs",
        image: "/images/product-supplements.png",
        link: "/products/supplements"
    }
];

export function ProductEcosystem() {
    return (
        <section className="py-24 bg-gradient-to-b from-background to-[#0F1612]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 rounded-full border border-[#B8FF00]/20 text-[#B8FF00] text-sm font-medium mb-4 uppercase tracking-wider"
                    >
                        Our Product
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        Our Product Ecosystem
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        A comprehensive portfolio designed to empower a truly diverse range of health
                        and industry provision.
                    </motion.p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Link href={product.link} className="group block h-full">
                                <div className="relative h-80 rounded-2xl overflow-hidden">
                                    {/* Background Image */}
                                    <div className="absolute inset-0">
                                        <Image
                                            src={product.image}
                                            alt={product.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E0D] via-[#0A0E0D]/60 to-transparent" />
                                    </div>

                                    {/* Content */}
                                    <div className="relative h-full flex flex-col justify-end p-8">
                                        <div className="glass-subtle rounded-xl p-6 group-hover:bg-white/10 transition-all duration-300">
                                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#B8FF00] transition-colors">
                                                {product.title}
                                            </h3>
                                            <p className="text-gray-300 mb-4">
                                                {product.description}
                                            </p>
                                            <div className="flex items-center text-[#B8FF00] font-medium group-hover:translate-x-2 transition-transform">
                                                Learn More
                                                <ArrowRight className="ml-2 w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
