import type { Metadata } from 'next'
import Image from 'next/image'
import { Phone, Mail, MessageCircle } from 'lucide-react'
import { site } from '@/data/site'

export const metadata: Metadata = {
  title: { absolute: 'Agendar Consulta com Urologista Fortaleza | Contato' },
  description:
    'Agende sua consulta com o urologista Dr. Érico Diógenes em Fortaleza. Atendimento via WhatsApp e telefone. Pátio Dom Luís, Fortaleza – CE. Fale agora.',
  alternates: { canonical: '/contato' },
  openGraph: {
    title: 'Contato | Dr. Érico Diógenes — Urologista em Fortaleza',
    description:
      'Agende sua consulta com o Dr. Érico Diógenes. Clínica localizada no Pátio Dom Luís, Fortaleza, CE.',
    url: '/contato',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://drericodiogenes.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Contato', item: 'https://drericodiogenes.com.br/contato' },
  ],
}

export default function Contato() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="bg-brand-beige-light py-14 md:py-20">
        <div className="container-site grid lg:grid-cols-2 gap-10 items-center">
          <div data-aos="fade-right">
            <h1 className="font-display text-4xl md:text-6xl text-brand-navy leading-tight">
              Fale com a gente
            </h1>
            <p className="mt-5 text-brand-muted max-w-md">
              Estamos à sua disposição para o agendamento de consultas, dúvidas sobre indicações
              cirúrgicas e procedimentos.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-center gap-4">
                <span className="h-12 w-12 rounded-full bg-brand-navy text-white flex items-center justify-center" aria-hidden>
                  <Phone size={18} />
                </span>
                <span className="text-brand-text">{site.phone}</span>
              </li>
              <li className="flex items-center gap-4">
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Fale pelo WhatsApp"
                  className="h-12 w-12 rounded-full bg-brand-navy text-white flex items-center justify-center"
                >
                  <MessageCircle size={18} aria-hidden />
                </a>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-text hover:text-brand-gold"
                >
                  Fale por Whatsapp
                </a>
              </li>
              <li className="flex items-center gap-4">
                <span className="h-12 w-12 rounded-full bg-brand-navy text-white flex items-center justify-center" aria-hidden>
                  <Mail size={18} />
                </span>
                <span className="text-brand-text">{site.email}</span>
              </li>
            </ul>
          </div>

          <div className="relative" data-aos="fade-left">
            <div className="aspect-[4/5] max-w-md ml-auto rounded-full overflow-hidden shadow-soft relative">
              <Image
                src="/img/dr-erico-foto-3.webp"
                alt="Dr. Érico Diógenes — Urologista em Fortaleza"
                fill
                sizes="(max-width: 1024px) 100vw, 28rem"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-site grid lg:grid-cols-2 gap-10 items-start">
          <div data-aos="fade-right">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-card">
              <iframe
                src={site.address.mapEmbed}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Localização do consultório de ${site.name} em ${site.address.city}`}
              />
            </div>
          </div>

          <div data-aos="fade-left">
            <h2 className="section-title">Informações de contato</h2>

            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-display text-xl text-brand-navy">Endereço</h3>
                <p className="text-brand-muted text-sm mt-2 whitespace-pre-line">
                  {site.address.street}
                  {'\n'}
                  {site.address.district}, {site.address.city}
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl text-brand-navy">Funcionamento</h3>
                <p className="text-brand-muted text-sm mt-2">{site.address.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
