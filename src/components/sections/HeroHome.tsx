import { Link } from 'react-router-dom'
import drEricoFoto from '../../assets/img/dr-erico-foto-6.png'

export default function HeroHome() {
  return (
    <section className="relative bg-brand-beige overflow-hidden">

      <div className="grid lg:grid-cols-2 items-stretch min-h-[90vh]">

        {/* LEFT — conteúdo */}
        <div className="flex items-center px-6 md:px-12 lg:px-16 xl:px-20 py-14 lg:py-20" data-aos="fade-right">
          <div>
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
        </div>

        {/* RIGHT — foto preenche exatamente a altura da coluna esquerda */}
        <div className="relative overflow-hidden min-h-[320px]" data-aos="fade-left">
          <img
            src={drEricoFoto}
            alt="Dr. Érico Diógenes"
            className="absolute inset-0 w-full h-full object-cover object-[center_20%]"
          />
          {/* degradê esquerda — funde com o beige */}
          <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-brand-beige to-transparent" />
          {/* degradê baixo — suaviza o corte inferior */}
          <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-brand-beige to-transparent" />
        </div>

      </div>
    </section>
  )
}
