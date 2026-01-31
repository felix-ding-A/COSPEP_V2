"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";

const carouselImages = [
    "/images/hero-carousel-1.png",
    "/images/hero-carousel-2.png",
    "/images/hero-carousel-3.png"
];

export function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-advance carousel every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Carousel Background Images */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence initial={false}>
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url('${carouselImages[currentSlide]}')` }}
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Dark Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A0E0D]/95 via-[#0A0E0D]/85 to-[#0A0E0D]/90" />
                {/* Subtle Green Tint */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-950/20 to-transparent" />
            </div>

            {/* Carousel Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass-subtle hover:bg-white/10 flex items-center justify-center transition-all group"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-6 h-6 text-white group-hover:text-[#B8FF00] transition-colors" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass-subtle hover:bg-white/10 flex items-center justify-center transition-all group"
                aria-label="Next slide"
            >
                <ChevronRight className="w-6 h-6 text-white group-hover:text-[#B8FF00] transition-colors" />
            </button>

            {/* Carousel Indicators */}
            <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {carouselImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-1 rounded-full transition-all duration-300 ${index === currentSlide
                            ? "w-8 bg-[#B8FF00]"
                            : "w-6 bg-white/30 hover:bg-white/50"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-block"
                    >
                        <div className="glass px-4 py-2 rounded-full text-sm text-white/90 uppercase tracking-wider">
                            <span className="text-[#B8FF00]">●</span> 100% Pure • Clinically Tested
                        </div>
                    </motion.div>

                    {/* Headline */}
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
                        Pure, Potent &<br />
                        <span className="relative inline-block">
                            <span className="relative z-10 text-[#B8FF00]">Naturally Derived</span>
                            {/* Highlight Effect */}
                            <motion.span
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="absolute bottom-2 left-0 h-3 bg-[#B8FF00]/20 -z-0"
                            />
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                    >
                        Ethically sourced and sustainably made to empower consistency in
                        health you can trust, for maximum impact on your goals.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                    >
                        <Button
                            size="lg"
                            className="bg-[#B8FF00] hover:bg-[#A3E600] text-[#0A0E0D] font-semibold px-8 py-6 text-lg group"
                            asChild
                        >
                            <Link href="/contact">
                                Schedule a Doctor
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className="border-2 border-white/20 hover:border-[#B8FF00] hover:bg-[#B8FF00]/10 text-white px-8 py-6 text-lg backdrop-blur-sm group"
                            asChild
                        >
                            <Link href="/products">
                                <Play className="mr-2 h-5 w-5 fill-current" />
                                Quickly Party
                            </Link>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
