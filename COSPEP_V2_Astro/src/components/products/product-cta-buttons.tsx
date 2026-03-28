"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import React from 'react';

interface ProductCTAButtonsProps {
    onRequestDataSheet: () => void;
    onContactSales: () => void;
}

export function ProductCTAButtons({ onRequestDataSheet, onContactSales }: ProductCTAButtonsProps) {
    return (
        <div className="flex flex-col sm:flex-row gap-3 w-full mt-4">
            <Button
                size="lg"
                onClick={onRequestDataSheet}
                className="flex-1 bg-[#B8FF00] hover:bg-[#A3E600] text-[#0A0E0D] font-semibold text-lg h-14 group"
            >
                Request Data Sheet
                <Download className="ml-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform" />
            </Button>
            <Button
                variant="outline"
                size="lg"
                onClick={onContactSales}
                className="flex-1 border-white/20 text-white hover:bg-white/10 hover:border-[#B8FF00] hover:text-[#B8FF00] h-14 transition-colors"
            >
                Contact Sales
            </Button>
        </div>
    );
}
