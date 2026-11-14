import { Badge } from '@/shared/ui'
import { STATUS_META } from '../../data/order-status'
import type { OrderStatus } from '../../model/order.types'

export function OrderStatusBadge({ status }: { status: OrderStatus }) {
  const meta = STATUS_META[status]
  return <Badge tone={meta.tone} dot>{meta.label}</Badge>
}
