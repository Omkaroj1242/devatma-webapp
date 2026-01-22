export default {
  name: 'blog',
  type: 'document',
  title: 'Blog Posts',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'English Title',
    },
    {
      name: 'marathiTitle',
      type: 'string',
      title: 'Marathi Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'URL Slug',
      options: { source: 'title' }
    },
    {
      name: 'contentMarathi',
      type: 'text',
      title: 'Main Content (Marathi/Hindi)',
    },
    {
      name: 'summaryEnglish',
      type: 'text',
      title: 'Summary (English)',
    },
    {
      name: 'mainImage',
      type: 'image',
      title: 'Feature Image',
    },
  ]
}