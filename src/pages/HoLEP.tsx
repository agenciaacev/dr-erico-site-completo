import { useState } from 'react'
import { Plus, Minus, Check, X as XIcon } from 'lucide-react'
import CtaBanner from '../components/ui/CtaBanner'

const indicacoes = [
  'Hiperplasia Prostática Benigna (HPB)',
  'Dificuldade para urinar',
  'Jato urinário fraco',
  'Vontade de urinar com frequência, especialmente à noite',
  'Sensação de bexiga cheia mesmo após urinar',
  'Infecções urinárias de repetição',
  'Sangue na urina',
  'Retenção urinária',
  'Próstatas de grande volume',
  'Pacientes que utilizam anticoagulantes e necessitam de uma técnica com menor risco de sangramento',
]

const beneficios = [
  'Procedimento sem cortes',
  'Menor sangramento',
  'Menor tempo de sonda',
  'Internação geralmente de 24 horas',
  'Elevada segurança para pacientes em uso de anticoagulantes',
  'Preservação da continência urinária e função sexual',
]

const comparativo = [
  {
    titulo: 'Acesso',
    tradicional: 'incisão ou alça elétrica',
    holep: 'sem cortes, via uretra',
  },
  {
    titulo: 'Sangramento',
    tradicional: 'moderado',
    holep: 'mínimo',
  },
  {
    titulo: 'Internação',
    tradicional: '3 a 5 dias',
    holep: 'aproximadamente 24 horas',
  },
  {
    titulo: 'Retorno às atividades',
    tradicional: 'lento',
    holep: 'rápido',
  },
  {
    titulo: 'Indicação para próstatas grandes',
    tradicional: 'limitada',
    holep: 'amplamente indicada',
  },
  {
    titulo: 'Resultados',
    tradicional: 'risco de recidiva',
    holep: 'resultados duradouros com baixa necessidade de nova intervenção',
  },
]

const faq = [
  {
    q: 'O HoLEP causa dor?',
    a: 'O procedimento é realizado sob anestesia e o desconforto pós-operatório é pequeno, controlado com analgésicos comuns.',
  },
  {
    q: 'Quanto tempo dura a internação?',
    a: 'Na maioria dos casos, cerca de 24 horas.',
  },
  {
    q: 'Quando posso voltar ao trabalho?',
    a: 'Normalmente em 7 a 14 dias, dependendo da atividade profissional.',
  },
  {
    q: 'A cirurgia afeta a função sexual?',
    a: 'O HoLEP preserva a potência sexual. Pode haver ejaculação retrógrada em alguns casos.',
  },
  {
    q: 'O HoLEP é seguro para idosos?',
    a: 'Sim. Inclusive é uma das opções mais seguras para pacientes de idade avançada.',
  },
  {
    q: 'É necessário usar sonda?',
    a: 'Sim, por um breve período, geralmente retirada em 24 a 48 horas.',
  },
  {
    q: 'O tecido removido é analisado?',
    a: 'Sim. Todo tecido é enviado para análise anatomopatológica.',
  },
  {
    q: 'O HoLEP resolve o problema da próstata aumentada definitivamente?',
    a: 'Na maioria dos pacientes, sim. Os resultados são duradouros e estáveis.',
  },
]

function Row({
  titulo,
  tradicional,
  holep,
  dark,
}: {
  titulo: string
  tradicional: string
  holep: string
  dark?: boolean
}) {
  return (
    <div
      className={`rounded-2xl p-6 md:p-7 ${
        dark ? 'bg-brand-navy text-white' : 'bg-brand-beige-light text-brand-text'
      }`}
    >
      <p className={`font-display text-xl mb-3 ${dark ? 'text-brand-gold' : 'text-brand-gold'}`}>
        {titulo}
      </p>
      <p className="flex items-start gap-2 text-sm md:text-base">
        <XIcon size={16} className="mt-1 shrink-0 text-red-400" />
        <span>Cirurgia tradicional: {tradicional}</span>
      </p>
      <p className="flex items-start gap-2 text-sm md:text-base mt-2">
        <Check size={16} className="mt-1 shrink-0 text-brand-green" />
        <span>HoLEP: {holep}</span>
      </p>
    </div>
  )
}

