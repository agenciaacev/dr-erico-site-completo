import type { Metadata } from 'next'
import ContactMini from '@/components/sections/ContactMini'
import CtaBanner from '@/components/ui/CtaBanner'

export const metadata: Metadata = {
  title: { absolute: 'Dor nos Rins, Quando Procurar Urologista? | Dr. Érico Diógenes' },
  description: 'Dor nos rins em Fortaleza: saiba quando é cálculo renal e quando procurar um urologista. Dr. Érico Diógenes orienta.',
  alternates: { canonical: '/condicoes-urologicas/calculo-renal/dor-nos-rins' },
}

export default function DorNosRins() {
  return (
    <>
      <section className="py-20 bg-brand-beige">
        <div className="container-site text-center">
          <p className="eyebrow">Cálculo Renal</p>
          <h1 className="section-title mt-2">Dor nos Rins, Quando Procurar um Urologista?</h1>
          <p className="text-brand-muted mt-4 max-w-2xl mx-auto">Conteúdo em construção.</p>
          <a href="https://wa.me/5585981781020" target="_blank" rel="noopener noreferrer" className="btn-silver mt-8">Agendar Consulta</a>
        </div>
      </section>
      <ContactMini />
      <CtaBanner />
    </>
  )
}
