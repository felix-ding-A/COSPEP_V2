"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import React from 'react';

const carouselItems = [
    { src: "/images/about/qinling-1.webp", alt: "Snow-covered Qinling Mountains" },
    { src: "/images/about/qinling-2.webp", alt: "Sourcing area map" },
    { src: "/images/about/qinling-3.webp", alt: "Autumn foliage in Qinling" },
    { src: "/images/about/qinling-4.webp", alt: "Misty mountain peaks" }
];

export function AboutCarousel() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) return;

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    return (
        <Carousel
            setApi={setApi}
            plugins={[
                Autoplay({
                    delay: 4000,
                }),
            ]}
            className="w-full h-full"
        >
            <CarouselContent className="h-full ml-0">
                {carouselItems.map((item, index) => (
                    <CarouselItem key={index} className="pl-0 h-full">
                        <div className="relative w-full h-full overflow-hidden group">
                            <img
                                src={item.src}
                                alt={item.alt}
                                className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-110"
                                loading={index === 0 ? "eager" : "lazy"}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>

            {/* Navigation Dots */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-10">
                {carouselItems.map((_, index) => (
                    <button
                        key={index}
                        className={cn(
                            "w-2.5 h-2.5 rounded-full transition-all duration-300 shadow-sm",
                            index === current
                                ? "bg-[#B8FF00] w-8"
                                : "bg-white/40 hover:bg-white"
                        )}
                        onClick={() => api?.scrollTo(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </Carousel>
    );
}
