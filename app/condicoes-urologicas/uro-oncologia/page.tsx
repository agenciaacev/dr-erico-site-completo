import type { Metadata } from 'next'
import ContactMini from '@/components/sections/ContactMini'
import CtaBanner from '@/components/ui/CtaBanner'

export const metadata: Metadata = {
  title: { absolute: 'Uro-Oncologia Fortaleza | Tumores Urológicos — Dr. Érico Diógenes' },
  description: 'Tratamento de tumores urológicos em Fortaleza: câncer de próstata, rim, bexiga e testículo. Dr. Érico Diógenes, uro-oncologista.',
  alternates: { canonical: '/condicoes-urologicas/uro-oncologia' },
}

export default function UroOncologia() {
  return (
    <>
      <section className="py-20 bg-brand-beige">
        <div className="container-site text-center">
          <p className="eyebrow">Uro-Oncologia</p>
          <h1 className="section-title mt-2">Uro-Oncologia em Fortaleza</h1>
          <p className="text-brand-muted mt-4 max-w-2xl mx-auto">Conteúdo em construção.</p>
          <a href="https://wa.me/5585981781020" target="_blank" rel="noopener noreferrer" className="btn-silver mt-8">Agendar Consulta</a>
        </div>
      </section>
      <ContactMini />
      <CtaBanner />
    </>
  )
}
