import { Link } from 'react-router-dom'
import { FileText, Trash2 } from 'lucide-react'
import { PATHS } from '@/app/router/route-types'
import { getCategory, ProductArt } from '@/modules/catalog'
import { formatCurrency } from '@/lib/format'
import { IconButton, QuantityStepper } from '@/shared/ui'
import type { CartItem } from '../../model/cart.types'

interface CartLineProps {
  item: CartItem
  onQuantity?: (q: number) => void
  onRemove?: () => void
  onNavigate?: () => void
  compact?: boolean
}

export function CartLine({ item, onQuantity, onRemove, onNavigate, compact }: CartLineProps) {
  const art = getCategory(item.category)?.art ?? 'cards'
  return (
    <div className="flex gap-4 py-4">
      <Link to={PATHS.product(item.slug)} onClick={onNavigate} className="size-20 shrink-0 overflow-hidden rounded-md bg-paper sm:size-24">
        <ProductArt variant={art} tint={item.tint} />
      </Link>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <Link to={PATHS.product(item.slug)} onClick={onNavigate} className="text-[15px] leading-snug font-medium hover:underline">
            {item.name}
          </Link>
          <span className="font-display font-semibold tabular-nums">{formatCurrency(item.total)}</span>
        </div>
        <ul className="mt-1 text-[13px] text-muted">
          {item.selectionLabels.map((l) => <li key={l}>{l}</li>)}
          {!compact && item.artworkNames.length > 0 && (
            <li className="mt-1 flex items-center gap-1 text-ink-soft"><FileText className="size-3.5" aria-hidden />{item.artworkNames.join(', ')}</li>
          )}
        </ul>
        <div className="mt-auto flex items-center justify-between gap-3 pt-3">
          {onQuantity ? (
            <QuantityStepper size="sm" value={item.quantity} onChange={onQuantity} label={`Cantidad de ${item.name}`} />
          ) : (
            <span className="text-sm text-muted">{item.quantity.toLocaleString('es-MX')} {item.unitLabel}</span>
          )}
          {onRemove && <IconButton label={`Quitar ${item.name}`} icon={<Trash2 className="size-4" />} onClick={onRemove} className="size-8 text-muted hover:text-danger" />}
        </div>
      </div>
    </div>
  )
}
