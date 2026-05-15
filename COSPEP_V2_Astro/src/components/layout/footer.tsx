import React from 'react';
import { Link, useTranslations } from "@/lib/navigation";
import { client } from "@/lib/sanity";
import { getSiteSettings } from "@/lib/sanity/queries";
import Image from "@/components/Image";

// Custom SVG Icons as Lucide has removed brand icons in newer versions
const LinkedinIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
);

interface FooterProps {
    lang?: string;
}

export function Footer({ lang: propLang }: FooterProps) {
    const [settings, setSettings] = React.useState<any>(null);
    const t = useTranslations('footer');

    React.useEffect(() => {
        const fetchSettings = async () => {
            const data = await client.fetch(getSiteSettings);
            setSettings(data);
        };
        fetchSettings();
    }, []);

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
                                <li><Link href="/services/packaging-logistics" className="hover:text-primary">{t('quickLinks.service')}</Link></li>
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
                                <li>{settings?.address || "Xi'an International Trade & Logistics Park"}</li>
                                {settings?.contactEmail && (
                                    <li><a href={`mailto:${settings.contactEmail}`} className="hover:text-primary">{settings.contactEmail}</a></li>
                                )}
                                {settings?.whatsapp && (
                                    <li><a href={`https://wa.me/${settings.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary">{settings.whatsapp}</a></li>
                                )}
                            </ul>
                            <div className="flex gap-4 pt-2">
                                <Link href="#" className="hover:text-primary" aria-label="Follow COSPEP on LinkedIn"><LinkedinIcon className="h-5 w-5" /></Link>
                                <Link href="#" className="hover:text-primary" aria-label="Follow COSPEP on Facebook"><FacebookIcon className="h-5 w-5" /></Link>
                                <Link href="#" className="hover:text-primary" aria-label="Follow COSPEP on Twitter"><TwitterIcon className="h-5 w-5" /></Link>
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
