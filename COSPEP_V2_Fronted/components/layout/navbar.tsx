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
import { Menu, ChevronDown } from "lucide-react";

// Resources submenu items
const resourcesMenu = [
    { href: "/blog?type=news", label: "News" },
    { href: "/blog", label: "Blogs" },
    { href: "/contact", label: "Customer Service" }
];

export function Navbar() {
    const router = useRouter();
    const [categories, setCategories] = React.useState<any[]>([]);
    const [scrolled, setScrolled] = React.useState(false);

    // Handle scroll for navbar background opacity
    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    React.useEffect(() => {
        const fetchCategories = async () => {
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

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
                    ? 'glass-strong' // More opaque when scrolled
                    : 'glass-subtle' // More transparent at top
                }`}
        >
            <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">

                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2 group">
                    <div className="w-10 h-10 rounded-lg bg-[#B8FF00] flex items-center justify-center">
                        <span className="text-[#0A0E0D] font-bold text-xl">C</span>
                    </div>
                    <span className="text-2xl font-bold text-white tracking-tight group-hover:text-[#B8FF00] transition-colors">COSPEP</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">

                    {/* Products Dropdown */}
                    <div className="group relative">
                        <Link href="/products" className="flex items-center gap-1 text-white hover:text-[#B8FF00] transition-colors py-4">
                            Products
                            <ChevronDown className="w-4 h-4" />
                        </Link>
                        <div className="absolute left-0 top-full hidden w-56 rounded-lg glass-strong border border-white/10 p-2 shadow-lg group-hover:block transition-all animate-in fade-in-0 slide-in-from-top-2 duration-300">
                            {categories.length > 0 ? (
                                categories.map((cat: any) => (
                                    <Link
                                        key={cat._id || cat.slug.current}
                                        href={`/products?category=${cat.slug.current}`}
                                        className="block rounded-md px-3 py-2 text-sm text-white hover:bg-[#B8FF00]/10 hover:text-[#B8FF00] transition-colors"
                                    >
                                        {cat.title}
                                    </Link>
                                ))
                            ) : (
                                <div className="px-3 py-2 text-sm text-gray-400">Loading...</div>
                            )}
                            <div className="border-t border-white/10 my-1"></div>
                            <Link href="/products" className="block rounded-md px-3 py-2 text-sm text-white hover:bg-[#B8FF00]/10 hover:text-[#B8FF00] font-semibold transition-colors">
                                View All Products
                            </Link>
                        </div>
                    </div>

                    <Link href="/service" className="text-white hover:text-[#B8FF00] transition-colors">
                        Pharma Solutions
                    </Link>

                    {/* Resources Dropdown */}
                    <div className="group relative">
                        <button className="flex items-center gap-1 text-white hover:text-[#B8FF00] transition-colors py-4">
                            Resources
                            <ChevronDown className="w-4 h-4" />
                        </button>
                        <div className="absolute left-0 top-full hidden w-56 rounded-lg glass-strong border border-white/10 p-2 shadow-lg group-hover:block transition-all animate-in fade-in-0 slide-in-from-top-2 duration-300">
                            {resourcesMenu.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="block rounded-md px-3 py-2 text-sm text-white hover:bg-[#B8FF00]/10 hover:text-[#B8FF00] transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <Link href="/about" className="text-white hover:text-[#B8FF00] transition-colors">
                        About Us
                    </Link>
                </nav>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <Button
                        size="sm"
                        className="bg-[#B8FF00] hover:bg-[#A3E600] text-[#0A0E0D] font-semibold"
                        asChild
                    >
                        <Link href="/contact">Contact</Link>
                    </Button>
                </div>

                {/* Mobile Menu (Sheet) */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" aria-label="Open Menu">
                                <Menu className="h-6 w-6 text-white" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="glass-strong border-white/10">
                            <div className="flex flex-col h-full">
                                <div className="flex items-center justify-between py-4">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-8 h-8 rounded-lg bg-[#B8FF00] flex items-center justify-center">
                                            <span className="text-[#0A0E0D] font-bold">C</span>
                                        </div>
                                        <span className="text-xl font-bold text-white">COSPEP</span>
                                    </div>
                                </div>

                                <nav className="flex flex-col gap-4 mt-6">
                                    {/* Mobile Products */}
                                    <div>
                                        <Link href="/products" className="text-lg font-medium text-white hover:text-[#B8FF00] mb-2 block">
                                            Products
                                        </Link>
                                        <div className="pl-4 flex flex-col gap-2 border-l-2 border-white/20 ml-1">
                                            {categories.map((cat: any) => (
                                                <SheetClose asChild key={cat._id || cat.slug?.current}>
                                                    <Link
                                                        href={`/products?category=${cat.slug?.current}`}
                                                        className="text-base text-gray-400 hover:text-[#B8FF00]"
                                                    >
                                                        {cat.title}
                                                    </Link>
                                                </SheetClose>
                                            ))}
                                        </div>
                                    </div>

                                    <SheetClose asChild>
                                        <Link href="/service" className="text-lg font-medium text-white hover:text-[#B8FF00]">
                                            Pharma Solutions
                                        </Link>
                                    </SheetClose>

                                    {/* Mobile Resources */}
                                    <div>
                                        <div className="text-lg font-medium text-white mb-2">Resources</div>
                                        <div className="pl-4 flex flex-col gap-2 border-l-2 border-white/20 ml-1">
                                            {resourcesMenu.map((item) => (
                                                <SheetClose asChild key={item.href}>
                                                    <Link
                                                        href={item.href}
                                                        className="text-base text-gray-400 hover:text-[#B8FF00]"
                                                    >
                                                        {item.label}
                                                    </Link>
                                                </SheetClose>
                                            ))}
                                        </div>
                                    </div>

                                    <SheetClose asChild>
                                        <Link href="/about" className="text-lg font-medium text-white hover:text-[#B8FF00]">
                                            About Us
                                        </Link>
                                    </SheetClose>

                                    <SheetClose asChild>
                                        <Button
                                            size="lg"
                                            className="bg-[#B8FF00] hover:bg-[#A3E600] text-[#0A0E0D] font-semibold mt-4"
                                            asChild
                                        >
                                            <Link href="/contact">Contact</Link>
                                        </Button>
                                    </SheetClose>
                                </nav>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
