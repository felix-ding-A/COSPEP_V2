"use client";

import { BadgeCheck, Scale, FlaskConical } from "lucide-react";
import { AnimationWrapper } from "@/components/ui/animation-wrapper";

export function WhyChooseUs() {
    const features = [
        {
            icon: BadgeCheck,
            title: "Strict Auditing",
            description: "Every supplier is vetted against ISO and GMP standards. We allow no compromise on safety and authenticity."
        },
        {
            icon: TruckIcon,
            title: "Consolidated Shipping",
            description: "Save on logistics by combining multiple small orders into one shipment. We handle the export documentation."
        },
        {
            icon: FlaskConical,
            title: "Third-Party Testing",
            description: "Independent lab testing available upon request. Verify potency, heavy metals, and pesticide residues."
        }
    ];

    return (
        <section className="py-24 lg:py-32 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <AnimationWrapper animation="fade-up" className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl tracking-tight">Why Partner With COSPEP?</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                        We bridge the gap between quality manufacturing and global demand with rigorous standards.
                    </p>
                </AnimationWrapper>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <AnimationWrapper
                            key={feature.title}
                            animation="fade-up"
                            delay={index * 0.15}
                        >
                            <div className="bg-card p-8 rounded-xl shadow-sm border border-slate-200 space-y-4 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 h-full">
                                <div className="h-14 w-14 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center ring-1 ring-primary/10">
                                    <feature.icon className="h-7 w-7 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </AnimationWrapper>
                    ))}
                </div>
            </div>
        </section>
    )
}

function TruckIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
            <path d="M15 18H9" />
            <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
            <circle cx="17" cy="18" r="2" />
            <circle cx="7" cy="18" r="2" />
        </svg>
    )
}
