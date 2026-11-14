import { cn } from '@/lib/cn'

export interface OptionItem {
  value: string
  label: string
  description?: string
  /** Texto auxiliar a la derecha (p. ej. "+$120"). */
  aside?: string
  disabled?: boolean
}

interface OptionGroupProps {
  legend: string
  name: string
  value: string
  options: OptionItem[]
  onChange: (value: string) => void
  columns?: 1 | 2 | 3 | 4
  className?: string
}

const cols = { 1: 'grid-cols-1', 2: 'grid-cols-2', 3: 'grid-cols-2 sm:grid-cols-3', 4: 'grid-cols-2 sm:grid-cols-4' }

/** Grupo de opciones tipo "tarjeta" (radio accesible). Útil para materiales, tamaños, envíos… */
export function OptionGroup({ legend, name, value, options, onChange, columns = 2, className }: OptionGroupProps) {
  return (
    <fieldset className={className}>
      <legend className="mb-2 text-sm font-medium text-ink">{legend}</legend>
      <div className={cn('grid gap-2', cols[columns])}>
        {options.map((opt) => {
          const checked = opt.value === value
          return (
            <label
              key={opt.value}
              className={cn(
                'relative flex cursor-pointer flex-col rounded-md border bg-surface px-3 py-2.5 transition-colors',
                checked ? 'border-ink ring-1 ring-ink' : 'border-line-strong hover:border-muted',
                opt.disabled && 'cursor-not-allowed opacity-50',
              )}
            >
              <input
                type="radio"
                name={name}
                value={opt.value}
                checked={checked}
                disabled={opt.disabled}
                onChange={() => onChange(opt.value)}
                className="sr-only"
              />
              <span className="flex items-baseline justify-between gap-2">
                <span className="text-sm font-medium">{opt.label}</span>
                {opt.aside && <span className="text-xs text-muted tabular-nums">{opt.aside}</span>}
              </span>
              {opt.description && <span className="mt-0.5 text-[13px] text-muted">{opt.description}</span>}
            </label>
          )
        })}
      </div>
    </fieldset>
  )
}
