import type { Metadata } from 'next'
import ContactMini from '@/components/sections/ContactMini'
import CtaBanner from '@/components/ui/CtaBanner'

export const metadata: Metadata = {
  title: { absolute: 'Infertilidade Masculina Fortaleza | Dr. Érico Diógenes' },
  description: 'Diagnóstico e tratamento da infertilidade masculina em Fortaleza. Espermograma, varicocele e outras causas com Dr. Érico Diógenes.',
  alternates: { canonical: '/saude-masculina/infertilidade' },
}

export default function InfertilidadeMasculina() {
  return (
    <>
      <section className="py-20 bg-brand-beige">
        <div className="container-site text-center">
          <p className="eyebrow">Saúde Masculina</p>
          <h1 className="section-title mt-2">Infertilidade Masculina</h1>
          <p className="text-brand-muted mt-4 max-w-2xl mx-auto">Conteúdo em construção.</p>
          <a href="https://wa.me/5585981781020" target="_blank" rel="noopener noreferrer" className="btn-silver mt-8">Agendar Consulta</a>
        </div>
      </section>
      <ContactMini />
      <CtaBanner />
    </>
  )
}
