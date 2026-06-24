import type { Metadata } from 'next'
import ContactMini from '@/components/sections/ContactMini'
import CtaBanner from '@/components/ui/CtaBanner'

export const metadata: Metadata = {
  title: { absolute: 'Cirurgia Urológica Fortaleza | Dr. Érico Diógenes' },
  description: 'Cirurgias urológicas em Fortaleza com Dr. Érico Diógenes: robótica, laser, laparoscopia e abertas. Tecnologia e cuidado humanizado.',
  alternates: { canonical: '/tratamentos/cirurgia-urologica' },
}

export default function CirurgiaUrologica() {
  return (
    <>
      <section className="py-20 bg-brand-beige">
        <div className="container-site text-center">
          <p className="eyebrow">Tratamentos</p>
          <h1 className="section-title mt-2">Cirurgia Urológica em Fortaleza</h1>
          <p className="text-brand-muted mt-4 max-w-2xl mx-auto">Conteúdo em construção.</p>
          <a href="https://wa.me/5585981781020" target="_blank" rel="noopener noreferrer" className="btn-silver mt-8">Agendar Consulta</a>
        </div>
      </section>
      <ContactMini />
      <CtaBanner />
    </>
  )
}
