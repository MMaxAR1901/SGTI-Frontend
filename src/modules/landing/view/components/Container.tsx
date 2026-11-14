import type { ElementType, ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface ContainerProps {
  as?: ElementType
  id?: string
  className?: string
  children: ReactNode
}

/** Ancho máximo y márgenes laterales estándar del sistema (max-w-7xl, 24px / 48px). */
export function Container({ as: Tag = 'div', id, className, children }: ContainerProps) {
  return (
    <Tag id={id} className={cn('mx-auto max-w-7xl px-6 lg:px-12', className)}>
      {children}
    </Tag>
  )
}
