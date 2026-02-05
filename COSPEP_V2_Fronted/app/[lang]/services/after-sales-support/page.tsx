"use client";

import {
    Headphones,
    MessageCircle,
    FileQuestion,
    Wrench,
    Clock,
    Users,
    BookOpen,
    Shield,
    CheckCircle2,
    ArrowRight,
    Zap,
    Target,
    Award
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useLocale } from "next-intl";

const supportServices = [
    {
        icon: Headphones,
        title: "Technical Consultation",
        description: "Expert guidance on product application, formulation adjustments, and regulatory compliance.",
        features: ["24/7 Availability", "Expert Chemists", "Regulatory Guidance"]
    },
    {
        icon: Wrench,
        title: "Formulation Support",
        description: "Assistance with integrating our ingredients into your specific product formulations.",
        features: ["Review & optimizing", "Stability Testing", "Dosage Recommendations"]
    },
    {
        icon: FileQuestion,
        title: "Documentation",
        description: "Full access to technical data sheets, safety data sheets, and certificates of analysis.",
        features: ["COA & MSDS", "Technical Specs", "Quality Certs"]
    },
    {
        icon: MessageCircle,
        title: "Complaint Resolution",
        description: "Dedicated process for handling any product quality issues or delivery concerns.",
        features: ["Fast Resolution", "Root Cause Analysis", "Corrective Actions"]
    }
];

const responseTimes = [
    {
        icon: Zap,
        tier: "Priority",
        time: "< 2 Hours",
        description: "For critical production-stopping issues",
        color: "text-[#b8ff00]",
        bgColor: "bg-[#b8ff00]/10"
    },
    {
        icon: Clock,
        tier: "Standard",
        time: "< 24 Hours",
        description: "For general technical inquiries",
        color: "text-blue-400",
        bgColor: "bg-blue-400/10"
    },
    {
        icon: Shield,
        tier: "Compliance",
        time: "< 48 Hours",
        description: "For regulatory documentation requests",
        color: "text-purple-400",
        bgColor: "bg-purple-400/10"
    }
];

const supportProcess = [
    {
        step: 1,
        title: "Submission",
        description: "Submit your inquiry via our portal or email"
    },
    {
        step: 2,
        title: "Triage",
        description: "Automatic routing to the relevant expert"
    },
    {
        step: 3,
        title: "Analysis",
        description: "Technical assessment of your requirement"
    },
    {
        step: 4,
        title: "Resolution",
        description: "Detailed response and follow-up support"
    }
];

const commitments = [
    {
        icon: Users,
        title: "Dedicated Team",
        description: "A team of experts assigned to your account for personalized support."
    },
    {
        icon: Target,
        title: "Solution Focused",
        description: "We don't just answer questions; we help you find solutions."
    },
    {
        icon: BookOpen,
        title: "Knowledge Sharing",
        description: "Regular updates on industry trends and technical advancements."
    },
    {
        icon: Award,
        title: "Quality Guarantee",
        description: "We stand behind the quality of our products and support."
    }
];

export default function AfterSalesSupportPage() {
    const locale = useLocale();
    return (
        <main className="min-h-screen bg-[#0A0E0D]">
            {/* Hero Section */}
            <section className="relative bg-[#0A0E0D] py-20 lg:py-28 border-b border-white/10">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            After-Sales
                            <span className="text-[#b8ff00]"> Technical Support</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                            Comprehensive post-purchase support ensuring your success with our products through expert guidance and responsive assistance.
                        </p>
                    </div>
                </div>
                {/* Decorative element */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#b8ff00] to-transparent opacity-50"></div>
            </section>

            {/* Support Services Section */}
            <section className="py-16 lg:py-24 bg-[#0A0E0D]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Our Support Services
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Comprehensive technical support designed to maximize the value of your investment
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {supportServices.map((service, index) => (
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
                                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                        {service.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {service.features.map((feature, i) => (
                                            <span key={i} className="text-xs px-2 py-1 rounded-full bg-[#b8ff00]/10 text-[#b8ff00]">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Response Time Section */}
            <section className="py-16 lg:py-24 bg-[#0A0E0D] border-y border-white/10">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Response Time Commitment
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            We prioritize your inquiries based on urgency to ensure timely resolution
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {responseTimes.map((item, index) => (
                            <Card
                                key={index}
                                className="bg-white/5 border border-white/10 shadow-sm hover:shadow-lg hover:bg-white/10 transition-all duration-300 group text-center"
                            >
                                <CardContent className="pt-8 pb-8">
                                    <div className={`w-20 h-20 rounded-full ${item.bgColor} flex items-center justify-center mx-auto mb-6`}>
                                        <item.icon className={`w-10 h-10 ${item.color}`} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-400 mb-2">
                                        {item.tier}
                                    </h3>
                                    <p className={`${item.color} font-bold text-3xl mb-4`}>
                                        {item.time}
                                    </p>
                                    <p className="text-gray-500 text-sm">
                                        {item.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Support Process Section */}
            <section className="py-16 lg:py-24 bg-[#0A0E0D]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Support Process
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            A streamlined process to ensure quick and effective resolution of your inquiries
                        </p>
                    </div>

                    {/* Desktop Process */}
                    <div className="hidden lg:block">
                        <div className="relative max-w-5xl mx-auto">
                            {/* Connecting Line */}
                            <div className="absolute top-8 left-[10%] right-[10%] h-0.5 bg-[#b8ff00]"></div>

                            <div className="flex justify-between">
                                {supportProcess.map((step, index) => (
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
                                {supportProcess.map((step, index) => (
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

            {/* Our Commitment Section */}
            <section className="py-16 lg:py-24 bg-[#0A0E0D] border-t border-white/10">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Our Commitment to You
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            We are dedicated to your success with unwavering support and partnership
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {commitments.map((item, index) => (
                            <div
                                key={index}
                                className="text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="w-16 h-16 rounded-full bg-[#b8ff00]/10 flex items-center justify-center mx-auto mb-4">
                                    <item.icon className="w-8 h-8 text-[#b8ff00]" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Preview Section */}
            <section className="py-16 lg:py-20 bg-[#0A0E0D] border-t border-white/10">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                                Frequently Asked Questions
                            </h2>
                            <div className="space-y-4">
                                {[
                                    { q: "How quickly can I expect a response?", a: "Priority issues are addressed within 2 hours. Standard inquiries receive a response within 24 hours." },
                                    { q: "Do you provide technical documentation?", a: "Yes, we provide comprehensive COA, MSDS, technical specifications, and application guides for all products." },
                                    { q: "Can I schedule a video consultation?", a: "Absolutely! Video consultations can be scheduled through our online booking system for in-depth technical discussions." }
                                ].map((faq, index) => (
                                    <div key={index} className="border-b border-white/10 pb-4 last:border-0">
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-[#b8ff00] flex-shrink-0 mt-0.5" />
                                            <div>
                                                <h4 className="text-white font-medium mb-1">{faq.q}</h4>
                                                <p className="text-gray-400 text-sm">{faq.a}</p>
                                            </div>
                                        </div>
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
                            Need Technical Assistance?
                        </h2>
                        <p className="text-gray-400 mb-8 text-lg">
                            Our expert team is ready to help you get the most out of our products.
                        </p>
                        <Link
                            href={`/${locale}/contact`}
                            className="inline-flex items-center gap-2 bg-[#b8ff00] hover:bg-[#a3e600] text-[#0A0E0D] font-semibold px-8 py-4 rounded-lg transition-colors"
                        >
                            Contact Technical Support
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
