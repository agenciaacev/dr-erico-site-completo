type Props = {
  variant?: 'light' | 'dark'
  className?: string
}

export default function Logo({ variant = 'light', className = '' }: Props) {
  const color = variant === 'light' ? '#ffffff' : '#0B2239'

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 6 L8 42 M8 6 L24 6 C34 6 40 14 40 24 C40 34 34 42 24 42 L8 42"
          stroke={color}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M16 18 L28 18" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      <div className="leading-tight">
        <div className="font-display tracking-wide text-xl md:text-2xl" style={{ color }}>
          ÉRICO
        </div>
        <div className="font-display tracking-wide text-xl md:text-2xl -mt-1" style={{ color }}>
          DIOGENES
        </div>
        <div
          className="text-[9px] md:text-[10px] tracking-[0.2em] mt-0.5"
          style={{ color }}
        >
          URO · LASER · ROBÓTICA
        </div>
      </div>
    </div>
  )
}
