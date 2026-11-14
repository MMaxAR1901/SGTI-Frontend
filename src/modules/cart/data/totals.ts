import type { CartItem, CartTotals } from '../model/cart.types'

export const STANDARD_SHIPPING = 149

const round2 = (n: number) => Math.round(n * 100) / 100

export function computeTotals(
  items: CartItem[],
  opts: { freeShippingFrom: number; taxRate: number; shippingCost?: number },
): CartTotals {
  const subtotal = round2(items.reduce((acc, i) => acc + i.total, 0))
  const qualifies = subtotal >= opts.freeShippingFrom
  const shipping = items.length === 0 ? 0 : (opts.shippingCost ?? (qualifies ? 0 : STANDARD_SHIPPING))
  const total = round2(subtotal + shipping)
  return {
    itemCount: items.length,
    subtotal,
    shipping,
    total,
    taxIncluded: round2(total - total / (1 + opts.taxRate)),
    missingForFreeShipping: qualifies ? 0 : round2(opts.freeShippingFrom - subtotal),
  }
}

/** Recalcula el total de una línea al cambiar cantidad, conservando el precio unitario. */
export function withQuantity(item: CartItem, quantity: number): CartItem {
  return { ...item, quantity, total: round2(item.unitPrice * quantity) }
}
