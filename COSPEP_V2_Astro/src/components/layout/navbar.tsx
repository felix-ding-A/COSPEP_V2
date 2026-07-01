"use client";

import { Link, usePathname, useRouter, useLocale, useTranslations } from "@/lib/navigation";
import { Button } from "@/components/ui/button";
import React from 'react';
import { client } from "@/lib/sanity";
import Image from "@/components/Image";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose
} from "@/components/ui/sheet";
import { Menu, ChevronDown, Search } from "lucide-react";

// Resources submenu items

// Language options

interface NavbarProps {
    lang?: string;
    categories?: any[];
}

export function Navbar({ lang: propLang, categories: initialCategories = [] }: NavbarProps) {
    const router = useRouter();
    const pathname = usePathname();
    const serverLocale = useLocale();
    const currentLocale = propLang || serverLocale;
    const t = useTranslations('nav');
    const [categories, setCategories] = React.useState<any[]>(initialCategories);

    const resourcesMenu = [
        { href: "/industry-insights", label: t('resources.industryInsights') },
        { href: "/resources/sustainability", label: t('resources.sustainability') }
    ];

    const servicesMenu = [
        { href: "/custom-manufacturing", label: t('services.customManufacturing') },
        { href: "/services/packaging-logistics", label: t('services.packagingLogistics') },
        { href: "/services/after-sales-support", label: t('services.afterSalesSupport') }
    ];


    React.useEffect(() => {
        if (initialCategories && initialCategories.length > 0) {
            setCategories(initialCategories);
            return;
        }
        const fetchCategories = async () => {
            const query = `*[_type == "category"] | order(order asc) {
                title, 
                slug, 
                parentCategory,
                order
            }`;
            try {
                const data = await client.fetch(query);
                setCategories(data);
            } catch (error) {
                console.error("Failed to fetch categories", error);
            }
        };
        fetchCategories();
    }, [initialCategories]);

    return (
        <header
            className="sticky top-0 z-50 w-full transition-all duration-300 glass-strong"
        >
            <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <Image
                        src="/logo.webp"
                        alt="COSPEP Logo"
                        width={40}
                        height={40}
                        className="object-contain group-hover:scale-110 transition-transform"
                        priority
                    />
                    <span className="hidden xl:inline text-2xl font-bold text-white tracking-tight group-hover:text-[#B8FF00] transition-colors">COSPEP</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-4 lg:gap-8 text-sm font-medium">

                    {/* Products Dropdown */}
                    <div className="group relative">
                        <Link href="/products" className="flex items-center gap-1 text-white hover:text-[#B8FF00] transition-colors py-4">
                            {t('products')}
                            <ChevronDown className="w-4 h-4" />
                        </Link>
                        <div className="absolute left-0 top-full hidden group-hover:block">
                            <div className="w-[520px] p-4 rounded-lg glass-strong border border-white/10 shadow-lg animate-in fade-in-0 slide-in-from-top-2 duration-300">
                                <div className="grid grid-cols-2 gap-2">
                                    {categories.map((subCat: any) => (
                                        <Link
                                            key={subCat.slug.current}
                                            href={`/products?categories=${subCat.slug.current}`}
                                            className="block rounded-md px-3 py-2 text-sm text-gray-300 hover:bg-[#B8FF00]/10 hover:text-[#B8FF00] transition-colors"
                                        >
                                            {subCat.title}
                                        </Link>
                                    ))}
                                </div>
                                <div className="border-t border-white/10 mt-3 pt-2">
                                    <Link
                                        href="/products"
                                        className="block rounded-md px-3 py-1.5 text-sm text-center text-white hover:bg-[#B8FF00]/10 hover:text-[#B8FF00] font-semibold transition-colors"
                                    >
                                        {t('viewAllProducts')}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Services Dropdown */}
                    <div className="group relative">
                        <button className="flex items-center gap-1 text-white hover:text-[#B8FF00] transition-colors py-4">
                            {t('services.title')}
                            <ChevronDown className="w-4 h-4" />
                        </button>
                        <div className="absolute left-0 top-full hidden w-72 rounded-lg glass-strong border border-white/10 p-2 shadow-lg group-hover:block transition-all animate-in fade-in-0 slide-in-from-top-2 duration-300">
                            {servicesMenu.map((item) => (
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

                    {/* Resources Dropdown */}
                    <div className="group relative">
                        <button className="flex items-center gap-1 text-white hover:text-[#B8FF00] transition-colors py-4">
                            {t('resources.title')}
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
                        {t('about')}
                    </Link>
                </nav>


                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-4">
                    {/* Search Box */}
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            id="navbar-search"
                            name="q"
                            type="text"
                            placeholder="Search products..."
                            className="w-32 lg:w-48 xl:w-64 pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B8FF00] focus:border-transparent transition-all"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    const query = e.currentTarget.value.trim();
                                    if (query) {
                                        router.push(`/search?q=${encodeURIComponent(query)}`);
                                    }
                                }
                            }}
                        />
                    </div>

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
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src="/logo.webp"
                                            alt="COSPEP Logo"
                                            width={32}
                                            height={32}
                                            className="object-contain"
                                        />
                                        <span className="text-xl font-bold text-white">COSPEP</span>
                                    </div>
                                </div>

                                <nav className="flex flex-col gap-4 mt-6 flex-1 min-h-0 overflow-y-auto overscroll-contain pb-4">
                                    {/* Mobile Products - Nested */}
                                    <div>
                                        <Link href="/products" className="text-lg font-medium text-white hover:text-[#B8FF00] mb-2 block">
                                            Products
                                        </Link>
                                        <div className="pl-4 flex flex-col gap-2 border-l-2 border-white/20 ml-1">
                                            {categories.map((subCat: any) => (
                                                <SheetClose asChild key={subCat.slug.current}>
                                                    <Link
                                                        href={`/products?categories=${subCat.slug.current}`}
                                                        className="text-base text-gray-400 hover:text-[#B8FF00]"
                                                    >
                                                        {subCat.title}
                                                    </Link>
                                                </SheetClose>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Mobile Services */}
                                    <div>
                                        <div className="text-lg font-medium text-white mb-2">{t('services.title')}</div>
                                        <div className="pl-4 flex flex-col gap-2 border-l-2 border-white/20 ml-1">
                                            {servicesMenu.map((item) => (
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
                                            About COSPEP
                                        </Link>
                                    </SheetClose>


                                </nav>

                                {/* Contact button - pinned at bottom */}
                                <div className="pt-4 border-t border-white/20 shrink-0">
                                    <SheetClose asChild>
                                        <Button
                                            size="lg"
                                            className="bg-[#B8FF00] hover:bg-[#A3E600] text-[#0A0E0D] font-semibold w-full"
                                            asChild
                                        >
                                            <Link href="/contact">Contact</Link>
                                        </Button>
                                    </SheetClose>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
