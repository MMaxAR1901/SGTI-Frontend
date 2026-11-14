import { NavLink } from 'react-router-dom'
import { Menu, ShoppingBag } from 'lucide-react'
import { cn } from '@/lib/cn'
import { IconButton } from '@/shared/ui'
import { primaryNav } from '../config/navigation'
import { useStoreHeaderVM } from '../vm/useStoreHeaderVM'
import { Logo } from './Logo'
import { SearchBar } from './SearchBar'
import { CategoryNav } from './CategoryNav'
import { UserMenu } from './UserMenu'
import { MobileMenu } from './MobileMenu'
import { PromoBar } from './PromoBar'

export function StoreHeader() {
  const vm = useStoreHeaderVM()

  return (
    <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/85">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-ink focus:px-3 focus:py-2 focus:text-white">
        Saltar al contenido
      </a>
      <PromoBar />
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <IconButton label="Abrir menú" icon={<Menu className="size-5" />} onClick={vm.mobileMenu.open} className="-ml-2 md:hidden" />
        <Logo />
        <SearchBar value={vm.query} onChange={vm.setQuery} onSubmit={vm.submitSearch} className="mx-4 hidden max-w-md flex-1 md:block" />
        <nav aria-label="Principal" className="ml-auto hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn('rounded-md px-3 py-2 text-sm font-medium transition-colors', isActive ? 'text-ink' : 'text-muted hover:text-ink')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-1 lg:ml-2">
          <UserMenu user={vm.user} onLogout={vm.logout} />
          <IconButton label="Abrir carrito" icon={<ShoppingBag className="size-5" />} badge={vm.cartCount} onClick={vm.cartDrawer.open} />
        </div>
      </div>
      <div className="hidden md:block">
        <CategoryNav />
      </div>
      <div className="border-t border-line px-4 py-2 md:hidden">
        <SearchBar value={vm.query} onChange={vm.setQuery} onSubmit={vm.submitSearch} />
      </div>
      <MobileMenu open={vm.mobileMenu.isOpen} onClose={vm.mobileMenu.close} user={vm.user} onLogout={vm.logout} />
      <span className="block h-px bg-line" aria-hidden />
    </header>
  )
}
