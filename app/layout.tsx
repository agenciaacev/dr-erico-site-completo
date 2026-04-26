import type { Metadata } from 'next'
import './globals.css'
import TopBar from '@/components/layout/TopBar'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingWhatsapp from '@/components/layout/FloatingWhatsapp'
import AosProvider from '@/components/layout/AosProvider'
import ScrollToTop from '@/components/layout/ScrollToTop'

export const metadata: Metadata = {
  title: 'Dr. Érico Diógenes | Urologista em Fortaleza',
  description:
    'Dr. Érico Diógenes, Urologista em Fortaleza especialista em Cirurgia Robótica, HoLEP e Uro-oncologia.',
  icons: {
    icon: '/img/logo_1.webp',
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
