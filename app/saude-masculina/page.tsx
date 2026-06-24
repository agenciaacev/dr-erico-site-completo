import type { Metadata } from 'next'
import ContactMini from '@/components/sections/ContactMini'
import CtaBanner from '@/components/ui/CtaBanner'

export const metadata: Metadata = {
  title: { absolute: 'Saúde Masculina Fortaleza | Andrologia, Dr. Érico Diógenes' },
  description: 'Saúde masculina em Fortaleza: disfunção erétil, ejaculação precoce, baixa testosterona, vasectomia e infertilidade. Dr. Érico Diógenes.',
  alternates: { canonical: '/saude-masculina' },
}

export default function SaudeMasculina() {
  return (
    <>
      <section className="py-20 bg-brand-beige">
        <div className="container-site text-center">
          <p className="eyebrow">Andrologia</p>
          <h1 className="section-title mt-2">Saúde Masculina em Fortaleza</h1>
          <p className="text-brand-muted mt-4 max-w-2xl mx-auto">Conteúdo em construção.</p>
          <a href="https://wa.me/5585981781020" target="_blank" rel="noopener noreferrer" className="btn-silver mt-8">Agendar Consulta</a>
        </div>
      </section>
      <ContactMini />
      <CtaBanner />
    </>
  )
}
