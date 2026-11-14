import { cn } from '@/lib/cn'
import { formatCurrency } from '@/lib/format'

interface PriceTagProps {
  amount: number
  compareAt?: number
  suffix?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizes = { sm: 'text-sm', md: 'text-lg', lg: 'text-3xl' }

export function PriceTag({ amount, compareAt, suffix, size = 'md', className }: PriceTagProps) {
  return (
    <span className={cn('inline-flex items-baseline gap-2', className)}>
      <span className={cn('font-display font-semibold tabular-nums', sizes[size])}>{formatCurrency(amount)}</span>
      {compareAt && compareAt > amount && (
        <s className="text-sm text-muted tabular-nums">{formatCurrency(compareAt)}</s>
      )}
      {suffix && <span className="text-sm text-muted">{suffix}</span>}
    </span>
  )
}
