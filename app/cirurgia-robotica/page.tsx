import type { Metadata } from 'next'
import { Check } from 'lucide-react'
import CtaBanner from '@/components/ui/CtaBanner'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Cirurgia Robótica de Próstata em Fortaleza',
  description:
    'Cirurgia Robótica de Próstata em Fortaleza com o Dr. Érico Diógenes. Tecnologia Da Vinci, menor sangramento, recuperação rápida e mais precisão. Agende sua consulta.',
  alternates: { canonical: '/cirurgia-robotica' },
  openGraph: {
    title: 'Cirurgia Robótica de Próstata em Fortaleza | Dr. Érico Diógenes',
    description:
      'Tecnologia robótica Da Vinci para tratamento da próstata. Menos dor, recuperação rápida e maior precisão.',
    url: '/cirurgia-robotica',
  },
}

const passos = [
  {
    title: 'Avaliação Pré-Operatória',
    desc: 'Exames e orientações para garantir segurança e melhores resultados.',
  },
  {
    title: 'Preparação do Paciente',
    desc: 'Cuidados antes da anestesia para iniciar o procedimento com segurança.',
  },
  {
    title: 'Posicionamento e Anestesia',
    desc: 'Paciente é posicionado e recebe anestesia geral para conforto total.',
  },
  {
    title: 'Acesso Cirúrgico Minimamente Invasivo',
    desc: 'Pequenas incisões para passagem dos instrumentos robóticos.',
  },
  {
    title: 'Execução Robótica de Alta Precisão',
    desc: 'Cirurgião comanda o robô, realizando movimentos exatos e delicados.',
  },
  {
    title: 'Remoção ou Tratamento da Área Afetada',
    desc: 'Tecido é tratado ou removido com mínima perda de sangue.',
  },
  {
    title: 'Revisão e Encerramento',
    desc: 'Área é revisada, instrumentos retirados e incisões fechadas.',
  },
  {
    title: 'Recuperação e Alta',
    desc: 'Recuperação rápida, com alta hospitalar em pouco tempo.',
  },
]

const depoimentos = [
  {
    name: 'Cláudio Diego Pinheiro',
    role: 'Paciente',
    text: 'Queria deixar meu carinho e admiração por esse profissional incrível que cuida muito bem do meu pai. Um grande abraço!',
  },
  {
    name: 'Marília Gabriela',
    role: 'Familiar de Paciente',
    text: 'Meu marido foi atendido por ele e ficamos encantados com o preparo do Dr. Érico. Um humano simples, atencioso. Parabéns Dr. Pela sua competência.',
  },
  {
    name: 'Fernando Torres',
    role: 'Paciente',
    text: 'Simplesmente encantado na consulta do Dr. Érico, com certeza uma das melhores visitas médicas. Muito atencioso e calmo, me passou segurança. Nota 100. Por mais médicos assim!',
  },
]

