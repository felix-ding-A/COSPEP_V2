import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google"; // Changed from Inter
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "@/app/globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";

const fontSans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
    title: "COSPEP - Quality Botanical Ingredients",
    description: "Sourcing premium botanical ingredients for Food, Cosmetics, and Health industries.",
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
        <html lang={lang}>
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
