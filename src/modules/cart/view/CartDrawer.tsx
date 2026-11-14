import { ShoppingBag } from 'lucide-react'
import { PATHS } from '@/app/router/route-types'
import { formatCurrency } from '@/lib/format'
import { ButtonLink, Drawer, EmptyState } from '@/shared/ui'
import { useCart, useCartDrawer, useCartTotals } from '../vm/useCart'
import { CartLine } from './components/CartLine'

export function CartDrawer() {
  const drawer = useCartDrawer()
  const { items, updateQuantity, removeItem } = useCart()
  const totals = useCartTotals()

  return (
    <Drawer
      open={drawer.isOpen}
      onClose={drawer.close}
      title="Tu carrito"
      footer={
        items.length > 0 && (
          <div className="flex flex-col gap-3">
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-muted">Subtotal</span>
              <span className="font-display text-xl font-semibold tabular-nums">{formatCurrency(totals.subtotal)}</span>
            </div>
            {totals.missingForFreeShipping > 0 && (
              <p className="text-[13px] text-muted">Te faltan {formatCurrency(totals.missingForFreeShipping)} para envío gratis.</p>
            )}
            <ButtonLink to={PATHS.checkout} onClick={drawer.close} variant="accent" size="lg" fullWidth>Finalizar compra</ButtonLink>
            <ButtonLink to={PATHS.cart} onClick={drawer.close} variant="outline" fullWidth>Ver carrito</ButtonLink>
          </div>
        )
      }
    >
      {items.length === 0 ? (
        <EmptyState
          className="mt-6 border-0"
          icon={<ShoppingBag />}
          title="Tu carrito está vacío"
          description="Elige un producto, configúralo y súbelo con tu archivo."
          action={<ButtonLink to={PATHS.catalog} onClick={drawer.close}>Explorar catálogo</ButtonLink>}
        />
      ) : (
        <div className="divide-y divide-line">
          {items.map((item) => (
            <CartLine key={item.lineId} item={item} compact onNavigate={drawer.close} onQuantity={(q) => updateQuantity(item.lineId, q)} onRemove={() => removeItem(item.lineId)} />
          ))}
        </div>
      )}
    </Drawer>
  )
}
