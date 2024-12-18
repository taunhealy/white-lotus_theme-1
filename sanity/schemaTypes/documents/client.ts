export default {
    name: 'client',
    title: 'Client',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Client Name',
        type: 'string',
        validation: (Rule: any) => Rule.required()
      }
    ]
}