export default function HoLEP() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <>
      <section className="bg-brand-beige py-14 md:py-20">
        <div className="container-site grid lg:grid-cols-2 gap-10 items-center">
          <div data-aos="fade-right">
            <p className="eyebrow">HoLEP Cirurgia a Laser Avançada para Hiperplasia Prostática Benigna</p>
            <h1 className="section-title mt-2">
              <span className="text-brand-gold">Pioneirismo, precisão e tecnologia</span> para o
              tratamento moderno da próstata aumentada.
            </h1>
            <a
              href="https://wa.me/5585981781020"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8"
            >
              Agendar Consulta
            </a>
          </div>
          <div data-aos="fade-left">
            <div className="aspect-square max-w-md ml-auto rounded-full overflow-hidden shadow-soft">
              <img
                src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1200&auto=format&fit=crop"
                alt="HoLEP laser"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-site max-w-4xl text-center" data-aos="fade-up">
          <h2 className="section-title">O QUE É O HoLEP?</h2>
          <p className="mt-6 text-brand-muted">
            O HoLEP é uma cirurgia minimamente invasiva que utiliza energia de Holmium para remover
            de forma completa o tecido aumentado da próstata. A técnica é realizada por via
            endoscópica, sem necessidade de incisões. Esse princípio reduz sangramento, dor e tempo
            de internação, além de oferecer resultados duradouros mesmo em próstatas de grande
            volume.
          </p>
        </div>
      </section>

      <section className="py-16 bg-brand-beige-light">
        <div className="container-site" data-aos="fade-up">
          <h2 className="section-title text-center">QUANDO O HoLEP É INDICADO?</h2>
          <p className="text-center text-brand-muted italic mt-3">
            O HoLEP é indicado para homens com:
          </p>

          <ul className="mt-10 grid md:grid-cols-2 gap-3 max-w-3xl mx-auto">
            {indicacoes.map((item, i) => (
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

          <p className="text-center mt-8 font-display italic text-brand-navy text-lg max-w-2xl mx-auto">
            Por ser altamente eficaz, o HoLEP é considerado o padrão ouro mesmo em casos avançados
            ou próstatas muito volumosas.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-site" data-aos="fade-up">
          <h2 className="section-title text-center">BENEFÍCIOS DO HoLEP</h2>
          <p className="text-center text-brand-muted italic mt-3">
            Os principais benefícios do HoLEP incluem:
          </p>

          <ul className="mt-10 grid md:grid-cols-2 gap-3 max-w-3xl mx-auto">
            {beneficios.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 bg-brand-beige-light rounded-xl p-4 text-sm"
                data-aos="fade-up"
                data-aos-delay={i * 60}
              >
                <Check size={16} className="mt-0.5 shrink-0 text-brand-green" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-brand-beige-light">
        <div className="container-site">
          <h2 className="section-title text-center" data-aos="fade-up">
            HOLEP X CIRURGIAS TRADICIONAIS
          </h2>
          <p className="text-center text-brand-muted mt-3" data-aos="fade-up">
            Comparação técnica:
          </p>

          <div className="mt-10 grid gap-4 max-w-4xl mx-auto">
            {comparativo.map((row, i) => (
              <div key={row.titulo} data-aos="fade-up" data-aos-delay={i * 60}>
                <Row {...row} dark={i % 2 === 0} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-site grid lg:grid-cols-2 gap-10 items-center">
          <div data-aos="fade-right">
            <p className="eyebrow">PIONEIRISMO</p>
            <h2 className="section-title mt-2">DR. ÉRICO DIÓGENES</h2>
            <div className="mt-5 space-y-4 text-brand-muted">
              <p>
                O Dr. Érico Diógenes é médico urologista formado pela Universidade Federal do
                Ceará, com especialização em cirurgias minimamente invasivas, robóticas e a laser.
              </p>
              <p>
                Sua prática médica é marcada pela precisão, segurança e adoção dos métodos mais
                modernos disponíveis.
              </p>
              <p>
                Foi um dos primeiros especialistas no Ceará a incorporar o HoLEP, tornando-se
                referência na técnica e oferecendo aos pacientes um tratamento baseado em
                evidências, resultados sólidos e cuidado individualizado.
              </p>
            </div>
            <a href="/dr-erico-diogenes" className="btn-primary mt-8">
              Saiba Mais
            </a>
          </div>

          <div className="relative" data-aos="fade-left">
            <div className="aspect-[4/5] max-w-md rounded-3xl overflow-hidden shadow-soft">
              <img
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1200&auto=format&fit=crop"
                alt="Dr. Érico Diógenes"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-beige-light">
        <div className="container-site max-w-3xl">
          <h2 className="section-title text-center" data-aos="fade-up">
            RESULTADOS ESPERADOS
          </h2>
          <p className="text-center text-brand-muted italic mt-3" data-aos="fade-up">
            A recuperação após o HoLEP é rápida e confortável. Os principais resultados incluem:
          </p>
          <ul className="mt-8 space-y-3">
            {[
              'Melhora expressiva no fluxo urinário',
              'Redução das idas noturnas ao banheiro',
              'Diminuição do risco de infecções urinárias',
            ].map((item, i) => (
              <li
                key={item}
                className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-card"
                data-aos="fade-up"
                data-aos-delay={i * 60}
              >
                <Check size={16} className="mt-1 shrink-0 text-brand-green" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-center mt-8 font-display italic text-brand-navy text-lg" data-aos="fade-up">
            O efeito é duradouro e estável, pois o HoLEP remove completamente o tecido obstrutivo,
            reduzindo a chance de uma nova cirurgia no futuro.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-site max-w-3xl">
          <h2 className="section-title text-center" data-aos="fade-up">
            PERGUNTAS FREQUENTES (FAQ)
          </h2>
          <div className="mt-10 space-y-3">
            {faq.map((item, i) => (
              <div
                key={i}
                className="bg-brand-beige-light rounded-2xl overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={i * 40}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-medium text-brand-navy">{item.q}</span>
                  {openFaq === i ? <Minus size={18} /> : <Plus size={18} />}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-sm text-brand-muted">{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title="Marque agora sua consulta" />
    </>
  )
}
