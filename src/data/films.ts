import filmsData from './films.json'

export interface Film {
  slug: string
  number: string
  title: string
  shortDescription: string  // one-liner for the grid card
  car: string               // "featuring" line
  year: number
  youtubeId: string
  thumbnail: string
  soundtrack: string        // "Artist — Song"
  story: string             // prose, shown on the detail page
  btsStills: string[]
}

// Cast the imported JSON to the typed array.
// To add or edit films, edit src/data/films.json — no TypeScript changes needed.
export const films = filmsData as Film[]

export function getFilmBySlug(slug: string): Film | undefined {
  return films.find((f) => f.slug === slug)
}
