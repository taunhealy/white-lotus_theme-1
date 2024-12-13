export const pageQuery = `*[_type == "page" && slug.current == $slug && !(_id in path("drafts.**"))][0]{
  title,
  slug,
  sections[]-> {
    ...,
    "sectionData": *[_type == $sectionType + "Section" && references(^._id)][0] {
      ...,
      // Resolve any references and assets
      ...select(
        _type == "testimonialSection" => {
          "testimonials": testimonials[]->{ ..., "avatar": avatar.asset->url }
        },
        _type == "heroWorkSection" => {
          "works": works[]->{ ..., "image": image.asset->url }
        },
        _type match "*" => {
          "image": image.asset->url
        }
      )
    }
  }
}`;

export const allPagesQuery = `*[_type == "page" && !(_id in path("drafts.**"))]{ 
    "slug": slug.current,
    "isHomePage": slug.current == "home"
  }`;
