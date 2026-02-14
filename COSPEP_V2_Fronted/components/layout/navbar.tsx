"use client";

import { Link, usePathname, useRouter } from "@/lib/navigation";
import { useLocale, useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";
import React from 'react';
import { client } from "@/lib/sanity";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose
} from "@/components/ui/sheet";
import { Menu, ChevronDown, Search, Globe } from "lucide-react";

// Resources submenu items

// Language options
const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' }
];

export function Navbar() {
    const router = useRouter();
    const pathname = usePathname();
    const currentLocale = useLocale();
    const t = useTranslations('nav');
    const [categories, setCategories] = React.useState<any[]>([]);
    const [isLangDropdownOpen, setIsLangDropdownOpen] = React.useState(false);
    const [expandedMobileCategory, setExpandedMobileCategory] = React.useState<string | null>(null);
    const [expandedDesktopCategory, setExpandedDesktopCategory] = React.useState<string | null>(null);

    // Main categories definition
    const mainCategories = [
        { title: 'Botanical Extracts', value: 'botanical-extracts' },
        { title: 'Fruit & Vegetable Powders', value: 'fruit-vegetable-powders' },
        { title: 'Peptides', value: 'peptides' },
        { title: 'Custom Solutions', value: 'custom-solutions' }
    ];

    // Group subcategories by parent
    const groupedCategories = React.useMemo(() => {
        const grouped: Record<string, any[]> = {};
        mainCategories.forEach(mc => {
            grouped[mc.value] = categories.filter(cat => cat.parentCategory === mc.value);
        });
        return grouped;
    }, [categories]);

    const resourcesMenu = [
        { href: "/industry-insights", label: t('resources.industryInsights') },
        { href: "/resources/sustainability", label: t('resources.sustainability') }
    ];

    const servicesMenu = [
        { href: "/custom-manufacturing", label: t('services.customManufacturing') },
        { href: "/services/packaging-logistics", label: t('services.packagingLogistics') },
        { href: "/services/after-sales-support", label: t('services.afterSalesSupport') }
    ];

    const handleLanguageChange = (newLocale: string) => {
        // Navigate to the same page but with different locale
        router.replace(pathname, { locale: newLocale });
        // Close dropdown after selection
        setIsLangDropdownOpen(false);
    };

    React.useEffect(() => {
        const fetchCategories = async () => {
            const query = `*[_type == "category"] | order(parentCategory asc, order asc) {
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
    }, []);

    return (
        <header
            className="sticky top-0 z-50 w-full transition-all duration-300 glass-strong"
        >
            <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <img
                        src="/logo.png"
                        alt="COSPEP Logo"
                        className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
                    />
                    <span className="text-2xl font-bold text-white tracking-tight group-hover:text-[#B8FF00] transition-colors">COSPEP</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">

                    {/* Products Dropdown - Two Column Layout */}
                    <div className="group relative">
                        <Link href="/products" className="flex items-center gap-1 text-white hover:text-[#B8FF00] transition-colors py-4">
                            {t('products')}
                            <ChevronDown className="w-4 h-4" />
                        </Link>
                        <div className="absolute left-0 top-full hidden group-hover:block">
                            <div className="flex rounded-lg glass-strong border border-white/10 shadow-lg overflow-hidden animate-in fade-in-0 slide-in-from-top-2 duration-300">
                                {/* Left Column - Main Categories */}
                                <div className="w-72 h-96 border-r border-white/10 p-2 flex flex-col">
                                    {mainCategories.map((mainCat) => (
                                        <div
                                            key={mainCat.value}
                                            className="group/cat relative"
                                            onMouseEnter={() => setExpandedDesktopCategory(mainCat.value)}
                                        >
                                            <div className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-white hover:bg-[#B8FF00]/10 hover:text-[#B8FF00] transition-colors cursor-pointer">
                                                <span>{mainCat.title}</span>
                                                <ChevronDown className="w-4 h-4 -rotate-90" />
                                            </div>
                                        </div>
                                    ))}
                                    <div className="border-t border-white/10 my-1"></div>
                                    <Link
                                        href="/products"
                                        className="block rounded-md px-3 py-2 text-sm text-white hover:bg-[#B8FF00]/10 hover:text-[#B8FF00] font-semibold transition-colors"
                                    >
                                        {t('viewAllProducts')}
                                    </Link>
                                </div>

                                {/* Right Column - Subcategories */}
                                <div className="w-80 h-96 p-3 bg-white/5">
                                    {expandedDesktopCategory && groupedCategories[expandedDesktopCategory]?.length > 0 ? (
                                        <div className="space-y-1">
                                            <div className="text-xs text-gray-400 uppercase tracking-wider mb-2 px-2">
                                                {mainCategories.find(cat => cat.value === expandedDesktopCategory)?.title}
                                            </div>
                                            {groupedCategories[expandedDesktopCategory].map((subCat: any) => (
                                                <Link
                                                    key={subCat.slug.current}
                                                    href={`/products?categories=${subCat.slug.current}`}
                                                    className="block rounded-md px-3 py-2 text-sm text-gray-300 hover:bg-[#B8FF00]/10 hover:text-[#B8FF00] transition-colors"
                                                >
                                                    {subCat.title}
                                                </Link>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-center h-full text-sm text-gray-500">
                                            Hover over a category
                                        </div>
                                    )}
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
                            type="text"
                            placeholder="Search products..."
                            className="w-64 pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B8FF00] focus:border-transparent transition-all"
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

                    {/* Language Switcher */}
                    <div className="relative">
                        <button
                            onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                            onBlur={(e) => {
                                // Close dropdown when clicking outside, but not when clicking inside the dropdown
                                if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                                    setTimeout(() => setIsLangDropdownOpen(false), 200);
                                }
                            }}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all"
                        >
                            <Globe className="w-4 h-4" />
                            <span className="text-sm font-medium uppercase">
                                {currentLocale}
                            </span>
                            <ChevronDown className={`w-4 h-4 transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isLangDropdownOpen && (
                            <div className="absolute right-0 top-full mt-2 w-48 rounded-lg glass-strong border border-white/10 p-2 shadow-lg animate-in fade-in-0 slide-in-from-top-2 duration-300 z-50">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => handleLanguageChange(lang.code)}
                                        className={`w-full flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${currentLocale === lang.code
                                            ? 'bg-[#B8FF00]/20 text-[#B8FF00]'
                                            : 'text-white hover:bg-[#B8FF00]/10 hover:text-[#B8FF00]'
                                            }`}
                                    >
                                        <span className="text-lg">{lang.flag}</span>
                                        <span>{lang.name}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
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
                                        <img
                                            src="/logo.png"
                                            alt="COSPEP Logo"
                                            className="w-8 h-8 object-contain"
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
                                        <div className="pl-4 flex flex-col gap-3 border-l-2 border-white/20 ml-1">
                                            {mainCategories.map((mainCat) => (
                                                <div key={mainCat.value}>
                                                    <button
                                                        onClick={() => setExpandedMobileCategory(
                                                            expandedMobileCategory === mainCat.value ? null : mainCat.value
                                                        )}
                                                        className="flex items-center justify-between w-full text-base text-gray-300 hover:text-[#B8FF00] transition-colors"
                                                    >
                                                        <span>{mainCat.title}</span>
                                                        <ChevronDown className={`w-4 h-4 transition-transform ${expandedMobileCategory === mainCat.value ? 'rotate-180' : ''}`} />
                                                    </button>
                                                    {expandedMobileCategory === mainCat.value && groupedCategories[mainCat.value]?.length > 0 && (
                                                        <div className="pl-3 mt-2 flex flex-col gap-2 border-l border-white/10">
                                                            {groupedCategories[mainCat.value].map((subCat: any) => (
                                                                <SheetClose asChild key={subCat.slug.current}>
                                                                    <Link
                                                                        href={`/products?categories=${subCat.slug.current}`}
                                                                        className="text-sm text-gray-400 hover:text-[#B8FF00]"
                                                                    >
                                                                        {subCat.title}
                                                                    </Link>
                                                                </SheetClose>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
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
                                            About Us
                                        </Link>
                                    </SheetClose>

                                    {/* Mobile Language Switcher */}
                                    <div className="mt-4 pt-4 border-t border-white/20">
                                        <div className="text-lg font-medium text-white mb-3">Language</div>
                                        <div className="flex flex-col gap-2">
                                            {languages.map((lang) => (
                                                <button
                                                    key={lang.code}
                                                    onClick={() => handleLanguageChange(lang.code)}
                                                    className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${currentLocale === lang.code
                                                        ? 'bg-[#B8FF00]/20 text-[#B8FF00]'
                                                        : 'text-gray-400 hover:bg-[#B8FF00]/10 hover:text-[#B8FF00]'
                                                        }`}
                                                >
                                                    <span className="text-lg">{lang.flag}</span>
                                                    <span>{lang.name}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

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
