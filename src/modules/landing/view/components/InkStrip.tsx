import { cn } from '@/lib/cn'

/** Tira de tintas de proceso (C, M, Y, K). Recurso gráfico de marca, decorativo. */
export function InkStrip({ className, keyClassName = 'bg-on-surface' }: { className?: string; keyClassName?: string }) {
  return (
    <span aria-hidden="true" className={cn('inline-flex', className)}>
      <span className="bg-cyan h-1.5 w-3" />
      <span className="bg-magenta h-1.5 w-3" />
      <span className="bg-yellow h-1.5 w-3" />
      <span className={cn('h-1.5 w-3', keyClassName)} />
    </span>
  )
}
