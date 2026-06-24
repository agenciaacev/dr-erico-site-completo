import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import CtaBanner from '@/components/ui/CtaBanner'
import UrologiaFaq from '@/components/urologia/UrologiaFaq'
import ContactMini from '@/components/sections/ContactMini'
import { MedicalWebPageSchema } from '@/components/seo/SchemaMarkup'

export const metadata: Metadata = {
  title: { absolute: 'Urologista em Fortaleza | Dr. Érico Diógenes' },
  description:
    'Urologista em Fortaleza: entenda quando consultar, o que a especialidade trata e como escolher o médico certo. Dr. Érico Diógenes, referência no Ceará.',
  alternates: { canonical: '/urologia/urologista-fortaleza' },
  openGraph: {
    title: 'Urologista em Fortaleza | Dr. Érico Diógenes',
    description: 'Tudo sobre urologia em Fortaleza: quando consultar, o que a especialidade trata e como Dr. Érico Diógenes pode ajudar.',
    url: '/urologia/urologista-fortaleza',
  },
}

const quando = [
  'Dificuldade ou dor ao urinar',
  'Jato urinário fraco ou interrompido',
  'Necessidade frequente de urinar, especialmente à noite',
  'Sangue na urina (hematúria)',
  'Dor lombar ou na virilha persistente',
  'PSA alterado em exame de rotina',
  'Disfunção erétil ou alterações na função sexual',
  'Infecções urinárias de repetição',
  'Cólica renal ou suspeita de pedra nos rins',
  'Check-up preventivo a partir dos 40 anos',
]

const atua = [
  {
    area: 'Próstata',
    desc: 'Hiperplasia prostática benigna (HPB), câncer de próstata, prostatite e outras condições da glândula prostática.',
  },
  {
    area: 'Rins e Vias Urinárias',
    desc: 'Cálculos renais, tumores renais, infecções do trato urinário alto e obstruções ureterais.',
  },
  {
    area: 'Bexiga',
    desc: 'Câncer de bexiga, bexiga hiperativa, incontinência urinária e infecções urinárias de repetição.',
  },
  {
    area: 'Saúde Sexual Masculina',
    desc: 'Disfunção erétil, ejaculação precoce, baixa testosterona, infertilidade masculina e vasectomia.',
  },
]

