"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import React from 'react';

const FAQ_DATA = [
    {
        question: "What is the purity level of your peptides?",
        answer: "All our catalog peptides maintain a minimum purity of 98%, with most batches reaching 99%+. Every order is accompanied by a batch-specific COA, HPLC, and Mass Spectrometry report."
    },
    {
        question: "How should I store peptides upon delivery?",
        answer: "For long-term stability, we recommend storing lyophilized peptides at -20°C or -80°C, protected from light and moisture. Once reconstituted, peptides should be used promptly or stored in single-use aliquots at -20°C."
    },
    {
        question: "Do you offer custom synthesis for novel sequences?",
        answer: "Yes, COSPEP specializes in custom peptide synthesis. We can handle complex modifications including cyclization, phosphorylation, fluorescent labeling, and D-amino acid substitutions."
    },
    {
        question: "What is the typical lead time for shipping?",
        answer: "Stock items are typically dispatched within 24-48 hours. For custom manufacturing, lead times generally range from 2 to 3 weeks depending on the length and complexity of the sequence."
    },
    {
        question: "Are your peptides intended for clinical use?",
        answer: "Our products are supplied for laboratory research and development purposes only. They are not intended for human consumption or therapeutic use unless explicitly stated otherwise."
    }
];

export function PeptideFAQ() {
    return (
        <section className="py-24 border-t border-white/5">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <div className="p-3 rounded-2xl bg-[#B8FF00]/10 border border-[#B8FF00]/20">
                        <HelpCircle className="w-8 h-8 text-[#B8FF00]" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
                        <p className="text-gray-400">Everything you need to know about our peptide solutions.</p>
                    </div>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    {FAQ_DATA.map((item, index) => (
                        <AccordionItem 
                            key={index} 
                            value={`item-${index}`}
                            className="glass border border-white/10 rounded-2xl px-6 data-[state=open]:border-[#B8FF00]/30 transition-all overflow-hidden"
                        >
                            <AccordionTrigger className="text-left text-lg font-medium text-white hover:text-[#B8FF00] py-6 hover:no-underline">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-400 text-base pb-6 leading-relaxed">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
