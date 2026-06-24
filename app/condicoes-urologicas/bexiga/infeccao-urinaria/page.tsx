import type { Metadata } from 'next'
import ContactMini from '@/components/sections/ContactMini'
import CtaBanner from '@/components/ui/CtaBanner'

export const metadata: Metadata = {
  title: { absolute: 'Infecção Urinária em Homens Fortaleza | Dr. Érico Diógenes' },
  description: 'Infecção urinária em homens em Fortaleza: causas, sintomas e tratamento com Dr. Érico Diógenes, urologista especialista.',
  alternates: { canonical: '/condicoes-urologicas/bexiga/infeccao-urinaria' },
}

export default function InfeccaoUrinaria() {
  return (
    <>
      <section className="py-20 bg-brand-beige">
        <div className="container-site text-center">
          <p className="eyebrow">Bexiga</p>
          <h1 className="section-title mt-2">Infecção Urinária em Homens</h1>
          <p className="text-brand-muted mt-4 max-w-2xl mx-auto">Conteúdo em construção.</p>
          <a href="https://wa.me/5585981781020" target="_blank" rel="noopener noreferrer" className="btn-silver mt-8">Agendar Consulta</a>
        </div>
      </section>
      <ContactMini />
      <CtaBanner />
    </>
  )
}
