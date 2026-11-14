import type { Address, PaymentMethod, ShippingMethod } from '@/modules/orders'

export const CHECKOUT_STEPS = ['Entrega', 'Pago', 'Confirmar'] as const

export type AddressForm = Address & Record<string, string | undefined>

export interface CheckoutState {
  step: number
  shippingMethod: ShippingMethod
  paymentMethod: PaymentMethod
  notes: string
}
