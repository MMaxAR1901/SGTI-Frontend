import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

const widths = { md: 'max-w-3xl', lg: 'max-w-5xl', xl: 'max-w-7xl' }

export function Container({ size = 'xl', className, ...rest }: HTMLAttributes<HTMLDivElement> & { size?: keyof typeof widths }) {
  return <div className={cn('mx-auto w-full px-4 sm:px-6 lg:px-8', widths[size], className)} {...rest} />
}
