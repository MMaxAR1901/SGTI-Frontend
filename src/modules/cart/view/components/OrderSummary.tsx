import type { ReactNode } from 'react'
import { formatCurrency } from '@/lib/format'
import { Card } from '@/shared/ui'
import type { CartTotals } from '../../model/cart.types'

interface OrderSummaryProps {
  totals: CartTotals
  shippingLabel?: string
  children?: ReactNode
  title?: string
}

/** Resumen de montos reutilizado en carrito, checkout y confirmación. */
export function OrderSummary({ totals, shippingLabel = 'Envío estimado', children, title = 'Resumen' }: OrderSummaryProps) {
  const row = 'flex justify-between text-sm'
  return (
    <Card>
      <h2 className="mb-4 text-lg font-semibold">{title}</h2>
      <dl className="flex flex-col gap-2.5">
        <div className={row}><dt className="text-muted">Subtotal</dt><dd className="tabular-nums">{formatCurrency(totals.subtotal)}</dd></div>
        <div className={row}>
          <dt className="text-muted">{shippingLabel}</dt>
          <dd className="tabular-nums">{totals.shipping === 0 ? 'Gratis' : formatCurrency(totals.shipping)}</dd>
        </div>
        <div className="mt-2 flex items-baseline justify-between border-t border-line pt-3">
          <dt className="font-medium">Total</dt>
          <dd className="font-display text-2xl font-semibold tabular-nums">{formatCurrency(totals.total)}</dd>
        </div>
        <p className="text-right text-xs text-muted">Incluye {formatCurrency(totals.taxIncluded)} de IVA</p>
      </dl>
      {totals.missingForFreeShipping > 0 && totals.itemCount > 0 && (
        <p className="mt-4 rounded-md bg-yellow/25 px-3 py-2 text-[13px]">
          Agrega {formatCurrency(totals.missingForFreeShipping)} más y tu envío es gratis.
        </p>
      )}
      {children && <div className="mt-5">{children}</div>}
    </Card>
  )
}
