import { Link } from 'react-router-dom'

export default function HeroHome() {
  return (
    <section className="relative bg-brand-beige overflow-hidden">
      <div className="container-site grid lg:grid-cols-2 gap-10 py-14 lg:py-20 items-center">
        <div data-aos="fade-right">
          <h1 className="section-title">
            Urologista em Fortaleza com atuação em próstata, câncer e cirurgia robótica.
          </h1>
          <p className="mt-5 text-brand-muted text-base md:text-lg max-w-xl">
            Dr. Érico Diógenes é urologista em Fortaleza, com atuação em cirurgia robótica,
            tratamento a laser para a próstata e urologia de alta complexidade, unindo
            tecnologia avançada e cuidado humanizado.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/dr-erico-diogenes" className="btn-primary">
              Saiba mais
            </Link>
          </div>
        </div>

        <div className="relative" data-aos="fade-left">
          <div className="aspect-[4/5] max-w-md ml-auto rounded-[40%_60%_40%_60%/50%_40%_60%_50%] overflow-hidden shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1200&auto=format&fit=crop"
              alt="Dr. Érico Diógenes"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* ornamento */}
      <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-brand-gold/20 blur-xl pointer-events-none" />
    </section>
  )
}
