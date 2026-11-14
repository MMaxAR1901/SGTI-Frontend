import type { MouseEventHandler, ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { Icon } from './Icon'

export type ButtonVariant = 'accent' | 'primary' | 'surface' | 'soft' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

const variants: Record<ButtonVariant, string> = {
  /** CTA industrial: menta → verde profundo al hover. */
  accent:
    'border border-primary-container bg-primary-container font-bold text-on-surface hover:bg-primary hover:text-on-primary active:scale-95',
  /** Verde profundo → menta al hover. */
  primary:
    'bg-primary font-semibold text-on-primary shadow-sm hover:bg-primary-container hover:text-on-surface',
  /** Blanco con borde fino. */
  surface:
    'border border-outline-variant/40 bg-surface-container-lowest font-semibold text-on-surface hover:bg-surface-container',
  /** Azul muy claro con borde fino. */
  soft: 'border border-outline-variant/40 bg-surface-container-low font-semibold text-on-surface hover:bg-surface-container',
  /** Secundario neutro (p. ej. "Cerrar"). */
  ghost:
    'border border-outline-variant/60 font-semibold text-secondary hover:bg-surface-container hover:text-on-surface',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'gap-2 rounded-lg px-5 py-2.5',
  md: 'gap-2 rounded-lg px-8 py-3.5',
  lg: 'gap-3 rounded-xl px-8 py-4',
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
    'inline-flex cursor-pointer items-center justify-center font-label-lg text-label-lg transition-all duration-150',
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
