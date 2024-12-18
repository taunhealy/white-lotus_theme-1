import { createClient } from '@sanity/client'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

console.log('Token being used:', process.env.SANITY_WRITE_TOKEN?.slice(0, 8) + '...');

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  token: process.env.SANITY_WRITE_TOKEN,
  apiVersion: '2024-06-19',
  useCdn: false
})

console.log('Sanity Configuration:', {
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  tokenPrefix: process.env.SANITY_WRITE_TOKEN?.slice(0, 8),
  apiVersion: '2024-06-19'
})

const VENUES = [
  {
    _type: 'venue',
    name: 'The Grand Plaza',
    location: 'New York, NY'
  },
  {
    _type: 'venue',
    name: 'Sunset Beach Resort',
    location: 'Miami, FL'
  },
  {
    _type: 'venue',
    name: 'Mountain View Lodge',
    location: 'Denver, CO'
  }
]

const CLIENTS = [
  {
    _type: 'client',
    coupleNames: 'Sarah & James',
    weddingDate: '2024-06-15'
  },
  {
    _type: 'client',
    coupleNames: 'Michael & Emma',
    weddingDate: '2024-07-22'
  },
  {
    _type: 'client',
    coupleNames: 'David & Lisa',
    weddingDate: '2024-08-30'
  }
]

const TESTIMONIALS = [
  {
    _type: 'testimonial',
    content: "The team captured our special day perfectly. Every moment was beautifully documented.",
    author: "Sarah James",
    role: "Bride"
  },
  {
    _type: 'testimonial',
    content: "Professional, creative, and incredibly talented. They exceeded our expectations.",
    author: "Emma Thompson",
    role: "Bride"
  },
  {
    _type: 'testimonial',
    content: "The best decision we made for our wedding. The results were stunning.",
    author: "Lisa Anderson",
    role: "Bride"
  }
]

const PAGES = [
  {
    _type: 'page',
    title: 'Home',
    slug: { _type: 'slug', current: 'home' },
    sections: [
      {
        _type: 'heroSection',
        heroTitle: 'Capturing Your Perfect Moments',
        heroSubtitle: 'Professional Wedding Photography & Videography',
        order: 1
      },
      {
        _type: 'workSection',
        title: 'Featured Work',
        order: 2
      },
      {
        _type: 'testimonialSection',
        title: 'What Our Clients Say',
        order: 3
      }
    ]
  },
  {
    _type: 'page',
    title: 'About',
    slug: { _type: 'slug', current: 'about' },
    sections: [
      {
        _type: 'heroSection',
        heroTitle: 'Our Story',
        heroSubtitle: 'Passionate About Capturing Love Stories',
        order: 1
      }
    ]
  },
  {
    _type: 'page',
    title: 'Portfolio',
    slug: { _type: 'slug', current: 'portfolio' },
    sections: [
      {
        _type: 'workSection',
        title: 'Our Work',
        order: 1
      }
    ]
  }
]

export { VENUES, CLIENTS, TESTIMONIALS, PAGES }

// Add deletion function
async function deleteAllDocuments() {
  console.log('🗑️  Deleting ALL existing documents...')
  
  try {
    // More specific query to only target our known document types
    const query = `*[_type in ["venue", "client", "testimonial", "page"]]`
    const documents = await client.fetch(query)
    
    if (documents.length === 0) {
      console.log('No matching documents to delete.')
      return
    }

    console.log(`Found ${documents.length} documents to delete...`)
    
    // Try deleting one by one instead of in a transaction
    for (const doc of documents) {
      try {
        await client.delete(doc._id)
        console.log(`Deleted document: ${doc._type} (${doc._id})`)
      } catch (deleteError) {
        console.error(`Failed to delete ${doc._type} (${doc._id}):`, deleteError.message)
      }
    }

    console.log('✨ Deletion process completed!')
  } catch (error) {
    console.error('Deletion failed:', {
      message: error.message,
      statusCode: error.statusCode,
      details: error.details?.items?.[0]?.error
    })
    throw error
  }
}

// Add this before seedData()
async function testConnection() {
  try {
    console.log('Testing Sanity connection...')
    // Try to fetch a single document
    const test = await client.fetch('*[_type == "venue"][0]')
    console.log('Connection successful!')
    return true
  } catch (error) {
    console.error('Connection test failed:', {
      message: error.message,
      statusCode: error.statusCode,
      details: error.details
    })
    return false
  }
}

// Modify seedData to include connection test
async function seedData() {
  try {
    console.log('🌱 Starting data reset and seed process...')
    
    // Test connection first
    const isConnected = await testConnection()
    if (!isConnected) {
      throw new Error('Failed to connect to Sanity')
    }
    
    // Delete existing documents first
    await deleteAllDocuments()

    // Create new documents
    console.log('Creating venues...')
    await Promise.all(VENUES.map(venue => client.create(venue)))

    console.log('Creating clients...')
    await Promise.all(CLIENTS.map(clientData => client.create(clientData)))

    console.log('Creating testimonials...')
    await Promise.all(TESTIMONIALS.map(testimonial => client.create(testimonial)))

    console.log('Creating pages...')
    await Promise.all(PAGES.map(page => client.create(page)))

    console.log('✅ Seeding completed successfully!')
  } catch (error) {
    console.error('❌ Error seeding data:', error)
    process.exit(1)
  }
}

// Execute the seed function
seedData()