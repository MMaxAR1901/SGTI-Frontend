import { ShoppingBag } from 'lucide-react'
import { PATHS } from '@/app/router/route-types'
import { ButtonLink, Container, EmptyState, PageHeader } from '@/shared/ui'
import { useCart, useCartTotals } from '../vm/useCart'
import { CartLine } from './components/CartLine'
import { OrderSummary } from './components/OrderSummary'

export function CartPage() {
  const { items, updateQuantity, removeItem } = useCart()
  const totals = useCartTotals()

  return (
    <Container className="py-10">
      <PageHeader title="Carrito" breadcrumbs={[{ label: 'Inicio', to: PATHS.home }, { label: 'Carrito' }]} />
      {items.length === 0 ? (
        <EmptyState
          icon={<ShoppingBag />}
          title="Aún no agregas productos"
          description="Configura tarjetas, lonas, stickers y más; aquí verás tu pedido antes de pagar."
          action={<ButtonLink to={PATHS.catalog}>Explorar catálogo</ButtonLink>}
        />
      ) : (
        <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
          <div className="divide-y divide-line rounded-lg border border-line bg-surface px-5">
            {items.map((item) => (
              <CartLine key={item.lineId} item={item} onQuantity={(q) => updateQuantity(item.lineId, q)} onRemove={() => removeItem(item.lineId)} />
            ))}
          </div>
          <div className="lg:sticky lg:top-40 lg:self-start">
            <OrderSummary totals={totals}>
              <ButtonLink to={PATHS.checkout} variant="accent" size="lg" fullWidth>Finalizar compra</ButtonLink>
              <ButtonLink to={PATHS.catalog} variant="ghost" fullWidth className="mt-2">Seguir comprando</ButtonLink>
            </OrderSummary>
          </div>
        </div>
      )}
    </Container>
  )
}
