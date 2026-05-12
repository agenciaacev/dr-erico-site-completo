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
      // ─── Páginas WordPress com URLs alternativas ───────────────────────
      { source: '/sobre',        destination: '/dr-erico-diogenes', permanent: true },
      { source: '/sobre-nos',    destination: '/dr-erico-diogenes', permanent: true },
      { source: '/sobre-mim',    destination: '/dr-erico-diogenes', permanent: true },
      { source: '/quem-somos',   destination: '/dr-erico-diogenes', permanent: true },
      { source: '/medico',       destination: '/dr-erico-diogenes', permanent: true },
      { source: '/doutor',       destination: '/dr-erico-diogenes', permanent: true },

      // ─── Categorias e tags WordPress ───────────────────────────────────
      { source: '/category/:slug*',  destination: '/blog', permanent: true },
      { source: '/categoria/:slug*', destination: '/blog', permanent: true },
      { source: '/tag/:slug*',       destination: '/blog', permanent: true },

      // ─── Feed WordPress ────────────────────────────────────────────────
      { source: '/feed',  destination: '/sitemap.xml', permanent: true },
      { source: '/feed/', destination: '/sitemap.xml', permanent: true },

      // ─── Slug com maiúsculas → lowercase (SEO) ─────────────────────────
      {
        source: '/blog/como-Funciona-e-quando-e-indicada-para-prostata-ou-calculo-Renal',
        destination: '/blog/como-funciona-e-quando-e-indicada-para-prostata-ou-calculo-renal',
        permanent: true,
      },

      // ─── Posts WordPress na raiz (sem /blog/) → /blog/slug ─────────────
      { source: '/cirurgia-robotica-o-que-e-indicacoes-beneficios',                         destination: '/blog/cirurgia-robotica-o-que-e-indicacoes-beneficios',                         permanent: true },
      { source: '/cancer-de-prostata-sintomas-tratamentos-e-como-prevenir',                 destination: '/blog/cancer-de-prostata-sintomas-tratamentos-e-como-prevenir',                 permanent: true },
      { source: '/exames-da-prostata-tipos-finalidade',                                     destination: '/blog/exames-da-prostata-tipos-finalidade',                                     permanent: true },
      { source: '/prostata-aumentada-sintomas-e-quando-procurar-urologista',                destination: '/blog/prostata-aumentada-sintomas-e-quando-procurar-urologista',                permanent: true },
      { source: '/prostata-aumentada-quando-e-hora-de-fazer-cirurgia',                      destination: '/blog/prostata-aumentada-quando-e-hora-de-fazer-cirurgia',                      permanent: true },
      { source: '/cirurgia-holep-para-prostata-aumentada',                                  destination: '/blog/cirurgia-holep-para-prostata-aumentada',                                  permanent: true },
      { source: '/o-que-e-holep-tecnica-a-laser',                                           destination: '/blog/o-que-e-holep-tecnica-a-laser',                                           permanent: true },
      { source: '/tratamento-a-laser-para-calculo-renal',                                   destination: '/blog/tratamento-a-laser-para-calculo-renal',                                   permanent: true },
      { source: '/cirurgia-a-laser-para-prostata-aumentada',                                destination: '/blog/cirurgia-a-laser-para-prostata-aumentada',                                permanent: true },
      { source: '/como-funciona-e-quando-e-indicada-para-prostata-ou-calculo-renal',        destination: '/blog/como-funciona-e-quando-e-indicada-para-prostata-ou-calculo-renal',        permanent: true },
      { source: '/recuperacao-apos-cirurgia-robotica',                                      destination: '/blog/recuperacao-apos-cirurgia-robotica',                                      permanent: true },
      { source: '/5-motivos-para-escolher-a-cirurgia-robotica',                             destination: '/blog/5-motivos-para-escolher-a-cirurgia-robotica',                             permanent: true },
      { source: '/cirurgia-robotica-x-laparoscopia',                                        destination: '/blog/cirurgia-robotica-x-laparoscopia',                                        permanent: true },
      { source: '/por-que-o-homem-deve-consultar-o-urologista-todo-ano',                    destination: '/blog/por-que-o-homem-deve-consultar-o-urologista-todo-ano',                    permanent: true },
      { source: '/psa-alterado-o-que-significa',                                            destination: '/blog/psa-alterado-o-que-significa',                                            permanent: true },
      { source: '/cancer-de-prostata-sintomas-diagnostico',                                 destination: '/blog/cancer-de-prostata-sintomas-diagnostico',                                 permanent: true },
      { source: '/7-sinais-que-indicam-que-voce-deve-procurar-um-urologista',               destination: '/blog/7-sinais-que-indicam-que-voce-deve-procurar-um-urologista',               permanent: true },
      { source: '/exame-de-prostata-o-que-e',                                               destination: '/blog/exame-de-prostata-o-que-e',                                               permanent: true },
      { source: '/cirurgia-robotica-de-prostata-vantagens-indicacoes-e-recuperacao',        destination: '/blog/cirurgia-robotica-de-prostata-vantagens-indicacoes-e-recuperacao',        permanent: true },
    ]
  },
}

module.exports = nextConfig
