import { cn } from '@/lib/cn'
import type { ArtVariant } from '../../model/catalog.types'

interface ProductArtProps {
  variant: ArtVariant
  tint: string
  className?: string
  /** Texto corto que se "imprime" en la pieza. */
  label?: string
}

const INK = '#15181f'
const PAPER = '#ffffff'
const LINE = '#dde1e7'

/**
 * Ilustraciones vectoriales de cada tipo de producto.
 * Sustituyen fotos mientras no haya imágenes reales; reciben el color del producto.
 */
export function ProductArt({ variant, tint, className, label = 'SGTI' }: ProductArtProps) {
  return (
    <svg viewBox="0 0 400 300" className={cn('h-full w-full', className)} role="img" aria-label={`Ilustración: ${variant}`}>
      <defs>
        <filter id="sheet-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor={INK} floodOpacity="0.16" />
        </filter>
      </defs>
      {ART[variant]({ tint, label })}
    </svg>
  )
}

type ArtFn = (p: { tint: string; label: string }) => React.ReactNode

const ART: Record<ArtVariant, ArtFn> = {
  cards: ({ tint, label }) => (
    <g filter="url(#sheet-shadow)">
      <g transform="rotate(-9 200 150)">
        <rect x="96" y="88" width="216" height="120" rx="4" fill={tint} />
        <circle cx="132" cy="124" r="14" fill={PAPER} opacity=".9" />
      </g>
      <g transform="rotate(4 200 150)">
        <rect x="104" y="96" width="216" height="120" rx="4" fill={PAPER} />
        <rect x="104" y="96" width="10" height="120" fill={tint} />
        <text x="132" y="140" fontFamily="Familjen Grotesk, sans-serif" fontWeight="700" fontSize="22" fill={INK}>{label}</text>
        <rect x="132" y="160" width="96" height="6" rx="3" fill={LINE} />
        <rect x="132" y="174" width="70" height="6" rx="3" fill={LINE} />
        <rect x="132" y="188" width="84" height="6" rx="3" fill={LINE} />
      </g>
    </g>
  ),

  banner: ({ tint, label }) => (
    <g>
      <line x1="60" y1="40" x2="80" y2="78" stroke={INK} strokeWidth="1.5" />
      <line x1="340" y1="40" x2="320" y2="78" stroke={INK} strokeWidth="1.5" />
      <g filter="url(#sheet-shadow)">
        <rect x="70" y="74" width="260" height="150" fill={tint} />
        <rect x="70" y="74" width="260" height="150" fill="none" stroke={PAPER} strokeOpacity=".25" strokeWidth="10" />
      </g>
      <text x="200" y="146" textAnchor="middle" fontFamily="Familjen Grotesk, sans-serif" fontWeight="700" fontSize="44" fill={PAPER}>{label}</text>
      <rect x="140" y="166" width="120" height="8" rx="4" fill={PAPER} opacity=".7" />
      {[80, 145, 200, 255, 320].map((x) => (
        <g key={x}>
          <circle cx={x} cy="84" r="5" fill={PAPER} stroke={INK} strokeOpacity=".4" />
          <circle cx={x} cy="214" r="5" fill={PAPER} stroke={INK} strokeOpacity=".4" />
        </g>
      ))}
    </g>
  ),

  vinyl: ({ tint }) => (
    <g filter="url(#sheet-shadow)">
      <path d="M150 90 H320 V230 H150 Z" fill={PAPER} />
      <g>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect key={i} x={170 + i * 24} y="110" width="12" height="100" fill={tint} opacity={0.35 + i * 0.1} />
        ))}
      </g>
      <ellipse cx="150" cy="160" rx="34" ry="72" fill={tint} />
      <ellipse cx="150" cy="160" rx="22" ry="54" fill={PAPER} opacity=".25" />
      <ellipse cx="150" cy="160" rx="10" ry="24" fill={INK} opacity=".8" />
    </g>
  ),

  stickers: ({ tint, label }) => (
    <g>
      <g filter="url(#sheet-shadow)">
        <rect x="90" y="60" width="220" height="180" rx="6" fill={PAPER} />
      </g>
      <circle cx="150" cy="118" r="34" fill={tint} />
      <text x="150" y="124" textAnchor="middle" fontFamily="Familjen Grotesk, sans-serif" fontWeight="700" fontSize="15" fill={PAPER}>{label}</text>
      <path d="M232 86 l10 22 24 3 -18 16 5 24 -21-12 -21 12 5-24 -18-16 24-3z" fill="#ffd100" />
      <rect x="120" y="170" width="70" height="44" rx="22" fill={INK} />
      <g transform="rotate(14 250 190)">
        <circle cx="250" cy="190" r="30" fill={PAPER} stroke={LINE} strokeDasharray="4 4" />
        <path d="M250 160 a30 30 0 0 1 30 30 h-30z" fill={tint} opacity=".55" />
      </g>
    </g>
  ),

  flyers: ({ tint, label }) => (
    <g filter="url(#sheet-shadow)">
      <rect x="120" y="70" width="120" height="170" fill={PAPER} transform="rotate(-14 180 155)" />
      <rect x="140" y="64" width="120" height="170" fill={PAPER} transform="rotate(-4 200 150)" />
      <g transform="rotate(8 220 150)">
        <rect x="160" y="62" width="120" height="170" fill={PAPER} />
        <rect x="160" y="62" width="120" height="84" fill={tint} />
        <text x="174" y="128" fontFamily="Familjen Grotesk, sans-serif" fontWeight="700" fontSize="24" fill={PAPER}>{label}</text>
        <rect x="174" y="162" width="90" height="6" rx="3" fill={LINE} />
        <rect x="174" y="176" width="70" height="6" rx="3" fill={LINE} />
        <rect x="174" y="200" width="44" height="14" rx="2" fill={INK} />
      </g>
    </g>
  ),

  sign: ({ tint, label }) => (
    <g>
      <rect x="150" y="248" width="100" height="10" rx="3" fill={INK} />
      <g filter="url(#sheet-shadow)">
        <rect x="160" y="40" width="80" height="210" fill={PAPER} />
      </g>
      <rect x="160" y="40" width="80" height="120" fill={tint} />
      <text x="200" y="110" textAnchor="middle" fontFamily="Familjen Grotesk, sans-serif" fontWeight="700" fontSize="20" fill={PAPER}>{label}</text>
      <rect x="172" y="178" width="56" height="6" rx="3" fill={LINE} />
      <rect x="172" y="192" width="40" height="6" rx="3" fill={LINE} />
      <rect x="172" y="218" width="56" height="16" rx="2" fill={INK} />
      <rect x="156" y="36" width="88" height="6" rx="2" fill={INK} opacity=".7" />
    </g>
  ),

  box: ({ tint, label }) => (
    <g filter="url(#sheet-shadow)">
      <path d="M200 70 L290 112 L200 154 L110 112 Z" fill={PAPER} />
      <path d="M110 112 L200 154 V250 L110 208 Z" fill={tint} />
      <path d="M290 112 L200 154 V250 L290 208 Z" fill={tint} opacity=".72" />
      <text x="128" y="190" fontFamily="Familjen Grotesk, sans-serif" fontWeight="700" fontSize="16" fill={PAPER} transform="skewY(25) translate(0 -58)">{label}</text>
    </g>
  ),

  design: ({ tint }) => (
    <g>
      <g filter="url(#sheet-shadow)">
        <rect x="80" y="50" width="240" height="200" rx="6" fill={PAPER} />
      </g>
      <path d="M120 210 C140 90, 260 90, 280 210" fill="none" stroke={tint} strokeWidth="10" strokeLinecap="round" />
      <line x1="120" y1="210" x2="140" y2="90" stroke={INK} strokeWidth="1" />
      <line x1="280" y1="210" x2="260" y2="90" stroke={INK} strokeWidth="1" />
      {[
        [120, 210],
        [280, 210],
      ].map(([x, y]) => (
        <rect key={x} x={x - 6} y={y - 6} width="12" height="12" fill={PAPER} stroke={INK} strokeWidth="1.5" />
      ))}
      {[
        [140, 90],
        [260, 90],
      ].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="5" fill={INK} />
      ))}
    </g>
  ),
}
