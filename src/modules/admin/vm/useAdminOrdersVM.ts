import { useMemo, useState } from 'react'
import { useAsync } from '@/modules/catalog'
import { ordersService, STATUS_META, useOrdersStore, type Order, type OrderStatus } from '@/modules/orders'
import { toast } from '@/shared/ui'
import { adminService, nextStatus } from '../data/admin.service'

export type StatusFilter = OrderStatus | 'all'

export function useAdminOrdersVM() {
  const version = useOrdersStore((s) => s.orders)
  const { data: orders = [], loading } = useAsync(() => ordersService.listAll(), [version])
  const [filter, setFilter] = useState<StatusFilter>('all')
  const [busy, setBusy] = useState<string>()

  const filtered = useMemo(() => (filter === 'all' ? orders : orders.filter((o) => o.status === filter)), [orders, filter])

  const advance = async (order: Order) => {
    const next = nextStatus(order.status)
    if (!next) return
    setBusy(order.id)
    await adminService.advance(order)
    setBusy(undefined)
    toast.success(`${order.id}: ${STATUS_META[next].label}`)
  }

  const countBy = (s: OrderStatus) => orders.filter((o) => o.status === s).length

  return { orders, filtered, loading, filter, setFilter, advance, busy, countBy, nextStatus }
}
