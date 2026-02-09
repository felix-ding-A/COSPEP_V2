import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'table',
    title: 'Table',
    type: 'object',
    fields: [
        defineField({
            name: 'rows',
            title: 'Table Rows',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'tableRow',
                    title: 'Row',
                    fields: [
                        {
                            name: 'cells',
                            title: 'Cells',
                            type: 'array',
                            of: [
                                {
                                    type: 'string',
                                    name: 'cell',
                                    title: 'Cell'
                                }
                            ]
                        }
                    ],
                    preview: {
                        select: {
                            cells: 'cells'
                        },
                        prepare({ cells }) {
                            return {
                                title: `Row with ${cells?.length || 0} cells`
                            }
                        }
                    }
                }
            ]
        }),
        defineField({
            name: 'caption',
            title: 'Table Caption',
            type: 'string',
            description: 'Optional caption for the table'
        })
    ],
    preview: {
        select: {
            rows: 'rows',
            caption: 'caption'
        },
        prepare({ rows, caption }) {
            const rowCount = rows?.length || 0
            const cellCount = rows?.[0]?.cells?.length || 0
            return {
                title: caption || 'Table',
                subtitle: `${rowCount} rows × ${cellCount} columns`
            }
        }
    }
})
