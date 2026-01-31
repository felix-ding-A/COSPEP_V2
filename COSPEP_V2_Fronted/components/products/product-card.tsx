import { Link } from "@/lib/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/lib/sanity/queries";
import Image from "next/image";
import { ShoppingCart, Eye } from "lucide-react";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const isReadyStock = product.stockStatus === 'Ready to Ship';

    return (
        <div className="group relative flex flex-col rounded-xl glass border border-white/10 shadow-lg hover:shadow-2xl hover:border-[#B8FF00]/30 transition-all duration-500 overflow-hidden">
            {/* Image */}
            <div className="aspect-[4/3] w-full overflow-hidden bg-white/5 flex items-center justify-center relative">
                {product.imageUrl ? (
                    <Image
                        src={product.imageUrl}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                ) : (
                    <div className="text-gray-500 text-sm">No Image</div>
                )}

                {/* Stock Indicator */}
                {isReadyStock && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 bg-green-500/90 backdrop-blur-sm px-2 py-1 rounded-full">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-200"></span>
                        </span>
                        <span className="text-xs font-medium text-white">In Stock</span>
                    </div>
                )}

                {/* Category Badge */}
                {product.categories && product.categories.length > 0 && (
                    <div className="absolute top-3 left-3">
                        <Badge className="bg-[#B8FF00]/90 text-[#0A0E0D] hover:bg-[#B8FF00] border-none font-medium">
                            {product.categories[0].title}
                        </Badge>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-5 space-y-3">
                <div className="flex-1">
                    <h3 className="font-bold text-lg text-white group-hover:text-[#B8FF00] transition-colors duration-300 line-clamp-2 mb-2">
                        {product.name}
                    </h3>

                    {product.latinName && (
                        <p className="text-sm italic text-gray-400 line-clamp-1 mb-3">
                            {product.latinName}
                        </p>
                    )}

                    {/* CAS Number */}
                    <div className="flex items-center gap-2 text-sm mb-2">
                        <span className="text-gray-400">CAS:</span>
                        <Badge variant="outline" className="font-mono text-xs border-white/20 text-gray-300">
                            {product.casNumber || 'N/A'}
                        </Badge>
                    </div>

                    {/* Stock Status Badge */}
                    <div className="flex items-center gap-2">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${isReadyStock
                            ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                            : 'bg-white/5 text-gray-400 border border-white/10'
                            }`}>
                            {product.stockStatus || 'Made to Order'}
                        </span>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-3 border-t border-white/10">
                    <Button
                        asChild
                        className="flex-1 bg-[#B8FF00] hover:bg-[#A3E600] text-[#0A0E0D] font-semibold hover:scale-[1.02] transition-all duration-300 group/btn"
                    >
                        <Link href={`/products/${product.slug.current}`}>
                            <Eye className="w-4 h-4 mr-1 group-hover/btn:scale-110 transition-transform" />
                            Details
                        </Link>
                    </Button>
                    <Button
                        variant="outline"
                        className="flex-1 border-white/20 text-white hover:bg-white/10 hover:border-[#B8FF00] hover:text-[#B8FF00] hover:scale-[1.02] transition-all duration-300 group/btn"
                    >
                        <ShoppingCart className="w-4 h-4 mr-1 group-hover/btn:scale-110 transition-transform" />
                        Quote
                    </Button>
                </div>
            </div>
        </div>
    );
}
