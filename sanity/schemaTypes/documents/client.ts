export default {
    name: 'client',
    title: 'Client',
    type: 'document',
    fields: [
      {
        name: 'coupleNames',
        title: 'Couple Names',
        type: 'string',
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'weddingDate',
        title: 'Wedding Date',
        type: 'date'
      },
      {
        name: 'venue',
        title: 'Venue',
        type: 'reference',
        to: [{ type: 'venue' }]
      },
      {
        name: 'video',
        title: 'Wedding Video',
        type: 'file',
        options: {
          accept: 'video/*'
        }
      }
    ]
  }