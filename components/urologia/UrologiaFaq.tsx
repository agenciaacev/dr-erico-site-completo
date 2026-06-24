'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

type FaqItem = { q: string; a: string }

export default function UrologiaFaq({ faq }: { faq: FaqItem[] }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
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
            aria-expanded={openFaq === i}
          >
            <span className="font-medium text-brand-navy">{item.q}</span>
            {openFaq === i ? <Minus size={18} aria-hidden /> : <Plus size={18} aria-hidden />}
          </button>
          {openFaq === i && (
            <div className="px-5 pb-5 text-sm text-brand-muted">{item.a}</div>
          )}
        </div>
      ))}
    </div>
  )
}
