'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Phone, Mail, MessageCircle } from 'lucide-react'
import { site } from '@/data/site'

export default function Contato() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
    // TODO: integrar com backend/e-mail quando disponível
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <>
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
                <span className="h-12 w-12 rounded-full bg-brand-navy text-white flex items-center justify-center">
                  <Phone size={18} />
                </span>
                <span className="text-brand-text">{site.phone}</span>
              </li>
              <li className="flex items-center gap-4">
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-full bg-brand-navy text-white flex items-center justify-center"
                >
                  <MessageCircle size={18} />
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
                <span className="h-12 w-12 rounded-full bg-brand-navy text-white flex items-center justify-center">
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
                alt="Dr. Érico Diógenes"
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
                title="Localização"
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

            <form
              onSubmit={handleSubmit}
              className="mt-10 grid sm:grid-cols-2 gap-4 bg-brand-beige-light rounded-2xl p-6"
            >
              <input
                type="text"
                required
                placeholder="Nome"
                className="sm:col-span-2 rounded-xl border border-black/10 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
              />
              <input
                type="email"
                required
                placeholder="E-mail"
                className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
              />
              <input
                type="tel"
                required
                placeholder="Telefone"
                className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
              />
              <textarea
                rows={5}
                placeholder="Como podemos ajudar?"
                className="sm:col-span-2 rounded-xl border border-black/10 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
              />
              <button type="submit" className="btn-primary sm:col-span-2 justify-center">
                Enviar mensagem
              </button>

              {sent && (
                <p className="sm:col-span-2 text-center text-sm text-brand-green-dark">
                  Mensagem enviada! Em breve retornaremos.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
