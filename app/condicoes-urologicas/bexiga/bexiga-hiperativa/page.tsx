import type { Metadata } from 'next'
import ContactMini from '@/components/sections/ContactMini'
import CtaBanner from '@/components/ui/CtaBanner'

export const metadata: Metadata = {
  title: { absolute: 'Bexiga Hiperativa Fortaleza | Dr. Érico Diógenes' },
  description: 'Tratamento de bexiga hiperativa em Fortaleza com Dr. Érico Diógenes. Urgência e frequência urinária têm tratamento eficaz.',
  alternates: { canonical: '/condicoes-urologicas/bexiga/bexiga-hiperativa' },
}

export default function BexigaHiperativa() {
  return (
    <>
      <section className="py-20 bg-brand-beige">
        <div className="container-site text-center">
          <p className="eyebrow">Bexiga</p>
          <h1 className="section-title mt-2">Bexiga Hiperativa</h1>
          <p className="text-brand-muted mt-4 max-w-2xl mx-auto">Conteúdo em construção.</p>
          <a href="https://wa.me/5585981781020" target="_blank" rel="noopener noreferrer" className="btn-silver mt-8">Agendar Consulta</a>
        </div>
      </section>
      <ContactMini />
      <CtaBanner />
    </>
  )
}
