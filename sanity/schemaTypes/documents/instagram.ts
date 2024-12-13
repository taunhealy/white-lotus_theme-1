import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'instagram',
  title: 'Instagram',
  type: 'document',  // This is a document type
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'handle',
      title: 'Handle',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
    }),
  ]
})