/**
 * SchemaMarkup.tsx
 *
 * Componente de dados estruturados (JSON-LD) para o site do Dr. Érico Diógenes.
 *
 * Uso no layout.tsx raiz (cobre todas as páginas):
 *   <SchemaMarkup />
 *
 * Uso em páginas específicas (adiciona MedicalWebPage):
 *   <SchemaMarkup
 *     webPage={{
 *       name: 'HoLEP — Cirurgia a Laser para Próstata',
 *       description: 'Saiba tudo sobre o HoLEP...',
 *       url: 'https://drericodiogenes.com.br/holep',
 *       specialty: 'Urology',
 *     }}
 *   />
 *
 * Ou, para adicionar apenas o MedicalWebPage em páginas que já herdam o layout:
 *   <MedicalWebPageSchema name="..." description="..." url="..." />
 */

const SITE_URL = 'https://drericodiogenes.com.br'

// ─── 1. Physician ─────────────────────────────────────────────────────────────
const physicianSchema = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  '@id': `${SITE_URL}/#physician`,
  name: 'Dr. Érico Diógenes',
  alternateName: 'Érico Diógenes',
  description:
    'Urologista em Fortaleza especialista em Cirurgia Robótica, HoLEP e Uro-oncologia. CRM-CE 9540 | RQE 6232.',
  url: `${SITE_URL}/dr-erico-diogenes`,
  image: `${SITE_URL}/img/dr-erico-foto-1.webp`,
  telephone: '+55 85 98178-1020',
  email: 'contato@drericodiogenes.com.br',
  medicalSpecialty: ['Urology', 'Surgical Oncology'],

  // Número de registro profissional
  identifier: {
    '@type': 'PropertyValue',
    name: 'CRM',
    value: 'CRM-CE 9540 | RQE 6232',
  },

  // Formação acadêmica e fellowships
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'degree',
      name: 'Doutorado em Urologia',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Universidade de São Paulo (USP)',
      },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'fellowship',
      name: 'Fellowship em Uro-oncologia',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Hospital Sírio-Libanês',
      },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'specialization',
      name: 'Especialização Internacional em Cirurgia Urológica',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Clinique Saint Augustin',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'FR',
        },
      },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'postgraduate',
      name: 'Pós-Graduação em Cirurgia Robótica',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Hospital Albert Einstein',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'São Paulo',
          addressCountry: 'BR',
        },
      },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'observership',
      name: 'Observership em Cirurgia Robótica e Laparoscopia',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Cleveland Clinic',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Michigan',
          addressCountry: 'US',
        },
      },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'observership',
      name: 'Observership em Cirurgia Robótica e Laparoscopia',
      recognizedBy: {
        '@type': 'Organization',
        name: 'University of Southern California',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Los Angeles',
          addressCountry: 'US',
        },
      },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'residency',
      name: 'Residência Médica em Cirurgia Geral Avançada',
      recognizedBy: {
        '@type': 'Organization',
        name: 'SUS',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'São Paulo',
          addressCountry: 'BR',
        },
      },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'internship',
      name: 'Internato em Urologia e Cirurgia Geral',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Detroit Medical Center',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Michigan',
          addressCountry: 'US',
        },
      },
    },
  ],

  // Associações médicas
  memberOf: [
    {
      '@type': 'MedicalOrganization',
      name: 'Sociedade Brasileira de Urologia',
      url: 'https://portaldaurologia.org.br',
    },
    {
      '@type': 'MedicalOrganization',
      name: 'Associação Americana de Urologia (AUA)',
      url: 'https://www.auanet.org',
    },
  ],

  // Procedimentos disponíveis
  availableService: [
    { '@type': 'MedicalProcedure', name: 'Cirurgia Robótica da Próstata' },
    { '@type': 'MedicalProcedure', name: 'HoLEP — Enucleação da Próstata a Laser' },
    { '@type': 'MedicalProcedure', name: 'Tratamento de Câncer de Próstata' },
    { '@type': 'MedicalProcedure', name: 'Cirurgia a Laser para Cálculo Renal' },
    { '@type': 'MedicalProcedure', name: 'Uro-oncologia' },
  ],

  worksFor: [
    { '@id': `${SITE_URL}/#medicalorg` },
    {
      '@type': 'MedicalOrganization',
      name: 'Instituto de Urologia e Robótica — IURO',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Fortaleza',
        addressRegion: 'CE',
        addressCountry: 'BR',
      },
    },
    {
      '@type': 'Hospital',
      name: 'Hospital Monte Klinikum',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Fortaleza',
        addressRegion: 'CE',
        addressCountry: 'BR',
      },
    },
    {
      '@type': 'Hospital',
      name: 'Hospital Instituto Dr. José Frota',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Fortaleza',
        addressRegion: 'CE',
        addressCountry: 'BR',
      },
    },
    {
      '@type': 'Hospital',
      name: 'Hospital Walter Cantídio — UFC',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Fortaleza',
        addressRegion: 'CE',
        addressCountry: 'BR',
      },
    },
  ],

  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Dom Luís, 1200, Sala 705, Torre 2, Pátio Dom Luís',
    addressLocality: 'Fortaleza',
    addressRegion: 'CE',
    postalCode: '60160-230',
    addressCountry: 'BR',
  },

  sameAs: [
    'https://instagram.com/drericodiogenes',
    'https://www.doctoralia.com.br/erico-diogenes/urologista/fortaleza',
  ],
}

