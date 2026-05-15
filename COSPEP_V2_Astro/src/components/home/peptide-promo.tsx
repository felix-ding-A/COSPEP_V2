"use client";

import { motion } from "framer-motion";
import { ArrowRight, Microscope } from "lucide-react";
import { Link, useTranslations } from "@/lib/navigation";
import Image from "@/components/Image";
import React from 'react';

export function PeptidePromo() {
    const t = useTranslations('home.peptidePromo');

    return (
        <section className="relative py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                    {/* Background with Generated Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/peptide-promo-bg.webp"
                            alt="Peptide Research"
                            className="object-cover w-full h-full"
                        />
                        {/* Premium Gradient Overlays */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E0D] via-[#0A0E0D]/80 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E0D] via-transparent to-transparent" />
                        <div className="absolute inset-0 bg-[#B8FF00]/5 mix-blend-overlay" />
                    </div>

                    {/* Content Section */}
                    <div className="relative z-10 px-8 py-16 md:px-16 md:py-24 max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-[#B8FF00]/10 border border-[#B8FF00]/20">
                                    <Microscope className="w-5 h-5 text-[#B8FF00]" />
                                </div>
                                <span className="text-[#B8FF00] font-medium tracking-widest uppercase text-sm">
                                    {t('badge')}
                                </span>
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                {t('title')}
                            </h2>

                            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                                {t('subtitle')}
                            </p>

                            <div className="pt-4">
                                <Link
                                    href="/peptides"
                                    className="inline-flex items-center px-8 py-4 bg-[#B8FF00] hover:bg-[#B8FF00]/90 text-[#0A0E0D] font-bold text-lg rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(184,255,0,0.3)] group"
                                >
                                    {t('cta')}
                                    <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 p-12 hidden lg:block">
                        <motion.div
                            animate={{
                                rotate: [0, 360],
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="w-64 h-64 border border-[#B8FF00]/10 rounded-full flex items-center justify-center"
                        >
                            <div className="w-48 h-48 border border-[#B8FF00]/5 rounded-full" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