export default function CirurgiaRobotica() {
  return (
    <>
      <section className="relative bg-brand-navy overflow-hidden">
        <div className="grid lg:grid-cols-2 items-stretch min-h-[70vh]">

          <div className="flex items-center px-6 md:px-12 lg:px-16 xl:px-20 py-14 lg:py-20" data-aos="fade-right">
            <div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-beige leading-tight">
                Cirurgia Robótica de Próstata: mais precisão, menos dor e recuperação rápida
              </h1>
              <p className="mt-5 text-brand-beige/60 text-base md:text-lg max-w-xl">
                Se você procura Urologista em Fortaleza, o Dr. Érico Diógenes é referência no Ceará em
                cirurgia minimamente invasiva com tecnologia robótica Da Vinci, proporcionando mais
                segurança, recuperação mais rápida e melhor qualidade de vida.
              </p>
              <div className="mt-8">
                <a
                  href="https://wa.me/5585981781020"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-silver"
                >
                  Agendar consulta
                </a>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden min-h-[320px] order-first lg:order-last" data-aos="fade-left">
            <Image
              src="/img/dr-erico-foto-1.webp"
              alt="Cirurgia robótica"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-brand-navy to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-brand-navy to-transparent" />
          </div>

        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-site text-center max-w-4xl" data-aos="fade-up">
          <p className="eyebrow">Entenda a</p>
          <h2 className="section-title mt-2">Cirurgia Robótica</h2>
          <div className="mt-6 text-brand-muted space-y-4 text-left md:text-justify">
            <p>
              A cirurgia robótica da próstata é um procedimento moderno e minimamente invasivo,
              realizado com o auxílio do robô cirúrgico Da Vinci, considerada a tecnologia mais
              avançada atualmente para esse tipo de tratamento. Diferente da cirurgia aberta, que
              exige cortes maiores, a abordagem robótica é feita por pequenas incisões, pelas quais
              são inseridos instrumentos delicados controlados pelo cirurgião a partir de um
              console. Essa posição de controle oferece visão tridimensional ampliada em até 10
              vezes, permitindo movimentos extremamente precisos e estáveis, capazes de preservar
              estruturas sensíveis como nervos, vasos sanguíneos e músculos responsáveis pela
              continência urinária e função sexual.
            </p>
            <p>
              O procedimento é indicado principalmente para pacientes com{' '}
              <strong>câncer de próstata localizado</strong> e, em alguns casos, para homens com{' '}
              <strong>hiperplasia prostática benigna (HPB)</strong> que necessitam de cirurgia.
              Entre os principais benefícios estão a redução significativa do sangramento
              intraoperatório, menor dor no pós-operatório, menor risco de complicações e alta
              hospitalar mais rápida. Além disso, a recuperação costuma ser mais confortável,
              permitindo retorno antecipado às atividades cotidianas e melhores preservação da
              qualidade de vida.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-beige-light">
        <div className="container-site">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Alta precisão na retirada da próstata',
                desc: 'A técnica permite alta precisão na retirada de tumores e da próstata, aumentando as taxas de sucesso do tratamento.',
                img: '/img/post/imgid12_01.webp',
              },
              {
                title: 'Maior preservação da continência urinária',
                desc: 'Resultados mais eficientes para o tratamento, garantindo melhor qualidade de vida para o paciente em relação à cirurgia convencional.',
                img: '/img/post/imgid02_01.webp',
              },
              {
                title: 'Retorno rápido às atividades diárias',
                desc: 'A tecnologia robótica minimamente invasiva permite uma recuperação mais rápida e menores cicatrizes.',
                img: '/img/post/imgid03_02.webp',
              },
            ].map((card, i) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl overflow-hidden shadow-card"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={card.img} alt={card.title} className="h-40 w-full object-cover" />
                <div className="p-5">
                  <h3 className="font-display text-lg text-brand-navy">{card.title}</h3>
                  <p className="text-sm text-brand-muted mt-2">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-site grid lg:grid-cols-2 gap-10 items-center">
          <div data-aos="fade-right">
            <h2 className="section-title">
              Cuidado revolucionário <span className="text-brand-gold">com a saúde masculina</span>
            </h2>
            <ul className="mt-6 space-y-3">
              {[
                'Alta precisão na remoção da próstata',
                'Menos dor e desconforto no pós-operatório',
                'Retorno mais rápido às atividades normais',
                'Paciente recebe alta no mesmo dia',
                'Menor risco de disfunção erétil quando comparado a técnicas tradicionais',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check size={16} className="mt-1 shrink-0 text-brand-green" />
                  <span className="text-brand-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div data-aos="fade-left">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-soft">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/post/imgid10_01.webp"
                alt="Robô Da Vinci"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-beige-light">
        <div className="container-site">
          <div className="text-center mb-12" data-aos="fade-up">
            <p className="eyebrow">Cirurgia Robótica</p>
            <h2 className="section-title mt-2">passo a passo</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {passos.map((p, i) => (
              <div
                key={p.title}
                className="bg-white rounded-2xl shadow-card overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={i * 60}
              >
                <div className="h-28 bg-gradient-to-br from-brand-green/30 to-brand-gold/20 flex items-center justify-center">
                  <span className="font-display text-5xl text-brand-navy/80">{i + 1}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base text-brand-navy">
                    {i + 1}. {p.title}
                  </h3>
                  <p className="text-xs text-brand-muted mt-2">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-site">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="section-title">
              Histórias de quem <span className="text-brand-gold">passou por aqui</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {depoimentos.map((d, i) => (
              <div
                key={d.name}
                className="bg-brand-beige-light rounded-2xl p-6"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <p className="text-brand-muted text-sm italic">&quot;{d.text}&quot;</p>
                <div className="mt-5">
                  <p className="font-semibold text-brand-navy">{d.name}</p>
                  <p className="text-xs text-brand-muted">{d.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title="Marque agora sua consulta com o Dr. Érico Diógenes" />
    </>
  )
}
