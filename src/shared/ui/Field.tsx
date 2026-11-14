import { useId, type ReactNode } from 'react'
import { cn } from '@/lib/cn'

export interface FieldProps {
  label?: string
  hint?: string
  error?: string
  required?: boolean
  className?: string
  children: (props: { id: string; describedBy?: string; invalid: boolean }) => ReactNode
}

/** Envoltura común para inputs: etiqueta, ayuda y error accesibles. */
export function Field({ label, hint, error, required, className, children }: FieldProps) {
  const id = useId()
  const hintId = hint ? `${id}-hint` : undefined
  const errorId = error ? `${id}-error` : undefined
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-ink">
          {label}
          {required && <span className="ml-0.5 text-magenta" aria-hidden>*</span>}
        </label>
      )}
      {children({ id, describedBy, invalid: Boolean(error) })}
      {hint && !error && (
        <p id={hintId} className="text-[13px] text-muted">{hint}</p>
      )}
      {error && (
        <p id={errorId} className="text-[13px] text-danger">{error}</p>
      )}
    </div>
  )
}

export const controlClasses = (invalid?: boolean, className?: string) =>
  cn(
    'w-full rounded-md border bg-surface px-3 text-[15px] text-ink placeholder:text-muted/70 transition-colors',
    'focus:border-ink focus:outline-none focus-visible:outline-2 focus-visible:outline-cyan',
    invalid ? 'border-danger' : 'border-line-strong hover:border-muted',
    className,
  )
