import { site } from '@/data/site'

export default function ContactMini() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container-site" data-aos="fade-up">
        <h2 className="font-display text-3xl md:text-4xl text-brand-navy mb-8">Onde nos encontrar</h2>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-card">
            <iframe
              src={site.address.mapEmbed}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Localização do consultório de ${site.name} em ${site.address.city}`}
            />
          </div>

          <div>
            <div>
              <h3 className="font-display text-xl text-brand-navy">Endereço</h3>
              <p className="text-brand-muted mt-2">
                {site.address.street}
                <br />
                {site.address.district}, {site.address.city}
              </p>
            </div>
            <div className="mt-6">
              <h3 className="font-display text-xl text-brand-navy">Funcionamento</h3>
              <p className="text-brand-muted mt-2">{site.address.hours}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
