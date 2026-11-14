import { useCallback, useMemo } from 'react'
import { useTenant } from '@/app/tenant'
import { analytics } from '@/lib/analytics'
import { useCartStore, useCartUIStore } from '../data/cart.store'
import { computeTotals, withQuantity } from '../data/totals'
import type { NewCartItem } from '../model/cart.types'

const sameConfig = (a: Record<string, string>, b: Record<string, string>) =>
  JSON.stringify(Object.entries(a).sort()) === JSON.stringify(Object.entries(b).sort())

export function useCart() {
  const items = useCartStore((s) => s.items)

  const addItem = useCallback((item: NewCartItem) => {
    useCartStore.setState((s) => {
      const existing = s.items.find((i) => i.productId === item.productId && sameConfig(i.selection, item.selection) && i.quantity === item.quantity)
      // Mismo producto, misma configuración y cantidad: se suma como otro juego.
      const items = existing
        ? s.items.map((i) => (i.lineId === existing.lineId ? withQuantity(i, i.quantity + item.quantity) : i))
        : [...s.items, { ...item, lineId: crypto.randomUUID() }]
      return { items }
    })
    analytics.track('add_to_cart', { id: item.productId, value: item.total })
    useCartUIStore.setState({ drawerOpen: true })
  }, [])

  const updateQuantity = useCallback((lineId: string, quantity: number) => {
    useCartStore.setState((s) => ({ items: s.items.map((i) => (i.lineId === lineId ? withQuantity(i, quantity) : i)) }))
  }, [])

  const removeItem = useCallback((lineId: string) => {
    useCartStore.setState((s) => ({ items: s.items.filter((i) => i.lineId !== lineId) }))
    analytics.track('remove_from_cart', { lineId })
  }, [])

  const clear = useCallback(() => useCartStore.setState({ items: [] }), [])

  return { items, addItem, updateQuantity, removeItem, clear }
}

export function useCartTotals(shippingCost?: number) {
  const items = useCartStore((s) => s.items)
  const { tenant } = useTenant()
  return useMemo(
    () => computeTotals(items, { freeShippingFrom: tenant.freeShippingFrom, taxRate: tenant.taxRate, shippingCost }),
    [items, tenant, shippingCost],
  )
}

export const useCartCount = () => useCartStore((s) => s.items.length)

export function useCartDrawer() {
  const isOpen = useCartUIStore((s) => s.drawerOpen)
  return {
    isOpen,
    open: () => useCartUIStore.setState({ drawerOpen: true }),
    close: () => useCartUIStore.setState({ drawerOpen: false }),
  }
}
