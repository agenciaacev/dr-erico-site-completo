import type { Metadata } from 'next'
import ContactMini from '@/components/sections/ContactMini'
import CtaBanner from '@/components/ui/CtaBanner'

export const metadata: Metadata = {
  title: { absolute: 'Ejaculação Precoce Fortaleza | Dr. Érico Diógenes' },
  description: 'Tratamento da ejaculação precoce em Fortaleza com Dr. Érico Diógenes. Avaliação especializada e soluções eficazes.',
  alternates: { canonical: '/saude-masculina/ejaculacao-precoce' },
}

export default function EjaculacaoPrecoce() {
  return (
    <>
      <section className="py-20 bg-brand-beige">
        <div className="container-site text-center">
          <p className="eyebrow">Saúde Masculina</p>
          <h1 className="section-title mt-2">Ejaculação Precoce</h1>
          <p className="text-brand-muted mt-4 max-w-2xl mx-auto">Conteúdo em construção.</p>
          <a href="https://wa.me/5585981781020" target="_blank" rel="noopener noreferrer" className="btn-silver mt-8">Agendar Consulta</a>
        </div>
      </section>
      <ContactMini />
      <CtaBanner />
    </>
  )
}
