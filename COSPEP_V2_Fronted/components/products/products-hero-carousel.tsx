"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";

const carouselSlides = [
    {
        image: "/images/product-carousel-1.png",
        title: "Bio-Active Peptides",
        subtitle: "Pharmaceutical Grade • GMP Certified",
        description: "Advanced peptide synthesis for research and therapeutic applications",
        cta: "Explore Peptides",
        href: "/products?category=peptides"
    },
    {
        image: "/images/product-carousel-2.png",
        title: "Premium Plant Extracts",
        subtitle: "100% Natural • Sustainable Sourcing",
        description: "High-purity botanical extracts for nutraceuticals and cosmetics",
        cta: "View Extracts",
        href: "/products?category=plant-extracts"
    },
    {
        image: "/images/product-carousel-3.png",
        title: "Custom Health Supplements",
        subtitle: "Made to Order • Quality Assured",
        description: "Turnkey supplement manufacturing from formulation to packaging",
        cta: "Start Your Project",
        href: "/contact"
    }
];

export function ProductsHeroCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
        }, 6000); // 6 seconds per slide
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
    };

    const currentData = carouselSlides[currentSlide];

    return (
        <section className="relative h-[333px] md:h-[400px] overflow-hidden bg-[#0A0E0D]">
            {/* Background Images */}
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
                            style={{ backgroundImage: `url('${currentData.image}')` }}
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E0D]/95 via-[#0A0E0D]/80 to-[#0A0E0D]/60" />
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass-subtle hover:bg-white/10 flex items-center justify-center transition-all group"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-6 h-6 text-white group-hover:text-[#B8FF00] transition-colors" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass-subtle hover:bg-white/10 flex items-center justify-center transition-all group"
                aria-label="Next slide"
            >
                <ChevronRight className="w-6 h-6 text-white group-hover:text-[#B8FF00] transition-colors" />
            </button>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-2xl">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="space-y-6"
                            >
                                {/* Badge */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2, duration: 0.4 }}
                                    className="inline-block"
                                >
                                    <div className="glass px-4 py-2 rounded-full text-sm text-white/90 tracking-wide">
                                        {currentData.subtitle}
                                    </div>
                                </motion.div>

                                {/* Title */}
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                                    {currentData.title}
                                </h1>

                                {/* Description */}
                                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                                    {currentData.description}
                                </p>

                                {/* CTA Button */}
                                <Button
                                    size="lg"
                                    className="bg-[#B8FF00] hover:bg-[#A3E600] text-[#0A0E0D] font-semibold px-8 py-6 text-lg group mt-4"
                                    asChild
                                >
                                    <Link href={currentData.href}>
                                        {currentData.cta}
                                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {carouselSlides.map((_, index) => (
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
        </section>
    );
}
