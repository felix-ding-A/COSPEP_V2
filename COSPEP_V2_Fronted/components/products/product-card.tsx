import { Link } from "@/lib/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/lib/sanity/queries";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const isReadyStock = product.stockStatus === 'Ready to Ship';

    return (
        <div className="group relative flex flex-col rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
            {/* Image Placeholder or Actual Image */}
            <div className="aspect-[4/3] w-full overflow-hidden rounded-t-lg bg-muted flex items-center justify-center relative">
                {product.imageUrl ? (
                    <img src={product.imageUrl} alt={product.name} className="object-cover w-full h-full" />
                ) : (
                    <div className="text-muted-foreground text-sm">No Image</div>
                )}

                {isReadyStock && (
                    <span className="absolute top-2 right-2 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                )}
            </div>

            <div className="flex flex-col flex-1 p-4 space-y-3">
                <div className="flex justify-between items-start">
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors line-clamp-1">
                        {product.name}
                    </h3>
                </div>

                {product.latinName && (
                    <p className="text-sm italic text-muted-foreground line-clamp-1">
                        {product.latinName}
                    </p>
                )}

                <div className="flex items-center space-x-2 text-sm">
                    <span className="font-semibold text-foreground/80">CAS:</span>
                    <Badge variant="outline" className="font-mono text-xs">
                        {product.casNumber || 'N/A'}
                    </Badge>
                </div>

                <div className="flex items-center space-x-2 text-xs">
                    <span className={`px-2 py-0.5 rounded-full border ${isReadyStock ? 'bg-green-100 text-green-800 border-green-200' : 'bg-secondary/10 text-secondary-foreground border-border'}`}>
                        {product.stockStatus || 'Made to Order'}
                    </span>
                </div>

                <div className="mt-auto pt-4 flex gap-2">
                    <Button asChild className="flex-1 bg-primary hover:bg-primary/90">
                        <Link href={`/products/${product.slug.current}`}>
                            Details
                        </Link>
                    </Button>
                    <Button variant="outline" className="flex-1 border-primary text-primary hover:bg-primary/10">
                        Quick Quote
                    </Button>
                </div>
            </div>
        </div>
    );
}