const faq = [
  {
    q: 'O urologista trata só homens?',
    a: 'Não. O urologista cuida de doenças do trato urinário — rins, ureteres, bexiga e uretra — em homens e mulheres. No entanto, também é o especialista responsável pelo aparelho reprodutor masculino (próstata, testículos, pênis), o que torna a especialidade predominantemente masculina na prática clínica.',
  },
  {
    q: 'Qual a diferença entre urologista e nefrologista?',
    a: 'O nefrologista trata doenças clínicas dos rins (insuficiência renal, glomerulonefrites, hipertensão renal) sem cirurgia. O urologista trata cirurgicamente as doenças do trato urinário, incluindo tumores, cálculos e obstruções. Em muitos casos, os dois especialistas trabalham em conjunto.',
  },
  {
    q: 'A partir de que idade devo ir ao urologista?',
    a: 'Homens devem iniciar o acompanhamento urológico a partir dos 40 anos para rastreamento do câncer de próstata. Com histórico familiar de câncer de próstata, o início deve ser aos 35 anos. Antes disso, qualquer sintoma urinário ou sexual é indicação de consulta.',
  },
  {
    q: 'O urologista opera?',
    a: 'Sim. A urologia é uma especialidade cirúrgica. O urologista realiza desde procedimentos ambulatoriais simples (vasectomia, biópsia) até cirurgias complexas como prostatectomia robótica, nefrectomia e cistectomia.',
  },
  {
    q: 'Com que frequência devo consultar um urologista?',
    a: 'Para homens acima de 40 anos sem sintomas, uma consulta anual para rastreamento é suficiente. Em pacientes em tratamento ou com condições crônicas, a frequência é definida pelo especialista conforme cada caso.',
  },
  {
    q: 'O toque retal é obrigatório?',
    a: 'O toque retal é parte do exame físico urológico para avaliação da próstata — rápido, seguro e indolor. Em conjunto com o PSA, é o principal método de rastreamento do câncer de próstata. O médico sempre explica o procedimento antes de realizá-lo.',
  },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://drericodiogenes.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Urologia', item: 'https://drericodiogenes.com.br/urologia' },
    { '@type': 'ListItem', position: 3, name: 'Urologista em Fortaleza', item: 'https://drericodiogenes.com.br/urologia/urologista-fortaleza' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

export default function UrologistaFortaleza() {
  return (
    <>
      <MedicalWebPageSchema
        name="Urologista em Fortaleza — Dr. Érico Diógenes"
        description="Urologista em Fortaleza: entenda quando consultar, o que a especialidade trata e como escolher o médico certo. Dr. Érico Diógenes é referência no Ceará."
        url="https://drericodiogenes.com.br/urologia/urologista-fortaleza"
        specialty="Urology"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* SEÇÃO 1 — HERO */}
      <section className="relative bg-brand-navy overflow-hidden">
        <div className="grid lg:grid-cols-2 items-stretch min-h-[70vh]">
          <div className="flex items-center px-6 md:px-12 lg:px-16 xl:px-20 py-14 lg:py-20" data-aos="fade-right">
            <div>
              <p className="eyebrow text-brand-gold">Especialidade médica · Fortaleza, CE</p>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-beige leading-tight mt-2">
                O que faz um urologista e{' '}
                <span className="text-brand-gold">quando você precisa de um em Fortaleza?</span>
              </h1>
              <p className="mt-5 text-brand-beige/70 text-base md:text-lg max-w-xl">
                A urologia é a especialidade médica responsável pelo diagnóstico e tratamento das doenças do sistema urinário e do aparelho reprodutor masculino. Entender quando e por que consultar um urologista pode fazer toda a diferença na sua saúde.
              </p>
              <div className="mt-8">
                <a href="https://wa.me/5585981781020" target="_blank" rel="noopener noreferrer" className="btn-silver">
                  Consultar em Fortaleza
                </a>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden min-h-[320px] order-first lg:order-last" data-aos="fade-left">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/dr-erico-foto-2.webp"
              alt="Urologista em Fortaleza — consultório médico"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-brand-navy to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-brand-navy to-transparent" />
          </div>
        </div>
      </section>

      {/* SEÇÃO 2 — O QUE TRATA */}
      <section className="py-16 bg-white">
        <div className="container-site" data-aos="fade-up">
          <div className="text-center mb-12">
            <p className="eyebrow">Área de atuação</p>
            <h2 className="section-title mt-2">O QUE O UROLOGISTA TRATA?</h2>
            <p className="text-brand-muted mt-4 max-w-3xl mx-auto">
              A urologia é uma das especialidades médicas mais amplas. Ela abrange desde condições comuns — como infecção urinária e cálculo renal — até doenças complexas, como tumores do sistema urinário e genital masculino. O urologista atua tanto clinicamente quanto cirurgicamente, sendo um dos especialistas com maior variedade de procedimentos disponíveis.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {atua.map((item, i) => (
              <div
                key={item.area}
                className="rounded-2xl p-6 md:p-7 bg-brand-beige-light"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <h3 className="font-display text-xl text-brand-gold">{item.area}</h3>
                <p className="text-sm text-brand-muted mt-3">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-10 text-brand-muted max-w-3xl mx-auto" data-aos="fade-up">
            No Brasil, estima-se que cerca de <strong>30% dos homens acima de 50 anos</strong> apresentem alguma condição urológica que exige acompanhamento especializado — muitas das quais são silenciosas em seus estágios iniciais, tornando o rastreamento preventivo essencial.
          </p>
        </div>
      </section>

      {/* SEÇÃO 3 — QUANDO CONSULTAR */}
      <section className="py-16 bg-brand-beige-light">
        <div className="container-site" data-aos="fade-up">
          <div className="text-center mb-12">
            <p className="eyebrow">Sinais de alerta</p>
            <h2 className="section-title mt-2">QUANDO PROCURAR UM UROLOGISTA?</h2>
            <p className="text-brand-muted italic mt-3 max-w-2xl mx-auto">
              Muitos pacientes adiam a consulta urológica por desconhecimento ou por associar a especialidade apenas a cirurgias. Na prática, a maior parte das condições urológicas tem tratamento clínico eficaz — e quanto mais cedo o diagnóstico, mais simples e eficiente é o tratamento.
            </p>
          </div>
          <ul className="grid md:grid-cols-2 gap-3 max-w-3xl mx-auto">
            {quando.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-card text-sm"
                data-aos="fade-up"
                data-aos-delay={i * 40}
              >
                <Check size={16} className="mt-0.5 shrink-0 text-brand-green" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-center mt-10 font-display italic text-brand-navy text-lg max-w-2xl mx-auto" data-aos="fade-up">
            O diagnóstico precoce do câncer de próstata, por exemplo, eleva a taxa de cura para mais de 90%. Não adie a consulta.
          </p>
        </div>
      </section>

      {/* SEÇÃO 4 — REFERÊNCIA EM FORTALEZA */}
      <section className="py-16 bg-white">
        <div className="container-site grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative" data-aos="fade-right">
            <div className="aspect-[4/5] max-w-md rounded-3xl overflow-hidden shadow-soft">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/dr-erico-foto-4.webp"
                alt="Dr. Érico Diógenes — Urologista referência em Fortaleza"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div data-aos="fade-left">
            <p className="eyebrow">Referência em Fortaleza</p>
            <h2 className="section-title mt-2">DR. ÉRICO DIÓGENES</h2>
            <div className="mt-5 space-y-4 text-brand-muted">
              <p>
                Escolher um urologista vai além de encontrar alguém que resolva o problema imediato. É fundamental buscar um especialista com formação sólida, atualização contínua e acesso às tecnologias mais modernas — especialmente quando o diagnóstico envolve cirurgia ou oncologia.
              </p>
              <p>
                O Dr. Érico Diógenes é formado pela Universidade Federal do Ceará e referência no Ceará em cirurgia urológica minimamente invasiva. Foi um dos primeiros a trazer para Fortaleza procedimentos como o HoLEP (cirurgia a laser para próstata) e a cirurgia robótica com o sistema Da Vinci — técnicas que reduzem dor, sangramento e tempo de recuperação.
              </p>
              <p>
                Mais do que tecnologia, o Dr. Érico é reconhecido pelo atendimento humanizado: tempo dedicado a cada paciente, linguagem acessível e respeito pela decisão compartilhada no tratamento.
              </p>
            </div>
            <Link href="/dr-erico-diogenes" className="btn-primary mt-8">
              Conhecer o Dr. Érico
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-brand-beige-light">
        <div className="container-site max-w-3xl">
          <h2 className="section-title text-center" data-aos="fade-up">PERGUNTAS FREQUENTES SOBRE UROLOGIA</h2>
          <UrologiaFaq faq={faq} />
        </div>
      </section>

      <ContactMini />
      <CtaBanner title="Agende sua consulta com urologista em Fortaleza" />
    </>
  )
}
