import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Calendar, User } from 'lucide-react'
import { getPostBySlug, getRecentPosts } from '../data/posts'
import PostCard from '../components/ui/PostCard'
import CtaBanner from '../components/ui/CtaBanner'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPostBySlug(slug) : undefined

  if (!post) {
    return (
      <section className="py-24 bg-white">
        <div className="container-site text-center">
          <h1 className="section-title">Post não encontrado</h1>
          <Link to="/blog" className="btn-primary mt-6">
            Voltar para o blog
          </Link>
        </div>
      </section>
    )
  }

  const related = getRecentPosts(6)
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3)

  return (
    <>
      <section className="bg-brand-beige py-14">
        <div className="container-site max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-gold text-sm">
            <ArrowLeft size={16} /> Voltar para o blog
          </Link>
          <div className="mt-5" data-aos="fade-up">
            <span className="bg-brand-green/20 text-brand-green-dark text-xs uppercase tracking-wide px-3 py-1 rounded-md font-semibold">
              {post.category}
            </span>
            <h1 className="font-display text-3xl md:text-5xl text-brand-navy mt-4 leading-tight">
              {post.title}
            </h1>
            <div className="mt-5 flex flex-wrap gap-5 text-sm text-brand-muted">
              <span className="inline-flex items-center gap-2">
                <User size={14} /> {post.author}
              </span>
              <span className="inline-flex items-center gap-2">
                <Calendar size={14} /> {formatDate(post.publishedAt)}
              </span>
              {post.readingTime && <span>{post.readingTime} min de leitura</span>}
            </div>
          </div>
        </div>
      </section>

      <article className="py-14 bg-white">
        <div className="container-site max-w-3xl">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full aspect-[16/9] object-cover rounded-3xl shadow-card mb-10"
            data-aos="fade-up"
          />

          <div
            className="prose prose-lg max-w-none text-brand-text leading-relaxed [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-brand-navy [&_h2]:mt-8 [&_h2]:mb-3 [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mt-1"
            data-aos="fade-up"
          >
            {post.content.split('\n').map((line, i) => {
              const trimmed = line.trim()
              if (!trimmed) return null
              if (trimmed.startsWith('## ')) {
                return <h2 key={i}>{trimmed.replace('## ', '')}</h2>
              }
              if (trimmed.startsWith('- ')) {
                return (
                  <p key={i} className="ml-4">
                    • {trimmed.replace('- ', '')}
                  </p>
                )
              }
              return <p key={i}>{trimmed}</p>
            })}
          </div>
        </div>
      </article>

      <section className="py-16 bg-brand-beige-light">
        <div className="container-site">
          <h2 className="section-title text-center mb-10" data-aos="fade-up">
            Continue <span className="text-brand-gold">lendo</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((p, i) => (
              <div key={p.id} data-aos="fade-up" data-aos-delay={i * 80}>
                <PostCard post={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
