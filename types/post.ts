export type PostCategory =
  | 'Cirurgia Robótica'
  | 'Próstata'
  | 'HoLEP'
  | 'Cálculo Renal'
  | 'Tratamento a Laser'
  | 'Cirurgia a Laser'

export type Post = {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: PostCategory
  categories?: PostCategory[]
  coverImage: string
  author: string
  publishedAt: string // ISO date
  readingTime?: number
}
