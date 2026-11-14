import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { Icon } from './Icon'

interface EyebrowProps {
  children: ReactNode
  icon?: string
  tone?: 'primary' | 'muted'
  className?: string
}

/** Sub-etiqueta técnica sobre los títulos (label-tech en mayúsculas). */
export function Eyebrow({ children, icon, tone = 'primary', className }: EyebrowProps) {
  return (
    <div
      className={cn(
        'mb-2 inline-flex items-center gap-2 font-label-tech text-label-tech font-bold uppercase tracking-widest',
        tone === 'primary' ? 'text-primary' : 'text-secondary',
        className,
      )}
    >
      {icon && <Icon name={icon} className="text-base" />}
      {children}
    </div>
  )
}

interface SectionHeaderProps {
  title: ReactNode
  eyebrow?: ReactNode
  description?: ReactNode
  /** Contenido a la derecha en el modo `split` (sustituye a la descripción). */
  aside?: ReactNode
  /** `split`: título a la izquierda y texto a la derecha; `center`: todo centrado. */
  align?: 'split' | 'center'
  as?: 'h2' | 'h3'
  className?: string
  titleClassName?: string
  descriptionClassName?: string
}

/** Encabezado de sección: eyebrow + título + descripción. */
export function SectionHeader({
  title,
  eyebrow,
  description,
  aside,
  align = 'split',
  as: Heading = 'h2',
  className,
  titleClassName,
  descriptionClassName,
}: SectionHeaderProps) {
  const heading = (
    <Heading
      className={cn(
        'font-headline-xl text-headline-xl-mobile font-bold text-on-surface lg:text-headline-xl',
        titleClassName,
      )}
    >
      {title}
    </Heading>
  )

  if (align === 'center') {
    return (
      <div className={cn('text-center', className)}>
        {eyebrow}
        {heading}
        {description && (
          <p className={cn('mt-3 text-body-md text-secondary', descriptionClassName)}>{description}</p>
        )}
      </div>
    )
  }

  return (
    <div className={cn('flex flex-col justify-between gap-6 md:flex-row md:items-end', className)}>
      <div>
        {eyebrow}
        {heading}
      </div>
      {description ? (
        <p className={cn('max-w-md font-body-md text-body-md text-secondary', descriptionClassName)}>
          {description}
        </p>
      ) : (
        aside
      )}
    </div>
  )
}
