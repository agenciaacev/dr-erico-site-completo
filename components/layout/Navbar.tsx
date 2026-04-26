'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, MessageCircle } from 'lucide-react'
import Logo from './Logo'

const navItems = [
  { to: '/', label: 'Início' },
  { to: '/dr-erico-diogenes', label: 'Dr. Érico Diógenes' },
  { to: '/holep', label: 'HoLEP' },
  { to: '/cirurgia-robotica', label: 'Cirurgia Robótica' },
  { to: '/blog', label: 'Blog' },
  { to: '/contato', label: 'Contato' },
]

/**
 * Substitui o NavLink do react-router-dom por Link do Next + usePathname para
 * detectar rota ativa. A regra "end" do react-router (match exato) é
 * reproduzida para o item raiz.
 */
function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(href + '/')
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="bg-brand-navy text-white sticky top-0 z-40">
      <div className="container-site flex items-center justify-between py-4">
        <Link href="/" onClick={() => setOpen(false)}>
          <Logo variant="light" />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => {
            const active = isActive(pathname, item.to)
            return (
              <li key={item.to}>
                <Link
                  href={item.to}
                  className={`text-sm font-medium transition-colors hover:text-brand-gold ${
                    active ? 'text-brand-gold' : 'text-white'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <a
          href="https://wa.me/5585981781020"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex btn-whatsapp !py-2.5 !px-5 text-sm"
        >
          <MessageCircle size={18} />
          Agendar Consulta
        </a>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-brand-navy">
          <ul className="container-site py-4 flex flex-col gap-3">
            {navItems.map((item) => {
              const active = isActive(pathname, item.to)
              return (
                <li key={item.to}>
                  <Link
                    href={item.to}
                    onClick={() => setOpen(false)}
                    className={`block py-2 text-base font-medium ${
                      active ? 'text-brand-gold' : 'text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
            <li>
              <a
                href="https://wa.me/5585981781020"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center mt-2"
              >
                <MessageCircle size={18} />
                Agendar Consulta
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
