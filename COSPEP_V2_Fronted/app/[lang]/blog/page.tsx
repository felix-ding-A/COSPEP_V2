
import { client, urlFor } from "@/lib/sanity";
import { Link } from "@/lib/navigation";
import Image from "next/image";

// Revalidate every 60 seconds or custom duration
export const revalidate = 60;

async function getPosts() {
    const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    excerpt
  }`;
    return client.fetch(query);
}

export default async function BlogPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const posts = await getPosts();

    return (
        <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
            <div className="mx-auto max-w-4xl text-center mb-12">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
                    Latest Insights & News
                </h1>
                <p className="text-lg text-muted-foreground">
                    Stay updated with the latest trends in botanical ingredients and industry news.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.length > 0 ? (
                    posts.map((post: any) => (
                        <Link
                            key={post._id}
                            href={`/blog/${post.slug.current}`}
                            className="group flex flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="relative aspect-video w-full overflow-hidden">
                                {post.mainImage && (
                                    <Image
                                        src={urlFor(post.mainImage).url()}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform group-hover:scale-105"
                                    />
                                )}
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <div className="mb-2 text-sm text-muted-foreground">
                                    {new Date(post.publishedAt).toLocaleDateString(lang === 'cn' ? 'zh-CN' : (lang === 'es' ? 'es-ES' : 'en-US'), {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </div>
                                <h3 className="text-xl font-bold tracking-tight mb-2 group-hover:text-primary transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-muted-foreground line-clamp-3 text-sm flex-1">
                                    {post.excerpt}
                                </p>
                                <div className="mt-4 text-primary font-medium text-sm flex items-center">
                                    Read More &rarr;
                                </div>
                            </div>
                        </Link>
                    ))
                ) : (
                    <div className="col-span-full text-center py-12 text-muted-foreground">
                        No posts found.
                    </div>
                )}
            </div>
        </div>
    );
}
