import type { Metadata } from 'next'
import HeroHome from '@/components/sections/HeroHome'

export const metadata: Metadata = {
  title: { absolute: 'Urologista em Fortaleza | Cirurgia Robótica e HoLEP' },
  description:
    'Dr. Érico Diógenes, urologista em Fortaleza especialista em Cirurgia Robótica, HoLEP e Uro-oncologia no Ceará. Tecnologia avançada. Agende sua consulta.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Dr. Érico Diógenes | Urologista em Fortaleza, Cirurgia Robótica e HoLEP',
    description:
      'Especialista em Cirurgia Robótica, HoLEP e tratamentos urológicos avançados em Fortaleza, CE.',
    url: '/',
  },
}
import VideoSection from '@/components/sections/VideoSection'
import SobreDoutor from '@/components/sections/SobreDoutor'
import BlogPreview from '@/components/sections/BlogPreview'
import CtaBanner from '@/components/ui/CtaBanner'
import ContactMini from '@/components/sections/ContactMini'
import TratamentosGrid from '@/components/sections/TratamentosGrid'

export default function Home() {
  return (
    <>
      <HeroHome />
      <TratamentosGrid />
      <SobreDoutor />
      <VideoSection />
      <BlogPreview />
      <CtaBanner />
      <ContactMini />
    </>
  )
}
