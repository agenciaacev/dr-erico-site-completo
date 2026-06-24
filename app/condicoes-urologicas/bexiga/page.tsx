import type { Metadata } from 'next'
import ContactMini from '@/components/sections/ContactMini'
import CtaBanner from '@/components/ui/CtaBanner'

export const metadata: Metadata = {
  title: { absolute: 'Bexiga e Vias Urinárias | Dr. Érico Diógenes, Fortaleza' },
  description: 'Tratamento de doenças da bexiga em Fortaleza: infecção urinária, sangue na urina, incontinência e bexiga hiperativa. Dr. Érico Diógenes.',
  alternates: { canonical: '/condicoes-urologicas/bexiga' },
}

export default function Bexiga() {
  return (
    <>
      <section className="py-20 bg-brand-beige">
        <div className="container-site text-center">
          <p className="eyebrow">Bexiga e Vias Urinárias</p>
          <h1 className="section-title mt-2">Bexiga e Vias Urinárias em Fortaleza</h1>
          <p className="text-brand-muted mt-4 max-w-2xl mx-auto">Conteúdo em construção.</p>
          <a href="https://wa.me/5585981781020" target="_blank" rel="noopener noreferrer" className="btn-silver mt-8">Agendar Consulta</a>
        </div>
      </section>
      <ContactMini />
      <CtaBanner />
    </>
  )
}
