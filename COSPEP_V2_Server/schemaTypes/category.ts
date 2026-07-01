export default {
    name: 'category',
    title: 'Category (Application)',
    type: 'document',
    fields: [
        {
            name: 'parentCategory',
            title: 'Parent Category Group',
            type: 'string',
            options: {
                list: [
                    { title: 'Peptides', value: 'peptides' }
                ]
            },
            initialValue: 'peptides',
            validation: (Rule: any) => Rule.required(),
            description: 'Select which main category group this belongs to'
        },
        {
            name: 'title',
            title: 'Subcategory Name',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
            description: 'e.g., "Standardized Botanical Extracts", "FD Powders", etc.'
        },
        {
            name: 'slug',
            title: 'URL Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            },
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3,
            description: 'Brief description of this subcategory'
        },
        {
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Lower numbers appear first within the parent category',
            initialValue: 0
        }
    ],
    preview: {
        select: {
            title: 'title',
            parentCategory: 'parentCategory'
        },
        prepare(selection: any) {
            const { title, parentCategory } = selection;
            const parentLabels: Record<string, string> = {
                'peptides': 'Peptides'
            };
            return {
                title: title,
                subtitle: parentLabels[parentCategory] || parentCategory
            };
        }
    },
    orderings: [
        {
            title: 'Parent Category, then Order',
            name: 'parentCategoryOrder',
            by: [
                { field: 'parentCategory', direction: 'asc' },
                { field: 'order', direction: 'asc' }
            ]
        }
    ]
}
