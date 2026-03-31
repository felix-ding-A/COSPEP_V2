"use client";

import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
    question: string;
    answer: string;
}

export function FaqAccordion({ faqs }: { faqs: FAQ[] }) {
    if (!faqs || faqs.length === 0) return null;

    return (
        <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border border-white/10 rounded-xl overflow-hidden glass px-6 py-2">
                    <AccordionTrigger className="text-left font-semibold text-white hover:text-[#B8FF00] transition-colors py-4">
                        {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400 whitespace-pre-line pb-6 leading-relaxed">
                        {faq.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}
