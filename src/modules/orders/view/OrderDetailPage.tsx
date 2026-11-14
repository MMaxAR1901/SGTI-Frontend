import { PATHS } from '@/app/router/route-types'
import { CartLine, OrderSummary } from '@/modules/cart'
import { formatDate } from '@/lib/format'
import { ButtonLink, Card, Container, EmptyState, PageHeader, PageLoader } from '@/shared/ui'
import { PAYMENT_META, SHIPPING_META } from '../data/order-status'
import { useOrderDetailVM } from '../vm/useOrderDetailVM'
import { OrderStatusBadge } from './components/OrderStatusBadge'
import { OrderTimeline } from './components/OrderTimeline'

export function OrderDetailPage() {
  const { order, loading } = useOrderDetailVM()
  if (loading) return <PageLoader />
  if (!order) {
    return (
      <Container className="py-16">
        <EmptyState title="No encontramos ese pedido" description="Revisa el folio o vuelve a tu lista de pedidos." action={<ButtonLink to={PATHS.orders}>Ver mis pedidos</ButtonLink>} />
      </Container>
    )
  }

  return (
    <Container className="py-10">
      <PageHeader
        title={`Pedido ${order.id}`}
        description={`Realizado el ${formatDate(order.createdAt)}`}
        breadcrumbs={[{ label: 'Mis pedidos', to: PATHS.orders }, { label: order.id }]}
        actions={<OrderStatusBadge status={order.status} />}
      />
      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <div className="flex flex-col gap-8">
          <Card>
            <h2 className="mb-5 text-lg font-semibold">Avance</h2>
            <OrderTimeline order={order} />
          </Card>
          <Card>
            <h2 className="text-lg font-semibold">Productos</h2>
            <div className="divide-y divide-line">
              {order.items.map((i) => <CartLine key={i.lineId} item={i} />)}
            </div>
          </Card>
        </div>
        <div className="flex flex-col gap-6">
          <OrderSummary totals={order.totals} shippingLabel={SHIPPING_META[order.shippingMethod].label} title="Montos" />
          <Card>
            <h2 className="mb-3 text-lg font-semibold">Entrega y pago</h2>
            <dl className="flex flex-col gap-3 text-sm">
              <div><dt className="text-muted">Entrega</dt><dd>{SHIPPING_META[order.shippingMethod].label}</dd></div>
              {order.address && (
                <div>
                  <dt className="text-muted">Dirección</dt>
                  <dd>{order.address.street}, {order.address.neighborhood}, {order.address.city}, {order.address.state} {order.address.postalCode}</dd>
                </div>
              )}
              <div><dt className="text-muted">Pago</dt><dd>{PAYMENT_META[order.paymentMethod].label}</dd></div>
            </dl>
          </Card>
        </div>
      </div>
    </Container>
  )
}
