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

const CLIENTS = [
  {
    _type: 'client',
    name: 'Sarah & James',
    projectType: 'wedding',
    date: '2024-06-15'
  },
  {
    _type: 'client',
    name: 'Michael & Emma',
    projectType: 'wedding',
    date: '2024-07-22'
  },
  {
    _type: 'client',
    name: 'Acme Corporation',
    projectType: 'commercial',
    date: '2024-08-30'
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

const PROCESSES = [
  {
    _type: 'process',
    title: 'Initial Consultation',
    description: 'We start with a friendly chat to understand your vision and requirements',
    stepNumber: 1,
    color: '#FF6B6B'
  },
  {
    _type: 'process',
    title: 'Creative Planning',
    description: 'Together we plan the perfect shoot, from location to styling',
    stepNumber: 2,
    color: '#4ECDC4'
  },
  {
    _type: 'process',
    title: 'The Shoot',
    description: 'Professional photography session with attention to every detail',
    stepNumber: 3,
    color: '#45B7D1'
  },
  {
    _type: 'process',
    title: 'Delivery',
    description: 'Receive your carefully edited collection of memories',
    stepNumber: 4,
    color: '#96CEB4'
  }
]

const DESTINATIONS = [
  {
    _type: 'destination',
    name: 'Santorini',
    city: 'Oia',
    country: 'Greece',
    description: 'Iconic white-washed buildings and stunning Mediterranean views',
    coordinates: {
      lat: 36.4618,
      lng: 25.3760
    },
    tags: ['islands', 'mediterranean', 'sunset', 'architecture']
  },
  {
    _type: 'destination',
    name: 'Kyoto',
    city: 'Kyoto',
    country: 'Japan',
    description: 'Ancient temples and traditional Japanese gardens',
    coordinates: {
      lat: 35.0116,
      lng: 135.7681
    },
    tags: ['temples', 'culture', 'gardens', 'traditional']
  },
  {
    _type: 'destination',
    name: 'Machu Picchu',
    city: 'Cusco',
    country: 'Peru',
    description: 'Ancient Incan citadel set high in the Andes Mountains',
    coordinates: {
      lat: -13.1631,
      lng: -72.5450
    },
    tags: ['ruins', 'mountains', 'history', 'archaeology']
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
        heroSubtitle: 'Professional Photography & Videography',
        order: 1
      },
      {
        _type: 'processSection',
        processes: [], // Will be populated with references during seeding
        order: 2
      },
      {
        _type: 'workSection',
        title: 'Featured Work',
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

const WORKS = [
  {
    _type: 'work',
    title: 'Destination Wedding in Santorini',
    description: 'A beautiful destination wedding capturing love against the backdrop of Santorini\'s stunning views.',
    details: {
      date: '2024-06-15',
      equipment: ['Sony A7IV', 'Canon R5'],
      tags: ['destination wedding', 'sunset', 'beach']
    },
    photoSeries: [
      {
        name: 'Ceremony',
        description: 'Beautiful moments from the wedding ceremony',
        photos: [] // You'll need to add actual images here
      }
    ]
  },
  {
    _type: 'work',
    title: 'Cultural Photography in Kyoto',
    category: 'travel',
    description: 'Exploring the rich cultural heritage and traditional gardens of Kyoto.',
    details: {
      date: '2024-07-01',
      equipment: ['Fujifilm X-T4', 'Leica Q2'],
      tags: ['travel', 'culture', 'architecture']
    }
  },
  {
    _type: 'work',
    title: 'Adventure Photography at Machu Picchu',
    category: 'travel',
    description: 'Capturing the mystical beauty of this ancient Incan citadel.',
    details: {
      date: '2024-08-15',
      equipment: ['Sony A7R V', 'DJI Mavic 3'],
      tags: ['travel', 'adventure', 'landscape']
    }
  }
]

const WORK_CATEGORIES = [
  {
    _type: 'workCategory',
    title: 'Wedding',
    slug: { _type: 'slug', current: 'wedding' },
    description: 'Beautiful wedding photography capturing special moments'
  },
  {
    _type: 'workCategory',
    title: 'Travel',
    slug: { _type: 'slug', current: 'travel' },
    description: 'Stunning travel and landscape photography from around the world'
  },
  {
    _type: 'workCategory',
    title: 'Commercial',
    slug: { _type: 'slug', current: 'commercial' },
    description: 'Professional commercial and brand photography'
  },
  {
    _type: 'workCategory',
    title: 'Portrait',
    slug: { _type: 'slug', current: 'portrait' },
    description: 'Capturing personalities through portrait photography'
  }
]

const BLOG_CATEGORIES = [
  {
    _type: 'blogCategory',
    title: 'Photography Tips',
    slug: { _type: 'slug', current: 'photography-tips' },
    description: 'Expert photography tips and techniques'
  },
  {
    _type: 'blogCategory',
    title: 'Travel Stories',
    slug: { _type: 'slug', current: 'travel-stories' },
    description: 'Adventures and stories from around the world'
  },
  {
    _type: 'blogCategory',
    title: 'Wedding Planning',
    slug: { _type: 'slug', current: 'wedding-planning' },
    description: 'Tips and inspiration for wedding photography'
  }
]

const GEAR = [
  {
    _type: 'gear',
    name: 'A7 IV',
    brand: 'Sony',
    category: 'camera',
    description: 'Full-frame mirrorless camera with advanced AF capabilities'
  },
  {
    _type: 'gear',
    name: 'RF 24-70mm f/2.8L IS USM',
    brand: 'Canon',
    category: 'lens',
    description: 'Professional standard zoom lens'
  },
  {
    _type: 'gear',
    name: 'Mavic 3',
    brand: 'DJI',
    category: 'drone',
    description: 'Professional drone with Hasselblad camera'
  }
]

export { CLIENTS, TESTIMONIALS, PAGES, PROCESSES, DESTINATIONS, WORKS, WORK_CATEGORIES, BLOG_CATEGORIES, GEAR }

// Update the deletion function to handle references
async function deleteAllDocuments() {
  console.log('🗑️  Deleting ALL existing documents...')
  
  try {
    // Delete in specific order to handle references
    const deleteTypes = [
      // First delete pages (they reference everything)
      'page',
      // Then delete content that pages reference
      'work',
      'testimonial',
      'process',
      // Then delete supporting content
      'client',
      'destination',
      'gear',
      // Finally delete categories
      'workCategory',
      'blogCategory',
      'blog'
    ]

    for (const type of deleteTypes) {
      console.log(`Deleting ${type} documents...`)
      const query = `*[_type == "${type}"]`
      const documents = await client.fetch(query)
      
      if (documents.length > 0) {
        console.log(`Found ${documents.length} ${type} documents to delete`)
        
        for (const doc of documents) {
          try {
            await client.delete(doc._id)
            console.log(`Deleted ${type}: ${doc._id}`)
          } catch (deleteError) {
            console.error(`Failed to delete ${type} (${doc._id}):`, deleteError.message)
          }
        }
      }
    }

    console.log('✨ Deletion process completed!')
  } catch (error) {
    console.error('Deletion failed:', error)
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

    // Create processes first
    console.log('Creating processes...')
    const processRefs = await Promise.all(
      PROCESSES.map(process => client.create(process))
    )

    // Create destinations
    console.log('Creating destinations...')
    const destinationRefs = await Promise.all(
      DESTINATIONS.map(destination => client.create(destination))
    )

    // Create clients
    console.log('Creating clients...')
    const clientRefs = await Promise.all(
      CLIENTS.map(clientData => client.create(clientData))
    )

    // Create work categories
    console.log('Creating work categories...')
    const workCategoryRefs = await Promise.all(
      WORK_CATEGORIES.map(category => client.create(category))
    )

    // Create blog categories
    console.log('Creating blog categories...')
    const blogCategoryRefs = await Promise.all(
      BLOG_CATEGORIES.map(category => client.create(category))
    )

    // Create gear
    console.log('Creating gear...')
    const gearRefs = await Promise.all(
      GEAR.map(gear => client.create(gear))
    )

    // Update work creation to handle missing categories
    console.log('Creating works...')
    const workRefs = await Promise.all(
      WORKS.map((work, index) => {
        // Create a new work object without category reference first
        const workWithRefs = {
          ...work,
          destination: { 
            _type: 'reference', 
            _ref: destinationRefs[index % destinationRefs.length]._id 
          },
          details: {
            ...work.details,
            equipment: gearRefs.map(ref => ({
              _type: 'reference',
              _ref: ref._id
            }))
          }
        }

        // Only add category reference if work has a category
        if (work.category) {
          const categoryRef = workCategoryRefs.find(cat => 
            cat.slug.current === work.category
          )
          if (categoryRef) {
            workWithRefs.category = {
              _type: 'reference',
              _ref: categoryRef._id
            }
          }
        }

        // Add client reference for wedding works
        if (work.category === 'wedding') {
          workWithRefs.client = { 
            _type: 'reference', 
            _ref: clientRefs[0]._id 
          }
        }

        return client.create(workWithRefs)
      })
    )

    // Create testimonials
    console.log('Creating testimonials...')
    await Promise.all(TESTIMONIALS.map(testimonial => client.create(testimonial)))

    // Create pages with process and work references
    console.log('Creating pages...')
    await Promise.all(
      PAGES.map(page => {
        const sectionsWithRefs = page.sections.map(section => {
          if (section._type === 'processSection') {
            return {
              ...section,
              processes: processRefs.map(ref => ({
                _type: 'reference',
                _ref: ref._id
              }))
            }
          }
          if (section._type === 'workSection') {
            return {
              ...section,
              works: workRefs.map(ref => ({
                _type: 'reference',
                _ref: ref._id
              }))
            }
          }
          return section
        })

        return client.create({
          ...page,
          sections: sectionsWithRefs
        })
      })
    )

    console.log('✅ Seeding completed successfully!')
  } catch (error) {
    console.error('❌ Error seeding data:', error)
    process.exit(1)
  }
}

// Execute the seed function
seedData()