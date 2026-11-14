import { Check } from 'lucide-react'
import { cn } from '@/lib/cn'

/** Indicador de pasos para flujos secuenciales (checkout, cotización). */
export function Stepper({ steps, current, className }: { steps: string[]; current: number; className?: string }) {
  return (
    <ol className={cn('flex items-center gap-2 text-sm', className)}>
      {steps.map((label, i) => {
        const done = i < current
        const active = i === current
        return (
          <li key={label} className="flex flex-1 items-center gap-2 last:flex-none">
            <span
              className={cn(
                'flex size-7 shrink-0 items-center justify-center rounded-full border text-xs font-semibold tabular-nums',
                done && 'border-ink bg-ink text-white',
                active && 'border-ink text-ink',
                !done && !active && 'border-line-strong text-muted',
              )}
              aria-current={active ? 'step' : undefined}
            >
              {done ? <Check className="size-3.5" /> : i + 1}
            </span>
            <span className={cn('hidden sm:inline', active ? 'font-medium text-ink' : 'text-muted')}>{label}</span>
            {i < steps.length - 1 && <span className="h-px flex-1 bg-line-strong" aria-hidden />}
          </li>
        )
      })}
    </ol>
  )
}
