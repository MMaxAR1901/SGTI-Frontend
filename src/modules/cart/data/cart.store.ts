import { createStore } from '@/lib/createStore'
import type { CartItem } from '../model/cart.types'

export const useCartStore = createStore<{ items: CartItem[] }>({ items: [] }, { persist: 'sgti.cart' })

/** Estado de UI (no persistido): visibilidad del drawer. */
export const useCartUIStore = createStore<{ drawerOpen: boolean }>({ drawerOpen: false })
