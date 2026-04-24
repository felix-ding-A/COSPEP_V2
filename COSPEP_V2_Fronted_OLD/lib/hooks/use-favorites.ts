"use client";

import { useEffect, useState, useCallback } from "react";

const FAVORITES_KEY = "cospep_favorites";

export interface FavoriteProduct {
    slug: string;
    addedAt: number;
}

export function useFavorites() {
    const [favorites, setFavorites] = useState<string[]>([]);
    const [isClient, setIsClient] = useState(false);

    // Wait for client-side hydration
    useEffect(() => {
        setIsClient(true);
        loadFavorites();
    }, []);

    const loadFavorites = useCallback(() => {
        try {
            const stored = localStorage.getItem(FAVORITES_KEY);
            if (stored) {
                const parsed = JSON.parse(stored) as FavoriteProduct[];
                setFavorites(parsed.map(f => f.slug));
            }
        } catch (error) {
            console.error("Failed to load favorites:", error);
            setFavorites([]);
        }
    }, []);

    const saveFavorites = useCallback((slugs: string[]) => {
        try {
            const products: FavoriteProduct[] = slugs.map(slug => ({
                slug,
                addedAt: Date.now(),
            }));
            localStorage.setItem(FAVORITES_KEY, JSON.stringify(products));
        } catch (error) {
            console.error("Failed to save favorites:", error);
        }
    }, []);

    const addFavorite = useCallback((slug: string) => {
        setFavorites(prev => {
            if (prev.includes(slug)) return prev;
            const updated = [...prev, slug];
            saveFavorites(updated);
            return updated;
        });
    }, [saveFavorites]);

    const removeFavorite = useCallback((slug: string) => {
        setFavorites(prev => {
            const updated = prev.filter(s => s !== slug);
            saveFavorites(updated);
            return updated;
        });
    }, [saveFavorites]);

    const toggleFavorite = useCallback((slug: string) => {
        if (favorites.includes(slug)) {
            removeFavorite(slug);
            return false;
        } else {
            addFavorite(slug);
            return true;
        }
    }, [favorites, addFavorite, removeFavorite]);

    const isFavorite = useCallback((slug: string) => {
        return favorites.includes(slug);
    }, [favorites]);

    return {
        favorites,
        addFavorite,
        removeFavorite,
        toggleFavorite,
        isFavorite,
        isClient, // Prevent hydration mismatch
    };
}
