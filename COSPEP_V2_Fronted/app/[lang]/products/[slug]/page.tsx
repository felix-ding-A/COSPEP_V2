import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/sanity/queries";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Truck, ShieldCheck, Download } from "lucide-react";
import { SpecTable } from "@/components/products/spec-table";
import { Metadata } from "next";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/config";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const product = await getProductBySlug(slug);

    if (!product) return { title: "Product Not Found" };

    return {
        title: product.seoTitle || `${product.name} Manufacturer & Supplier | CAS ${product.casNumber}`,
        description: product.seoDesc || `Buy high-quality ${product.name} (${product.casNumber}). ${product.latinName || ''}. Ready stock available.`,
    };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = await getProductBySlug(slug);

    if (!product) notFound();

    const isReadyStock = product.stockStatus === 'Ready to Ship';

    // JSON-LD Structured Data
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "image": product.imageUrl,
        "description": product.description || product.seoDesc || `Wholesale ${product.name}`,
        "sku": product.casNumber,
        "mpn": product.casNumber,
        "offers": {
            "@type": "Offer",
            "url": `https://cospep.com/products/${product.slug.current}`,
            "availability": isReadyStock ? "https://schema.org/InStock" : "https://schema.org/PreOrder",
            "priceCurrency": "USD",
            "price": "0.00" // Call for price
        }
    };

    return (
        <div className="container mx-auto px-4 md:px-6 py-10">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* breadcrumb mockup */}
            <div className="text-sm text-muted-foreground mb-6">
                Products / {product.name}
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
                {/* Left: Images */}
                <div className="space-y-4">
                    <div className="aspect-square bg-muted rounded-xl overflow-hidden flex items-center justify-center border relative">
                        {product.imageUrl ? (
                            <Image
                                src={product.imageUrl}
                                alt={product.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                priority
                            />
                        ) : (
                            <span className="text-muted-foreground">Product Image Placeholder</span>
                        )}
                    </div>
                    {/* Thumbnail & Logistics Preview */}
                    <div className="grid grid-cols-4 gap-4">
                        <div className="aspect-square bg-muted rounded-lg flex items-center justify-center border text-xs text-center p-1">
                            <Truck className="h-6 w-6 mb-1 opacity-50" />
                            <span className="sr-only">Packaging</span>
                        </div>
                        {/* Placeholders for additional thumbnails */}
                        {[1, 2, 3].map(i => (
                            <div key={i} className="aspect-square bg-muted/50 rounded-lg flex items-center justify-center border border-dashed"></div>
                        ))}
                    </div>
                </div>

                {/* Right: Decision Area */}
                <div className="space-y-8">
                    <div>
                        <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-2">{product.name}</h1>
                        <div className="flex flex-wrap gap-x-6 gap-y-2 text-lg text-muted-foreground mt-3">
                            {product.latinName && <span className="italic">{product.latinName}</span>}
                            <span className="font-semibold text-foreground">CAS: {product.casNumber}</span>
                            {product.inciName && <span><span className="font-semibold">INCI:</span> {product.inciName}</span>}
                            {product.purity && <span><span className="font-semibold">Purity:</span> {product.purity}</span>}
                        </div>
                    </div>

                    {isReadyStock && (
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-200">
                            <span className="relative flex h-3 w-3 mr-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            <span className="font-medium text-sm">Ready to Ship from <strong>{SITE_CONFIG.warehouse}</strong></span>
                        </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="flex-1 bg-primary hover:bg-primary/90 text-lg h-12">
                            Request Quote / Sample
                        </Button>
                        <Button variant="outline" size="lg" className="flex-1 border-primary text-primary hover:bg-primary/10 h-12">
                            Contact Sales
                        </Button>
                    </div>

                    <div className="bg-muted/30 p-6 rounded-lg border space-y-3">
                        <li className="flex items-center">
                            <span className="font-semibold w-24">MOQ:</span> {SITE_CONFIG.moq}
                        </li>
                        <li className="flex items-center">
                            <span className="font-semibold w-24">Lead Time:</span> {SITE_CONFIG.leadTime}
                        </li>
                        <li className="flex items-center">
                            <span className="font-semibold w-24">Documents:</span> {SITE_CONFIG.documents.join(", ")}
                        </li>
                        {product.grade && (
                            <li className="flex items-center">
                                <span className="font-semibold w-24">Grade:</span> {product.grade}
                            </li>
                        )}
                    </div>
                </div>
            </div>

            {/* Tabs Section */}
            <Tabs defaultValue="specs" className="space-y-8">
                <TabsList className="grid w-full grid-cols-3 max-w-[600px]">
                    <TabsTrigger value="specs">Specifications</TabsTrigger>
                    <TabsTrigger value="documents">Documents</TabsTrigger>
                    <TabsTrigger value="logistics">Logistics</TabsTrigger>
                </TabsList>

                <TabsContent value="specs" className="space-y-6">
                    {/* Functions / Benefits */}
                    {product.functions && product.functions.length > 0 && (
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold flex items-center">Functions / Benefits</h3>
                            <div className="flex flex-wrap gap-2">
                                {product.functions.map((func, i) => (
                                    <Badge key={i} variant="secondary" className="text-md py-1 px-3">
                                        {func}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="space-y-3">
                        <h3 className="text-xl font-bold flex items-center"><ShieldCheck className="mr-2 h-5 w-5" /> Quality Specifications</h3>
                        <SpecTable
                            specs={product.specs || []}
                            grade={product.grade}
                            usageRate={product.usageRate}
                            patentNo={product.patentNo}
                        />
                    </div>
                </TabsContent>

                <TabsContent value="documents" className="space-y-4">
                    <h3 className="text-xl font-bold flex items-center"><FileText className="mr-2 h-5 w-5" /> Technical Documents</h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {['TDS (Technical Data Sheet)', 'MSDS (Material Safety)', 'Typical COA'].map((doc, i) => (
                            <div key={i} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group">
                                <div className="flex items-center space-x-3">
                                    <FileText className="h-8 w-8 text-secondary group-hover:text-primary transition-colors" />
                                    <span className="font-medium">{doc}</span>
                                </div>
                                <Download className="h-4 w-4 text-muted-foreground" />
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">* Login required for full verified document downloads.</p>
                </TabsContent>

                <TabsContent value="logistics" className="space-y-4">
                    <h3 className="text-xl font-bold flex items-center"><Truck className="mr-2 h-5 w-5" /> Packaging & Storage</h3>
                    <div className="bg-background border rounded-lg p-6 space-y-4">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-semibold mb-2">Standard Packaging</h4>
                                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                    {SITE_CONFIG.packaging.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Storage Conditions</h4>
                                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                    {SITE_CONFIG.storage.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
