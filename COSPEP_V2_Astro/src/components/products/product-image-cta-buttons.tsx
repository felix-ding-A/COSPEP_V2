"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import React from 'react';

export function ProductImageCTAButtons() {
    const handleRequestDataSheet = () => {
        const tabsSection = document.getElementById("product-tabs");
        if (tabsSection) {
            tabsSection.scrollIntoView({ behavior: "smooth", block: "start" });
            setTimeout(() => {
                const documentsTab = document.querySelector('[value="documents"]') as HTMLButtonElement;
                if (documentsTab) documentsTab.click();
            }, 300);
        }
    };

    const handleContactSales = () => {
        const contactForm = document.getElementById("contact-form");
        if (contactForm) {
            contactForm.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className="flex flex-col gap-3 w-full mt-4 max-w-md">
            <Button
                size="default"
                onClick={handleRequestDataSheet}
                className="w-full bg-[#B8FF00] hover:bg-[#A3E600] text-[#0A0E0D] font-semibold group"
            >
                Request Data Sheet
                <Download className="ml-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
            </Button>
            <Button
                variant="outline"
                size="default"
                onClick={handleContactSales}
                className="w-full border-white/20 text-white hover:bg-white/10 hover:border-[#B8FF00] hover:text-[#B8FF00] transition-colors"
            >
                Contact Sales
            </Button>
        </div>
    );
}
