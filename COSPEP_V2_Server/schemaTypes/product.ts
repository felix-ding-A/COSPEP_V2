import { defineType } from 'sanity'

export default defineType({
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
            name: 'latinName',
            title: 'Latin Name / Scientific Name',
            type: 'string',
            description: 'e.g., Curcuma longa',
        },
        {
            name: 'specs',
            title: 'Specifications',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags',
            },
            description: 'e.g., 95%, 98%, etc.',
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
        {
            name: 'moq',
            title: 'MOQ (Minimum Order Quantity)',
            type: 'string',
            description: 'Leave empty to use site default (1kg). E.g., "1kg", "500g", "25kg"',
            placeholder: '1kg',
        },
        {
            name: 'leadTime',
            title: 'Lead Time',
            type: 'string',
            description: 'Leave empty to use site default (3 Days). E.g., "Same Day", "3 Days", "7-14 Days"',
            placeholder: '3 Days',
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
            type: 'array',
            description: 'Rich text editor with support for images, videos, and tables',
            of: [
                { type: 'block' },
                {
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        {
                            name: 'caption',
                            type: 'string',
                            title: 'Caption',
                        },
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alt text',
                            description: 'Important for SEO and accessibility'
                        }
                    ]
                },
                {
                    type: 'file',
                    name: 'video',
                    title: 'Video',
                    options: {
                        accept: 'video/*'
                    },
                    fields: [
                        {
                            name: 'caption',
                            type: 'string',
                            title: 'Caption'
                        }
                    ]
                },
                { type: 'table' }
            ],
        },

        // --- 分类与标签 ---
        {
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'category' } }],
            description: 'Select one or more categories for this product',
            validation: (Rule: any) => Rule.required().min(1).max(3),
        },
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

        // --- Documents 文档 ---
        {
            name: 'documents',
            title: 'Technical Documents',
            type: 'array',
            description: 'Upload product documents such as TDS, MSDS, COA, etc.',
            of: [
                {
                    type: 'object',
                    name: 'technicalDocument',
                    title: 'Document',
                    fields: [
                        {
                            name: 'title',
                            title: 'Document Title',
                            type: 'string',
                            description: 'E.g., "TDS (Technical Data Sheet)", "MSDS", "COA"',
                            validation: (Rule: any) => Rule.required(),
                        },
                        {
                            name: 'file',
                            title: 'File',
                            type: 'file',
                            description: 'Upload PDF or other document files',
                            options: {
                                accept: '.pdf,.doc,.docx,.xls,.xlsx'
                            },
                            validation: (Rule: any) => Rule.required(),
                        },
                    ],
                    preview: {
                        select: {
                            title: 'title',
                            file: 'file.asset.originalFilename',
                        },
                        prepare(selection: any) {
                            const { title, file } = selection;
                            return {
                                title: title || 'Untitled Document',
                                subtitle: file || 'No file uploaded',
                            };
                        },
                    },
                },
            ],
        },

        // --- Logistics & Packaging ---
        {
            name: 'packaging',
            title: 'Packaging Information',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Custom packaging details. Leave empty to use site defaults. Press Enter to add each item.',
            options: {
                layout: 'list',
            },
        },
        {
            name: 'storage',
            title: 'Storage Conditions',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Custom storage requirements. Leave empty to use site defaults. Press Enter to add each item.',
            options: {
                layout: 'list',
            },
        },

        // --- Product Recommendations ---
        {
            name: 'recommendedProducts',
            title: 'Recommended Products',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'product' } }],
            description: 'Select up to 3 recommended products to display on this product detail page',
            validation: (Rule: any) => Rule.max(3),
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
})
