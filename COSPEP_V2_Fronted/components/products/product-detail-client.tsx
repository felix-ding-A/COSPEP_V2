"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { FileText, Truck, ShieldCheck, Download } from "lucide-react";
import { ProductCTAButtons } from "./product-cta-buttons";
import { ProductContactForm } from "./product-contact-form";
import { RecommendedProducts } from "./recommended-products";
import { SpecTable } from "./spec-table";
import { PortableText } from "@portabletext/react";
import { urlFor, client } from "@/lib/sanity";
import Image from "next/image";

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

interface ProductDetailClientProps {
    product: any;
    siteConfig: any;
}

export function ProductDetailClient({ product, siteConfig }: ProductDetailClientProps) {
    const [activeTab, setActiveTab] = useState("specs");

    const handleRequestDataSheet = () => {
        setActiveTab("documents");
        setTimeout(() => {
            const tabsSection = document.getElementById("product-tabs");
            if (tabsSection) {
                tabsSection.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }, 100);
    };

    const handleContactSales = () => {
        setTimeout(() => {
            const contactForm = document.getElementById("contact-form");
            if (contactForm) {
                contactForm.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }, 100);
    };

    return (
        <>
            {/* Tabs Section */}
            <div id="product-tabs" className="glass-strong rounded-2xl p-6 md:p-8 border border-white/10 scroll-mt-20">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
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
                                    {product.functions.map((func: string, i: number) => (
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
                                {Array.isArray(product.description) ? (
                                    <div className="prose prose-invert max-w-none text-gray-300">
                                        <PortableText
                                            value={product.description}
                                            components={productDescriptionComponents}
                                        />
                                    </div>
                                ) : (
                                    <p className="text-gray-300 leading-relaxed">{product.description}</p>
                                )}
                            </div>
                        )}
                    </TabsContent>

                    <TabsContent value="documents" className="space-y-6">
                        <h3 className="text-2xl font-bold text-white flex items-center">
                            <FileText className="mr-2 h-6 w-6 text-[#B8FF00]" />
                            Technical Documents
                        </h3>
                        {product.documents && product.documents.length > 0 ? (
                            <>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {product.documents.map((doc: any, i: number) => (
                                        <a
                                            key={i}
                                            href={doc.file.asset.url}
                                            download
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="glass rounded-lg p-5 border border-white/10 hover:border-[#B8FF00]/50 transition-all cursor-pointer group"
                                        >
                                            <div className="flex items-center justify-between mb-3">
                                                <FileText className="h-10 w-10 text-[#B8FF00] group-hover:scale-110 transition-transform" />
                                                <Download className="h-5 w-5 text-gray-400 group-hover:text-[#B8FF00] transition-colors" />
                                            </div>
                                            <div className="font-medium text-white group-hover:text-[#B8FF00] transition-colors">
                                                {doc.title}
                                            </div>
                                            {doc.file.asset.originalFilename && (
                                                <div className="text-xs text-gray-500 mt-2 truncate">
                                                    {doc.file.asset.originalFilename}
                                                </div>
                                            )}
                                        </a>
                                    ))}
                                </div>
                                <p className="text-sm text-gray-400">
                                    Click any document to download or view
                                </p>
                            </>
                        ) : (
                            <div className="glass rounded-lg p-8 border border-white/10 text-center">
                                <FileText className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                                <p className="text-gray-400">
                                    No technical documents available for this product yet.
                                </p>
                                <p className="text-sm text-gray-500 mt-2">
                                    Contact us to request product documentation.
                                </p>
                            </div>
                        )}
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
                                    {(product.packaging && product.packaging.length > 0
                                        ? product.packaging
                                        : siteConfig.packaging
                                    ).map((item: string, i: number) => (
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
                                    {(product.storage && product.storage.length > 0
                                        ? product.storage
                                        : siteConfig.storage
                                    ).map((item: string, i: number) => (
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

            {/* Recommended Products Section */}
            {product.recommendedProducts && product.recommendedProducts.length > 0 && (
                <RecommendedProducts products={product.recommendedProducts} />
            )}

            {/* Contact Form Section */}
            <div id="contact-form" className="scroll-mt-20">
                <ProductContactForm productName={product.name} />
            </div>
        </>
    );
}
