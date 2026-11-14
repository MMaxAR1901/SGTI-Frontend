import type { ComponentType, LazyExoticComponent } from 'react'

export type LayoutKey = 'store' | 'auth' | 'admin'
export type RouteGuard = 'guest' | 'auth' | 'admin'

export interface AppRoute {
  /** Ruta relativa al layout (sin "/" inicial para rutas hijas, "" = index). */
  path: string
  component: LazyExoticComponent<ComponentType>
  layout: LayoutKey
  guard?: RouteGuard
  title?: string
}

/** Rutas tipadas: usa PATHS en vez de strings sueltos en los módulos. */
export const PATHS = {
  home: '/',
  catalog: '/catalogo',
  category: (id: string) => `/catalogo?categoria=${id}`,
  product: (slug: string) => `/producto/${slug}`,
  cart: '/carrito',
  checkout: '/checkout',
  checkoutSuccess: (orderId: string) => `/checkout/confirmacion/${orderId}`,
  quote: '/cotizar',
  login: '/ingresar',
  register: '/registro',
  orders: '/cuenta/pedidos',
  order: (id: string) => `/cuenta/pedidos/${id}`,
  admin: '/admin',
  adminProducts: '/admin/productos',
  adminOrders: '/admin/pedidos',
} as const
