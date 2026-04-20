import { Link } from 'react-router-dom'
import { Instagram, Youtube } from 'lucide-react'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-6 mt-16">
      <div className="container-site grid md:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-1">
          <Logo variant="light" />
        </div>

        <div>
          <h4 className="font-display text-brand-gold text-lg mb-4">Quem Somos</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <Link to="/dr-erico-diogenes" className="hover:text-brand-gold">
                Dr. Érico Diógenes
              </Link>
            </li>
            <li>
              <Link to="/dr-erico-diogenes" className="hover:text-brand-gold">
                Certificações
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-brand-gold">
                Notícias do Blog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-brand-gold text-lg mb-4">Especialidades</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>Acompanhamento Clínico em Urologia</li>
            <li>
              <Link to="/cirurgia-robotica" className="hover:text-brand-gold">
                Cirurgia Robótica
              </Link>
            </li>
            <li>
              <Link to="/holep" className="hover:text-brand-gold">
                Tratamento a Laser para Próstata
              </Link>
            </li>
            <li>Uro-oncologia</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-brand-gold text-lg mb-4">Agendamentos</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <a
                href="https://wa.me/5585981781020"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-gold"
              >
                Agendar Consulta
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/5585981781020"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-gold"
              >
                Agendar Cirurgia
              </a>
            </li>
            <li>
              <Link to="/contato" className="hover:text-brand-gold">
                Onde estamos
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-brand-gold text-lg mb-4">
            Inscreva-se na nossa newsletter
          </h4>
          <div className="flex gap-3 mt-2">
            <a
              href="https://instagram.com/drericodiogenes"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full border border-white/30 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full border border-white/30 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition"
              aria-label="YouTube"
            >
              <Youtube size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="container-site mt-12 pt-6 border-t border-white/10 text-center text-xs text-white/60">
        Dr. Érico Diógenes © {new Date().getFullYear()} · Todos os Direitos Reservados
      </div>
    </footer>
  )
}
