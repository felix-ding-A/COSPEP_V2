
import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { notFound } from "next/navigation";

export const revalidate = 60;

async function getPost(slug: string) {
    try {
        const query = `*[_type == "post" && slug.current == $slug][0] {
            _id,
            title,
            slug,
            mainImage,
            publishedAt,
            excerpt,
            body
        }`;
        return await client.fetch(query, { slug });
    } catch (error) {
        console.error("Error fetching post:", error);
        return null;
    }
}

async function getAllPostSlugs() {
    const query = `*[_type == "post"] { "slug": slug.current }`;
    return client.fetch(query);
}

export async function generateStaticParams() {
    const posts = await getAllPostSlugs();
    return posts.map((post: { slug: string }) => ({
        slug: post.slug,
    }));
}

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

    return (
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
                        <PortableText value={post.body} />
                    </div>
                )}
            </div>
        </article>
    );
}
