import { client } from "@/lib/sanity";

// No-op groq tag for syntax highlighting/readability
export const groq = (strings: TemplateStringsArray, ...values: any[]) => {
  return strings.reduce((acc, str, i) => acc + str + (values[i] || ""), "");
};

// Types
export interface Product {
  _id: string;
  name: string;
  slug: { current: string };
  casNumber?: string;
  latinName?: string;
  synonyms?: string;
  stockStatus?: string;
  imageUrl?: string;
  categories?: { title: string; slug: { current: string } }[];
  specs?: string[];
  inciName?: string;
  purity?: string;
  usageRate?: string;
  patentNo?: string;
  functions?: string[];
  grade?: string;
  moq?: string;
  leadTime?: string;
  packaging?: string[];
  storage?: string[];
  recommendedProducts?: Product[];
  seoTitle?: string;
  seoDesc?: string;
  description?: string;
  documents?: {
    title: string;
    file: {
      asset: {
        url: string;
        originalFilename?: string;
      };
    };
  }[];
}

export interface Category {
  title: string;
  slug: { current: string };
  count: number;
  parentCategory?: string;
  order?: number;
}

// Queries
export async function getProducts(search?: string, categorySlug?: string, stockStatus?: string, parentCategory?: string, lang: string = 'en'): Promise<Product[]> {
  // If parentCategory is specified, we need to first get all subcategory slugs
  let categoryFilter = categorySlug;

  if (parentCategory && !categorySlug) {
    // Get all subcategories of the parent category
    const subcategories = await client.fetch(
      groq`*[_type == "category" && parentCategory == $parentCategory]{slug}`,
      { parentCategory }
    );
    const subcategorySlugs = subcategories.map((c: any) => c.slug.current);

    if (subcategorySlugs.length > 0) {
      const query = groq`*[_type == "product" && (
        !defined($search) || name match $search + "*" || casNumber match $search + "*" || synonyms match $search + "*" || latinName match $search + "*"
      ) && (isVisible == true || !defined(isVisible)) && (
        count((categories[]->slug.current)[@ in $subcategorySlugs]) > 0
      ) && (
        !defined($stockStatus) || stockStatus == $stockStatus
      )] {
        _id,
        name,
        slug,
        casNumber,
        latinName,
        synonyms,
        stockStatus,
        "categories": categories[]->{title, slug},
        "imageUrl": image.asset->url,
        description
      }`;

      return client.fetch(query, {
        search: search || null,
        subcategorySlugs,
        stockStatus: stockStatus || null
      });
    }
  }

  const query = groq`*[_type == "product" && (
        !defined($search) || name match $search + "*" || casNumber match $search + "*" || synonyms match $search + "*" || latinName match $search + "*"
      ) && (isVisible == true || !defined(isVisible)) && (
        !defined($categorySlug) || $categorySlug in categories[]->slug.current
      ) && (
        !defined($stockStatus) || stockStatus == $stockStatus
      )] {
        _id,
        name,
        slug,
        casNumber,
        latinName,
        synonyms,
        stockStatus,
        "categories": categories[]->{title, slug},
        "imageUrl": image.asset->url,
        description
      }`;

  return client.fetch(query, { search: search || null, categorySlug: categorySlug || null, stockStatus: stockStatus || null });
}

export async function getCategories(): Promise<Category[]> {
  const query = groq`*[_type == "category"] | order(parentCategory asc, order asc) {
        title,
        slug,
        parentCategory,
        order
    }`;
  return client.fetch(query);
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const query = groq`*[_type == "product" && slug.current == $slug && (isVisible == true || !defined(isVisible))][0] {
        _id,
        name,
        slug,
        casNumber,
        latinName,
        stockStatus,
        "categories": categories[]->{title, slug},
        "imageUrl": image.asset->url,
        specs,
        inciName,
        purity,
        usageRate,
        patentNo,
        functions,
        grade,
        moq,
        leadTime,
        packaging,
        storage,
        recommendedProducts[]->{  
          _id,
          name,
          slug,
          casNumber,
          latinName,
          stockStatus,
          "categories": categories[]->{title, slug},
          "imageUrl": image.asset->url
        },
        seoTitle,
        seoDesc,
        description,
        documents[] {
          title,
          "file": {
            "asset": {
              "url": file.asset->url,
              "originalFilename": file.asset->originalFilename
            }
          }
        }
    }`;
  return client.fetch(query, { slug });
}

export interface Settings {
  heroText?: string;
  heroImageUrl?: string;
  contactEmail?: string;
  whatsapp?: string;
  address?: string;
}


export async function getSettings(lang: string = 'en'): Promise<Settings> {
  return client.fetch(groq`*[_id == "settings"][0]{
    heroText,
    "heroImageUrl": heroImage.asset->url,
    contactEmail,
    whatsapp,
    address
  }`);
}

export const getSiteSettings = groq`*[_id == "settings"][0]{
  heroTitle,
  heroText, // Legacy fallback
  heroSubtitle,
  "heroImageUrl": heroImage.asset->url,
  contactEmail,
  whatsapp,
  address
}`;

export async function getLatestPosts(limit: number = 3, lang: string = 'en'): Promise<any[]> {
  const query = groq`*[_type == "post" && defined(publishedAt) && (isVisible == true || !defined(isVisible))] | order(publishedAt desc)[0...$limit] {
        _id,
        title,
        "slug": slug.current,
        "image": mainImage.asset->url,
        publishedAt,
        excerpt
    }`;
  return client.fetch(query, { limit });
}

export async function getPosts(lang: string = 'en'): Promise<any[]> {
  const query = groq`*[_type == "post" && (isVisible == true || !defined(isVisible))] | order(publishedAt desc) {
        _id,
        title,
        slug,
        "mainImage": mainImage.asset->url,
        publishedAt,
        excerpt
    }`;
  return client.fetch(query);
}

export async function getBlogPostBySlug(slug: string, lang: string = 'en'): Promise<any> {
    const query = groq`*[_type == "post" && slug.current == $slug && (isVisible == true || !defined(isVisible))][0] {
        _id,
        title,
        slug,
        "mainImage": mainImage.asset->url,
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
    return client.fetch(query, { slug });
}
