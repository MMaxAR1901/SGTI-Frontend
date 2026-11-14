import { useParams } from 'react-router-dom'
import { useAsync } from '@/modules/catalog'
import { useOrdersStore } from '../data/orders.store'
import { ordersService } from '../data/orders.service'

export function useOrderDetailVM() {
  const { orderId = '' } = useParams()
  const version = useOrdersStore((s) => s.orders)
  const { data: order, loading } = useAsync(() => ordersService.get(orderId), [orderId, version])
  return { order, loading }
}
