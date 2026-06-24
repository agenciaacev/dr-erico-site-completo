import type { Metadata } from 'next'
import ContactMini from '@/components/sections/ContactMini'
import CtaBanner from '@/components/ui/CtaBanner'

export const metadata: Metadata = {
  title: { absolute: 'Exame de PSA Fortaleza | O que é e para que serve — Dr. Érico Diógenes' },
  description: 'Tudo sobre o exame de PSA em Fortaleza: o que mede, valores normais e quando solicitar. Dr. Érico Diógenes orienta.',
  alternates: { canonical: '/exames-orientacoes/exames/psa' },
}

export default function ExamePsa() {
  return (
    <>
      <section className="py-20 bg-brand-beige">
        <div className="container-site text-center">
          <p className="eyebrow">Exames</p>
          <h1 className="section-title mt-2">Exame de PSA</h1>
          <p className="text-brand-muted mt-4 max-w-2xl mx-auto">Conteúdo em construção.</p>
          <a href="https://wa.me/5585981781020" target="_blank" rel="noopener noreferrer" className="btn-silver mt-8">Agendar Consulta</a>
        </div>
      </section>
      <ContactMini />
      <CtaBanner />
    </>
  )
}
