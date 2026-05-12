import type { Metadata } from 'next'
import './globals.css'
import TopBar from '@/components/layout/TopBar'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingWhatsapp from '@/components/layout/FloatingWhatsapp'
import AosProvider from '@/components/layout/AosProvider'
import ScrollToTop from '@/components/layout/ScrollToTop'

const SITE_URL = 'https://drericodiogenes.com.br'

const physicianSchema = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: 'Dr. Érico Diógenes',
  description:
    'Urologista em Fortaleza especialista em Cirurgia Robótica, HoLEP e Uro-oncologia.',
  url: SITE_URL,
  telephone: '+558598178-1020',
  email: 'contato@drericodiogenes.com.br',
  medicalSpecialty: 'Urology',
  image: `${SITE_URL}/img/dr-erico-foto-1.webp`,
  availableService: [
    { '@type': 'MedicalProcedure', name: 'Cirurgia Robótica da Próstata' },
    { '@type': 'MedicalProcedure', name: 'HoLEP — Enucleação da Próstata a Laser' },
    { '@type': 'MedicalProcedure', name: 'Tratamento de Câncer de Próstata' },
    { '@type': 'MedicalProcedure', name: 'Cirurgia a Laser para Próstata Aumentada' },
    { '@type': 'MedicalProcedure', name: 'Tratamento a Laser para Cálculo Renal' },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Dom Luís, 1200, Sl 705, Torre 2',
    addressLocality: 'Fortaleza',
    addressRegion: 'CE',
    addressCountry: 'BR',
  },
  sameAs: ['https://instagram.com/drericodiogenes'],
}

const clinicSchema = {
  '@context': 'https://schema.org',
  '@type': ['MedicalClinic', 'LocalBusiness'],
  name: 'Dr. Érico Diógenes — Urologista em Fortaleza',
  description:
    'Clínica urológica especializada em cirurgia robótica, HoLEP e uro-oncologia em Fortaleza, Ceará.',
  url: SITE_URL,
  telephone: '+558598178-1020',
  email: 'contato@drericodiogenes.com.br',
  image: `${SITE_URL}/img/dr-erico-foto-1.webp`,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Pátio Dom Luís, Av. Dom Luís, 1200, Sl 705, Torre 2',
    addressLocality: 'Fortaleza',
    addressRegion: 'Ceará',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -3.7461,
    longitude: -38.4885,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
  sameAs: ['https://instagram.com/drericodiogenes'],
  areaServed: [
    { '@type': 'City', name: 'Fortaleza' },
    { '@type': 'State', name: 'Ceará' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Dr. Érico Diógenes | Urologista em Fortaleza',
    template: '%s | Dr. Érico Diógenes',
  },
  description:
    'Dr. Érico Diógenes, Urologista em Fortaleza especialista em Cirurgia Robótica, HoLEP e Uro-oncologia. Atendimento humanizado com tecnologia de ponta no Ceará.',
  keywords: [
    'urologista fortaleza',
    'cirurgia robótica fortaleza',
    'holep próstata',
    'próstata aumentada',
    'câncer de próstata',
    'cirurgia a laser próstata',
    'urologia ceará',
    'dr erico diogenes',
  ],
  authors: [{ name: 'Dr. Érico Diógenes', url: SITE_URL }],
  creator: 'Dr. Érico Diógenes',
  publisher: 'Dr. Érico Diógenes',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: 'Dr. Érico Diógenes',
    title: 'Dr. Érico Diógenes | Urologista em Fortaleza',
    description:
      'Urologista em Fortaleza especialista em Cirurgia Robótica, HoLEP e Uro-oncologia. Tecnologia avançada e cuidado humanizado.',
    images: [
      {
        url: '/img/dr-erico-foto-1.webp',
        width: 1200,
        height: 630,
        alt: 'Dr. Érico Diógenes — Urologista em Fortaleza',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Érico Diógenes | Urologista em Fortaleza',
    description:
      'Urologista em Fortaleza especialista em Cirurgia Robótica, HoLEP e Uro-oncologia.',
    images: ['/img/dr-erico-foto-1.webp'],
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: '/img/logo_1.webp',
    shortcut: '/img/logo_1.webp',
    apple: '/img/logo_1.webp',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
        />
      </head>
      <body>
        <AosProvider>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col">
            <TopBar />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <FloatingWhatsapp />
          </div>
        </AosProvider>
      </body>
    </html>
  )
}
