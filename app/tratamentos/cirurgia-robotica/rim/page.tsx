import type { Metadata } from 'next'
import ContactMini from '@/components/sections/ContactMini'
import CtaBanner from '@/components/ui/CtaBanner'

export const metadata: Metadata = {
  title: { absolute: 'Cirurgia Robótica do Rim Fortaleza | Dr. Érico Diógenes' },
  description: 'Cirurgia robótica do rim em Fortaleza: nefrectomia parcial e total com tecnologia Da Vinci. Dr. Érico Diógenes.',
  alternates: { canonical: '/tratamentos/cirurgia-robotica/rim' },
}

export default function CirurgiaRoboticaRim() {
  return (
    <>
      <section className="py-20 bg-brand-beige">
        <div className="container-site text-center">
          <p className="eyebrow">Cirurgia Robótica</p>
          <h1 className="section-title mt-2">Cirurgia Robótica do Rim</h1>
          <p className="text-brand-muted mt-4 max-w-2xl mx-auto">Conteúdo em construção.</p>
          <a href="https://wa.me/5585981781020" target="_blank" rel="noopener noreferrer" className="btn-silver mt-8">Agendar Consulta</a>
        </div>
      </section>
      <ContactMini />
      <CtaBanner />
    </>
  )
}
