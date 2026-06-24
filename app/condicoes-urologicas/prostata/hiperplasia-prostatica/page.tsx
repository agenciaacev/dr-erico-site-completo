import type { Metadata } from 'next'
import ContactMini from '@/components/sections/ContactMini'
import CtaBanner from '@/components/ui/CtaBanner'

export const metadata: Metadata = {
  title: { absolute: 'Hiperplasia Prostática Benigna (HPB) | Dr. Érico Diógenes' },
  description: 'Tratamento da hiperplasia prostática benigna em Fortaleza. Dr. Érico Diógenes oferece HoLEP e cirurgia robótica para HPB.',
  alternates: { canonical: '/condicoes-urologicas/prostata/hiperplasia-prostatica' },
}

export default function HiperplasiaProstática() {
  return (
    <>
      <section className="py-20 bg-brand-beige">
        <div className="container-site text-center">
          <p className="eyebrow">Próstata</p>
          <h1 className="section-title mt-2">Hiperplasia Prostática Benigna (HPB)</h1>
          <p className="text-brand-muted mt-4 max-w-2xl mx-auto">Conteúdo em construção.</p>
          <a href="https://wa.me/5585981781020" target="_blank" rel="noopener noreferrer" className="btn-silver mt-8">Agendar Consulta</a>
        </div>
      </section>
      <ContactMini />
      <CtaBanner />
    </>
  )
}
