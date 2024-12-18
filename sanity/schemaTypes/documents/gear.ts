import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'gear',
  title: 'Gear',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'brand',
      title: 'Brand',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Camera Body', value: 'camera'},
          {title: 'Lens', value: 'lens'},
          {title: 'Lighting', value: 'lighting'},
          {title: 'Accessories', value: 'accessories'},
          {title: 'Drone', value: 'drone'}
        ]
      }
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text'
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'brand',
      media: 'image'
    }
  }
}) 