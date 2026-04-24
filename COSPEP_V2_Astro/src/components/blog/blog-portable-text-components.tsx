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
        table: ({ value }: any) => {
            if (!value?.rows) return null;
            return (
                <div className="my-10 overflow-x-auto rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                    <table className="w-full border-collapse text-left text-sm text-gray-300">
                        <thead className="bg-white/5 text-xs uppercase tracking-wider text-gray-400">
                            <tr>
                                {value.rows[0]?.cells?.map((cell: string, i: number) => (
                                    <th key={i} className="px-6 py-4 font-semibold border-b border-white/10">{cell}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {value.rows.slice(1).map((row: any, i: number) => (
                                <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                                    {row.cells?.map((cell: string, j: number) => (
                                        <td key={j} className="px-6 py-4">{cell}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {value.caption && (
                        <p className="text-xs text-gray-500 mt-4 text-center italic pb-4">
                            {value.caption}
                        </p>
                    )}
                </div>
            );
        },
        googleSheet: ({ value }: any) => {
            const data = value?.sheetData || [];

            if (data.length === 0) return <div className="my-10 p-4 text-center text-gray-500 bg-white/5 rounded-xl border border-white/10">No spreadsheet data available.</div>;

            return (
                <div className="my-10 overflow-x-auto rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                    <table className="w-full border-collapse text-left text-sm text-gray-300">
                        <thead className="bg-white/5 text-xs uppercase tracking-wider text-gray-400">
                            <tr>
                                {data[0]?.map((cell: string, i: number) => (
                                    <th key={i} className="px-6 py-4 font-semibold border-b border-white/10">{cell}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {data.slice(1).map((row: string[], i: number) => (
                                <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                                    {row.map((cell: string, j: number) => (
                                        <td key={j} className="px-6 py-4">{cell}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {value.caption && (
                        <p className="text-xs text-gray-500 mt-4 text-center italic pb-4">
                            {value.caption}
                        </p>
                    )}
                </div>
            );
        }
    },
};
