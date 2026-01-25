export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        { name: 'name', title: 'Product Name (English)', type: 'string' },
        { name: 'slug', title: 'URL Slug', type: 'slug', options: { source: 'name' } },

        // Trade/Sourcing Core Fields
        { name: 'casNumber', title: 'CAS No.', type: 'string', description: 'Crucial for Search' },
        { name: 'latinName', title: 'Latin Name', type: 'string' },
        {
            name: 'image',
            title: 'Product Image',
            type: 'image',
            options: { hotspot: true }
        },
        {
            name: 'description',
            title: 'Product Description (Main)',
            type: 'text'
        },
        {
            name: 'stockStatus',
            title: 'Stock Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Ready to Ship', value: 'Ready to Ship' },
                    { title: 'Low Stock', value: 'Low Stock' },
                    { title: 'Made to Order', value: 'Made to Order' }
                ]
            }
        },
        {
            name: 'specs',
            title: 'Specifications',
            type: 'array',
            of: [{ type: 'string' }]
        }, // e.g. "95%", "10:1"

        // Categorization
        {
            name: 'categories',
            title: 'Application (App)',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'category' } }]
        },

        // SEO
        { name: 'seoTitle', title: 'SEO Title', type: 'string' },
        { name: 'seoDesc', title: 'SEO Description', type: 'text' }
    ]
}
