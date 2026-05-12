import type { Metadata } from 'next'
import HeroHome from '@/components/sections/HeroHome'

export const metadata: Metadata = {
  title: 'Urologista em Fortaleza | Cirurgia Robótica e HoLEP',
  description:
    'Dr. Érico Diógenes, Urologista em Fortaleza. Especialista em Cirurgia Robótica, HoLEP, Próstata e Uro-oncologia. Tecnologia de ponta e atendimento humanizado no Ceará.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Dr. Érico Diógenes | Urologista em Fortaleza — Cirurgia Robótica e HoLEP',
    description:
      'Especialista em Cirurgia Robótica, HoLEP e tratamentos urológicos avançados em Fortaleza, CE.',
    url: '/',
  },
}
import VideoSection from '@/components/sections/VideoSection'
import CirurgiaRoboticaHighlight from '@/components/sections/CirurgiaRoboticaHighlight'
import Diferenciais from '@/components/sections/Diferenciais'
import LaserHighlight from '@/components/sections/LaserHighlight'
import SobreDoutor from '@/components/sections/SobreDoutor'
import BlogPreview from '@/components/sections/BlogPreview'
import CtaBanner from '@/components/ui/CtaBanner'
import ContactMini from '@/components/sections/ContactMini'

export default function Home() {
  return (
    <>
      <HeroHome />
      <CirurgiaRoboticaHighlight />
      <Diferenciais />
      <LaserHighlight />
      <SobreDoutor />
      <VideoSection />
      <BlogPreview />
      <CtaBanner />
      <ContactMini />
    </>
  )
}
