import { formatCurrency, formatDate } from '@/lib/format'
import type { Column } from '@/shared/ui'
import type { Order } from '../../model/order.types'
import { OrderStatusBadge } from './OrderStatusBadge'

/** Columnas base de pedidos: se reutilizan en "Mis pedidos" y en el panel de admin. */
export const orderColumns: Column<Order>[] = [
  { key: 'id', header: 'Folio', render: (o) => <span className="font-medium">{o.id}</span> },
  { key: 'date', header: 'Fecha', render: (o) => formatDate(o.createdAt) },
  { key: 'items', header: 'Productos', render: (o) => <span className="line-clamp-1">{o.items.map((i) => i.name).join(', ')}</span> },
  { key: 'status', header: 'Estado', render: (o) => <OrderStatusBadge status={o.status} /> },
  { key: 'total', header: 'Total', align: 'right', render: (o) => <span className="tabular-nums">{formatCurrency(o.totals.total)}</span> },
]
