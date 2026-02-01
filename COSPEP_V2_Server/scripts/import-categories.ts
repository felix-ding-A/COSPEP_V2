import { createClient } from '@sanity/client';

const client = createClient({
    projectId: 'lxm1elmu',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2024-01-01',
    token: process.env.SANITY_AUTH_TOKEN || '', // You'll need to set this
});

// Define all categories with their parent groups
const categories = [
    // Group 1: Botanical Extracts
    { parent: 'botanical-extracts', title: 'Standardized Botanical Extracts', order: 1 },
    { parent: 'botanical-extracts', title: 'Adaptogenic Herbs', order: 2 },
    { parent: 'botanical-extracts', title: 'Natural Antioxidants', order: 3 },
    { parent: 'botanical-extracts', title: 'Functional Health Ingredients', order: 4 },
    { parent: 'botanical-extracts', title: 'Mushroom Extracts', order: 5 },
    { parent: 'botanical-extracts', title: 'Plant Pigments', order: 6 },

    // Group 2: Fruit & Vegetable Powders
    { parent: 'fruit-vegetable-powders', title: 'FD Powders', order: 1 },
    { parent: 'fruit-vegetable-powders', title: 'SD Powders', order: 2 },
    { parent: 'fruit-vegetable-powders', title: 'Superfood Powders', order: 3 },
    { parent: 'fruit-vegetable-powders', title: 'Concentrated Juice Powders', order: 4 },
    { parent: 'fruit-vegetable-powders', title: 'Organic Fruit & Veg Powders', order: 5 },

    // Group 3: Peptides
    { parent: 'peptides', title: 'Metabolic & Weight Management', order: 1 },
    { parent: 'peptides', title: 'Cosmetic & Anti-Aging', order: 2 },
    { parent: 'peptides', title: 'Growth Hormone Series', order: 3 },
    { parent: 'peptides', title: 'Cognitive Enhancement Peptides', order: 4 },
    { parent: 'peptides', title: 'Hair Care & Growth Peptides', order: 5 },
    { parent: 'peptides', title: 'Skin Brightening', order: 6 },
    { parent: 'peptides', title: 'Tissue Repair & Recovery', order: 7 },
    { parent: 'peptides', title: 'Pharmaceutical Peptides', order: 8 },

    // Group 4: Custom Solutions
    { parent: 'custom-solutions', title: 'OEM Manufacturing', order: 1 },
    { parent: 'custom-solutions', title: 'ODM Private Label', order: 2 },
    { parent: 'custom-solutions', title: 'Capsule & Tablet Services', order: 3 },
    { parent: 'custom-solutions', title: 'Sachet & Repackaging', order: 4 },
];

// Helper function to create slug from title
function createSlug(title: string): string {
    return title
        .toLowerCase()
        .replace(/&/g, 'and')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

async function importCategories() {
    console.log('🚀 Starting category import...\n');

    try {
        let successCount = 0;

        // Create each category one by one
        for (const cat of categories) {
            const doc = {
                _type: 'category',
                parentCategory: cat.parent,
                title: cat.title,
                slug: {
                    _type: 'slug',
                    current: createSlug(cat.title),
                },
                order: cat.order,
                description: '',
            };

            await client.create(doc);
            successCount++;
            console.log(`✓ Created: ${cat.title} (${cat.parent})`);
        }

        console.log(`\n✅ Successfully created ${successCount}/${categories.length} categories!\n`);
        console.log('Categories by parent group:');
        console.log('  - Botanical Extracts: 6 subcategories');
        console.log('  - Fruit & Vegetable Powders: 5 subcategories');
        console.log('  - Peptides: 8 subcategories');
        console.log('  - Custom Solutions: 4 subcategories');
        console.log('\n🎉 Import complete! Check your Sanity Studio.');

    } catch (error) {
        console.error('❌ Error importing categories:', error);
        process.exit(1);
    }
}

// Run the import
importCategories();
