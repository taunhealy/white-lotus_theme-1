import { client } from '../lib/sanity'
import { VENUES, CLIENTS, TESTIMONIALS, PAGES } from '../scripts/seedData'

async function seedAll() {
  try {
    // Clear existing documents (optional - be careful with this in production!)
    await client.delete({query: '*[!(_id in path("drafts.**"))]'})
    
    // Seed venues
    const venueRefs = await Promise.all(
      VENUES.map(async (venue) => {
        const created = await client.create(venue)
        console.log(`Created venue: ${venue.name}`)
        return created._id
      })
    )

    // Seed clients with venue references
    const clientRefs = await Promise.all(
      CLIENTS.map(async (clientData, index) => {
        const created = await client.create({
          ...clientData,
          venue: { _type: 'reference', _ref: venueRefs[index] }
        })
        console.log(`Created client: ${clientData.coupleNames}`)
        return created._id
      })
    )

    // Seed testimonials with client references
    await Promise.all(
      TESTIMONIALS.map(async (testimonial, index) => {
        await client.create({
          ...testimonial,
          client: { _type: 'reference', _ref: clientRefs[index] }
        })
        console.log(`Created testimonial for: ${testimonial.author}`)
      })
    )

    // Seed pages
    await Promise.all(
      PAGES.map(async (page) => {
        await client.create(page)
        console.log(`Created page: ${page.title}`)
      })
    )

    console.log('Seeding completed successfully')
  } catch (error) {
    console.error('Error seeding data:', error)
    throw error
  }
}

export { seedAll }