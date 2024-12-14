export const pageQuery = `*[_type == "page" && slug.current == $slug][0] {
  title,
  slug,
  "sections": sections[]-> {
    name,
    sectionType,
    order,
    "content": sectionContent->
  }
}
  `

export const allPagesQuery = `*[_type == "page" && !(_id in path("drafts.**"))]{ 
    "slug": slug.current,
    "isHomePage": slug.current == "home"
  }`;
