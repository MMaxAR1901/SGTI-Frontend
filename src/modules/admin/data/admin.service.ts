import { ordersService, STATUS_FLOW, type Order, type OrderStatus } from '@/modules/orders'

/** Siguiente estado en el flujo de producción (o undefined si ya terminó). */
export function nextStatus(status: OrderStatus): OrderStatus | undefined {
  const i = STATUS_FLOW.indexOf(status)
  return i >= 0 && i < STATUS_FLOW.length - 1 ? STATUS_FLOW[i + 1] : undefined
}

export const adminService = {
  advance: (order: Order) => {
    const next = nextStatus(order.status)
    return next ? ordersService.updateStatus(order.id, next) : Promise.resolve()
  },
}
