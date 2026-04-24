import { Link } from 'react-router-dom'
import drEricoFoto from '../../assets/img/dr-erico-foto-6.webp'

export default function HeroHome() {
  return (
    <section className="relative bg-brand-navy overflow-hidden">

      <div className="grid lg:grid-cols-2 items-stretch min-h-[90vh]">

        {/* LEFT — conteúdo */}
        <div className="flex items-center px-6 md:px-12 lg:px-16 xl:px-20 py-14 lg:py-20" data-aos="fade-right">
          <div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-beige leading-tight">
              Urologista em Fortaleza com atuação em próstata, câncer e cirurgia robótica.
            </h1>
            <p className="mt-5 text-brand-beige/60 text-base md:text-lg max-w-xl">
              Dr. Érico Diógenes é urologista em Fortaleza, com atuação em cirurgia robótica,
              tratamento a laser para a próstata e urologia de alta complexidade, unindo
              tecnologia avançada e cuidado humanizado.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/dr-erico-diogenes" className="btn-silver">
                Saiba mais
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT — foto preenche a altura da seção */}
        <div className="relative overflow-hidden min-h-[320px]" data-aos="fade-left">
          <img
            src={drEricoFoto}
            alt="Dr. Érico Diógenes"
            className="absolute inset-0 w-full h-full object-cover object-[center_20%]"
          />
          {/* degradê esquerda — funde com o navy */}
          <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-brand-navy to-transparent" />
          {/* degradê baixo — suaviza o corte inferior */}
          <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-brand-navy to-transparent" />
        </div>

      </div>
    </section>
  )
}
