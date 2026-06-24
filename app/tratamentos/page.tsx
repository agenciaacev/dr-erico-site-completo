import type { Metadata } from 'next'
import ContactMini from '@/components/sections/ContactMini'
import CtaBanner from '@/components/ui/CtaBanner'

export const metadata: Metadata = {
  title: { absolute: 'Tratamentos Urológicos Fortaleza | Dr. Érico Diógenes' },
  description: 'Tratamentos urológicos em Fortaleza: cirurgia robótica, HoLEP, ureteroscopia, postectomia e mais. Dr. Érico Diógenes, especialista.',
  alternates: { canonical: '/tratamentos' },
}

export default function Tratamentos() {
  return (
    <>
      <section className="py-20 bg-brand-beige">
        <div className="container-site text-center">
          <p className="eyebrow">Procedimentos</p>
          <h1 className="section-title mt-2">Tratamentos Urológicos em Fortaleza</h1>
          <p className="text-brand-muted mt-4 max-w-2xl mx-auto">Conteúdo em construção.</p>
          <a href="https://wa.me/5585981781020" target="_blank" rel="noopener noreferrer" className="btn-silver mt-8">Agendar Consulta</a>
        </div>
      </section>
      <ContactMini />
      <CtaBanner />
    </>
  )
}
