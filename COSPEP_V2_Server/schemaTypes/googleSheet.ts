import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'googleSheet',
    title: 'Google Sheet',
    type: 'object',
    fields: [
        defineField({
            name: 'url',
            title: 'Google Sheet CSV URL',
            type: 'url',
            description: 'Paste the CSV link from "Publish to web". Example: https://docs.google.com/spreadsheets/d/.../pub?output=csv',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'caption',
            title: 'Caption',
            type: 'string',
            description: 'Optional caption for the table'
        })
    ],
    preview: {
        select: {
            title: 'caption',
            subtitle: 'url'
        },
        prepare({ title, subtitle }) {
            return {
                title: title || 'Google Sheet Table',
                subtitle: subtitle || 'No URL provided'
            }
        }
    }
})
