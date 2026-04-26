import { site } from '@/data/site'

export default function ContactMini() {
  return (
    <section className="py-12 md:py-16">
      <div className="container-site" data-aos="fade-up">
        <h2 className="font-display text-3xl md:text-4xl text-brand-navy mb-4">Fale com a gente</h2>
        <p className="font-semibold text-brand-navy">Endereço</p>
        <p className="text-brand-muted">
          {site.address.street}
          <br />
          {site.address.district}, {site.address.city}
        </p>
      </div>
    </section>
  )
}
