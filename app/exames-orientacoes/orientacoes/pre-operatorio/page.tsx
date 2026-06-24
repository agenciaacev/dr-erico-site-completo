import type { Metadata } from 'next'
import ContactMini from '@/components/sections/ContactMini'
import CtaBanner from '@/components/ui/CtaBanner'

export const metadata: Metadata = {
  title: { absolute: 'Orientações Pré-Operatórias | Dr. Érico Diógenes — Fortaleza' },
  description: 'Cuidados antes da cirurgia urológica com Dr. Érico Diógenes em Fortaleza: jejum, medicamentos e o que esperar no pré-operatório.',
  alternates: { canonical: '/exames-orientacoes/orientacoes/pre-operatorio' },
}

export default function PreOperatorio() {
  return (
    <>
      <section className="py-20 bg-brand-beige">
        <div className="container-site text-center">
          <p className="eyebrow">Orientações</p>
          <h1 className="section-title mt-2">Orientações Pré-Operatórias</h1>
          <p className="text-brand-muted mt-4 max-w-2xl mx-auto">Conteúdo em construção.</p>
          <a href="https://wa.me/5585981781020" target="_blank" rel="noopener noreferrer" className="btn-silver mt-8">Agendar Consulta</a>
        </div>
      </section>
      <ContactMini />
      <CtaBanner />
    </>
  )
}
