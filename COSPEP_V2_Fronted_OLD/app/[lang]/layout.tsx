import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "@/app/globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";
// Removed duplicate Toaster import

const fontSans = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
    display: 'swap'
});

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    // You might want to use getTranslations here if you have metadata in your messages
    // const t = await getTranslations({ locale: lang, namespace: 'Metadata' });

    const baseUrl = 'https://cospep.com';

    return {
        title: {
            default: "COSPEP - Pure, Potent & Naturally Derived",
            template: "%s | COSPEP"
        },
        description: "Ethically sourced and sustainably made to empower consistency in health you can trust, for maximum impact on your goals.",
        metadataBase: new URL(baseUrl),
        openGraph: {
            title: "COSPEP - Pure, Potent & Naturally Derived",
            description: "Ethically sourced and sustainably made to empower consistency in health you can trust.",
            url: `${baseUrl}/${lang}`,
            siteName: "COSPEP",
            images: [
                {
                    url: '/logo.webp', // Or a specific OG image if available
                    width: 1200,
                    height: 630,
                    alt: 'COSPEP Logo',
                },
            ],
            locale: lang,
            type: 'website',
        },
        icons: {
            icon: [
                { url: '/favicon.webp', type: 'image/webp' },
            ],
            apple: [
                { url: '/apple-touch-icon.webp', sizes: '180x180', type: 'image/webp' },
            ],
        },
    };
}

export default async function RootLayout({
    children,
    params
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}>) {
    const { lang } = await params;
    const messages = await getMessages();

    // Set text direction based on language (Arabic uses RTL)
    const dir = lang === 'ar' ? 'rtl' : 'ltr';

    return (
        <html lang={lang} dir={dir} className="dark">
            <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
                <NextIntlClientProvider messages={messages}>
                    <Navbar />
                    {children}
                    <Footer />
                    <Toaster />
                </NextIntlClientProvider>
                {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
                    <>
                        <Script
                            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
                            strategy="lazyOnload"
                        />
                        <Script id="google-analytics" strategy="lazyOnload">
                            {`
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {
                                    page_path: window.location.pathname,
                                });
                            `}
                        </Script>
                    </>
                )}
            </body>
        </html>
    );
}

