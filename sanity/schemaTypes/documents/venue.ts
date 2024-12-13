import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'venue',
  title: 'Venue',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Venue Name',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string'
    })
  ]
})