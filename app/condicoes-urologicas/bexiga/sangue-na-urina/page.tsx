import type { Metadata } from 'next'
import ContactMini from '@/components/sections/ContactMini'
import CtaBanner from '@/components/ui/CtaBanner'

export const metadata: Metadata = {
  title: { absolute: 'Sangue na Urina (Hematúria) Fortaleza | Dr. Érico Diógenes' },
  description: 'Sangue na urina em Fortaleza: causas, diagnóstico e tratamento com Dr. Érico Diógenes. Hematúria pode indicar cálculo, infecção ou tumor.',
  alternates: { canonical: '/condicoes-urologicas/bexiga/sangue-na-urina' },
}

export default function SangueNaUrina() {
  return (
    <>
      <section className="py-20 bg-brand-beige">
        <div className="container-site text-center">
          <p className="eyebrow">Bexiga</p>
          <h1 className="section-title mt-2">Sangue na Urina (Hematúria)</h1>
          <p className="text-brand-muted mt-4 max-w-2xl mx-auto">Conteúdo em construção.</p>
          <a href="https://wa.me/5585981781020" target="_blank" rel="noopener noreferrer" className="btn-silver mt-8">Agendar Consulta</a>
        </div>
      </section>
      <ContactMini />
      <CtaBanner />
    </>
  )
}
