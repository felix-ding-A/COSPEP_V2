import { Suspense } from "react";
import { getCategories, getProducts } from "@/lib/sanity/queries";
import { FilterSidebar } from "@/components/products/filter-sidebar";
import { ProductCard } from "@/components/products/product-card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

export const dynamic = 'force-dynamic' // Ensure search params are respected

export default async function ProductCatalogPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const params = await searchParams; // Await params for Next.js 15+
    const search = typeof params.search === "string" ? params.search : "";
    const categorySlug = typeof params.categorySlug === "string" ? params.categorySlug : "";
    const stockStatus = typeof params.stockStatus === "string" ? params.stockStatus : "";

    // Fetch Data
    const [products, categories] = await Promise.all([
        getProducts(search, categorySlug, stockStatus),
        getCategories()
    ]);

    return (
        <div className="container mx-auto px-4 md:px-6 py-8">
            <div className="flex flex-col space-y-4">
                <h1 className="text-3xl font-bold tracking-tight text-primary">Product Catalog</h1>
                <p className="text-muted-foreground">Find the ingredients you need from our verified global network.</p>
            </div>

            <div className="lg:grid lg:grid-cols-4 lg:gap-8 mt-8">
                {/* Desktop Sidebar */}
                <aside className="hidden lg:block sticky top-24 self-start h-[calc(100vh-6rem)] overflow-y-auto pr-4">
                    <FilterSidebar categories={categories} />
                </aside>

                {/* Mobile Filter Trigger */}
                <div className="lg:hidden mb-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" className="w-full">
                                <SlidersHorizontal className="mr-2 h-4 w-4" /> Filters
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left">
                            <div className="mt-8">
                                <FilterSidebar categories={categories} />
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Product Grid */}
                <div className="lg:col-span-3">
                    {products.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products.map(product => (
                                <ProductCard key={product._id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-20 text-center border-2 border-dashed rounded-lg">
                            <p className="text-xl font-semibold text-muted-foreground">No products found matching your criteria.</p>
                            <Button variant="link" className="mt-2 text-primary">Clear all filters</Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
