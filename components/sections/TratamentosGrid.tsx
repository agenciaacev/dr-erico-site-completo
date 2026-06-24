import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

type TratamentoItem = {
  imagem: string
  titulo: string
  href: string
  links: { label: string; href: string }[]
}

const tratamentos: TratamentoItem[] = [
  {
    imagem: '/img/post/imgid09_01.webp',
    titulo: 'Check-Up Urológico',
    href: '/urologia',
    links: [
      { label: 'Urologista em Fortaleza', href: '/urologia/urologista-fortaleza' },
      { label: 'Urologia Geral em Fortaleza', href: '/urologia/urologia-geral' },
      { label: 'Consulta Urologista Fortaleza', href: '/urologia/consulta' },
    ],
  },
  {
    imagem: '/img/post/imgid05_01.webp',
    titulo: 'Tratamento a Laser HoLEP para Próstata',
    href: '/holep',
    links: [
      { label: 'Próstata Aumentada', href: '/condicoes-urologicas/prostata' },
      { label: 'Hiperplasia Prostática Benigna (HPB)', href: '/condicoes-urologicas/prostata/hiperplasia-prostatica' },
      { label: 'HoLEP em Fortaleza', href: '/holep' },
      { label: 'Cirurgia a Laser para Próstata', href: '/holep' },
      { label: 'Exame de Próstata Fortaleza', href: '/condicoes-urologicas/prostata/exame-prostata' },
      { label: 'PSA Alterado', href: '/condicoes-urologicas/prostata/psa-alterado' },
      { label: 'Câncer de Próstata Fortaleza', href: '/condicoes-urologicas/prostata/cancer-prostata' },
    ],
  },
  {
    imagem: '/img/dr-erico-foto-1.webp',
    titulo: 'Cirurgia Robótica em Urologia',
    href: '/cirurgia-robotica',
    links: [
      { label: 'Cirurgia Robótica Urológica Fortaleza', href: '/cirurgia-robotica' },
      { label: 'Cirurgia Robótica Próstata Fortaleza', href: '/tratamentos/cirurgia-robotica/prostata' },
      { label: 'Cirurgia Robótica Rim', href: '/tratamentos/cirurgia-robotica/rim' },
      { label: 'Cirurgia Robótica Bexiga', href: '/tratamentos/cirurgia-robotica/bexiga' },
    ],
  },
  {
    imagem: '/img/post/imgid04_01.webp',
    titulo: 'Cálculos Urinários',
    href: '/condicoes-urologicas/calculo-renal',
    links: [
      { label: 'Cálculo Renal Fortaleza', href: '/condicoes-urologicas/calculo-renal' },
      { label: 'Pedra nos Rins Fortaleza', href: '/condicoes-urologicas/calculo-renal/pedra-nos-rins' },
      { label: 'Tratamento Pedra nos Rins', href: '/condicoes-urologicas/calculo-renal/pedra-nos-rins' },
      { label: 'Cirurgia Pedra nos Rins', href: '/condicoes-urologicas/calculo-renal/cirurgia-calculo-renal' },
      { label: 'Dor nos Rins – Urologista', href: '/condicoes-urologicas/calculo-renal/dor-nos-rins' },
    ],
  },
  {
    imagem: '/img/post/imgid08_01.webp',
    titulo: 'Uro-Oncologia',
    href: '/condicoes-urologicas/uro-oncologia',
    links: [
      { label: 'Câncer de Próstata', href: '/condicoes-urologicas/uro-oncologia/cancer-prostata' },
      { label: 'Câncer de Rim', href: '/condicoes-urologicas/uro-oncologia/cancer-rim' },
      { label: 'Câncer de Bexiga', href: '/condicoes-urologicas/uro-oncologia/cancer-bexiga' },
      { label: 'Câncer de Testículo', href: '/condicoes-urologicas/uro-oncologia/cancer-testiculo' },
      { label: 'Tumores Urológicos', href: '/condicoes-urologicas/uro-oncologia' },
    ],
  },
  {
    imagem: '/img/post/imgid15_01.webp',
    titulo: 'Andrologia e Saúde Sexual Masculina',
    href: '/saude-masculina',
    links: [
      { label: 'Disfunção Erétil Fortaleza', href: '/saude-masculina/disfuncao-eretil' },
      { label: 'Ejaculação Precoce', href: '/saude-masculina/ejaculacao-precoce' },
      { label: 'Baixa Testosterona', href: '/saude-masculina/baixa-testosterona' },
      { label: 'Infertilidade Masculina', href: '/saude-masculina/infertilidade' },
      { label: 'Vasectomia Fortaleza', href: '/saude-masculina/vasectomia' },
    ],
  },
]

export default function TratamentosGrid() {
  return (
    <section id="tratamentos" className="py-16 bg-white">
      <div className="container-site">
        <div className="text-center mb-12" data-aos="fade-up">
          <p className="eyebrow">Conheça nossos</p>
          <h2 className="section-title mt-2">Tratamentos</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tratamentos.map((item, i) => (
            <div
              key={item.titulo}
              className="bg-white rounded-2xl overflow-hidden flex flex-col"
              style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <div className="h-44 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.imagem}
                  alt={item.titulo}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-lg text-brand-navy text-center mb-4">
                  {item.titulo}
                </h3>

                <ul className="space-y-2 flex-1">
                  {item.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="flex items-start gap-2 text-sm text-brand-muted hover:text-brand-gold transition-colors"
                      >
                        <ChevronRight size={14} className="mt-0.5 shrink-0 text-brand-gold" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
