import { createStore } from '@/lib/createStore'
import type { Order } from '../model/order.types'
import { MOCK_ORDERS } from './orders.mock'

export const useOrdersStore = createStore<{ orders: Order[] }>({ orders: MOCK_ORDERS }, { persist: 'sgti.orders' })
