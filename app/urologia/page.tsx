import type { Metadata } from 'next'
import ContactMini from '@/components/sections/ContactMini'
import CtaBanner from '@/components/ui/CtaBanner'

export const metadata: Metadata = {
  title: { absolute: 'Urologia em Fortaleza | Dr. Érico Diógenes' },
  description: 'Especialista em urologia em Fortaleza. Consulta, diagnóstico e tratamento de doenças urológicas com Dr. Érico Diógenes.',
  alternates: { canonical: '/urologia' },
}

export default function Urologia() {
  return (
    <>
      <section className="py-20 bg-brand-beige">
        <div className="container-site text-center">
          <p className="eyebrow">Especialidade</p>
          <h1 className="section-title mt-2">Urologia em Fortaleza</h1>
          <p className="text-brand-muted mt-4 max-w-2xl mx-auto">
            Conteúdo em construção. Em breve todas as informações sobre urologia com o Dr. Érico Diógenes.
          </p>
          <a href="https://wa.me/5585981781020" target="_blank" rel="noopener noreferrer" className="btn-silver mt-8">
            Agendar Consulta
          </a>
        </div>
      </section>
      <ContactMini />
      <CtaBanner />
    </>
  )
}
