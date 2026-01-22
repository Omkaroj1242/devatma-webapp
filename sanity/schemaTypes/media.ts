// sanity/schemaTypes/media.ts
import { defineField, defineType } from 'sanity'

export const media = defineType({
  name: 'media',
  title: 'Media Projections',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({
      name: 'type',
      title: 'Media Type',
      type: 'string',
      options: { list: [{ title: 'Video', value: 'video' }, { title: 'Audio', value: 'audio' }] },
    }),
    // Video URL remains for YouTube
    defineField({
      name: 'videoUrl',
      title: 'YouTube URL',
      type: 'url',
      hidden: ({ document }) => document?.type !== 'video',
    }),
    // New Audio File Upload field
    defineField({
      name: 'audioFile',
      title: 'Upload Audio File',
      type: 'file',
      hidden: ({ document }) => document?.type !== 'audio',
      options: { accept: 'audio/*' }
    }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
  ],
})