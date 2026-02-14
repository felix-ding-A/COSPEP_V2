"use client";

import { Link, usePathname } from "@/lib/navigation";
import { useLocale } from "next-intl";
import React from "react";

const BASE_URL = "https://cospep.com";

/**
 * Converts a URL slug to a display label.
 * Replaces hyphens with spaces and capitalizes each word.
 */
function formatLabel(slug: string): string {
    return slug
        .replace(/-/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());
}

interface BreadcrumbItem {
    label: string;
    href: string;
}

export function Breadcrumbs() {
    const pathname = usePathname(); // already locale-stripped, e.g. "/products/peptides"
    const locale = useLocale();

    // Don't render breadcrumbs on the homepage
    if (pathname === "/" || pathname === "") return null;

    const segments = pathname.split("/").filter(Boolean);

    // Build breadcrumb items: Home + each path segment
    const items: BreadcrumbItem[] = [
        { label: "Home", href: "/" },
        ...segments.map((segment, index) => ({
            label: formatLabel(segment),
            href: "/" + segments.slice(0, index + 1).join("/"),
        })),
    ];

    // JSON-LD structured data for SEO (BreadcrumbList schema)
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.label,
            item:
                index < items.length - 1
                    ? `${BASE_URL}/${locale}${item.href === "/" ? "" : item.href}`
                    : undefined, // Google recommends omitting `item` for the last breadcrumb
        })),
    };

    return (
        <>
            {/* JSON-LD for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Visual breadcrumbs */}
            <nav aria-label="Breadcrumb" className="py-3">
                <ol className="flex flex-wrap items-center gap-1 text-sm">
                    {items.map((item, index) => {
                        const isLast = index === items.length - 1;

                        return (
                            <li key={item.href} className="flex items-center gap-1">
                                {/* Separator */}
                                {index > 0 && (
                                    <span className="text-gray-500 select-none mx-1">/</span>
                                )}

                                {isLast ? (
                                    // Current page — not clickable, gray text
                                    <span className="text-gray-400 font-medium truncate max-w-[200px]">
                                        {item.label}
                                    </span>
                                ) : (
                                    // Clickable link
                                    <Link
                                        href={item.href}
                                        className="text-gray-500 hover:text-[#B8FF00] transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </>
    );
}
