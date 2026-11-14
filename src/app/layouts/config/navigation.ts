import { LayoutDashboard, Package, ReceiptText, Store } from 'lucide-react'
import { PATHS } from '@/app/router/route-types'
import { CATEGORIES } from '@/modules/catalog/data/categories.data'
import type { NavItem } from '../model/layout.types'

/** Navegación por categorías en la tienda (deriva del catálogo). */
export const categoryNav: NavItem[] = CATEGORIES.map((c) => ({ label: c.name, to: PATHS.category(c.id) }))

export const primaryNav: NavItem[] = [
  { label: 'Catálogo', to: PATHS.catalog },
  { label: 'Cotizar proyecto', to: PATHS.quote },
]

export const adminNav: NavItem[] = [
  { label: 'Resumen', to: PATHS.admin, icon: LayoutDashboard, end: true },
  { label: 'Pedidos', to: PATHS.adminOrders, icon: ReceiptText },
  { label: 'Productos', to: PATHS.adminProducts, icon: Package },
  { label: 'Ver tienda', to: PATHS.home, icon: Store, end: true },
]
