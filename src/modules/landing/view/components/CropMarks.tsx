import { cn } from '@/lib/cn'

const CORNERS = [
  'top-[-10px] left-[-10px]',
  'top-[-10px] right-[-10px] rotate-90',
  'right-[-10px] bottom-[-10px] rotate-180',
  'bottom-[-10px] left-[-10px] -rotate-90',
]

/**
 * Marcas de corte de imprenta en las cuatro esquinas del contenedor (que debe ser `relative`).
 * Recurso gráfico de marca: úsalo como máximo una vez por pantalla.
 */
export function CropMarks({ className }: { className?: string }) {
  return (
    <>
      {CORNERS.map((pos) => (
        <svg
          key={pos}
          viewBox="0 0 14 14"
          aria-hidden="true"
          className={cn('text-secondary pointer-events-none absolute h-3.5 w-3.5 opacity-60', pos, className)}
        >
          <path d="M0 10.5H7.5M10.5 0V7.5" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      ))}
    </>
  )
}
