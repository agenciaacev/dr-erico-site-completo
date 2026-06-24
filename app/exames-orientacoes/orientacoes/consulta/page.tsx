import type { Metadata } from 'next'
import ContactMini from '@/components/sections/ContactMini'
import CtaBanner from '@/components/ui/CtaBanner'

export const metadata: Metadata = {
  title: { absolute: 'Como se Preparar para a Consulta Urológica | Dr. Érico Diógenes' },
  description: 'Orientações para a consulta urológica com Dr. Érico Diógenes em Fortaleza: o que levar, como se preparar e o que esperar.',
  alternates: { canonical: '/exames-orientacoes/orientacoes/consulta' },
}

export default function OrientacoesConsulta() {
  return (
    <>
      <section className="py-20 bg-brand-beige">
        <div className="container-site text-center">
          <p className="eyebrow">Orientações</p>
          <h1 className="section-title mt-2">Como se Preparar para a Consulta Urológica</h1>
          <p className="text-brand-muted mt-4 max-w-2xl mx-auto">Conteúdo em construção.</p>
          <a href="https://wa.me/5585981781020" target="_blank" rel="noopener noreferrer" className="btn-silver mt-8">Agendar Consulta</a>
        </div>
      </section>
      <ContactMini />
      <CtaBanner />
    </>
  )
}
