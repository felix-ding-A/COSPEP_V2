"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf, Recycle, HeartHandshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function SustainabilityPage() {
    const t = useTranslations('nav.sustainability');

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative py-32 lg:py-48 bg-slate-900 border-b border-primary/10 overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src="/images/sustainability-hero.jpg"
                        alt="Sustainability Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-slate-950/40" />
                </div>

                <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {t('hero.title')}
                    </motion.h1>
                    <motion.p
                        className="text-xs md:text-sm text-gray-300 max-w-2xl mx-auto italic mb-8 opacity-80"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                    >
                        {t('hero.citation')}
                    </motion.p>
                    <motion.p
                        className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-light"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        {t('hero.subtitle')}
                    </motion.p>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Ethical Sourcing */}
                        <motion.div {...fadeIn}>
                            <Card className="h-full bg-background border-border/50 hover:shadow-lg transition-shadow duration-300">
                                <CardContent className="pt-8 text-center flex flex-col items-center h-full">
                                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                                        <Leaf className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{t('sections.sourcing.title')}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {t('sections.sourcing.description')}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Green Manufacturing */}
                        <motion.div {...fadeIn} transition={{ delay: 0.2, duration: 0.6 }}>
                            <Card className="h-full bg-background border-border/50 hover:shadow-lg transition-shadow duration-300">
                                <CardContent className="pt-8 text-center flex flex-col items-center h-full">
                                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                                        <Recycle className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{t('sections.manufacturing.title')}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {t('sections.manufacturing.description')}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Community Support */}
                        <motion.div {...fadeIn} transition={{ delay: 0.4, duration: 0.6 }}>
                            <Card className="h-full bg-background border-border/50 hover:shadow-lg transition-shadow duration-300">
                                <CardContent className="pt-8 text-center flex flex-col items-center h-full">
                                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                                        <HeartHandshake className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{t('sections.community.title')}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {t('sections.community.description')}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
