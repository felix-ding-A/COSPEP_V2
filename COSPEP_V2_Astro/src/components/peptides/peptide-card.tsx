"use client";

import { motion } from "framer-motion";
import { Syringe, ArrowRight } from "lucide-react";
import { Link } from "@/lib/navigation";
import React from 'react';

interface PeptideCardProps {
    name: string;
    variants?: number;
    suppliers?: number;
    slug?: string;
}

export function PeptideCard({ name, variants = 1, suppliers = 1, slug }: PeptideCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group relative bg-[#121915] border border-white/5 rounded-2xl p-6 transition-all duration-300 hover:border-[#B8FF00]/40 hover:shadow-[0_0_30px_rgba(184,255,0,0.1)] overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#B8FF00]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#B8FF00]/10 transition-colors" />

            <div className="flex flex-col h-full space-y-4">
                <div className="flex items-start justify-between">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#B8FF00]/20 group-hover:bg-[#B8FF00]/5 transition-all">
                        <Syringe className="w-6 h-6 text-[#B8FF00]" />
                    </div>
                </div>

                <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#B8FF00] transition-colors leading-tight mb-2">
                        {name}
                    </h3>
                    <div className="space-y-1 text-sm text-gray-400">
                        <p>{variants} {variants === 1 ? 'Variant' : 'Variants'}</p>
                        <p>{suppliers} {suppliers === 1 ? 'Supplier' : 'Suppliers'}</p>
                    </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between group/link">
                    {slug ? (
                        <Link 
                            href={`/products/${slug}`}
                            className="text-[#B8FF00] text-sm font-medium flex items-center gap-2"
                        >
                            View Details
                            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                    ) : (
                        <span className="text-gray-500 text-sm font-medium italic">
                            Inquiry Only
                        </span>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
