'use client';

import Image from 'next/image';

interface ImageZoomProps {
    src: string;
    alt: string;
    className?: string;
}

export function ImageZoom({ src, alt, className = '' }: ImageZoomProps) {
    return (
        <div className={`relative overflow-hidden ${className}`}>
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover transition-transform duration-500 ease-out hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 450px"
                priority
            />
        </div>
    );
}
