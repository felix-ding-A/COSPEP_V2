export default {
    name: 'settings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Site Title',
            type: 'string',
        },
        {
            name: 'heroImage',
            title: 'Hero Background Image',
            type: 'image',
            options: {
                hotspot: true, // 允许你在后台裁剪图片重心
            },
        },
        {
            name: 'heroTitle',
            title: 'Hero Title',
            type: 'string',
            description: 'e.g., Premium Cosmetic Peptides'
        },
        {
            name: 'heroSubtitle',
            title: 'Hero Subtitle',
            type: 'text',
            description: 'e.g., Empowering your formulations...'
        },
    ],
}
