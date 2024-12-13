import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'instagramSection',
  title: 'Instagram Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string'
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'reference',
      to: [{type: 'instagram'}]
    })
  ]
})