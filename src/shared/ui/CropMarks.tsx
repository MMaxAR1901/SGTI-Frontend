import { cn } from '@/lib/cn'

/**
 * Marcas de corte de imprenta en las 4 esquinas del contenedor padre (que debe ser `relative`).
 * Es el recurso gráfico de la marca: úsalo con moderación.
 */
export function CropMarks({ className, inset = -10, size = 14 }: { className?: string; inset?: number; size?: number }) {
  const corners = [
    { top: inset, left: inset, rotate: 0 },
    { top: inset, right: inset, rotate: 90 },
    { bottom: inset, right: inset, rotate: 180 },
    { bottom: inset, left: inset, rotate: 270 },
  ]
  return (
    <span aria-hidden className={cn('pointer-events-none text-ink/40', className)}>
      {corners.map(({ rotate, ...pos }, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 14 14"
          className="absolute"
          style={{ ...pos, transform: `rotate(${rotate}deg)` }}
        >
          <path d="M0 6H5M6 0V5" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      ))}
    </span>
  )
}
