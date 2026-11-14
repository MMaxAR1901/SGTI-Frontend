import type { AppRoute } from './route-types'
import * as Pages from './lazy-components'

/**
 * Registro central de rutas, agrupado por módulo.
 * Para agregar un módulo nuevo: crea su página, regístrala en lazy-components
 * y añade aquí su bloque. El layout y el guard se aplican automáticamente.
 */
const storeRoutes: AppRoute[] = [
  { path: '', component: Pages.HomePage, layout: 'store' },
  { path: 'catalogo', component: Pages.CatalogPage, layout: 'store', title: 'Catálogo' },
  { path: 'producto/:slug', component: Pages.ProductDetailPage, layout: 'store' },
  { path: 'carrito', component: Pages.CartPage, layout: 'store', title: 'Carrito' },
  { path: 'cotizar', component: Pages.QuotePage, layout: 'store', title: 'Cotizar proyecto' },
]

const checkoutRoutes: AppRoute[] = [
  { path: 'checkout', component: Pages.CheckoutPage, layout: 'store', guard: 'auth', title: 'Finalizar compra' },
  { path: 'checkout/confirmacion/:orderId', component: Pages.CheckoutSuccessPage, layout: 'store', guard: 'auth', title: 'Pedido confirmado' },
]

const accountRoutes: AppRoute[] = [
  { path: 'cuenta/pedidos', component: Pages.OrdersPage, layout: 'store', guard: 'auth', title: 'Mis pedidos' },
  { path: 'cuenta/pedidos/:orderId', component: Pages.OrderDetailPage, layout: 'store', guard: 'auth', title: 'Detalle del pedido' },
]

const authRoutes: AppRoute[] = [
  { path: 'ingresar', component: Pages.LoginPage, layout: 'auth', guard: 'guest', title: 'Ingresar' },
  { path: 'registro', component: Pages.RegisterPage, layout: 'auth', guard: 'guest', title: 'Crear cuenta' },
]

const adminRoutes: AppRoute[] = [
  { path: 'admin', component: Pages.AdminDashboardPage, layout: 'admin', guard: 'admin', title: 'Panel' },
  { path: 'admin/productos', component: Pages.AdminProductsPage, layout: 'admin', guard: 'admin', title: 'Productos' },
  { path: 'admin/pedidos', component: Pages.AdminOrdersPage, layout: 'admin', guard: 'admin', title: 'Pedidos' },
]

export const routeRegistry: AppRoute[] = [
  ...storeRoutes,
  ...checkoutRoutes,
  ...accountRoutes,
  ...authRoutes,
  ...adminRoutes,
]
