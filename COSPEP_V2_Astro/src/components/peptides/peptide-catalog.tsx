"use client";

import { useState } from "react";
import { PeptideCard } from "./peptide-card";
import { Search, Filter, MessageSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/navigation";
import { motion, AnimatePresence } from "framer-motion";
import React from 'react';

const PEPTIDE_DATA = [
    { name: "5-AMINO-1MQ", variants: 3, suppliers: 7 },
    { name: "ACETIC ACID", variants: 2, suppliers: 2 },
    { name: "ADAMAX", variants: 1, suppliers: 3 },
    { name: "AHK-CU", variants: 2, suppliers: 5 },
    { name: "AOD-9604", variants: 3, suppliers: 5 },
    { name: "ARA-290", variants: 2, suppliers: 5 },
    { name: "B12", variants: 1, suppliers: 2 },
    { name: "BAC WATER", variants: 3, suppliers: 5 },
    { name: "BPC157", variants: 4, suppliers: 8 },
    { name: "+TB500 BPC", variants: 2, suppliers: 6 },
];

export function PeptideCatalog() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredPeptides = PEPTIDE_DATA.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-12">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    <div className="w-2 h-10 bg-[#B8FF00] rounded-full" />
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                        Catalog
                    </h2>
                </div>

                <div className="flex w-full md:w-auto items-center gap-3">
                    <div className="relative flex-1 md:w-80">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Find your required peptide..."
                            className="pl-10 py-6 bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-xl focus-visible:ring-[#B8FF00]/50"
                        />
                    </div>
                    <Button 
                        variant="outline" 
                        size="icon"
                        className="py-6 px-6 border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#B8FF00]/50 rounded-xl transition-all"
                    >
                        <Filter className="w-5 h-5 text-[#B8FF00]" />
                    </Button>
                </div>
            </div>

            {/* Grid Area */}
            <div className="relative min-h-[400px]">
                <AnimatePresence mode="popLayout">
                    {filteredPeptides.length > 0 ? (
                        <motion.div 
                            layout
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
                        >
                            {filteredPeptides.map((peptide) => (
                                <PeptideCard 
                                    key={peptide.name}
                                    name={peptide.name}
                                    variants={peptide.variants}
                                    suppliers={peptide.suppliers}
                                />
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="flex flex-col items-center justify-center py-24 text-center glass rounded-[2rem] border border-dashed border-white/10"
                        >
                            <div className="p-4 rounded-full bg-white/5 mb-6">
                                <Search className="w-12 h-12 text-gray-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">No results found</h3>
                            <p className="text-gray-400 mb-8 max-w-sm">
                                Didn't find what you are looking for?{" "}
                                <Link href="/contact" className="text-[#B8FF00] underline underline-offset-4 hover:text-[#A3E600] transition-colors">
                                    Contact us.
                                </Link>
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
