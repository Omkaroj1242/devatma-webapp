// sanity/schemaTypes/blog.ts
import { defineField, defineType } from 'sanity'

export const blog = defineType({
  name: 'blog',
  title: 'Blog Posts',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'English Title',
      type: 'string',
    }),
    defineField({
      name: 'marathiTitle',
      title: 'Marathi Title',
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
      name: 'summaryEnglish',
      title: 'Short Summary (English)',
      type: 'text',
    }),
    defineField({
      name: 'contentMarathi',
      title: 'Main Content (Marathi/Hindi)',
      type: 'array', 
      of: [{ type: 'block' }] // This allows bold, lists, etc.
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})