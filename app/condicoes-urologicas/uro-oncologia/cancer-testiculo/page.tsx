import type { Metadata } from 'next'
import ContactMini from '@/components/sections/ContactMini'
import CtaBanner from '@/components/ui/CtaBanner'

export const metadata: Metadata = {
  title: { absolute: 'Câncer de Testículo Fortaleza | Dr. Érico Diógenes' },
  description: 'Diagnóstico e tratamento do câncer de testículo em Fortaleza. Dr. Érico Diógenes, urologista especialista em uro-oncologia.',
  alternates: { canonical: '/condicoes-urologicas/uro-oncologia/cancer-testiculo' },
}

export default function CancerTesticulo() {
  return (
    <>
      <section className="py-20 bg-brand-beige">
        <div className="container-site text-center">
          <p className="eyebrow">Uro-Oncologia</p>
          <h1 className="section-title mt-2">Câncer de Testículo</h1>
          <p className="text-brand-muted mt-4 max-w-2xl mx-auto">Conteúdo em construção.</p>
          <a href="https://wa.me/5585981781020" target="_blank" rel="noopener noreferrer" className="btn-silver mt-8">Agendar Consulta</a>
        </div>
      </section>
      <ContactMini />
      <CtaBanner />
    </>
  )
}
