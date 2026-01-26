export default {
    name: 'category',
    title: 'Category (Application)',
    type: 'document',
    fields: [
        {
            name: 'sector',
            title: 'Business Sector',
            type: 'string',
            options: {
                list: [
                    { title: 'Cosmetic Peptides', value: 'cosmetic-peptides' },
                    { title: 'Pharma & APIs', value: 'pharma-apis' },
                    { title: 'Bio-Actives & Extracts', value: 'bio-actives' },
                    { title: 'Custom Services', value: 'custom' }
                ]
            }
        },
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
        { name: 'description', title: 'Description', type: 'text' }
    ]
}
