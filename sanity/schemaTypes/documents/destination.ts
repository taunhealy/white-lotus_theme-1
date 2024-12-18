import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'destination',
  title: 'Destination',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Destination Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string'
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text'
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'coordinates',
      title: 'Coordinates',
      type: 'object',
      fields: [
        {name: 'lat', type: 'number', title: 'Latitude'},
        {name: 'lng', type: 'number', title: 'Longitude'}
      ]
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}]
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'country',
      media: 'coverImage'
    }
  }
}) 