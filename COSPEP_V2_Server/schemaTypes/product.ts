export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        // --- 基础信息 ---
        {
            name: 'name',
            title: 'Product Name (English)',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'synonyms',
            title: 'Synonyms / Chinese Name',
            type: 'string',
            description: 'Internal use for search (e.g. 蓝铜胜肽, GHK-Cu)',
        },
        {
            name: 'slug',
            title: 'URL Slug',
            type: 'slug',
            options: { source: 'name' },
            validation: (Rule: any) => Rule.required(),
        },

        // --- 核心参数 (升级部分) ---
        {
            name: 'casNumber',
            title: 'CAS No.',
            type: 'string',
            description: 'Crucial for Search (e.g. 49557-75-7)',
        },
        {
            name: 'inciName',
            title: 'INCI Name',
            type: 'string',
            description: 'Standard cosmetic ingredient name (e.g. Copper Tripeptide-1)',
        },
        {
            name: 'purity',
            title: 'Purity / Assay',
            type: 'string',
            description: 'e.g. ≥98%, 99%',
        },
        {
            name: 'grade',
            title: 'Grade',
            type: 'string',
            options: {
                list: [
                    { title: 'Cosmetic Grade', value: 'Cosmetic Grade' },
                    { title: 'Pharmaceutical Grade', value: 'Pharmaceutical Grade' },
                    { title: 'Food Grade', value: 'Food Grade' },
                    { title: 'Research Grade', value: 'Research Grade' },
                ],
            },
        },
        {
            name: 'patentNo',
            title: 'Patent Number',
            type: 'string',
            description: 'For patented ingredients only (e.g. ZL 2021...)',
        },
        {
            name: 'usageRate',
            title: 'Recommended Usage',
            type: 'string',
            description: 'e.g. 0.1-0.5%',
        },

        // --- 图片与描述 ---
        {
            name: 'image',
            title: 'Product Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string',
                    description: 'Important for SEO',
                },
            ],
        },
        {
            name: 'description',
            title: 'Product Description (Main)',
            type: 'text',
            rows: 5,
        },

        // --- 分类与标签 ---
        {
            name: 'functions',
            title: 'Functions / Benefits',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags',
            },
            description: 'Press Enter to add tags (e.g. Anti-aging, Whitening)',
        },
        {
            name: 'categories',
            title: 'Category',
            type: 'array', // 这里虽然是数组，但通常一个产品选1-2个分类
            of: [{ type: 'reference', to: { type: 'category' } }],
        },
        {
            name: 'stockStatus',
            title: 'Stock Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Ready to Ship', value: 'Ready to Ship' },
                    { title: 'Low Stock', value: 'Low Stock' },
                    { title: 'Made to Order', value: 'Made to Order' },
                ],
            },
            initialValue: 'Ready to Ship',
        },

        // --- SEO 设置 ---
        {
            name: 'seoTitle',
            title: 'SEO Title',
            type: 'string',
            description: 'If empty, will use Product Name',
        },
        {
            name: 'seoDesc',
            title: 'SEO Description',
            type: 'text',
            description: 'If empty, will use Product Description',
        },
    ],
}
