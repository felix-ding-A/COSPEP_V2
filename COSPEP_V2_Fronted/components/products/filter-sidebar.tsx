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
import { Category } from "@/lib/sanity/queries";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useDebounce } from "@/lib/hooks/use-debounce"; // We need to create this hook or implement debounce logic

export function FilterSidebar({ categories }: { categories: Category[] }) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [search, setSearch] = useState(searchParams.get("search") || "");
    const [selectedCategory, setSelectedCategory] = useState(searchParams.get("categorySlug") || "");
    const [readyToShip, setReadyToShip] = useState(searchParams.get("stockStatus") === "Ready to Ship");

    // Simple debounce/update logic
    useEffect(() => {
        const handler = setTimeout(() => {
            updateFilters();
        }, 500);

        return () => clearTimeout(handler);
    }, [search, selectedCategory, readyToShip]);

    const updateFilters = () => {
        const params = new URLSearchParams();
        if (search) params.set("search", search);
        if (selectedCategory) params.set("categorySlug", selectedCategory);
        if (readyToShip) params.set("stockStatus", "Ready to Ship");

        router.push(`?${params.toString()}`);
    };

    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <h3 className="font-semibold tracking-tight">Search</h3>
                <Input
                    placeholder="Search by Name or CAS (e.g. 58-08-2)"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <Separator />

            <Accordion type="single" collapsible defaultValue="stock">
                <AccordionItem value="stock">
                    <AccordionTrigger>Stock Status</AccordionTrigger>
                    <AccordionContent>
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="ready-stock"
                                checked={readyToShip}
                                onCheckedChange={(checked) => setReadyToShip(checked as boolean)}
                            />
                            <Label htmlFor="ready-stock" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Ready to Ship
                            </Label>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <Separator />

            <Accordion type="single" collapsible defaultValue="application">
                <AccordionItem value="application">
                    <AccordionTrigger>Application</AccordionTrigger>
                    <AccordionContent>
                        <div className="space-y-2">
                            {categories.map((cat) => (
                                <div key={cat.slug.current} className="flex items-center space-x-2">
                                    <Checkbox
                                        id={cat.slug.current}
                                        checked={selectedCategory === cat.slug.current}
                                        onCheckedChange={(checked) => setSelectedCategory(checked ? cat.slug.current : "")}
                                    />
                                    <Label htmlFor={cat.slug.current} className="text-sm font-normal">
                                        {cat.title}
                                    </Label>
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
