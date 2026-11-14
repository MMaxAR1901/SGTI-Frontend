import { lazyNamed, retryImport } from './lazy-helpers'

/* Landing */
export const LandingPage = lazyNamed(() => retryImport(() => import('@/modules/landing/view/LandingPage')), 'LandingPage')

/* Store */
export const HomePage = lazyNamed(() => retryImport(() => import('@/modules/home/view/HomePage')), 'HomePage')
export const CatalogPage = lazyNamed(() => retryImport(() => import('@/modules/catalog/view/CatalogPage')), 'CatalogPage')
export const ProductDetailPage = lazyNamed(() => retryImport(() => import('@/modules/catalog/view/ProductDetailPage')), 'ProductDetailPage')
export const CartPage = lazyNamed(() => retryImport(() => import('@/modules/cart/view/CartPage')), 'CartPage')
export const CheckoutPage = lazyNamed(() => retryImport(() => import('@/modules/checkout/view/CheckoutPage')), 'CheckoutPage')
export const CheckoutSuccessPage = lazyNamed(() => retryImport(() => import('@/modules/checkout/view/CheckoutSuccessPage')), 'CheckoutSuccessPage')
export const QuotePage = lazyNamed(() => retryImport(() => import('@/modules/quotes/view/QuotePage')), 'QuotePage')
export const OrdersPage = lazyNamed(() => retryImport(() => import('@/modules/orders/view/OrdersPage')), 'OrdersPage')
export const OrderDetailPage = lazyNamed(() => retryImport(() => import('@/modules/orders/view/OrderDetailPage')), 'OrderDetailPage')

/* Auth */
export const LoginPage = lazyNamed(() => retryImport(() => import('@/modules/auth/view/LoginPage')), 'LoginPage')
export const RegisterPage = lazyNamed(() => retryImport(() => import('@/modules/auth/view/RegisterPage')), 'RegisterPage')

/* Admin */
export const AdminDashboardPage = lazyNamed(() => retryImport(() => import('@/modules/admin/view/AdminDashboardPage')), 'AdminDashboardPage')
export const AdminProductsPage = lazyNamed(() => retryImport(() => import('@/modules/admin/view/AdminProductsPage')), 'AdminProductsPage')
export const AdminOrdersPage = lazyNamed(() => retryImport(() => import('@/modules/admin/view/AdminOrdersPage')), 'AdminOrdersPage')

/* Sistema */
export const NotFoundPage = lazyNamed(() => import('@/modules/system/view/NotFoundPage'), 'NotFoundPage')
