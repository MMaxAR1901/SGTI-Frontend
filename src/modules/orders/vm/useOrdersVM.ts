import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PATHS } from '@/app/router/route-types'
import { useAuth } from '@/modules/auth'
import { useAsync } from '@/modules/catalog'
import { useOrdersStore } from '../data/orders.store'
import { ordersService } from '../data/orders.service'
import type { Order } from '../model/order.types'

export type OrdersTab = 'active' | 'done' | 'all'

const isDone = (o: Order) => o.status === 'delivered' || o.status === 'cancelled'

export function useOrdersVM() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const version = useOrdersStore((s) => s.orders)
  const { data: orders = [], loading } = useAsync(() => ordersService.listForCustomer(user?.email ?? ''), [user?.email, version])
  const [tab, setTab] = useState<OrdersTab>('active')

  const filtered = useMemo(
    () => orders.filter((o) => (tab === 'all' ? true : tab === 'done' ? isDone(o) : !isDone(o))),
    [orders, tab],
  )

  const counts = {
    active: orders.filter((o) => !isDone(o)).length,
    done: orders.filter(isDone).length,
    all: orders.length,
  }

  return { orders: filtered, loading, tab, setTab, counts, open: (o: Order) => navigate(PATHS.order(o.id)) }
}
