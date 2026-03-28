import type { Product } from "@/lib/sanity/queries";
import { ProductCard } from "./product-card";
import React from 'react';

interface RecommendedProductsProps {
    products: Product[];
}

export function RecommendedProducts({ products }: RecommendedProductsProps) {
    if (!products || products.length === 0) return null;

    return (
        <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center justify-center gap-3 text-center">
                <span className="hidden sm:block w-12 h-0.5 bg-gradient-to-r from-transparent to-[#B8FF00]"></span>
                Featured Products
                <span className="hidden sm:block w-12 h-0.5 bg-gradient-to-l from-transparent to-[#B8FF00]"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
}
