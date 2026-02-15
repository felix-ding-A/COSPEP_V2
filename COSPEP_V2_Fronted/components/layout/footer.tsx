import { Link } from "@/lib/navigation";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import { client } from "@/lib/sanity";
import { getSiteSettings } from "@/lib/sanity/queries";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

async function getData() {
    return await client.fetch(getSiteSettings);
}

export async function Footer() {
    const settings = await getData();
    const t = await getTranslations('footer');

    return (
        <div className="w-full h-[450px] bg-muted">
            <footer className="bg-muted text-muted-foreground border-t h-full">
                <div className="container mx-auto px-4 md:px-6 py-12 lg:py-16 h-full flex flex-col justify-between">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

                        {/* Column 1: Company */}
                        <div className="col-span-2 md:col-span-1 space-y-4">
                            <Link href="/" className="flex items-center gap-3 group">
                                <Image
                                    src="/logo.webp"
                                    alt="COSPEP Logo"
                                    width={32}
                                    height={32}
                                    className="object-contain group-hover:scale-110 transition-transform"
                                />
                                <span className="text-2xl font-bold text-primary">COSPEP</span>
                            </Link>
                            <p className="text-sm leading-relaxed max-w-xs">
                                {settings?.heroSubtitle || "Your premier sourcing partner for high-quality botanical ingredients. Bridging the gap between certified standards and global demand."}
                            </p>
                        </div>

                        {/* Column 2: Quick Links */}
                        <div className="space-y-4">
                            <h3 className="text-foreground font-semibold">{t('quickLinks.title')}</h3>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/" className="hover:text-primary">{t('quickLinks.home')}</Link></li>
                                <li><Link href="/about" className="hover:text-primary">{t('quickLinks.about')}</Link></li>
                                <li><Link href="/service" className="hover:text-primary">{t('quickLinks.service')}</Link></li>
                                <li><Link href="/contact" className="hover:text-primary">{t('quickLinks.contact')}</Link></li>
                            </ul>
                        </div>

                        {/* Column 3: Products */}
                        <div className="space-y-4">
                            <h3 className="text-foreground font-semibold">{t('products.title')}</h3>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/products" className="hover:text-primary">{t('products.allIngredients')}</Link></li>
                                <li><Link href="/products?status=Ready%20to%20Ship" className="hover:text-primary">{t('products.readyStock')}</Link></li>
                                <li><Link href="/products?category=Food" className="hover:text-primary">{t('products.foodAdditives')}</Link></li>
                                <li><Link href="/products?category=Cosmetics" className="hover:text-primary">{t('products.cosmeticRaw')}</Link></li>
                            </ul>
                        </div>

                        {/* Column 4: Contact */}
                        <div className="space-y-4">
                            <h3 className="text-foreground font-semibold">{t('contact.title')}</h3>
                            <ul className="space-y-2 text-sm">
                                <li>{settings?.address || "Xi'an, Shaanxi, China"}</li>
                                {settings?.contactEmail && (
                                    <li><a href={`mailto:${settings.contactEmail}`} className="hover:text-primary">{settings.contactEmail}</a></li>
                                )}
                                {settings?.whatsapp && (
                                    <li><a href={`https://wa.me/${settings.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary">{settings.whatsapp}</a></li>
                                )}
                            </ul>
                            <div className="flex gap-4 pt-2">
                                <Link href="#" className="hover:text-primary"><Linkedin className="h-5 w-5" /></Link>
                                <Link href="#" className="hover:text-primary"><Facebook className="h-5 w-5" /></Link>
                                <Link href="#" className="hover:text-primary"><Twitter className="h-5 w-5" /></Link>
                            </div>
                        </div>
                    </div>

                    <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center text-xs mt-auto">
                        <p>&copy; {new Date().getFullYear()} {settings?.heroText || "Prius Group / COSPEP"}. All rights reserved.</p>
                        <div className="flex gap-4 mt-4 md:mt-0">
                            <Link href="/privacy" className="hover:text-foreground">{t('privacyPolicy')}</Link>
                            <Link href="/terms" className="hover:text-foreground">{t('termsOfService')}</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
