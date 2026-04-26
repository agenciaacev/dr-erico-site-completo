import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Post } from '@/types/post'

type Props = {
  post: Post
  compact?: boolean
}

function formatDate(iso: string) {
  const d = new Date(iso)
  return d.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function PostCard({ post, compact = false }: Props) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden border border-black/5 shadow-card flex flex-col h-full">
      <Link href={`/blog/${post.slug}`} className="block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.coverImage}
          alt={post.title}
          className={`w-full object-cover ${compact ? 'h-40' : 'h-52'}`}
          loading="lazy"
        />
      </Link>

      <div className="p-5 flex-1 flex flex-col">
        <div className="flex flex-wrap gap-2 items-center text-xs">
          <span className="bg-brand-green/20 text-brand-green-dark uppercase tracking-wide px-2 py-1 rounded-md font-semibold">
            {post.category}
          </span>
          <span className="text-brand-muted">{formatDate(post.publishedAt)}</span>
        </div>

        <h3 className="mt-3 font-display text-lg md:text-xl text-brand-navy leading-snug line-clamp-2">
          <Link href={`/blog/${post.slug}`} className="hover:text-brand-gold">
            {post.title}
          </Link>
        </h3>

        <p className="mt-2 text-sm text-brand-muted line-clamp-3 flex-1">{post.excerpt}</p>

        <Link
          href={`/blog/${post.slug}`}
          className="mt-4 inline-flex items-center gap-2 text-brand-gold font-medium text-sm hover:gap-3 transition-all"
        >
          Read More <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  )
}
