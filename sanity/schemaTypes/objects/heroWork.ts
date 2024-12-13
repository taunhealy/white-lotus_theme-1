import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'heroWork',
    title: 'Hero Work',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'work',
            title: 'Work',
            type: 'array',
            of: [{type: 'reference', to: [{type: 'work'}]}],
        })
    ]

})