
import { client, urlFor } from "@/lib/sanity";
import { Link } from "@/lib/navigation";
import Image from "next/image";

export const dynamic = 'force-dynamic';

async function getSearchResults(query: string) {
    if (!query) return { products: [], posts: [] };

    // Adjust fields based on your actual schema.
    // Assuming 'product' has title, slug, and maybe an image or description
    // Assuming 'post' has title, slug, mainImage, excerpt
    const groqQuery = `{
    "products": *[_type == "product" && title match $q + "*"] {
      _id,
      title,
      slug,
      "imageUrl": images[0].asset->url,
      description
    },
    "posts": *[_type == "post" && title match $q + "*"] {
      _id,
      title,
      slug,
      mainImage,
      excerpt,
      publishedAt
    }
  }`;

    const params = { q: query };
    return client.fetch(groqQuery, params);
}

export default async function SearchPage({
    searchParams,
    params
}: {
    searchParams: Promise<{ q: string }>;
    params: Promise<{ lang: string }>;
}) {
    const { q } = await searchParams;
    const { lang } = await params;
    const { products, posts } = await getSearchResults(q);

    return (
        <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
            <div className="mb-12">
                <h1 className="text-3xl font-bold tracking-tight mb-2">
                    Search Results for "{q}"
                </h1>
                <p className="text-muted-foreground">
                    Found {products.length} products and {posts.length} articles.
                </p>
            </div>

            {products.length > 0 && (
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 border-b pb-2">Products</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products.map((product: any) => (
                            <Link
                                key={product._id}
                                href={`/products/${product.slug.current}`}
                                className="group block rounded-lg border bg-card text-card-foreground shadow-sm hover:border-primary transition-colors"
                            >
                                <div className="aspect-square relative overflow-hidden rounded-t-lg bg-muted">
                                    {product.imageUrl ? (
                                        <Image
                                            src={product.imageUrl}
                                            alt={product.title}
                                            fill
                                            className="object-cover transition-transform group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="flex items-center justify-center h-full text-muted-foreground">
                                            No Image
                                        </div>
                                    )}
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold group-hover:text-primary transition-colors">{product.title}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {posts.length > 0 && (
                <section>
                    <h2 className="text-2xl font-bold mb-6 border-b pb-2">Blog Posts</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post: any) => (
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
                                        {new Date(post.publishedAt).toLocaleDateString()}
                                    </div>
                                    <h3 className="text-xl font-bold tracking-tight mb-2 group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-muted-foreground line-clamp-3 text-sm flex-1">
                                        {post.excerpt}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {products.length === 0 && posts.length === 0 && (
                <div className="text-center py-20 bg-muted/30 rounded-lg border border-dashed">
                    <h3 className="text-xl font-semibold text-muted-foreground">No results found</h3>
                    <p className="text-muted-foreground mt-2">Try adjusting your search terms.</p>
                </div>
            )}
        </div>
    );
}
