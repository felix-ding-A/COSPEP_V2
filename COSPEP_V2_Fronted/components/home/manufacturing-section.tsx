"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const features = [
    "Validated Formula Design",
    "Turnkey Manufacturing Solutions",
    "Regulatory Compliance Support",
    "Precision Ingredient Sourcing",
    "Very strict compliance support",
    "Packaging & Label Design"
];

export function ManufacturingSection() {
    return (
        <section className="py-24 bg-[#0A0E0D]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span className="inline-block px-4 py-2 rounded-full border border-[#B8FF00]/20 text-[#B8FF00] text-sm font-medium uppercase tracking-wider">
                        Full-Service Operation
                    </span>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            End-to-End<br />
                            Supplement Manufacturing
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            From concept to shelf-ready product, we guide you through every step of the
                            supplement manufacturing journey with industry-leading expertise and quality
                            assurance.
                        </p>

                        {/* Features List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.4 }}
                                    className="flex items-start gap-3"
                                >
                                    <div className="mt-1 w-5 h-5 rounded-full bg-[#B8FF00]/10 flex items-center justify-center flex-shrink-0">
                                        <Check className="w-3 h-3 text-[#B8FF00]" />
                                    </div>
                                    <span className="text-gray-300">{feature}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <Button
                            size="lg"
                            className="bg-[#B8FF00] hover:bg-[#A3E600] text-[#0A0E0D] font-semibold px-8"
                            asChild
                        >
                            <Link href="/service">
                                Start Your Project
                                <Sparkles className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden glass group">
                            <Image
                                src="/images/manufacturing.png"
                                alt="Manufacturing Facility"
                                width={600}
                                height={400}
                                className="w-full h-auto"
                            />

                            {/* Badge Overlay */}
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className="absolute bottom-8 right-8"
                            >
                                <div className="glass-strong rounded-2xl p-6 text-center">
                                    <Award className="w-8 h-8 text-[#B8FF00] mx-auto mb-2" />
                                    <div className="text-3xl font-bold text-white mb-1">2004+</div>
                                    <div className="text-sm text-gray-400">100+ Year</div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
