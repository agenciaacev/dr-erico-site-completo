import Link from 'next/link'

type Card = {
  title: string
  description: string
  cta: string
  to: string
  image: string
}

const cards: Card[] = [
  {
    title: 'Acompanhamento Clínico em Urologia',
    description:
      'Acompanhamento urológico para casos de alta, média ou baixa complexidade, com estrutura completa de exames e expertise em oncologia.',
    cta: 'Agendar Consulta',
    to: '/contato',
    image:
      '/img/post/imgid14_02.webp',
  },
  {
    title: 'Tratamento a Laser HoLEP para Próstata',
    description:
      'Tratamento inovador com tecnologia a laser para Hiperplasia Prostática Benigna (HPB), ou próstata aumentada.',
    cta: 'Saiba mais',
    to: '/holep',
    image:
      'https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Cirurgia Robótica em Urologia',
    description:
      'Tratamento inovador e tecnológico para câncer e tumores da próstata, rins, bexiga e uretra.',
    cta: 'Saiba mais',
    to: '/cirurgia-robotica',
    image:
      '/img/dr-erico-foto-5b.webp',
  },
]

export default function Diferenciais() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-site">
        <div className="text-center mb-12" data-aos="fade-up">
          <p className="eyebrow">Conheça nossos</p>
          <h2 className="section-title mt-2">Tratamentos</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className="bg-white rounded-3xl border border-black/5 shadow-card overflow-hidden flex flex-col"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={card.image} alt={card.title} className="h-44 w-full object-cover" />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display text-xl text-brand-navy">{card.title}</h3>
                <p className="text-sm text-brand-muted mt-3 flex-1">{card.description}</p>
                <Link href={card.to} className="btn-silver mt-5 justify-center">
                  {card.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
