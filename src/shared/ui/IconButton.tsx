import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Texto accesible obligatorio: el botón sólo muestra un icono. */
  label: string
  icon: ReactNode
  badge?: number
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { label, icon, badge, className, type = 'button', ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      aria-label={label}
      title={label}
      className={cn(
        'relative inline-flex size-10 items-center justify-center rounded-md text-ink transition-colors hover:bg-ink/5 disabled:opacity-50',
        className,
      )}
      {...rest}
    >
      {icon}
      {badge ? (
        <span className="absolute -top-0.5 -right-0.5 flex min-w-5 items-center justify-center rounded-full bg-magenta px-1 text-[11px] font-semibold leading-5 text-white">
          {badge > 99 ? '99+' : badge}
        </span>
      ) : null}
    </button>
  )
})
