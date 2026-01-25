"use client";

import { Link, usePathname } from "@/lib/navigation";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose
} from "@/components/ui/sheet";
import { Menu, Search } from "lucide-react";

export function Navbar() {
    //   const pathname = usePathname(); // Can be used for active state style

    const links = [
        { href: "/", label: "Home" },
        { href: "/products", label: "Products" },
        { href: "/service", label: "Service" },
        { href: "/about", label: "About" },
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
                    {links.map(link => (
                        <Link key={link.href} href={link.href} className="transition-colors hover:text-primary">
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-4">
                    {/* Search Icon Placeholder */}
                    {/* <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
            </Button> */}
                    <Button asChild>
                        <Link href="/contact?type=Product%20Quote">Get a Quote</Link>
                    </Button>
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
                                    {/* Close button is auto-added by SheetContent usually, but we can rely on default */}
                                </div>
                                <nav className="flex flex-col gap-6 mt-8">
                                    {links.map(link => (
                                        <SheetClose asChild key={link.href}>
                                            <Link
                                                href={link.href}
                                                className="text-lg font-medium transition-colors hover:text-primary"
                                            >
                                                {link.label}
                                            </Link>
                                        </SheetClose>
                                    ))}
                                    {/* Mobile Actions in Drawer */}
                                    <div className="mt-8">
                                        <SheetClose asChild>
                                            <Button asChild className="w-full text-lg">
                                                <Link href="/contact?type=Product%20Quote">Get a Quote</Link>
                                            </Button>
                                        </SheetClose>
                                    </div>
                                </nav>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
