import type { Metadata } from 'next'
import ContactMini from '@/components/sections/ContactMini'
import CtaBanner from '@/components/ui/CtaBanner'

export const metadata: Metadata = {
  title: { absolute: 'Pedra nos Rins Fortaleza | Tratamento — Dr. Érico Diógenes' },
  description: 'Pedra nos rins em Fortaleza: sintomas, causas e tratamento com ureteroscopia a laser. Dr. Érico Diógenes, urologista especialista.',
  alternates: { canonical: '/condicoes-urologicas/calculo-renal/pedra-nos-rins' },
}

export default function PedraNosRins() {
  return (
    <>
      <section className="py-20 bg-brand-beige">
        <div className="container-site text-center">
          <p className="eyebrow">Cálculo Renal</p>
          <h1 className="section-title mt-2">Pedra nos Rins em Fortaleza</h1>
          <p className="text-brand-muted mt-4 max-w-2xl mx-auto">Conteúdo em construção.</p>
          <a href="https://wa.me/5585981781020" target="_blank" rel="noopener noreferrer" className="btn-silver mt-8">Agendar Consulta</a>
        </div>
      </section>
      <ContactMini />
      <CtaBanner />
    </>
  )
}
