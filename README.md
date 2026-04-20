# Dr. Érico Diógenes — Site

Reestruturação do site do Dr. Érico Diógenes (urologista em Fortaleza) em stack moderna, mantendo layout, paleta e tipografia do site original.

## Stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS** (paleta e fontes customizadas)
- **React Router DOM v6** (roteamento entre páginas)
- **AOS** (animações de scroll)
- **Lucide React** (ícones)

## Como rodar

```bash
npm install
npm run dev
```

Abrir em http://localhost:5173.

Outros scripts:

```bash
npm run build      # build de produção (dist/)
npm run preview    # preview do build
npm run lint       # lint
```

## Estrutura

```
src/
├── App.tsx                  # Rotas principais + init do AOS
├── main.tsx                 # Entry point
├── index.css                # Tailwind + classes utilitárias customizadas
├── components/
│   ├── layout/
│   │   ├── Layout.tsx       # Wrapper com Navbar, Footer e WA flutuante
│   │   ├── TopBar.tsx       # Barra superior escura
│   │   ├── Navbar.tsx       # Navbar responsivo com menu mobile
│   │   ├── Footer.tsx       # Footer em 5 colunas
│   │   ├── FloatingWhatsapp.tsx
│   │   └── Logo.tsx         # Logo SVG inline (light/dark)
│   ├── sections/            # Seções reutilizáveis (Home)
│   │   ├── HeroHome.tsx
│   │   ├── CirurgiaRoboticaHighlight.tsx
│   │   ├── Diferenciais.tsx
│   │   ├── LaserHighlight.tsx
│   │   ├── SobreDoutor.tsx
│   │   ├── BlogPreview.tsx
│   │   └── ContactMini.tsx
│   └── ui/
│       ├── PostCard.tsx
│       ├── CtaBanner.tsx
│       └── PageHeader.tsx
├── pages/                   # Uma página por rota
│   ├── Home.tsx
│   ├── Sobre.tsx            # /dr-erico-diogenes
│   ├── HoLEP.tsx            # /holep
│   ├── CirurgiaRobotica.tsx # /cirurgia-robotica
│   ├── Blog.tsx             # /blog (listagem com filtro e paginação)
│   ├── BlogPost.tsx         # /blog/:slug
│   ├── Contato.tsx          # /contato
│   └── NotFound.tsx         # 404
├── data/
│   ├── posts.ts             # Mock dos posts do blog (9 posts completos)
│   └── site.ts              # Contato, endereço, redes sociais
└── types/
    └── post.ts              # Tipos Post e PostCategory
```

## Rotas

| Rota                    | Página            |
| ----------------------- | ----------------- |
| `/`                     | Home              |
| `/dr-erico-diogenes`    | Sobre             |
| `/holep`                | HoLEP             |
| `/cirurgia-robotica`    | Cirurgia Robótica |
| `/blog`                 | Blog (listagem)   |
| `/blog/:slug`           | Post individual   |
| `/contato`              | Contato           |

## Paleta (Tailwind)

Disponível via `brand-*`:

- `brand-navy` `#0B2239` (navbar, footer)
- `brand-navy-deep` `#1E3A3A` (CTA escuro)
- `brand-gold` `#C9A961` (destaques, botões primários)
- `brand-green` `#9DC74A` (WhatsApp, tags)
- `brand-beige` `#EFE8D8` (hero)
- `brand-beige-light` `#F4F1EA` (seções alternadas)

## Tipografia

- **Sans**: Inter (corpo)
- **Display/Serif**: Cormorant Garamond (títulos)

Carregadas via Google Fonts no `index.html`.

## Blog — estrutura preparada para CMS

Os posts vivem em `src/data/posts.ts` como um array tipado (`Post[]`). Toda a UI consome esse array por funções utilitárias (`getPostBySlug`, `getRecentPosts`). Para ligar um CMS depois, basta substituir essas funções por chamadas HTTP/Supabase/etc., mantendo o mesmo shape do tipo `Post` em `src/types/post.ts`.

Sugestão de próxima etapa:

1. Criar endpoint/CMS (Supabase, Strapi, Sanity, WordPress headless, etc.).
2. Trocar `posts.ts` por um client (`fetchPosts`, `fetchPostBySlug`).
3. Adicionar área `/admin` protegida para o doutor criar/editar posts.

## Substituições recomendadas antes de ir pra produção

- **Fotos**: hoje usam Unsplash como placeholders. Trocar pelas fotos oficiais do Dr. Érico e sala de cirurgia. Buscar `images.unsplash.com` no código pra localizar rápido.
- **WhatsApp**: número `5585981781020` está em `src/data/site.ts` e também no `Navbar`/`FloatingWhatsapp`. Centralizar usando `site.whatsapp` caso queira mudar em um lugar só.
- **Mapa**: o `mapEmbed` em `src/data/site.ts` é genérico, substituir pela URL real do Google Maps do consultório.
- **Formulário de contato**: hoje só simula envio. Conectar a um serviço (Formspree, EmailJS, API própria).
- **SEO**: adicionar `react-helmet-async` para meta tags dinâmicas por página.

## AOS

Inicializado em `App.tsx` com `duration: 700, once: true`. Usar em qualquer elemento via atributos:

```tsx
<div data-aos="fade-up" data-aos-delay="100">...</div>
```

## Licença

Projeto privado. Todos os direitos reservados a Dr. Érico Diógenes.
