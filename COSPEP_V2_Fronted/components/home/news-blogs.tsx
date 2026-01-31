"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const blogPosts = [
    {
        title: "COSPEP Wins Best Innovation Award at Global Pharma 2026",
        category: "Company News",
        image: "/images/blog-1.png",
        date: "January 15, 2026",
        link: "/blog/innovation-award-2026"
    },
    {
        title: "Breakthrough in Peptide Stability: New Research Published",
        category: "R&D Research",
        image: "/images/blog-2.png",
        date: "December 28, 2025",
        link: "/blog/peptide-stability-research"
    },
    {
        title: "Launching Our New Sustainable Extraction Facility in Oregon",
        category: "Sustainability",
        image: "/images/blog-3.png",
        date: "December 15, 2025",
        link: "/blog/sustainable-facility-launch"
    }
];

export function NewsBlogs() {
    return (
        <section className="py-24 bg-gradient-to-b from-[#0F1612] to-[#0A0E0D]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-2 rounded-full border border-[#B8FF00]/20 text-[#B8FF00] text-sm font-medium mb-4 uppercase tracking-wider"
                        >
                            Latest Updates
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-white"
                        >
                            News & Blogs
                        </motion.h2>
                    </div>

                    {/* Navigation Arrows */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="hidden md:flex gap-2"
                    >
                        <button className="w-12 h-12 rounded-full glass-subtle hover:bg-white/10 flex items-center justify-center transition-all group">
                            <ChevronLeft className="w-5 h-5 text-white group-hover:text-[#B8FF00]" />
                        </button>
                        <button className="w-12 h-12 rounded-full glass-subtle hover:bg-white/10 flex items-center justify-center transition-all group">
                            <ChevronRight className="w-5 h-5 text-white group-hover:text-[#B8FF00]" />
                        </button>
                    </motion.div>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={post.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Link href={post.link} className="group block">
                                <div className="glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                                    {/* Image */}
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 rounded-full bg-[#B8FF00] text-[#0A0E0D] text-xs font-semibold uppercase tracking-wider">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                                        <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-[#B8FF00] transition-colors">
                                            {post.title}
                                        </h3>
                                        <div className="flex items-center text-[#B8FF00] text-sm font-medium">
                                            Read More
                                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
