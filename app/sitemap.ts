import type { MetadataRoute } from 'next'
import { posts } from '@/data/posts'

const SITE_URL = 'https://drericodiogenes.com.br'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL,                              lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${SITE_URL}/cirurgia-robotica`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/holep`,                    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/dr-erico-diogenes`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/blog`,                     lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${SITE_URL}/contato`,                  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ]

  const blogPosts: MetadataRoute.Sitemap = posts
    .filter((p) => p.slug !== 'slug-do-post-aqui' && p.content.length > 200)
    .map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: 'monthly',
      priority: 0.7,
    }))

  return [...staticPages, ...blogPosts]
}
