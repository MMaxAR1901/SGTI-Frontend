import { Outlet } from 'react-router-dom'
import { CartDrawer } from '@/modules/cart'
import { StoreFooter, StoreHeader } from '../components'

export function StoreLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <StoreHeader />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <StoreFooter />
      <CartDrawer />
    </div>
  )
}
