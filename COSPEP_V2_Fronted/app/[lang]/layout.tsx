import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "@/app/globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";

const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
    title: "COSPEP - Pure, Potent & Naturally Derived",
    description: "Ethically sourced and sustainably made to empower consistency in health you can trust, for maximum impact on your goals.",
};

export default async function RootLayout({
    children,
    params
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}>) {
    const { lang } = await params;
    const messages = await getMessages();

    return (
        <html lang={lang} className="dark">
            <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
                <NextIntlClientProvider messages={messages}>
                    <Navbar />
                    {children}
                    <Footer />
                    <Toaster />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
