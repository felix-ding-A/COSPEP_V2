import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/sanity/queries";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Truck, ShieldCheck, Download, Share2, Heart } from "lucide-react";
import { SpecTable } from "@/components/products/spec-table";
import { Metadata } from "next";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/config";
import Link from "next/link";

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
            "price": "0.00"
        }
    };

    return (
        <div className="min-h-screen bg-[#0A0E0D]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Breadcrumb */}
            <div className="bg-gradient-to-b from-[#0F1612] to-[#0A0E0D] py-6">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-sm text-gray-400 flex items-center gap-2">
                        <Link href="/" className="hover:text-[#B8FF00] transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/products" className="hover:text-[#B8FF00] transition-colors">Products</Link>
                        <span>/</span>
                        <span className="text-white">{product.name}</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 py-10">
                {/* Main Product Section */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
                    {/* Left: Image Gallery */}
                    <div className="space-y-4">
                        <div className="aspect-square glass rounded-2xl overflow-hidden flex items-center justify-center border border-white/10 relative group">
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
                                <span className="text-gray-500">Product Image</span>
                            )}

                            {/* Stock Badge Overlay */}
                            {isReadyStock && (
                                <div className="absolute top-4 right-4">
                                    <Badge className="bg-green-500/90 backdrop-blur-sm text-white border-none px-3 py-1">
                                        <span className="relative flex h-2 w-2 mr-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-200"></span>
                                        </span>
                                        In Stock
                                    </Badge>
                                </div>
                            )}

                            {/* Action Icons */}
                            <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="w-10 h-10 rounded-full glass-strong flex items-center justify-center hover:bg-white/20 transition-colors">
                                    <Heart className="w-5 h-5 text-white" />
                                </button>
                                <button className="w-10 h-10 rounded-full glass-strong flex items-center justify-center hover:bg-white/20 transition-colors">
                                    <Share2 className="w-5 h-5 text-white" />
                                </button>
                            </div>
                        </div>

                        {/* Thumbnail Grid */}
                        <div className="grid grid-cols-4 gap-3">
                            <div className="aspect-square glass rounded-lg border border-white/10 flex items-center justify-center overflow-hidden cursor-pointer hover:border-[#B8FF00] transition-colors">
                                {product.imageUrl && (
                                    <Image
                                        src={product.imageUrl}
                                        alt={product.name}
                                        fill
                                        className="object-cover"
                                        sizes="100px"
                                    />
                                )}
                            </div>
                            {[1, 2, 3].map(i => (
                                <div key={i} className="aspect-square glass rounded-lg border border-dashed border-white/10 flex items-center justify-center">
                                    <Truck className="w-6 h-6 text-gray-600" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Product Info */}
                    <div className="space-y-6">
                        {/* Title & Basic Info */}
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                                {product.name}
                            </h1>

                            <div className="flex flex-wrap gap-4 text-gray-300">
                                {product.latinName && (
                                    <span className="italic text-lg">{product.latinName}</span>
                                )}
                            </div>

                            {/* Key Specs Grid */}
                            <div className="grid grid-cols-2 gap-3 mt-6">
                                <div className="glass rounded-lg p-4 border border-white/10">
                                    <div className="text-sm text-gray-400 mb-1">CAS Number</div>
                                    <div className="text-lg font-semibold text-white font-mono">
                                        {product.casNumber || 'N/A'}
                                    </div>
                                </div>
                                {product.purity && (
                                    <div className="glass rounded-lg p-4 border border-white/10">
                                        <div className="text-sm text-gray-400 mb-1">Purity</div>
                                        <div className="text-lg font-semibold text-[#B8FF00]">
                                            {product.purity}
                                        </div>
                                    </div>
                                )}
                                {product.inciName && (
                                    <div className="glass rounded-lg p-4 border border-white/10 col-span-2">
                                        <div className="text-sm text-gray-400 mb-1">INCI Name</div>
                                        <div className="text-lg font-semibold text-white">
                                            {product.inciName}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Stock Status */}
                        {isReadyStock && (
                            <div className="glass-strong rounded-lg p-4 border border-green-500/20">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                                        <Truck className="w-6 h-6 text-green-400" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-white">Ready to Ship</div>
                                        <div className="text-sm text-gray-400">
                                            Available from <span className="text-[#B8FF00]">{SITE_CONFIG.warehouse}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Categories */}
                        {product.categories && product.categories.length > 0 && (
                            <div>
                                <div className="text-sm text-gray-400 mb-2">Categories</div>
                                <div className="flex flex-wrap gap-2">
                                    {product.categories.map((cat, index) => (
                                        <Badge
                                            key={index}
                                            variant="outline"
                                            className="border-white/20 text-gray-300 hover:border-[#B8FF00] hover:text-[#B8FF00] transition-colors cursor-pointer"
                                        >
                                            {cat.title}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-4">
                            <Button
                                size="lg"
                                className="flex-1 bg-[#B8FF00] hover:bg-[#A3E600] text-[#0A0E0D] font-semibold text-lg h-14 group"
                            >
                                Request Data Sheet
                                <Download className="ml-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform" />
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="flex-1 border-white/20 text-white hover:bg-white/10 hover:border-[#B8FF00] h-14"
                            >
                                Contact Sales
                            </Button>
                        </div>

                        {/* Product Info Grid */}
                        <div className="glass-strong rounded-xl p-6 border border-white/10 space-y-3">
                            <div className="flex justify-between py-2 border-b border-white/10">
                                <span className="text-gray-400">MOQ</span>
                                <span className="text-white font-medium">{SITE_CONFIG.moq}</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-white/10">
                                <span className="text-gray-400">Lead Time</span>
                                <span className="text-white font-medium">{SITE_CONFIG.leadTime}</span>
                            </div>
                            {product.grade && (
                                <div className="flex justify-between py-2 border-b border-white/10">
                                    <span className="text-gray-400">Grade</span>
                                    <span className="text-white font-medium">{product.grade}</span>
                                </div>
                            )}
                            <div className="flex justify-between py-2">
                                <span className="text-gray-400">Documents</span>
                                <span className="text-white font-medium">{SITE_CONFIG.documents.join(", ")}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tabs Section */}
                <div className="glass-strong rounded-2xl p-6 md:p-8 border border-white/10">
                    <Tabs defaultValue="specs" className="space-y-8">
                        <TabsList className="grid w-full grid-cols-3 max-w-[600px] bg-white/5 border border-white/10">
                            <TabsTrigger
                                value="specs"
                                className="data-[state=active]:bg-[#B8FF00] data-[state=active]:text-[#0A0E0D] text-gray-300"
                            >
                                Specifications
                            </TabsTrigger>
                            <TabsTrigger
                                value="documents"
                                className="data-[state=active]:bg-[#B8FF00] data-[state=active]:text-[#0A0E0D] text-gray-300"
                            >
                                Documents
                            </TabsTrigger>
                            <TabsTrigger
                                value="logistics"
                                className="data-[state=active]:bg-[#B8FF00] data-[state=active]:text-[#0A0E0D] text-gray-300"
                            >
                                Logistics
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="specs" className="space-y-8">
                            {/* Functions / Benefits */}
                            {product.functions && product.functions.length > 0 && (
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                                        <ShieldCheck className="mr-2 h-6 w-6 text-[#B8FF00]" />
                                        Functions / Benefits
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {product.functions.map((func, i) => (
                                            <Badge
                                                key={i}
                                                className="bg-[#B8FF00]/10 text-[#B8FF00] border border-[#B8FF00]/20 text-base py-2 px-4 hover:bg-[#B8FF00]/20 transition-colors"
                                            >
                                                {func}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Quality Specifications */}
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4">Quality Specifications</h3>
                                <div className="glass rounded-lg overflow-hidden border border-white/10">
                                    <SpecTable
                                        specs={product.specs || []}
                                        grade={product.grade}
                                        usageRate={product.usageRate}
                                        patentNo={product.patentNo}
                                    />
                                </div>
                            </div>

                            {/* Description */}
                            {product.description && (
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Description</h3>
                                    <p className="text-gray-300 leading-relaxed">{product.description}</p>
                                </div>
                            )}
                        </TabsContent>

                        <TabsContent value="documents" className="space-y-6">
                            <h3 className="text-2xl font-bold text-white flex items-center">
                                <FileText className="mr-2 h-6 w-6 text-[#B8FF00]" />
                                Technical Documents
                            </h3>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {['TDS (Technical Data Sheet)', 'MSDS (Material Safety)', 'Typical COA'].map((doc, i) => (
                                    <div
                                        key={i}
                                        className="glass rounded-lg p-5 border border-white/10 hover:border-[#B8FF00]/50 transition-all cursor-pointer group"
                                    >
                                        <div className="flex items-center justify-between mb-3">
                                            <FileText className="h-10 w-10 text-[#B8FF00] group-hover:scale-110 transition-transform" />
                                            <Download className="h-5 w-5 text-gray-400 group-hover:text-[#B8FF00] transition-colors" />
                                        </div>
                                        <div className="font-medium text-white group-hover:text-[#B8FF00] transition-colors">
                                            {doc}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm text-gray-400">
                                * Login required for full verified document downloads.
                            </p>
                        </TabsContent>

                        <TabsContent value="logistics" className="space-y-6">
                            <h3 className="text-2xl font-bold text-white flex items-center">
                                <Truck className="mr-2 h-6 w-6 text-[#B8FF00]" />
                                Packaging & Storage
                            </h3>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="glass rounded-lg p-6 border border-white/10">
                                    <h4 className="text-lg font-semibold text-white mb-4">Standard Packaging</h4>
                                    <ul className="space-y-2">
                                        {SITE_CONFIG.packaging.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-300">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF00] mt-2 flex-shrink-0"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="glass rounded-lg p-6 border border-white/10">
                                    <h4 className="text-lg font-semibold text-white mb-4">Storage Conditions</h4>
                                    <ul className="space-y-2">
                                        {SITE_CONFIG.storage.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-300">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF00] mt-2 flex-shrink-0"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}
