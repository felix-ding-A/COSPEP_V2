import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'lxm1elmu', // I will just get this from the code if I need
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

const slug = 'biotech-skincare-dipeptide-diaminobutyroyl-benzylamide';
const query = `*[_type == "post" && slug.current == $slug && (isVisible == true || !defined(isVisible))][0] {
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

client.fetch(query, { slug }).then(console.log).catch(console.error);
