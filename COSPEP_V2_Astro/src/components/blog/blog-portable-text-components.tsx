import { urlFor } from "@/lib/sanity";
import React from 'react';

// Custom components for PortableText in blog posts
export const blogPortableTextComponents = {
    types: {
        image: ({ value }: any) => {
            if (!value?.asset) return null;
            return (
                <div className="my-8">
                    <img
                        src={urlFor(value).url()}
                        alt={value.alt || 'Blog image'}
                        className="rounded-2xl w-full h-auto border border-white/10"
                    />
                    {value.caption && (
                        <p className="text-sm text-gray-400 mt-4 text-center italic">
                            {value.caption}
                        </p>
                    )}
                </div>
            );
        },
        video: ({ value }: any) => {
            if (!value?.asset) return null;
            const videoUrl = typeof value.asset === 'string' ? value.asset : "";
            return (
                <div className="my-8">
                    <video controls className="w-full rounded-2xl border border-white/10">
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    {value.caption && (
                        <p className="text-sm text-gray-400 mt-4 text-center italic">
                            {value.caption}
                        </p>
                    )}
                </div>
            );
        },
    },
};
