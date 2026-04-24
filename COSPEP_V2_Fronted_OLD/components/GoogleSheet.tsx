'use client';

import React, { useEffect, useState } from 'react';

interface GoogleSheetProps {
    value: {
        url: string;
        caption?: string;
    };
}

export default function GoogleSheet({ value }: GoogleSheetProps) {
    const [data, setData] = useState<string[][]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!value?.url) return;
        
        fetch(value.url)
            .then(res => res.text())
            .then(text => {
                const rows = text.split('\n').map(row => {
                    return row.split(',').map(cell => cell.replace(/^"(.*)"$/, '$1'));
                });
                setData(rows.filter(row => row.some(cell => cell.trim() !== '')));
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching Google Sheet:', err);
                setLoading(false);
            });
    }, [value?.url]);

    if (loading) return (
        <div className="my-10 h-32 flex items-center justify-center bg-muted/30 rounded-xl border border-border animate-pulse text-muted-foreground">
            Loading spreadsheet data...
        </div>
    );
    
    if (data.length === 0) return null;

    return (
        <div className="my-10 overflow-x-auto rounded-xl border border-border bg-card shadow-sm">
            <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-muted/50 text-xs uppercase tracking-wider text-muted-foreground">
                    <tr>
                        {data[0]?.map((cell, i) => (
                            <th key={i} className="px-6 py-4 font-semibold border-b border-border">{cell}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-border">
                    {data.slice(1).map((row, i) => (
                        <tr key={i} className="hover:bg-muted/30 transition-colors">
                            {row.map((cell, j) => (
                                <td key={j} className="px-6 py-4">{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            {value.caption && (
                <p className="text-xs text-muted-foreground mt-4 text-center italic pb-4">
                    {value.caption}
                </p>
            )}
        </div>
    );
}
