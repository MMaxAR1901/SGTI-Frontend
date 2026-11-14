import { cn } from '@/lib/cn'

/** Tira de control de color CMYK, como la de los pliegos impresos. */
export function InkStrip({ className, vertical = false }: { className?: string; vertical?: boolean }) {
  const inks = ['bg-cyan', 'bg-magenta', 'bg-yellow', 'bg-ink']
  return (
    <span aria-hidden className={cn('inline-flex', vertical ? 'flex-col' : 'flex-row', className)}>
      {inks.map((c) => (
        <span key={c} className={cn(c, vertical ? 'h-3 w-1.5' : 'h-1.5 w-3')} />
      ))}
    </span>
  )
}
