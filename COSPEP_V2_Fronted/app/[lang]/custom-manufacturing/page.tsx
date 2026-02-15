"use client";

import {
    Factory,
    Tag,
    Pill,
    FlaskConical,
    ClipboardList,
    Microscope,
    TestTube,
    Truck,
    ArrowRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

// OEM Services data
const oemServices = [
    {
        icon: Factory,
        title: "Large-Scale Enterprise",
        description: "Industrial-scale production capabilities with state-of-the-art facilities designed for high-volume manufacturing."
    },
    {
        icon: Tag,
        title: "Private Label",
        description: "Complete white-label solutions allowing you to market premium products under your own brand identity."
    },
    {
        icon: Pill,
        title: "Finished Product",
        description: "End-to-end manufacturing from raw materials to market-ready products with full quality assurance."
    },
    {
        icon: FlaskConical,
        title: "Supported Formats",
        description: "Versatile formulation options including powders, capsules, tablets, liquids, and custom formats."
    }
];

// OEM Process steps
const processSteps = [
    { icon: ClipboardList, title: "Order Placement", step: 1 },
    { icon: Microscope, title: "Formula Evaluation", step: 2 },
    { icon: TestTube, title: "Sample Development", step: 3 },
    { icon: Factory, title: "Mass Production", step: 4 },
    { icon: Truck, title: "Packaging & Delivery", step: 5 }
];

// Success stories data
const successStories = [
    {
        title: "Pet Food Ingredients",
        description: "Premium nutritional supplements and functional ingredients for companion animal nutrition.",
        image: "/images/pet-food-ingredients.webp"
    },
    {
        title: "Livestock Feed Components",
        description: "High-performance feed additives and supplements for agricultural and livestock applications.",
        image: "/images/livestock-feed.webp"
    },
    {
        title: "Nutraceutical Solutions",
        description: "Advanced dietary supplements and functional foods for human health and wellness markets.",
        image: "/images/nutraceuticals.webp"
    }
];

export default function CustomManufacturingPage() {
    return (
        <main className="min-h-screen bg-[#0A0E0D]">
            <Breadcrumbs />
            {/* Hero Section */}
            <section className="relative bg-[#0A0E0D] py-20 lg:py-28 border-b border-white/10">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Custom Manufacturing &
                            <span className="text-[#b8ff00]"> OEM Services</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                            From Concept to Commercialization – Your Trusted Biotech Partner.
                        </p>
                    </div>
                </div>
                {/* Decorative element */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#b8ff00] to-transparent opacity-50"></div>
            </section>

            {/* OEM Services Section */}
            <section className="py-16 lg:py-24 bg-[#0A0E0D]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Our OEM Services
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Comprehensive manufacturing solutions tailored to your business needs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {oemServices.map((service, index) => (
                            <Card
                                key={index}
                                className="bg-white/5 border border-white/10 shadow-sm hover:shadow-md hover:bg-white/10 transition-all duration-300 group"
                            >
                                <CardHeader className="pb-4">
                                    <div className="w-14 h-14 rounded-xl border-2 border-[#b8ff00] flex items-center justify-center mb-4 group-hover:bg-[#b8ff00]/10 transition-colors">
                                        <service.icon className="w-7 h-7 text-[#b8ff00]" strokeWidth={1.5} />
                                    </div>
                                    <CardTitle className="text-xl font-semibold text-white">
                                        {service.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* OEM Process Section */}
            <section className="py-16 lg:py-24 bg-[#0A0E0D] border-y border-white/10">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Our OEM Process
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Quality Checkpoints integrated at every stage
                        </p>
                    </div>

                    {/* Desktop Timeline */}
                    <div className="hidden lg:block">
                        <div className="relative flex items-center justify-between max-w-5xl mx-auto">
                            {/* Connecting Line */}
                            <div className="absolute top-10 left-[10%] right-[10%] h-0.5 bg-white/20">
                                <div className="h-full bg-[#b8ff00] w-full"></div>
                            </div>

                            {processSteps.map((step, index) => (
                                <div key={index} className="relative flex flex-col items-center z-10">
                                    <div className="w-20 h-20 rounded-full bg-[#0A0E0D] border-4 border-[#b8ff00] flex items-center justify-center shadow-lg mb-4">
                                        <step.icon className="w-8 h-8 text-[#b8ff00]" strokeWidth={1.5} />
                                    </div>
                                    <span className="text-xs font-bold text-[#b8ff00] mb-1">Step {step.step}</span>
                                    <span className="text-sm font-semibold text-white text-center whitespace-nowrap">
                                        {step.title}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Timeline */}
                    <div className="lg:hidden">
                        <div className="relative">
                            {/* Vertical Line */}
                            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#b8ff00]"></div>

                            <div className="space-y-8">
                                {processSteps.map((step, index) => (
                                    <div key={index} className="relative flex items-center gap-6 pl-4">
                                        <div className="w-12 h-12 rounded-full bg-[#0A0E0D] border-3 border-[#b8ff00] flex items-center justify-center shadow-md z-10 flex-shrink-0">
                                            <step.icon className="w-5 h-5 text-[#b8ff00]" strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <span className="text-xs font-bold text-[#b8ff00]">Step {step.step}</span>
                                            <h3 className="text-base font-semibold text-white">{step.title}</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Stories Section */}
            <section className="py-16 lg:py-24 bg-[#0A0E0D]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Success Stories
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Discover how we've helped businesses across industries achieve their goals
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {successStories.map((story, index) => (
                            <Card
                                key={index}
                                className="bg-white/5 border border-white/10 shadow-sm hover:shadow-lg hover:bg-white/10 transition-all duration-300 overflow-hidden group"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={story.image}
                                        alt={story.title}
                                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#b8ff00]"></div>
                                </div>
                                <CardContent className="pt-6">
                                    <h3 className="text-xl font-semibold text-white mb-3">
                                        {story.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                        {story.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 lg:py-20 bg-[#0A0E0D] border-t border-white/10">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-gray-400 mb-8 text-lg">
                            Partner with us for reliable, high-quality custom manufacturing solutions.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-[#b8ff00] hover:bg-[#a3e600] text-[#0A0E0D] font-semibold px-8 py-4 rounded-lg transition-colors"
                        >
                            Get Started Today
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
