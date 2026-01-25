import { client } from "@/lib/sanity";
import { groq } from "next-sanity";

// Types
export interface Product {
  _id: string;
  name: string;
  slug: { current: string };
  casNumber?: string;
  latinName?: string;
  stockStatus?: string;
  imageUrl?: string;
  categories?: { title: string; slug: { current: string } }[];
  specs?: string[];
  seoTitle?: string;
  seoDesc?: string;
  description?: string;
}

export interface Category {
  title: string;
  slug: { current: string };
  count: number;
}

// Queries
export async function getProducts(search?: string, categorySlug?: string, stockStatus?: string): Promise<Product[]> {
  const query = groq`*[_type == "product" && (
        !defined($search) || name match $search + "*" || casNumber match $search + "*" || latinName match $search + "*"
      ) && (
        !defined($categorySlug) || $categorySlug in categories[]->slug.current
      ) && (
        !defined($stockStatus) || stockStatus == $stockStatus
      )] {
        _id,
        name,
        slug,
        casNumber,
        latinName,
        stockStatus,
        "categories": categories[]->{title, slug},
        "imageUrl": image.asset->url,
        description
      }`;

  return client.fetch(query, { search: search || null, categorySlug: categorySlug || null, stockStatus: stockStatus || null });
}

export async function getCategories(): Promise<Category[]> {
  // Fetch categories and maybe count products in them (advanced, simplified for now)
  const query = groq`*[_type == "category"] {
        title,
        slug
    }`;
  return client.fetch(query);
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const query = groq`*[_type == "product" && slug.current == $slug][0] {
        _id,
        name,
        slug,
        casNumber,
        latinName,
        stockStatus,
        "categories": categories[]->{title, slug},
        "imageUrl": image.asset->url,
        specs,
        seoTitle,
        seoDesc,
        description
    }`;
  return client.fetch(query, { slug });
}

export interface Settings {
  heroText?: string;
  heroImageUrl?: string;
  contactEmail?: string;
  whatsapp?: string;
}

export async function getSettings(): Promise<Settings> {
  return client.fetch(groq`*[_type == "settings"][0]{
    heroText,
    "heroImageUrl": heroImage.asset->url,
    contactEmail,
    whatsapp
  }`, {}, { next: { revalidate: 0 } }); // Keep revalidate for now to help with updates
}
