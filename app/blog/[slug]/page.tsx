import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'
import { getPostBySlug, getRecentPosts, posts } from '@/data/posts'
import PostCard from '@/components/ui/PostCard'
import CtaBanner from '@/components/ui/CtaBanner'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: 'Post não encontrado' }
  return {
    title: `${post.title} | Dr. Érico Diógenes`,
    description: post.excerpt,
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

type Block =
  | { type: 'h2'; text: string; id: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }

function parseContent(raw: string): Block[] {
  const lines = raw.split('\n')
  const blocks: Block[] = []
  let listItems: string[] | null = null

  const flushList = () => {
    if (listItems) {
      blocks.push({ type: 'ul', items: listItems })
      listItems = null
    }
  }

  for (const line of lines) {
    const t = line.trim()
    if (!t) { flushList(); continue }

    if (t.startsWith('## ')) {
      flushList()
      const text = t.slice(3)
      const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
      blocks.push({ type: 'h2', text, id })
    } else if (t.startsWith('### ')) {
      flushList()
      blocks.push({ type: 'h3', text: t.slice(4) })
    } else if (t.startsWith('- ')) {
      if (!listItems) listItems = []
      listItems.push(t.slice(2))
    } else {
      flushList()
      blocks.push({ type: 'p', text: t })
    }
  }
  flushList()
  return blocks
}

function renderBlock(block: Block, index: number) {
  switch (block.type) {
    case 'h2':
      return (
        <h2
          key={index}
          id={block.id}
          className="font-display text-2xl md:text-3xl text-brand-navy mt-12 mb-4 scroll-mt-28 pb-3 border-b border-brand-beige"
        >
          {block.text}
        </h2>
      )
    case 'h3':
      return (
        <h3 key={index} className="font-display text-xl text-brand-navy mt-8 mb-3">
          {block.text}
        </h3>
      )
    case 'p':
      return (
        <p key={index} className="text-brand-muted leading-relaxed mt-4 text-[15px]">
          {block.text}
        </p>
      )
    case 'ul':
      return (
        <ul key={index} className="mt-4 space-y-2.5">
          {block.items.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-brand-muted text-[15px]">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-gold shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      )
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const related = getRecentPosts(6).filter((p) => p.slug !== post.slug).slice(0, 3)
  const blocks = parseContent(post.content)
  const headings = blocks.filter((b): b is Extract<Block, { type: 'h2' }> => b.type === 'h2')

  const h2Indices = blocks.reduce<number[]>(
    (acc, b, i) => (b.type === 'h2' ? [...acc, i] : acc),
    [],
  )
  const image2After = h2Indices[1] ?? h2Indices[0] ?? Math.floor(blocks.length / 2)

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-beige pt-12 pb-10">
        <div className="container-site max-w-5xl">
          <nav className="flex items-center gap-2 text-xs text-brand-muted mb-7">
            <Link href="/" className="hover:text-brand-gold transition-colors">Início</Link>
            <span className="opacity-40">/</span>
            <Link href="/blog" className="hover:text-brand-gold transition-colors">Blog</Link>
            <span className="opacity-40">/</span>
            <span className="text-brand-navy font-medium">{post.category}</span>
          </nav>

          <div data-aos="fade-up">
            <span className="inline-block bg-brand-gold/15 text-brand-gold-dark text-xs uppercase tracking-widest px-3 py-1 rounded-full font-semibold mb-5">
              {post.category}
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] text-brand-navy leading-tight max-w-3xl">
              {post.title}
            </h1>
            <p className="mt-4 text-brand-muted text-base max-w-2xl leading-relaxed">{post.excerpt}</p>
            <div className="mt-6 flex flex-wrap gap-5 text-sm text-brand-muted">
              <span className="inline-flex items-center gap-2">
                <User size={14} className="text-brand-gold" /> {post.author}
              </span>
              <span className="inline-flex items-center gap-2">
                <Calendar size={14} className="text-brand-gold" /> {formatDate(post.publishedAt)}
              </span>
              {post.readingTime && (
                <span className="inline-flex items-center gap-2">
                  <Clock size={14} className="text-brand-gold" /> {post.readingTime} min de leitura
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="py-12 bg-white">
        <div className="container-site max-w-5xl">
          <div className="lg:grid lg:grid-cols-[200px_1fr] lg:gap-14">

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-8">
                {headings.length > 0 && (
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-muted mb-3">
                      Neste artigo
                    </p>
                    <nav className="space-y-0.5 border-l-2 border-brand-beige pl-4">
                      {headings.map((h) => (
                        <a
                          key={h.id}
                          href={`#${h.id}`}
                          className="block py-1.5 text-sm text-brand-muted hover:text-brand-navy transition-colors leading-snug"
                        >
                          {h.text}
                        </a>
                      ))}
                    </nav>
                  </div>
                )}

                <div className="bg-brand-beige-light rounded-2xl p-5 text-center">
                  <p className="font-display text-brand-navy text-base leading-snug">
                    Agende sua consulta
                  </p>
                  <p className="text-xs text-brand-muted mt-1.5">com Dr. Érico Diógenes</p>
                  <a
                    href="https://wa.me/5585981781020"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm mt-4 w-full justify-center"
                  >
                    Agendar agora
                  </a>
                </div>
              </div>
            </aside>

            {/* Content */}
            <div data-aos="fade-up">
              {/* Cover image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full aspect-[16/9] object-cover rounded-2xl shadow-card mb-2"
              />
              <p className="text-xs text-brand-muted text-right mb-8">Dr. Érico Diógenes Urologista</p>

              {/* Blocks with image2 injection */}
              {blocks.map((block, i) => (
                <div key={i}>
                  {renderBlock(block, i)}
                  {i === image2After && post.image2 && (
                    <figure className="my-10">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.image2}
                        alt={`${post.title} — imagem complementar`}
                        className="w-full aspect-[16/9] object-cover rounded-2xl shadow-card"
                      />
                    </figure>
                  )}
                </div>
              ))}

              {/* Back link */}
              <div className="mt-14 pt-8 border-t border-brand-beige flex items-center justify-between flex-wrap gap-4">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-gold text-sm transition-colors"
                >
                  <ArrowLeft size={16} /> Voltar para o blog
                </Link>
                <a
                  href="https://wa.me/5585981781020"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                >
                  Agendar consulta
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-16 bg-brand-beige-light">
          <div className="container-site">
            <div className="text-center mb-10" data-aos="fade-up">
              <p className="eyebrow">Continue</p>
              <h2 className="section-title mt-1">
                lendo
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((p, i) => (
                <div key={p.id} data-aos="fade-up" data-aos-delay={i * 80}>
                  <PostCard post={p} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner />
    </>
  )
}