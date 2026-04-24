import CtaBanner from '../components/ui/CtaBanner'
import drEricoFoto from '../assets/img/dr-erico-foto-1.webp'
import drEricoFoto2 from '../assets/img/dr-erico-foto-4.webp'

const formacao = [
  'Graduação em Medicina pela Universidade Federal do Ceará UFC. 2005.',
  'Especialista em Urologia pela Associação Médica Brasileira (AMB) e membro da Sociedade Brasileira de Urologia. 2013',
  'Residência Médica em Urologia pelo Complexo Hospitalar Edmundo Vasconcelos. 2013.',
  'Especialização em Uro-Oncologia com professor Miguel Srougi pela Universidade de São Paulo (USP) e Hospital Sírio Libanês. 2014.',
]

export default function Sobre() {
  return (
    <>
      <section className="bg-brand-beige py-14 md:py-20">
        <div className="container-site text-center">
          <h1
            className="font-display text-3xl md:text-5xl text-brand-navy leading-tight max-w-4xl mx-auto"
            data-aos="fade-up"
          >
            Olá! Sou o Dr. Érico Diógenes,{' '}
            <span className="font-semibold">Urologista em Fortaleza</span> especialista em cirurgia
            robótica e tratamentos de alta complexidade,{' '}
            <span className="text-brand-gold">com atuação em Fortaleza</span>
          </h1>
        </div>

        <div className="container-site mt-10" data-aos="fade-up" data-aos-delay="120">
          <div className="max-w-5xl mx-auto aspect-[16/9] rounded-3xl overflow-hidden shadow-soft">
            <img
              src={drEricoFoto}
              alt="Dr. Érico Diógenes"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container-site grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative" data-aos="fade-right">
            <div className="aspect-[4/5] max-w-md rounded-[40%_60%_40%_60%/50%_40%_60%_50%] overflow-hidden shadow-soft">
              <img
                src={drEricoFoto2}
                alt="Dr. Érico Diógenes"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div data-aos="fade-left">
            <h2 className="section-title">
              <span className="text-brand-gold">Conheça a</span> minha história
            </h2>
            <div className="mt-5 space-y-4 text-brand-muted text-sm md:text-base">
              <p>
                O Dr. Érico Diógenes é referência em urologia, com atuação no Instituto de Urologia
                e Robótica, no Hospital Monte Klinikum e no Instituto Dr. José Frota, unindo
                tecnologia de ponta e atendimento humanizado. Certificado pela Intuitive desde 2016
                para a realização de cirurgias robóticas, possui sólida formação acadêmica:
                doutorado em Urologia pela Universidade de São Paulo (USP), com pesquisa em tumores
                de próstata, fellowship em Uro-oncologia no Hospital Sírio-Libanês, sob orientação
                do Prof. Miguel Srougi, e especialização internacional em cirurgia robótica na
                Clinique Saint Augustin, na França.
              </p>
              <p>
                Formado pela Universidade Federal do Ceará em 2004, com parte do internato no
                Detroit Medical Center (EUA), realizou residência em Urologia no Hospital Professor
                Edmundo Vasconcelos (SP) e em Cirurgia Geral e Avançada pelo SUS de São Paulo. É
                membro titular da Sociedade Brasileira de Urologia e da Associação Americana de
                Urologia, com atuação em laparoscopia, cirurgia robótica, uro-oncologia, tratamento
                de cálculos urinários e saúde masculina.
              </p>
              <p>
                Combinando conhecimento, experiência e empatia, o Dr. Érico oferece aos pacientes
                tratamentos modernos, seguros e eficazes, sempre com o compromisso de proporcionar{' '}
                <span className="font-semibold text-brand-navy">
                  mais conforto, segurança e tranquilidade
                </span>{' '}
                em cada etapa do cuidado.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-beige-light">
        <div className="container-site">
          <div className="text-center mb-10" data-aos="fade-up">
            <h2 className="section-title">Formação Acadêmica e Especializações</h2>
          </div>

          <ul className="max-w-3xl mx-auto space-y-4">
            {formacao.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-card"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-gold/20 text-brand-gold">
                  ✓
                </span>
                <span className="text-sm md:text-base text-brand-text">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner title="Agende agora sua consulta com o Dr. Érico Diógenes" />
    </>
  )
}