// ─── 2. MedicalOrganization (consultório) ─────────────────────────────────────
const medicalOrgSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalOrganization',
  '@id': `${SITE_URL}/#medicalorg`,
  name: 'Dr. Érico Diógenes — Urologia',
  description:
    'Consultório urológico especializado em Cirurgia Robótica, HoLEP e Uro-oncologia em Fortaleza, Ceará.',
  url: SITE_URL,
  telephone: '+55 85 98178-1020',
  email: 'contato@drericodiogenes.com.br',
  image: `${SITE_URL}/img/dr-erico-foto-1.webp`,

  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Dom Luís, 1200, Sala 705, Torre 2, Pátio Dom Luís',
    addressLocality: 'Fortaleza',
    addressRegion: 'CE',
    postalCode: '60160-230',
    addressCountry: 'BR',
  },

  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],

  medicalSpecialty: ['Urology', 'Surgical Oncology'],

  // Referência cruzada ao médico
  employee: { '@id': `${SITE_URL}/#physician` },

  sameAs: ['https://instagram.com/drericodiogenes'],
}

// ─── 3. LocalBusiness (presença local / Google Maps) ──────────────────────────
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#localbusiness`,
  name: 'Dr. Érico Diógenes — Urologista em Fortaleza',
  description:
    'Urologista em Fortaleza especialista em Cirurgia Robótica, HoLEP e Uro-oncologia.',
  url: SITE_URL,
  telephone: '+55 85 98178-1020',
  email: 'contato@drericodiogenes.com.br',
  image: `${SITE_URL}/img/dr-erico-foto-1.webp`,
  priceRange: '$$',

  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Dom Luís, 1200, Sala 705, Torre 2, Pátio Dom Luís',
    addressLocality: 'Fortaleza',
    addressRegion: 'CE',
    postalCode: '60160-230',
    addressCountry: 'BR',
  },

  geo: {
    '@type': 'GeoCoordinates',
    latitude: -3.7461,
    longitude: -38.4885,
  },

  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],

  areaServed: [
    { '@type': 'City', name: 'Fortaleza' },
    { '@type': 'State', name: 'Ceará' },
    { '@type': 'Country', name: 'Brasil' },
  ],

  // ↓ Descomente e preencha quando tiver avaliações reais verificadas
  // aggregateRating: {
  //   '@type': 'AggregateRating',
  //   ratingValue: '5.0',
  //   bestRating: '5',
  //   worstRating: '1',
  //   reviewCount: '0',
  // },

  sameAs: ['https://instagram.com/drericodiogenes'],
}

// ─── Tipos ────────────────────────────────────────────────────────────────────
interface MedicalWebPageData {
  /** Título da página exibido no schema (ex: "HoLEP — Cirurgia a Laser para Próstata") */
  name: string
  /** Descrição da página para o schema (pode ser a mesma do metadata.description) */
  description: string
  /** URL canônica completa da página (ex: "https://drericodiogenes.com.br/holep") */
  url: string
  /** Especialidade médica relacionada à página (padrão: "Urology") */
  specialty?: string
}

interface SchemaMarkupProps {
  /**
   * Quando fornecido, um schema MedicalWebPage é injetado além dos três schemas base.
   * Use em páginas específicas como /holep e /cirurgia-robotica.
   */
  webPage?: MedicalWebPageData
}

// ─── Componente principal ─────────────────────────────────────────────────────
export default function SchemaMarkup({ webPage }: SchemaMarkupProps) {
  const webPageSchema = webPage
    ? {
        '@context': 'https://schema.org',
        '@type': 'MedicalWebPage',
        '@id': `${webPage.url}#webpage`,
        name: webPage.name,
        description: webPage.description,
        url: webPage.url,
        specialty: webPage.specialty ?? 'Urology',
        about: { '@id': `${SITE_URL}/#physician` },
        isPartOf: { '@id': `${SITE_URL}/#medicalorg` },
        inLanguage: 'pt-BR',
      }
    : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalOrgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {webPageSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
      )}
    </>
  )
}

// ─── Export auxiliar para páginas específicas ─────────────────────────────────
/**
 * Use este componente em páginas que já herdam o SchemaMarkup do layout raiz
 * e precisam apenas adicionar o schema MedicalWebPage daquela página específica.
 *
 * Exemplo em /holep/page.tsx:
 *   <MedicalWebPageSchema
 *     name="HoLEP — Cirurgia a Laser para Próstata Aumentada"
 *     description="..."
 *     url="https://drericodiogenes.com.br/holep"
 *   />
 */
export function MedicalWebPageSchema({
  name,
  description,
  url,
  specialty = 'Urology',
}: MedicalWebPageData) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    '@id': `${url}#webpage`,
    name,
    description,
    url,
    specialty,
    about: { '@id': `${SITE_URL}/#physician` },
    isPartOf: { '@id': `${SITE_URL}/#medicalorg` },
    inLanguage: 'pt-BR',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
