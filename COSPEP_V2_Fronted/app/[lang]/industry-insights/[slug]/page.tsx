
import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { notFound } from "next/navigation";
import Script from "next/script";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const revalidate = 60;

async function getPost(slug: string) {
    try {
        const query = `*[_type == "post" && slug.current == $slug && (isVisible == true || !defined(isVisible))][0] {
            _id,
            title,
            slug,
            mainImage,
            publishedAt,
            _updatedAt,
            excerpt,
            seoDescription,
            body,
            faqs[] {
                question,
                answer
            }
        }`;
        return await client.fetch(query, { slug });
    } catch (error) {
        console.error("Error fetching post:", error);
        return null;
    }
}

async function getAllPostSlugs() {
    const query = `*[_type == "post" && (isVisible == true || !defined(isVisible))] { "slug": slug.current }`;
    return client.fetch(query);
}

export async function generateStaticParams() {
    const posts = await getAllPostSlugs();
    const languages = ['en', 'cn', 'es']; // Supported languages

    // Generate all combinations of lang and slug
    return languages.flatMap(lang =>
        posts.map((post: { slug: string }) => ({
            lang,
            slug: post.slug,
        }))
    );
}

// Generate metadata for SEO
export async function generateMetadata({
    params
}: {
    params: Promise<{ lang: string; slug: string }>
}) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: post.title || 'Blog Post',
        description: post.seoDescription || post.excerpt || 'Read our latest insights and articles',
        openGraph: {
            title: post.title || 'Blog Post',
            description: post.seoDescription || post.excerpt || '',
            images: post.mainImage ? [urlFor(post.mainImage).url()] : [],
        },
    };
}

// Custom components for PortableText
const portableTextComponents = {
    types: {
        image: ({ value }: any) => {
            if (!value?.asset) return null;
            return (
                <div className="my-8">
                    <Image
                        src={urlFor(value).url()}
                        alt={value.alt || 'Blog image'}
                        width={800}
                        height={600}
                        className="rounded-lg w-full h-auto"
                    />
                    {value.caption && (
                        <p className="text-sm text-muted-foreground mt-2 text-center italic">
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
                <div className="my-8">
                    <video controls className="w-full rounded-lg">
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    {value.caption && (
                        <p className="text-sm text-muted-foreground mt-2 text-center italic">
                            {value.caption}
                        </p>
                    )}
                </div>
            );
        },
    },
};

export default async function PostPage({
    params
}: {
    params: Promise<{ lang: string; slug: string }>
}) {
    const { lang, slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        notFound();
    }

    // 生成FAQ Schema (JSON-LD) for SEO
    const faqSchema = post.faqs && post.faqs.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": post.faqs.map((faq: any) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    } : null;

    // 获取标题文本（用于FAQ区域）
    const faqTitles: Record<string, string> = {
        en: 'Frequently Asked Questions',
        cn: '常见问题',
        es: 'Preguntas Frecuentes'
    };
    const faqTitle = faqTitles[lang] || faqTitles.en;

    return (
        <>
            {/* Article Schema for SEO */}
            <Script
                id="article-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": post.title,
                        "image": post.mainImage ? urlFor(post.mainImage).url() : undefined,
                        "datePublished": post.publishedAt,
                        "dateModified": post._updatedAt || post.publishedAt,
                        "author": {
                            "@type": "Organization",
                            "name": "COSPEP Team"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "COSPEP",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://cospep.com/logo.png"
                            }
                        },
                        "description": post.seoDescription || post.excerpt
                    })
                }}
            />

            {/* FAQ Schema for SEO */}
            {faqSchema && (
                <Script
                    id="faq-schema"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(faqSchema)
                    }}
                />
            )}

            <Breadcrumbs title={post.title} />

            <article className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
                <div className="mx-auto max-w-3xl">
                    {/* Hero Image */}
                    {post.mainImage && (
                        <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-8">
                            <Image
                                src={urlFor(post.mainImage).url()}
                                alt={post.title || "Blog post image"}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}

                    {/* Meta */}
                    {post.publishedAt && (
                        <div className="mb-6 text-sm text-muted-foreground">
                            {new Date(post.publishedAt).toLocaleDateString(
                                lang === 'cn' ? 'zh-CN' : (lang === 'es' ? 'es-ES' : 'en-US'),
                                {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                }
                            )}
                        </div>
                    )}

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                        {post.title || "Untitled Post"}
                    </h1>

                    {/* Excerpt */}
                    {post.excerpt && (
                        <p className="text-xl text-muted-foreground mb-8 italic">
                            {post.excerpt}
                        </p>
                    )}

                    {/* Body */}
                    {post.body && Array.isArray(post.body) && post.body.length > 0 && (
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <PortableText value={post.body} components={portableTextComponents} />
                        </div>
                    )}

                    {/* FAQs Section - Collapsible */}
                    {post.faqs && post.faqs.length > 0 && (
                        <div className="mt-12 border-t pt-12">
                            <h2 className="text-3xl font-bold mb-6">{faqTitle}</h2>
                            <Accordion type="single" collapsible className="w-full">
                                {post.faqs.map((faq: any, index: number) => (
                                    <AccordionItem key={index} value={`faq-${index}`}>
                                        <AccordionTrigger className="text-left font-semibold">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground whitespace-pre-line">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    )}
                </div>
            </article>
        </>
    );
}
