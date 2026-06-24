const { google } = require('googleapis')
const fs = require('fs')
const path = require('path')
const http = require('http')
const url = require('url')

const CREDENTIALS_PATH = path.join(__dirname, '..', 'client_secret_954245552054-af46dst92fcd0acu51cls9b0nqc002g9.apps.googleusercontent.com.json')
const TOKEN_PATH = path.join(__dirname, 'token.json')
const SCOPES = ['https://www.googleapis.com/auth/indexing']

const BASE = 'https://drericodiogenes.com.br'

const URLS = [
  // Páginas originais já indexadas
  `${BASE}/`,
  `${BASE}/cirurgia-robotica`,
  `${BASE}/holep`,
  `${BASE}/dr-erico-diogenes`,
  `${BASE}/blog`,
  `${BASE}/contato`,
  // Próstata
  `${BASE}/condicoes-urologicas/prostata/psa-alterado`,
  `${BASE}/condicoes-urologicas/prostata/exame-prostata`,
  `${BASE}/condicoes-urologicas/prostata/cancer-prostata`,
  // Cirurgia Robótica
  `${BASE}/tratamentos/cirurgia-robotica/prostata`,
  `${BASE}/tratamentos/cirurgia-robotica/rim`,
  `${BASE}/tratamentos/cirurgia-robotica/bexiga`,
  // Cálculo Renal
  `${BASE}/condicoes-urologicas/calculo-renal/pedra-nos-rins`,
  `${BASE}/condicoes-urologicas/calculo-renal/cirurgia-calculo-renal`,
  `${BASE}/condicoes-urologicas/calculo-renal/dor-nos-rins`,
  // Uro-Oncologia
  `${BASE}/condicoes-urologicas/uro-oncologia`,
  `${BASE}/condicoes-urologicas/uro-oncologia/cancer-rim`,
  `${BASE}/condicoes-urologicas/uro-oncologia/cancer-bexiga`,
  `${BASE}/condicoes-urologicas/uro-oncologia/cancer-testiculo`,
  // Saúde Masculina
  `${BASE}/saude-masculina`,
  `${BASE}/saude-masculina/disfuncao-eretil`,
  `${BASE}/saude-masculina/ejaculacao-precoce`,
  `${BASE}/saude-masculina/baixa-testosterona`,
  `${BASE}/saude-masculina/infertilidade`,
  `${BASE}/saude-masculina/vasectomia`,
]

async function getAuthClient() {
  const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, 'utf8'))
  const { client_id, client_secret, redirect_uris } = credentials.installed

  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, 'http://localhost:3333')

  if (fs.existsSync(TOKEN_PATH)) {
    const token = JSON.parse(fs.readFileSync(TOKEN_PATH, 'utf8'))
    oAuth2Client.setCredentials(token)
    return oAuth2Client
  }

  // Sem token: abre fluxo OAuth no navegador
  const authUrl = oAuth2Client.generateAuthUrl({ access_type: 'offline', scope: SCOPES })
  console.log('\nAbra este link no navegador para autorizar:\n')
  console.log(authUrl)
  console.log('\nAguardando autorização...\n')

  const code = await new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      const qs = new url.URL(req.url, 'http://localhost:3333').searchParams
      const code = qs.get('code')
      res.end('<h2>Autorizado! Pode fechar esta aba.</h2>')
      server.close()
      if (code) resolve(code)
      else reject(new Error('Código não recebido'))
    })
    server.listen(3333)
  })

  const { tokens } = await oAuth2Client.getToken(code)
  oAuth2Client.setCredentials(tokens)
  fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens, null, 2))
  console.log('Token salvo em scripts/token.json\n')

  return oAuth2Client
}

async function notificarURL(auth, pageUrl) {
  const res = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${(await auth.getAccessToken()).token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url: pageUrl, type: 'URL_UPDATED' }),
  })

  const data = await res.json()

  if (res.ok) {
    console.log(`✓ ${pageUrl}`)
  } else {
    console.error(`✗ ${pageUrl} — ${data.error?.message || JSON.stringify(data)}`)
  }
}

async function main() {
  console.log(`\nIndexando ${URLS.length} URLs no Google...\n`)
  const auth = await getAuthClient()

  for (const u of URLS) {
    await notificarURL(auth, u)
  }

  console.log('\nConcluído.')
}

main().catch(console.error)
