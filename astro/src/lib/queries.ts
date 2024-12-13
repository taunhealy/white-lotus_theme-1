export const pageQuery = `*[_type == "page" && slug.current == $slug && !(_id in path("drafts.**"))][0]{
    title,
    slug,
    sections[]->{
      _type,
      name,
      sectionType,
      content,
      testimonials[]->{
        author,
        role,
        content,
        avatar {
          asset->{
            url
          }
        }
      },
      image {
        asset->{
          url
        }
      },
      order
    }
  }`;

export const allPagesQuery = `*[_type == "page" && !(_id in path("drafts.**"))]{ 
    "slug": slug.current,
    "isHomePage": slug.current == "home"
  }`;
