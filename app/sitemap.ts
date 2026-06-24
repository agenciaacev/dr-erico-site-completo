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

  const newPages: MetadataRoute.Sitemap = [
    // Próstata
    { url: `${SITE_URL}/condicoes-urologicas/prostata/psa-alterado`,          lastModified: new Date('2026-06-23'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/condicoes-urologicas/prostata/exame-prostata`,         lastModified: new Date('2026-06-23'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/condicoes-urologicas/prostata/cancer-prostata`,        lastModified: new Date('2026-06-23'), changeFrequency: 'monthly', priority: 0.8 },
    // Cirurgia Robótica
    { url: `${SITE_URL}/tratamentos/cirurgia-robotica/prostata`,               lastModified: new Date('2026-06-23'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/tratamentos/cirurgia-robotica/rim`,                    lastModified: new Date('2026-06-23'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/tratamentos/cirurgia-robotica/bexiga`,                 lastModified: new Date('2026-06-23'), changeFrequency: 'monthly', priority: 0.8 },
    // Cálculo Renal
    { url: `${SITE_URL}/condicoes-urologicas/calculo-renal/pedra-nos-rins`,    lastModified: new Date('2026-06-23'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/condicoes-urologicas/calculo-renal/cirurgia-calculo-renal`, lastModified: new Date('2026-06-23'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/condicoes-urologicas/calculo-renal/dor-nos-rins`,      lastModified: new Date('2026-06-23'), changeFrequency: 'monthly', priority: 0.8 },
    // Uro-Oncologia
    { url: `${SITE_URL}/condicoes-urologicas/uro-oncologia`,                   lastModified: new Date('2026-06-23'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/condicoes-urologicas/uro-oncologia/cancer-rim`,        lastModified: new Date('2026-06-23'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/condicoes-urologicas/uro-oncologia/cancer-bexiga`,     lastModified: new Date('2026-06-23'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/condicoes-urologicas/uro-oncologia/cancer-testiculo`,  lastModified: new Date('2026-06-23'), changeFrequency: 'monthly', priority: 0.8 },
    // Saúde Masculina
    { url: `${SITE_URL}/saude-masculina`,                                      lastModified: new Date('2026-06-23'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/saude-masculina/disfuncao-eretil`,                     lastModified: new Date('2026-06-23'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/saude-masculina/ejaculacao-precoce`,                   lastModified: new Date('2026-06-23'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/saude-masculina/baixa-testosterona`,                   lastModified: new Date('2026-06-23'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/saude-masculina/infertilidade`,                        lastModified: new Date('2026-06-23'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/saude-masculina/vasectomia`,                           lastModified: new Date('2026-06-23'), changeFrequency: 'monthly', priority: 0.8 },
  ]

  const blogPosts: MetadataRoute.Sitemap = posts
    .filter((p) => p.slug !== 'slug-do-post-aqui' && p.content.length > 200)
    .map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: 'monthly',
      priority: 0.7,
    }))

  return [...staticPages, ...newPages, ...blogPosts]
}
