"use client";

import { Link, usePathname, useRouter } from "@/lib/navigation";
import { Button } from "@/components/ui/button";
import React from 'react';
import { client } from "@/lib/sanity";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose
} from "@/components/ui/sheet";
import { Menu, Search } from "lucide-react";

export function Navbar() {
    //   const pathname = usePathname(); // Can be used for active state style
    const router = useRouter();
    const [categories, setCategories] = React.useState<any[]>([]);
    const [searchQuery, setSearchQuery] = React.useState("");

    React.useEffect(() => {
        const fetchCategories = async () => {
            // Basic query to get categories
            const query = `*[_type == "category"]{title, slug}`;
            try {
                const data = await client.fetch(query);
                setCategories(data);
            } catch (error) {
                console.error("Failed to fetch categories", error);
            }
        };
        fetchCategories();
    }, []);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
        }
    };

    const links = [
        { href: "/", label: "Home" },
        // Products will be handled separately
        { href: "/service", label: "Service" },
        { href: "/about", label: "About" },
        { href: "/blog", label: "Blog" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">

                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-primary tracking-tight">COSPEP</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <Link href="/" className="transition-colors hover:text-primary">Home</Link>

                    {/* Products Dropdown */}
                    <div className="group relative">
                        <Link href="/products" className="flex items-center gap-1 transition-colors hover:text-primary py-4">
                            Products
                        </Link>
                        <div className="absolute left-0 top-full hidden w-48 rounded-md border bg-popover p-2 text-popover-foreground shadow-md group-hover:block transition-all animate-in fade-in zoom-in-95 duration-200">
                            {categories.length > 0 ? (
                                categories.map((cat: any) => (
                                    <Link
                                        key={cat._id || cat.slug.current}
                                        href={`/products?category=${cat.slug.current}`}
                                        className="block rounded-sm px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                                    >
                                        {cat.title}
                                    </Link>
                                ))
                            ) : (
                                <div className="px-3 py-2 text-sm text-muted-foreground">Loading...</div>
                            )}
                            <div className="border-t my-1"></div>
                            <Link href="/products" className="block rounded-sm px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground font-semibold">
                                View All Products
                            </Link>
                        </div>
                    </div>

                    <Link href="/service" className="transition-colors hover:text-primary">Service</Link>
                    <Link href="/about" className="transition-colors hover:text-primary">About</Link>
                    <Link href="/blog" className="transition-colors hover:text-primary">Blog</Link>
                    <Link href="/contact" className="transition-colors hover:text-primary">Contact</Link>
                </nav>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <form onSubmit={handleSearch} className="relative">
                        <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <input
                                type="search"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="h-9 w-[200px] rounded-md border border-input bg-transparent pl-9 pr-3 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </div>
                    </form>
                </div>

                {/* Mobile Menu (Sheet) */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" aria-label="Open Menu">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <div className="flex flex-col h-full">
                                <div className="flex items-center justify-between py-4">
                                    <span className="text-2xl font-bold text-primary">COSPEP</span>
                                </div>
                                <div className="mt-4 mb-4">
                                    <form onSubmit={(e) => {
                                        handleSearch(e);
                                        // Close sheet logic could be here if we had access to open state
                                    }} className="relative">
                                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                        <input
                                            type="search"
                                            placeholder="Search..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="w-full h-10 rounded-md border border-input bg-transparent pl-9 pr-3 text-sm"
                                        />
                                    </form>
                                </div>
                                <nav className="flex flex-col gap-4">
                                    <SheetClose asChild>
                                        <Link href="/" className="text-lg font-medium hover:text-primary">Home</Link>
                                    </SheetClose>

                                    {/* Mobile Products Accordion-like structure or just link */}
                                    <div>
                                        <Link href="/products" className="text-lg font-medium hover:text-primary mb-2 block">Products</Link>
                                        <div className="pl-4 flex flex-col gap-2 border-l-2 border-muted ml-1">
                                            {categories.map((cat: any) => (
                                                <SheetClose asChild key={cat._id || cat.slug?.current}>
                                                    <Link
                                                        href={`/products?category=${cat.slug?.current}`}
                                                        className="text-base text-muted-foreground hover:text-primary"
                                                    >
                                                        {cat.title}
                                                    </Link>
                                                </SheetClose>
                                            ))}
                                        </div>
                                    </div>

                                    <SheetClose asChild><Link href="/service" className="text-lg font-medium hover:text-primary">Service</Link></SheetClose>
                                    <SheetClose asChild><Link href="/about" className="text-lg font-medium hover:text-primary">About</Link></SheetClose>
                                    <SheetClose asChild><Link href="/blog" className="text-lg font-medium hover:text-primary">Blog</Link></SheetClose>
                                    <SheetClose asChild><Link href="/contact" className="text-lg font-medium hover:text-primary">Contact</Link></SheetClose>
                                </nav>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
