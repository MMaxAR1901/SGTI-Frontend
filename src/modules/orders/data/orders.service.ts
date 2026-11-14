import { delay, hasApi, http } from '@/lib/http'
import type { Order, OrderStatus } from '../model/order.types'
import { useOrdersStore } from './orders.store'

const nextId = () => `SG-${10483 + Math.floor(Math.random() * 9000)}`

export const ordersService = {
  async listForCustomer(email: string): Promise<Order[]> {
    if (hasApi) return http<Order[]>('/me/orders')
    await delay(200)
    return useOrdersStore.getState().orders.filter((o) => o.customerEmail === email || o.customerEmail === 'demo')
  },

  async listAll(): Promise<Order[]> {
    if (hasApi) return http<Order[]>('/admin/orders')
    await delay(200)
    return useOrdersStore.getState().orders
  },

  async get(id: string): Promise<Order | undefined> {
    if (hasApi) return http<Order>(`/orders/${id}`)
    await delay(150)
    return useOrdersStore.getState().orders.find((o) => o.id === id)
  },

  async create(input: Omit<Order, 'id' | 'createdAt' | 'status' | 'events'>): Promise<Order> {
    if (hasApi) return http<Order>('/orders', { method: 'POST', body: JSON.stringify(input) })
    await delay(600)
    const now = new Date().toISOString()
    const order: Order = { ...input, id: nextId(), createdAt: now, status: 'file_review', events: [{ status: 'file_review', at: now }] }
    useOrdersStore.setState((s) => ({ orders: [order, ...s.orders] }))
    return order
  },

  async updateStatus(id: string, status: OrderStatus): Promise<void> {
    if (hasApi) return http(`/admin/orders/${id}/status`, { method: 'PATCH', body: JSON.stringify({ status }) })
    await delay(200)
    const at = new Date().toISOString()
    useOrdersStore.setState((s) => ({
      orders: s.orders.map((o) => (o.id === id ? { ...o, status, events: [...o.events, { status, at }] } : o)),
    }))
  },
}
