/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'i.ytimg.com' },
    ],
  },

  async redirects() {
    return [
      // Páginas comuns do WordPress com nomes alternativos
      { source: '/sobre',            destination: '/dr-erico-diogenes', permanent: true },
      { source: '/sobre-nos',        destination: '/dr-erico-diogenes', permanent: true },
      { source: '/sobre-mim',        destination: '/dr-erico-diogenes', permanent: true },
      { source: '/quem-somos',       destination: '/dr-erico-diogenes', permanent: true },
      { source: '/medico',           destination: '/dr-erico-diogenes', permanent: true },
      { source: '/doutor',           destination: '/dr-erico-diogenes', permanent: true },

      // Categorias e tags do WordPress → Blog
      { source: '/category/:slug*',  destination: '/blog', permanent: true },
      { source: '/categoria/:slug*', destination: '/blog', permanent: true },
      { source: '/tag/:slug*',       destination: '/blog', permanent: true },

      // Feed WordPress
      { source: '/feed',             destination: '/sitemap.xml', permanent: true },
      { source: '/feed/',            destination: '/sitemap.xml', permanent: true },

      // Posts do WordPress que podem estar na raiz (sem /blog/)
      { source: '/cirurgia-robotica-o-que-e-indicacoes-beneficios',           destination: '/blog/cirurgia-robotica-o-que-e-indicacoes-beneficios',           permanent: true },
      { source: '/cancer-de-prostata-sintomas-tratamentos-e-como-prevenir',   destination: '/blog/cancer-de-prostata-sintomas-tratamentos-e-como-prevenir',   permanent: true },
      { source: '/exames-da-prostata-tipos-finalidade',                        destination: '/blog/exames-da-prostata-tipos-finalidade',                        permanent: true },
      { source: '/prostata-aumentada-sintomas-e-quando-procurar-urologista',  destination: '/blog/prostata-aumentada-sintomas-e-quando-procurar-urologista',  permanent: true },
      { source: '/prostata-aumentada-quando-e-hora-de-fazer-cirurgia',        destination: '/blog/prostata-aumentada-quando-e-hora-de-fazer-cirurgia',        permanent: true },
      { source: '/cirurgia-holep-para-prostata-aumentada',                    destination: '/blog/cirurgia-holep-para-prostata-aumentada',                    permanent: true },
      { source: '/o-que-e-holep-tecnica-a-laser',                             destination: '/blog/o-que-e-holep-tecnica-a-laser',                             permanent: true },
      { source: '/tratamento-a-laser-para-calculo-renal',                     destination: '/blog/tratamento-a-laser-para-calculo-renal',                     permanent: true },
      { source: '/cirurgia-a-laser-para-prostata-aumentada',                  destination: '/blog/cirurgia-a-laser-para-prostata-aumentada',                  permanent: true },
    ]
  },
}

module.exports = nextConfig
