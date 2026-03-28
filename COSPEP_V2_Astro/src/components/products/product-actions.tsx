"use client";

import { Heart } from "lucide-react";
import { useFavorites } from "@/lib/hooks/use-favorites";
import { ShareMenu } from "./share-menu";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import React from 'react';

interface ProductActionsProps {
    productSlug: string;
    productName: string;
    productDescription?: string;
}

export function ProductActions({ productSlug, productName, productDescription }: ProductActionsProps) {
    const { isFavorite, toggleFavorite, isClient } = useFavorites();
    const [isFav, setIsFav] = useState(false);

    // Update favorite status when client is ready
    useEffect(() => {
        if (isClient) {
            setIsFav(isFavorite(productSlug));
        }
    }, [isClient, isFavorite, productSlug]);

    const handleFavoriteClick = () => {
        const added = toggleFavorite(productSlug);
        setIsFav(added);

        if (added) {
            toast.success("Added to favorites!", {
                description: `${productName} has been added to your favorites.`,
            });
        } else {
            toast.info("Removed from favorites", {
                description: `${productName} has been removed from your favorites.`,
            });
        }
    };

    // Don't render until client-side to prevent hydration mismatch
    if (!isClient) {
        return (
            <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                    className="w-10 h-10 rounded-full glass-strong flex items-center justify-center hover:bg-white/20 transition-colors"
                    disabled
                >
                    <Heart className="w-5 h-5 text-white" />
                </button>
                <div className="w-10 h-10 rounded-full glass-strong flex items-center justify-center opacity-50">
                    <ShareMenu productSlug={productSlug} productName={productName} />
                </div>
            </div>
        );
    }

    return (
        <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
                onClick={handleFavoriteClick}
                className="w-10 h-10 rounded-full glass-strong flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 active:scale-95"
                aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
                title={isFav ? "Remove from favorites" : "Add to favorites"}
            >
                <Heart
                    className={`w-5 h-5 transition-all ${isFav
                        ? "fill-red-500 text-red-500"
                        : "text-white"
                        }`}
                />
            </button>
            <ShareMenu
                productSlug={productSlug}
                productName={productName}
                productDescription={productDescription}
            />
        </div>
    );
}
