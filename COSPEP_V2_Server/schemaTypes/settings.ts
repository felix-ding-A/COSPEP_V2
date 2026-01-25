export default {
    name: 'settings',
    title: 'Global Settings',
    type: 'document',
    fields: [
        {
            name: 'heroText',
            title: 'Hero Text',
            type: 'string',
            description: 'Main heading text on the homepage'
        },
        {
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
            options: { hotspot: true },
            description: 'Main image displayed on the homepage'
        },
        {
            name: 'contactEmail',
            title: 'Contact Email',
            type: 'string'
        },
        {
            name: 'whatsapp',
            title: 'WhatsApp Number',
            type: 'string',
            description: 'International format (e.g., +1234567890)'
        }
    ]
}
