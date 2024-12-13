export default {
    name: 'heroInstagram',
    title: 'Instagram Hero Section',
    type: 'object',
    fields: [
      {
        name: 'sectionTitle',
        title: 'Instagram Carousel Title',
        type: 'string',
        description: 'Main title for the Instagram carousel section',
      },
      {
        name: 'instagramHandle',
        title: 'Instagram Handle',
        type: 'string',
        description: '@username for your Instagram account',
        validation: (Rule) => Rule.required().regex(/^@[A-Za-z0-9._]+$/, {
          name: 'Valid Instagram handle',
          invert: false
        })
      },
      {
        name: 'instagramLink',
        title: 'Instagram Profile URL',
        type: 'url',
        description: 'Link to your Instagram profile',
        validation: (Rule) => Rule.uri({
          scheme: ['http', 'https']
        }).required().regex(/^https?:\/\/(www\.)?instagram\.com\/[\w.-]+\/?$/, {
          name: 'Valid Instagram URL'
        })
      },
      {
        name: 'numberOfPosts',
        title: 'Number of Posts to Display',
        type: 'number',
        initialValue: 6,
        validation: (Rule: any) => Rule.min(1).max(12)
      }
    ]
}