import { Minus, Plus } from 'lucide-react'
import { cn } from '@/lib/cn'

interface QuantityStepperProps {
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
  step?: number
  size?: 'sm' | 'md'
  label?: string
  className?: string
}

export function QuantityStepper({ value, onChange, min = 1, max = 100000, step = 1, size = 'md', label = 'Cantidad', className }: QuantityStepperProps) {
  const clamp = (n: number) => Math.min(max, Math.max(min, n))
  const h = size === 'sm' ? 'h-8' : 'h-10'
  return (
    <div className={cn('inline-flex items-stretch rounded-md border border-line-strong bg-surface', h, className)}>
      <button type="button" aria-label={`Restar ${label.toLowerCase()}`} onClick={() => onChange(clamp(value - step))} disabled={value <= min} className="px-2.5 text-muted hover:text-ink disabled:opacity-40">
        <Minus className="size-4" />
      </button>
      <input
        aria-label={label}
        inputMode="numeric"
        value={value}
        onChange={(e) => {
          const n = Number(e.target.value.replace(/\D/g, ''))
          if (!Number.isNaN(n)) onChange(clamp(n))
        }}
        className="w-14 border-x border-line bg-transparent text-center text-sm tabular-nums focus:outline-none"
      />
      <button type="button" aria-label={`Sumar ${label.toLowerCase()}`} onClick={() => onChange(clamp(value + step))} disabled={value >= max} className="px-2.5 text-muted hover:text-ink disabled:opacity-40">
        <Plus className="size-4" />
      </button>
    </div>
  )
}
