export default {
    name: 'inquiry',
    title: 'Inquiry / Lead',
    type: 'document',
    fields: [
        { name: 'name', title: 'Name', type: 'string' },
        { name: 'email', title: 'Email', type: 'string' },
        { name: 'company', title: 'Company Name', type: 'string' },
        {
            name: 'type',
            title: 'Inquiry Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Product Quote', value: 'Product Quote' },
                    { title: 'Sourcing Request', value: 'Sourcing Request' },
                    { title: 'General Inquiry', value: 'General' }
                ]
            }
        },
        { name: 'productName', title: 'Target Product', type: 'string' },
        { name: 'targetPrice', title: 'Target Price', type: 'string' },
        { name: 'message', title: 'Message', type: 'text' },
        {
            name: 'status',
            title: 'Status',
            type: 'string',
            options: {
                list: [
                    { title: 'New', value: 'New' },
                    { title: 'Contacted', value: 'Contacted' },
                    { title: 'Closed', value: 'Closed' }
                ]
            },
            initialValue: 'New'
        }
    ]
}
