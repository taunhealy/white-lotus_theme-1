import { client } from '../lib/sanity'

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