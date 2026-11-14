import type { CartItem, CartTotals } from '@/modules/cart'

export type OrderStatus = 'file_review' | 'proof_sent' | 'in_production' | 'shipped' | 'delivered' | 'cancelled'

export type ShippingMethod = 'pickup' | 'standard' | 'express'
export type PaymentMethod = 'card' | 'transfer' | 'oxxo'

export interface Address {
  fullName: string
  phone: string
  street: string
  neighborhood: string
  city: string
  state: string
  postalCode: string
  references?: string
}

export interface OrderEvent {
  status: OrderStatus
  at: string
  note?: string
}

export interface Order {
  id: string
  createdAt: string
  status: OrderStatus
  customerName: string
  customerEmail: string
  items: CartItem[]
  totals: CartTotals
  shippingMethod: ShippingMethod
  paymentMethod: PaymentMethod
  address?: Address
  events: OrderEvent[]
  notes?: string
}
