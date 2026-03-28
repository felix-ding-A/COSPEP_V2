"use client";

import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import type { Category } from "@/lib/sanity/queries";
import { useRouter, useSearchParams } from "@/lib/navigation";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { ContactCard } from "./contact-card";
import React from 'react';

// Certification options
const certifications = [
    { id: "gmp", label: "cGMP Certified" },
    { id: "fda", label: "FDA Approved" },
    { id: "organic", label: "Organic" },
    { id: "iso", label: "ISO Certified" },
    { id: "halal", label: "Halal" },
    { id: "kosher", label: "Kosher" },
];

export function FilterSidebar({ categories }: { categories: Category[] }) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [search, setSearch] = useState(searchParams.get("search") || "");
    const [selectedCategories, setSelectedCategories] = useState<string[]>(
        searchParams.get("categories")?.split(",").filter(Boolean) || []
    );
    const [selectedCertifications, setSelectedCertifications] = useState<string[]>(
        searchParams.get("certifications")?.split(",").filter(Boolean) || []
    );
    const [readyToShip, setReadyToShip] = useState(searchParams.get("stockStatus") === "Ready to Ship");
    const parentCategory = searchParams.get("parentCategory") || "";

    // Filter categories based on parentCategory
    const filteredCategories = parentCategory
        ? categories.filter(cat => cat.parentCategory === parentCategory)
        : categories;

    // Debounced update
    useEffect(() => {
        const handler = setTimeout(() => {
            updateFilters();
        }, 500);

        return () => clearTimeout(handler);
    }, [search, selectedCategories, selectedCertifications, readyToShip]);

    const updateFilters = () => {
        const params = new URLSearchParams(window.location.search);
        if (search) params.set("search", search);
        else params.delete("search");

        if (selectedCategories.length > 0) params.set("categories", selectedCategories.join(","));
        else params.delete("categories");

        if (selectedCertifications.length > 0) params.set("certifications", selectedCertifications.join(","));
        else params.delete("certifications");

        if (readyToShip) params.set("stockStatus", "Ready to Ship");
        else params.delete("stockStatus");

        if (parentCategory) params.set("parentCategory", parentCategory);

        // Prevent infinite loop if params didn't change
        const newSearch = params.toString();
        const currentSearch = window.location.search.replace(/^\?/, '');
        if (newSearch !== currentSearch) {
             router.push(`?${newSearch}`);
        }
    };

    const toggleCategory = (slug: string) => {
        setSelectedCategories(prev =>
            prev.includes(slug)
                ? prev.filter(s => s !== slug)
                : [...prev, slug]
        );
    };

    const toggleCertification = (id: string) => {
        setSelectedCertifications(prev =>
            prev.includes(id)
                ? prev.filter(c => c !== id)
                : [...prev, id]
        );
    };

    const clearAllFilters = () => {
        setSearch("");
        setSelectedCategories([]);
        setSelectedCertifications([]);
        setReadyToShip(false);
        router.push("/products");
    };

    const hasActiveFilters = search || selectedCategories.length > 0 || selectedCertifications.length > 0 || readyToShip;

    return (
        <div className="space-y-6">
            {/* Search */}
            <div className="space-y-3">
                <h3 className="font-semibold text-white">Search Products</h3>
                <Input
                    placeholder="Search by name or CAS..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="bg-white/5 border-white/10 text-white placeholder-gray-500 focus:border-[#B8FF00] focus:ring-[#B8FF00]"
                />
            </div>

            <Separator className="bg-white/10" />

            {/* Categories */}
            <Accordion type="single" collapsible defaultValue="categories">
                <AccordionItem value="categories" className="border-white/10">
                    <AccordionTrigger className="text-white hover:text-[#B8FF00] hover:no-underline">
                        Categories
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="space-y-3 pt-2">
                            {filteredCategories.map((cat) => (
                                <div key={cat.slug.current} className="flex items-center space-x-2">
                                    <Checkbox
                                        id={cat.slug.current}
                                        checked={selectedCategories.includes(cat.slug.current)}
                                        onCheckedChange={() => toggleCategory(cat.slug.current)}
                                        className="border-white/30 data-[state=checked]:bg-[#B8FF00] data-[state=checked]:border-[#B8FF00]"
                                    />
                                    <Label
                                        htmlFor={cat.slug.current}
                                        className="text-sm font-normal text-gray-300 cursor-pointer hover:text-white"
                                    >
                                        {cat.title}
                                    </Label>
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <Separator className="bg-white/10" />

            {/* Certifications */}
            <Accordion type="single" collapsible defaultValue="certifications">
                <AccordionItem value="certifications" className="border-white/10">
                    <AccordionTrigger className="text-white hover:text-[#B8FF00] hover:no-underline">
                        Certifications
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="space-y-3 pt-2">
                            {certifications.map((cert) => (
                                <div key={cert.id} className="flex items-center space-x-2">
                                    <Checkbox
                                        id={cert.id}
                                        checked={selectedCertifications.includes(cert.id)}
                                        onCheckedChange={() => toggleCertification(cert.id)}
                                        className="border-white/30 data-[state=checked]:bg-[#B8FF00] data-[state=checked]:border-[#B8FF00]"
                                    />
                                    <Label
                                        htmlFor={cert.id}
                                        className="text-sm font-normal text-gray-300 cursor-pointer hover:text-white"
                                    >
                                        {cert.label}
                                    </Label>
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <Separator className="bg-white/10" />

            {/* Stock Status */}
            <Accordion type="single" collapsible defaultValue="stock">
                <AccordionItem value="stock" className="border-white/10">
                    <AccordionTrigger className="text-white hover:text-[#B8FF00] hover:no-underline">
                        Stock Status
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="flex items-center space-x-2 pt-2">
                            <Checkbox
                                id="ready-stock"
                                checked={readyToShip}
                                onCheckedChange={(checked) => setReadyToShip(checked as boolean)}
                                className="border-white/30 data-[state=checked]:bg-[#B8FF00] data-[state=checked]:border-[#B8FF00]"
                            />
                            <Label
                                htmlFor="ready-stock"
                                className="text-sm font-normal text-gray-300 cursor-pointer hover:text-white"
                            >
                                Ready to Ship
                            </Label>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            {/* Clear Filters */}
            {hasActiveFilters && (
                <>
                    <Separator className="bg-white/10" />
                    <Button
                        variant="outline"
                        onClick={clearAllFilters}
                        className="w-full border-white/20 text-white hover:bg-white/10 hover:text-[#B8FF00]"
                    >
                        <X className="w-4 h-4 mr-2" />
                        Clear All Filters
                    </Button>
                </>
            )}

            <Separator className="bg-white/10" />

            {/* Contact Card */}
            <ContactCard />
        </div>
    );
}
