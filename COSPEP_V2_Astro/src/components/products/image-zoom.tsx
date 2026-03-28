"use client";

import Image from '../Image';
import React from 'react';

interface ImageZoomProps {
    src: string;
    alt: string;
    className?: string;
}

export function ImageZoom({ src, alt, className = '' }: ImageZoomProps) {
    return (
        <div className={`relative overflow-hidden h-full w-full ${className}`}>
            <Image
                src={src}
                alt={alt}
                className="object-cover transition-transform duration-500 ease-out hover:scale-110 h-full w-full"
            />
        </div>
    );
}
