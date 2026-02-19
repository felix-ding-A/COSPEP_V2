import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'isVisible',
            title: 'Visible on Website',
            type: 'boolean',
            initialValue: true,
            description: 'Toggle to show/hide this post on the website without deleting it.',
        }),
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        }),
        defineField({
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'seoDescription',
            title: 'SEO Description',
            type: 'text',
            rows: 3,
            description: 'Meta description for search engines (recommended 150-160 characters)',
            validation: (Rule) => Rule.max(160).warning('SEO descriptions should be under 160 characters for optimal display in search results'),
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'array',
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
        }),
        defineField({
            name: 'faqs',
            title: 'FAQs',
            type: 'array',
            description: 'Frequently Asked Questions for this post',
            of: [
                {
                    type: 'object',
                    name: 'faq',
                    title: 'FAQ',
                    fields: [
                        {
                            name: 'question',
                            title: 'Question',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: 'answer',
                            title: 'Answer',
                            type: 'text',
                            rows: 4,
                            validation: (Rule) => Rule.required(),
                        },
                    ],
                    preview: {
                        select: {
                            title: 'question',
                            subtitle: 'answer',
                        },
                    },
                },
            ],
        }),
    ],
})
