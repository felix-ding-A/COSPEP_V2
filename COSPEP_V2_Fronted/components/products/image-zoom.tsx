'use client';

import { useState, useRef, MouseEvent } from 'react';
import Image from 'next/image';

interface ImageZoomProps {
    src: string;
    alt: string;
    className?: string;
}

export function ImageZoom({ src, alt, className = '' }: ImageZoomProps) {
    const [isZooming, setIsZooming] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        setPosition({ x, y });
    };

    const handleMouseEnter = () => {
        setIsZooming(true);
    };

    const handleMouseLeave = () => {
        setIsZooming(false);
    };

    return (
        <div
            ref={containerRef}
            className={`relative overflow-hidden cursor-crosshair ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Original Image */}
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover transition-opacity duration-300"
                style={{ opacity: isZooming ? 0.5 : 1 }}
                sizes="(max-width: 1024px) 100vw, 450px"
                priority
            />

            {/* Zoomed Image Overlay */}
            {isZooming && (
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: `url(${src})`,
                        backgroundSize: '200%',
                        backgroundPosition: `${position.x}% ${position.y}%`,
                        backgroundRepeat: 'no-repeat',
                    }}
                />
            )}

            {/* Zoom Indicator */}
            {isZooming && (
                <div
                    className="absolute w-32 h-32 border-2 border-white/50 rounded-full pointer-events-none"
                    style={{
                        left: `${position.x}%`,
                        top: `${position.y}%`,
                        transform: 'translate(-50%, -50%)',
                        boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.3)',
                    }}
                />
            )}
        </div>
    );
}
