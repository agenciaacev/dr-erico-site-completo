import type { Metadata } from 'next'
import ContactMini from '@/components/sections/ContactMini'
import CtaBanner from '@/components/ui/CtaBanner'

export const metadata: Metadata = {
  title: { absolute: 'Condições Urológicas | Dr. Érico Diógenes — Urologista Fortaleza' },
  description: 'Conheça as principais condições urológicas tratadas pelo Dr. Érico Diógenes em Fortaleza: próstata, cálculo renal, bexiga, uro-oncologia e mais.',
  alternates: { canonical: '/condicoes-urologicas' },
}

export default function CondicoesUrologicas() {
  return (
    <>
      <section className="py-20 bg-brand-beige">
        <div className="container-site text-center">
          <p className="eyebrow">Hub de Conteúdo</p>
          <h1 className="section-title mt-2">Condições Urológicas</h1>
          <p className="text-brand-muted mt-4 max-w-2xl mx-auto">
            Conteúdo em construção. Em breve o guia completo das principais condições urológicas tratadas pelo Dr. Érico Diógenes.
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
