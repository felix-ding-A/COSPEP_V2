import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/sanity/queries";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Truck, ShieldCheck, Download, Share2, Heart } from "lucide-react";
import { SpecTable } from "@/components/products/spec-table";
import { ImageZoom } from "@/components/products/image-zoom";
import { ProductActions } from "@/components/products/product-actions";
import { ProductImageCTAButtons } from "@/components/products/product-image-cta-buttons";
import { ProductDetailClient } from "@/components/products/product-detail-client";
import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/config";
import { Link } from "@/lib/navigation";
import { PortableText } from "@portabletext/react";
import { urlFor, client } from "@/lib/sanity";
import Image from "next/image";


export async function generateMetadata({ params }: { params: Promise<{ slug: string; lang: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const product = await getProductBySlug(slug);

    if (!product) return { title: "Product Not Found" };

    return {
        title: product.seoTitle || `${product.name} Manufacturer & Supplier | CAS ${product.casNumber}`,
        description: product.seoDesc || `Buy high-quality ${product.name} (${product.casNumber}). ${product.latinName || ''}. Ready stock available.`,
    };
}

// Custom components for PortableText in product descriptions
const productDescriptionComponents = {
    types: {
        image: ({ value }: any) => {
            if (!value?.asset) return null;
            return (
                <div className="my-6">
                    <Image
                        src={urlFor(value).url()}
                        alt={value.alt || 'Product image'}
                        width={800}
                        height={600}
                        className="rounded-lg w-full h-auto"
                    />
                    {value.caption && (
                        <p className="text-sm text-gray-400 mt-2 text-center italic">
                            {value.caption}
                        </p>
                    )}
                </div>
            );
        },
        video: ({ value }: any) => {
            if (!value?.asset) return null;
            const videoUrl = value.asset.url || `https://cdn.sanity.io/files/${client.config().projectId}/${client.config().dataset}/${value.asset._ref.replace('file-', '').replace('-mp4', '.mp4')}`;
            return (
                <div className="my-6">
                    <video controls className="w-full rounded-lg">
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    {value.caption && (
                        <p className="text-sm text-gray-400 mt-2 text-center italic">
                            {value.caption}
                        </p>
                    )}
                </div>
            );
        },
    },
};

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string; lang: string }> }) {
    const { slug, lang } = await params;
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
                    {/* Left: Product Image */}
                    <div>
                        <div className="w-full aspect-[4/3] glass rounded-2xl overflow-hidden flex items-center justify-center border border-white/10 relative group">
                            {product.imageUrl ? (
                                <ImageZoom
                                    src={product.imageUrl}
                                    alt={product.name}
                                    className="w-full h-full"
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
                            <ProductActions
                                productSlug={product.slug.current}
                                productName={product.name}
                                productDescription={typeof product.description === 'string' ? product.description : undefined}
                            />
                        </div>

                        {/* CTA Buttons Below Image */}
                        <ProductImageCTAButtons />
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



                        {/* Product Info Grid */}
                        <div className="glass-strong rounded-xl p-6 border border-white/10 space-y-3">
                            <div className="flex justify-between py-2 border-b border-white/10">
                                <span className="text-gray-400">MOQ</span>
                                <span className="text-white font-medium">{product.moq || SITE_CONFIG.moq}</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-white/10">
                                <span className="text-gray-400">Lead Time</span>
                                <span className="text-white font-medium">{product.leadTime || SITE_CONFIG.leadTime}</span>
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

                {/* Client Components (Tabs + Contact Form) */}
                <ProductDetailClient product={product} siteConfig={SITE_CONFIG} />
            </div>
        </div>
    );
}
