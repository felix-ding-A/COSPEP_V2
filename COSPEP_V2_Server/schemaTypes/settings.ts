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
        // --- Legacy / Contact Info ---
        {
            name: 'heroText',
            title: 'Hero Title (Legacy)',
            type: 'string',
            hidden: true, // Hide from Studio but keep for backward compatibility if needed
        },
        {
            name: 'contactEmail',
            title: 'Contact Email',
            type: 'string',
        },
        {
            name: 'whatsapp',
            title: 'WhatsApp / Phone',
            type: 'string',
            description: 'e.g. +1 6802556637',
        },
        {
            name: 'address',
            title: 'Company Address',
            type: 'text',
        }
    ],
}
