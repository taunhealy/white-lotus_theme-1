import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'reference',
      to: [{type: 'client'}],
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date'
    }),
    defineField({
      name: 'destination',
      title: 'Destination',
      type: 'reference',
      to: [{type: 'destination'}],
      description: 'Link to a destination (for travel photography)'
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      description: 'Main portfolio image (used in grids and listings)',
      options: {
        hotspot: true,
      }
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'workCategory'}],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'photoSeries',
      title: 'Photo Series',
      type: 'array',
      of: [{
        type: 'object',
        name: 'series',
        fields: [
          {
            name: 'name',
            title: 'Series Name',
            type: 'string',
          },
          {
            name: 'description',
            title: 'Series Description',
            type: 'text',
          },
          {
            name: 'photos',
            title: 'Photos',
            type: 'array',
            of: [{
              type: 'image',
              options: {
                hotspot: true,
                metadata: ['location', 'palette', 'exif'],
              },
              fields: [
                {
                  name: 'title',
                  type: 'string',
                  title: 'Photo Title'
                },
                {
                  name: 'caption',
                  type: 'text',
                  title: 'Caption'
                },
                {
                  name: 'location',
                  type: 'string',
                  title: 'Location'
                },
                {
                  name: 'featured',
                  type: 'boolean',
                  title: 'Featured Photo',
                  initialValue: false
                }
              ]
            }]
          }
        ]
      }]
    }),
    defineField({
      name: 'details',
      title: 'Project Details',
      type: 'object',
      fields: [
        {
          name: 'date',
          title: 'Project Date',
          type: 'date'
        },
        {
          name: 'equipment',
          title: 'Equipment Used',
          type: 'array',
          of: [{
            type: 'reference',
            to: [{type: 'gear'}]
          }]
        },
        {
          name: 'tags',
          title: 'Tags',
          type: 'array',
          of: [{type: 'string'}]
        }
      ]
    }),
    defineField({
      name: 'description',
      title: 'Project Description',
      type: 'text',
    })
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      media: 'coverImage'
    },
    prepare({title, category, media}) {
      return {
        title: title || 'Untitled Project',
        subtitle: category,
        media: media
      }
    }
  }
})