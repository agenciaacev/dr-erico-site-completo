import { Link } from 'react-router-dom'

export default function LaserHighlight() {
  return (
    <section className="bg-brand-navy-deep text-white py-16 md:py-20 relative overflow-hidden">
      <div className="container-site grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative" data-aos="fade-right">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-soft max-w-md">
            <img
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1200&auto=format&fit=crop"
              alt="Dr. Érico Diógenes"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div data-aos="fade-left">
          <h2 className="font-display text-3xl md:text-4xl leading-tight">
            Tratamento a laser para próstata em Fortaleza:{' '}
            <span className="text-brand-gold">
              o mais avançado para Hiperplasia Prostática Benigna (HPB)
            </span>
          </h2>
          <p className="mt-5 text-white/80">
            Alternativa moderna, segura e minimamente invasiva para pacientes que sofrem com o
            aumento benigno da próstata e seus sintomas, como dificuldade para urinar, jato fraco e
            necessidade frequente de ir ao banheiro. Utilizando tecnologia de ponta, o laser remove
            ou reduz o tecido prostático excedente com alta precisão, proporcionando menor
            sangramento, menos dor e uma recuperação mais rápida em comparação às cirurgias
            convencionais.
          </p>
          <Link to="/holep" className="btn-silver mt-8">
            Saiba Mais
          </Link>
        </div>
      </div>
    </section>
  )
}
