"use client";

import {
    Package,
    Truck,
    Plane,
    Ship,
    Shield,
    FileCheck,
    Thermometer,
    Clock,
    MapPin,
    Box,
    Warehouse,
    ArrowRight,
    CheckCircle2
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useLocale } from "next-intl";

// ... (existing constants)

export default function PackagingLogisticsPage() {
    const locale = useLocale();
    return (
        <main className="min-h-screen bg-[#0A0E0D]">
            {/* Hero Section */}
            <section className="relative bg-[#0A0E0D] py-20 lg:py-28 border-b border-white/10">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Packaging &
                            <span className="text-[#b8ff00]"> Logistics Support</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                            Ensuring product integrity and timely delivery from our facility to your doorstep with professional packaging and global logistics solutions.
                        </p>
                    </div>
                </div>
                {/* Decorative element */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#b8ff00] to-transparent opacity-50"></div>
            </section>

            {/* Packaging Options Section */}
            <section className="py-16 lg:py-24 bg-[#0A0E0D]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Packaging Options
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Flexible packaging solutions designed to protect your products throughout the supply chain
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {packagingOptions.map((option, index) => (
                            <Card
                                key={index}
                                className="bg-white/5 border border-white/10 shadow-sm hover:shadow-md hover:bg-white/10 transition-all duration-300 group"
                            >
                                <CardHeader className="pb-4">
                                    <div className="w-14 h-14 rounded-xl border-2 border-[#b8ff00] flex items-center justify-center mb-4 group-hover:bg-[#b8ff00]/10 transition-colors">
                                        <option.icon className="w-7 h-7 text-[#b8ff00]" strokeWidth={1.5} />
                                    </div>
                                    <CardTitle className="text-xl font-semibold text-white">
                                        {option.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                        {option.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {option.specs.map((spec, i) => (
                                            <span key={i} className="text-xs px-2 py-1 rounded-full bg-[#b8ff00]/10 text-[#b8ff00]">
                                                {spec}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Shipping Methods Section */}
            <section className="py-16 lg:py-24 bg-[#0A0E0D] border-y border-white/10">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Global Shipping Solutions
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Multiple shipping options to meet your timeline and budget requirements
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {shippingMethods.map((method, index) => (
                            <Card
                                key={index}
                                className="bg-white/5 border border-white/10 shadow-sm hover:shadow-lg hover:bg-white/10 transition-all duration-300 group text-center"
                            >
                                <CardContent className="pt-8 pb-8">
                                    <div className="w-20 h-20 rounded-full border-4 border-[#b8ff00] flex items-center justify-center mx-auto mb-6 group-hover:bg-[#b8ff00]/10 transition-colors">
                                        <method.icon className="w-10 h-10 text-[#b8ff00]" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        {method.title}
                                    </h3>
                                    <p className="text-[#b8ff00] font-bold text-lg mb-4">
                                        {method.highlight}
                                    </p>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {method.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Logistics Process Section */}
            <section className="py-16 lg:py-24 bg-[#0A0E0D]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Our Logistics Process
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            A streamlined process ensuring your products arrive safely and on time
                        </p>
                    </div>

                    {/* Desktop Process */}
                    <div className="hidden lg:block">
                        <div className="relative max-w-5xl mx-auto">
                            {/* Connecting Line */}
                            <div className="absolute top-8 left-[10%] right-[10%] h-0.5 bg-[#b8ff00]"></div>

                            <div className="flex justify-between">
                                {logisticsSteps.map((step, index) => (
                                    <div key={index} className="relative flex flex-col items-center z-10 w-40">
                                        <div className="w-16 h-16 rounded-full bg-[#0A0E0D] border-4 border-[#b8ff00] flex items-center justify-center shadow-lg mb-4">
                                            <span className="text-[#b8ff00] font-bold text-xl">{step.step}</span>
                                        </div>
                                        <h3 className="text-sm font-semibold text-white text-center mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-xs text-gray-500 text-center">
                                            {step.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Mobile Process */}
                    <div className="lg:hidden">
                        <div className="relative">
                            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#b8ff00]"></div>
                            <div className="space-y-6">
                                {logisticsSteps.map((step, index) => (
                                    <div key={index} className="relative flex items-start gap-6 pl-4">
                                        <div className="w-12 h-12 rounded-full bg-[#0A0E0D] border-3 border-[#b8ff00] flex items-center justify-center shadow-md z-10 flex-shrink-0">
                                            <span className="text-[#b8ff00] font-bold">{step.step}</span>
                                        </div>
                                        <div className="pt-2">
                                            <h3 className="text-base font-semibold text-white">{step.title}</h3>
                                            <p className="text-sm text-gray-500">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quality & Compliance Section */}
            <section className="py-16 lg:py-24 bg-[#0A0E0D] border-t border-white/10">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Quality & Compliance
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Meeting international standards with comprehensive documentation and safety protocols
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {complianceFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className="text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="w-16 h-16 rounded-full bg-[#b8ff00]/10 flex items-center justify-center mx-auto mb-4">
                                    <feature.icon className="w-8 h-8 text-[#b8ff00]" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Document Checklist Section */}
            <section className="py-16 lg:py-20 bg-[#0A0E0D]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                                Export Documentation Included
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {[
                                    "Certificate of Analysis (COA)",
                                    "Material Safety Data Sheet (MSDS)",
                                    "Commercial Invoice",
                                    "Packing List",
                                    "Certificate of Origin",
                                    "Phytosanitary Certificate"
                                ].map((doc, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#b8ff00] flex-shrink-0" />
                                        <span className="text-gray-300 text-sm">{doc}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 lg:py-20 bg-[#0A0E0D] border-t border-white/10">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Need a Customized Logistics Plan?
                        </h2>
                        <p className="text-gray-400 mb-8 text-lg">
                            Our logistics team is ready to create a tailored solution for your specific requirements.
                        </p>
                        <Link
                            href={`/${locale}/contact`}
                            className="inline-flex items-center gap-2 bg-[#b8ff00] hover:bg-[#a3e600] text-[#0A0E0D] font-semibold px-8 py-4 rounded-lg transition-colors"
                        >
                            Contact Our Logistics Team
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
