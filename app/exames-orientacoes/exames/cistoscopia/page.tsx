import type { Metadata } from 'next'
import ContactMini from '@/components/sections/ContactMini'
import CtaBanner from '@/components/ui/CtaBanner'

export const metadata: Metadata = {
  title: { absolute: 'Cistoscopia Fortaleza | Dr. Érico Diógenes' },
  description: 'Cistoscopia em Fortaleza: exame que visualiza o interior da bexiga. Dr. Érico Diógenes explica o procedimento, indicações e como se preparar.',
  alternates: { canonical: '/exames-orientacoes/exames/cistoscopia' },
}

export default function Cistoscopia() {
  return (
    <>
      <section className="py-20 bg-brand-beige">
        <div className="container-site text-center">
          <p className="eyebrow">Exames</p>
          <h1 className="section-title mt-2">Cistoscopia</h1>
          <p className="text-brand-muted mt-4 max-w-2xl mx-auto">Conteúdo em construção.</p>
          <a href="https://wa.me/5585981781020" target="_blank" rel="noopener noreferrer" className="btn-silver mt-8">Agendar Consulta</a>
        </div>
      </section>
      <ContactMini />
      <CtaBanner />
    </>
  )
}
