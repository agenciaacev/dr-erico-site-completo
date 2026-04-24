import logoImg from '../../assets/img/logo_1.webp'

type Props = {
  variant?: 'light' | 'dark'
  className?: string
}

export default function Logo({ className = '' }: Props) {
  return (
    <img
      src={logoImg}
      alt="Dr. Érico Diógenes"
      className={`h-12 w-auto object-contain ${className}`}
    />
  )
}
