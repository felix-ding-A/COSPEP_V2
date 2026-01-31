import { Suspense } from "react";
import { getCategories, getProducts } from "@/lib/sanity/queries";
import { FilterSidebar } from "@/components/products/filter-sidebar";
import { ProductCard } from "@/components/products/product-card";
import { ProductsHeroCarousel } from "@/components/products/products-hero-carousel";
import { CategoryGrid } from "@/components/products/category-grid";
import { RequestForm } from "@/components/products/request-form";
import { NewsBlogs } from "@/components/home/news-blogs";
import { Loader2 } from "lucide-react";

export const dynamic = 'force-dynamic';

export default async function ProductsPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const params = await searchParams;
    const search = typeof params.search === "string" ? params.search : "";
    const categorySlug = typeof params.categorySlug === "string" ? params.categorySlug : "";
    const stockStatus = typeof params.stockStatus === "string" ? params.stockStatus : "";

    // Fetch Data
    const [products, categories] = await Promise.all([
        getProducts(search, categorySlug, stockStatus),
        getCategories()
    ]);

    return (
        <div className="min-h-screen bg-[#0A0E0D]">
            {/* Hero Carousel */}
            <ProductsHeroCarousel />

            {/* Category Grid */}
            <CategoryGrid categories={categories} />

            {/* Products Section */}
            <section className="py-16 bg-gradient-to-b from-[#0F1612] to-[#0A0E0D]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="lg:grid lg:grid-cols-4 lg:gap-8">
                        {/* Desktop Sidebar */}
                        <aside className="hidden lg:block sticky top-24 self-start">
                            <FilterSidebar categories={categories} />
                        </aside>

                        {/* Main Content */}
                        <div className="lg:col-span-3">
                            {/* Results Info & Sort */}
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h2 className="text-2xl font-bold text-white">
                                        {search ? `Search Results for "${search}"` : "All Products"}
                                    </h2>
                                    <p className="text-gray-400 text-sm mt-1">
                                        Showing {products.length} product{products.length !== 1 ? "s" : ""}
                                    </p>
                                </div>

                                {/* Sort Dropdown (optional) */}
                                {/* <select className="bg-white/5 border border-white/10 text-white rounded-lg px-4 py-2">
                                    <option>Newest</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                    <option>A-Z</option>
                                </select> */}
                            </div>

                            {/* Product Grid */}
                            {products.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {products.map(product => (
                                        <ProductCard key={product._id} product={product} />
                                    ))}
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center py-20 text-center glass rounded-2xl">
                                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                                        <svg
                                            className="w-8 h-8 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-xl font-semibold text-white mb-2">
                                        No products found
                                    </p>
                                    <p className="text-gray-400">
                                        Try adjusting your filters or search terms
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Online Request Submission */}
            <RequestForm />

            {/* News & Promotions */}
            <div className="bg-gradient-to-b from-[#0A0E0D] to-[#0F1612]">
                <div className="container mx-auto px-4 md:px-6 py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            News & Promotions
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Stay updated with the latest industry news and special offers
                        </p>
                    </div>
                    <NewsBlogs />
                </div>
            </div>
        </div>
    );
}
