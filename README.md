# Dr. Érico Diógenes, Site em Next.js

Versão migrada do projeto original (Vite + React + react-router-dom) para
**Next.js 15 com App Router**. Todas as funcionalidades foram preservadas.

## Como rodar

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

Acesse http://localhost:3000

Para build de produção:

```bash
npm run build
npm run start
```

## O que mudou na migração

### Roteamento: react-router-dom -> Next.js App Router

| Antes (Vite + react-router-dom)                | Agora (Next.js App Router)                 |
| ---------------------------------------------- | ------------------------------------------ |
| `<BrowserRouter>` em `main.tsx`                | Removido. App Router cuida disso           |
| `<Routes>` e `<Route>` em `App.tsx`            | Pastas em `app/` (file-based routing)      |
| `<Layout>` com `<Outlet />`                    | `app/layout.tsx` com `{children}`          |
| `<Link to="/blog">`                            | `<Link href="/blog">` de `next/link`       |
| `<NavLink>` com `isActive`                     | `<Link>` + `usePathname()` de `next/navigation` |
| `useLocation().pathname`                       | `usePathname()`                            |
| `useParams<{ slug: string }>()`                | `params: Promise<{ slug: string }>` recebido como prop |
| Rota `*` para 404                              | `app/not-found.tsx` (convenção)            |

### Estrutura de pastas

```
app/
  layout.tsx                  # Substitui App.tsx + main.tsx + index.html
  page.tsx                    # Home (rota /)
  globals.css                 # Era src/index.css
  not-found.tsx               # Era src/pages/NotFound.tsx (rota *)
  dr-erico-diogenes/page.tsx  # Era src/pages/Sobre.tsx
  holep/page.tsx              # Era src/pages/HoLEP.tsx
  cirurgia-robotica/page.tsx  # Era src/pages/CirurgiaRobotica.tsx
  blog/page.tsx               # Era src/pages/Blog.tsx
  blog/[slug]/page.tsx        # Era src/pages/BlogPost.tsx
  contato/page.tsx            # Era src/pages/Contato.tsx
components/
  layout/                     # TopBar, Navbar, Footer, Logo, FloatingWhatsapp
  layout/AosProvider.tsx      # Encapsula AOS.init() (era useEffect no App.tsx)
  layout/ScrollToTop.tsx      # Era ScrollToTop dentro do App.tsx
  sections/                   # HeroHome, VideoSection, etc.
  ui/                         # CtaBanner, PageHeader, PostCard
data/                         # site.ts, posts.ts (sem mudanças de lógica)
types/                        # post.ts
public/img/                   # Era src/assets/img/
```

### Imagens

`import logoImg from '../../assets/img/logo_1.webp'` virou
`<Image src="/img/logo_1.webp" />` usando o componente `next/image`. Os arquivos
estão agora em `public/img/`.

Imagens externas (Unsplash, i.ytimg.com) estão liberadas em
`next.config.js` -> `images.remotePatterns`. As demais `<img>` de URLs
externas foram mantidas como `<img>` para não exigir configuração adicional.

### Server vs. Client Components

O App Router usa **server components por padrão**. Componentes que precisam de
estado, efeitos ou eventos do navegador receberam a diretiva `'use client'`:

* `Navbar`, `AosProvider`, `ScrollToTop`
* `VideoSection` (fetch + estado)
* `app/holep/page.tsx`, `app/blog/page.tsx`, `app/contato/page.tsx`
  (todas usam `useState`)

`app/blog/[slug]/page.tsx` ficou como server component e agora pré-renderiza
todos os posts em build com `generateStaticParams`.

### Variáveis de ambiente (YouTube)

A `API_KEY` do YouTube estava hardcoded no `VideoSection`. Foi movida para
variáveis públicas do Next.js:

```
NEXT_PUBLIC_YOUTUBE_API_KEY=...
NEXT_PUBLIC_YOUTUBE_CHANNEL_ID=...
```

O componente lê de `process.env.NEXT_PUBLIC_*` e cai nos valores originais como
fallback se elas não estiverem definidas, mantendo o comportamento idêntico ao
projeto antigo.

### Metadata e SEO

`<title>`, `<meta name="description">` e o favicon que estavam no `index.html`
agora ficam na exportação `metadata` em `app/layout.tsx` (Metadata API do
Next.js). A página de post dinâmica (`app/blog/[slug]/page.tsx`) define
`generateMetadata` para gerar título e descrição por post.

### Configuração

* `vite.config.ts` -> `next.config.js`
* `tsconfig.json`: `jsx: "preserve"`, `paths: { "@/*": ["./*"] }`,
  plugin do Next adicionado
* `tailwind.config.js`: paths atualizados para `app/**` e `components/**`
* `postcss.config.js`: convertido para CommonJS

### Imports com alias

Todos os imports passaram a usar `@/` em vez de caminhos relativos. Exemplo:

```ts
// Antes
import PostCard from '../components/ui/PostCard'

// Agora
import PostCard from '@/components/ui/PostCard'
```

## Funcionalidades preservadas

* AOS (animações de scroll), inicializadas em `AosProvider`
* Scroll-to-top em mudança de rota, agora com `usePathname()`
* Menu mobile responsivo
* Navegação ativa no menu (lógica `end` reproduzida via `usePathname()`)
* Filtros de categoria e paginação no Blog
* Página de post dinâmica `/blog/[slug]`
* Modal de vídeo do YouTube
* Formulário de contato (mock, igual ao original)
* FAQ acordeão na página HoLEP
* Footer com newsletter, redes sociais, links de agendamento
* Botão flutuante de WhatsApp
