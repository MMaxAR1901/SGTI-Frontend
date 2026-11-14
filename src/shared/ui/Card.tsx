import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padded?: boolean
  as?: 'div' | 'section' | 'article' | 'aside'
}

export function Card({ padded = true, as: Tag = 'div', className, ...rest }: CardProps) {
  return <Tag className={cn('rounded-lg border border-line bg-surface', padded && 'p-5 sm:p-6', className)} {...rest} />
}

export function CardHeader({ title, description, action }: { title: ReactNode; description?: ReactNode; action?: ReactNode }) {
  return (
    <div className="mb-4 flex items-start justify-between gap-4">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        {description && <p className="mt-0.5 text-sm text-muted">{description}</p>}
      </div>
      {action}
    </div>
  )
}
