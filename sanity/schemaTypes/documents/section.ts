import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'section',
  title: 'Section',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Section Name',
      type: 'string',
    }),
    defineField({
      name: 'sectionType',
      title: 'Section Type',
      type: 'string',
      options: {
        list: [
          {title: 'Hero', value: 'hero'},
          {title: 'Hero Work', value: 'heroWork'},
          {title: 'Testimonials', value: 'testimonials'},
        ],
      },
    }),
    defineField({
      name: 'sectionContent',
      title: 'Section Content',
      type: 'reference',
      to: [
        {type: 'heroSection'},
        {type: 'testimonialSection'}
      ],
      validation: Rule => Rule.required(),
      options: {
        filter: ({document}) => ({
          filter: '_type == $type',
          params: {type: `${document?.sectionType}Section`}
        })
      }
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
    }),
  ],
})