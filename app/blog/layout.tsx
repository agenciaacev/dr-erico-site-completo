import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — Urologia e Saúde Masculina',
  description:
    'Artigos sobre urologia, próstata, câncer de próstata, cirurgia robótica, HoLEP e saúde masculina. Conteúdo médico de qualidade com o Dr. Érico Diógenes.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog de Urologia | Dr. Érico Diógenes',
    description:
      'Artigos sobre próstata, câncer, cirurgia robótica, HoLEP e saúde masculina.',
    url: '/blog',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
