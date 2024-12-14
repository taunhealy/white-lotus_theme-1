import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    defineField({
      name: 'client',
      title: 'Client',
      type: 'reference',
      to: [{type: 'client'}],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'videoUrl',
      title: 'Wedding Video URL',
      type: 'url',
      description: 'The URL to the wedding video',
    }),
    defineField({
      name: 'venue',
      title: 'Venue',
      type: 'reference',
      to: [{type: 'venue'}],
    }),
  ],
  preview: {
    select: {
      clientName: 'client.coupleNames',
      media: 'image',
      venueName: 'venue.name'
    },
    prepare({clientName, media, venueName}) {
      return {
        title: clientName || 'Untitled Work',
        subtitle: venueName ? `at ${venueName}` : '',
        media: media
      }
    }
  }
})