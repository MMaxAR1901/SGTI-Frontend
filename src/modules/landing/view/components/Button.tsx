import type { MouseEventHandler, ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { Icon } from './Icon'

export type ButtonVariant = 'accent' | 'primary' | 'surface' | 'soft' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

const variants: Record<ButtonVariant, string> = {
  /** Menta: solo el CTA de cotizar/contactar (uno por vista). */
  accent: 'bg-primary-container text-on-surface hover:bg-inverse-primary',
  /** Verde SGTI: acción principal de cada bloque. */
  primary: 'bg-primary text-on-primary hover:bg-primary-hover',
  /** Blanco con borde de control: alternativa junto al primario. */
  surface: 'border border-control bg-white text-on-surface hover:border-on-surface',
  /** Papel con borde hairline. */
  soft: 'border border-line bg-surface-container-low text-on-surface hover:bg-surface-container',
  /** Secundario neutro (p. ej. "Cerrar"). */
  ghost: 'border border-line text-secondary hover:bg-surface-container hover:text-on-surface',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'min-h-9 gap-2 rounded-lg px-4 py-1.5',
  md: 'min-h-11 gap-2 rounded-lg px-6 py-2',
  lg: 'min-h-12 gap-2 rounded-lg px-6 py-2.5 text-base',
}

interface ButtonProps {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  /** Si existe, se renderiza como enlace. */
  href?: string
  /** Abre en otra pestaña con rel seguro. */
  external?: boolean
  leadingIcon?: string
  trailingIcon?: string
  /** Rellena el ícono inicial (p. ej. chat de WhatsApp). */
  leadingIconFilled?: boolean
  leadingIconClassName?: string
  trailingIconClassName?: string
  onClick?: MouseEventHandler<HTMLElement>
  className?: string
  title?: string
}

/** Botón / CTA del sistema SGTI. */
export function Button({
  children,
  variant = 'accent',
  size = 'sm',
  href,
  external,
  leadingIcon,
  trailingIcon,
  leadingIconFilled,
  leadingIconClassName,
  trailingIconClassName,
  onClick,
  className,
  title,
}: ButtonProps) {
  const classes = cn(
    'inline-flex cursor-pointer items-center justify-center text-center text-sm font-semibold transition-colors duration-150',
    variants[variant],
    sizes[size],
    className,
  )

  const content = (
    <>
      {leadingIcon && (
        <Icon
          name={leadingIcon}
          filled={leadingIconFilled}
          className={cn('text-base', leadingIconClassName)}
        />
      )}
      <span>{children}</span>
      {trailingIcon && (
        <Icon name={trailingIcon} className={cn('text-base', trailingIconClassName)} />
      )}
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        title={title}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={classes} onClick={onClick} title={title}>
      {content}
    </button>
  )
}
