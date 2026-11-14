import { Link } from 'react-router-dom'
import { LogOut, User } from 'lucide-react'
import { PATHS } from '@/app/router/route-types'
import type { AuthUser } from '@/modules/auth'
import { useDisclosure, useEscapeKey } from '@/shared/hooks'

export function UserMenu({ user, onLogout }: { user: AuthUser | null; onLogout: () => void }) {
  const menu = useDisclosure()
  useEscapeKey(menu.isOpen, menu.close)

  if (!user) {
    return (
      <Link to={PATHS.login} className="hidden h-10 items-center gap-2 rounded-md px-3 text-sm font-medium hover:bg-ink/5 md:inline-flex">
        <User className="size-4" aria-hidden /> Ingresar
      </Link>
    )
  }

  return (
    <div className="relative hidden md:block">
      <button
        type="button"
        onClick={menu.toggle}
        aria-expanded={menu.isOpen}
        aria-haspopup="menu"
        className="inline-flex h-10 items-center gap-2 rounded-md px-3 text-sm font-medium hover:bg-ink/5"
      >
        <span className="flex size-6 items-center justify-center rounded-full bg-cyan/15 text-xs font-semibold text-cyan-ink">
          {user.name.charAt(0).toUpperCase()}
        </span>
        {user.name.split(' ')[0]}
      </button>
      {menu.isOpen && (
        <>
          <div className="fixed inset-0 z-30" onClick={menu.close} aria-hidden />
          <div role="menu" className="absolute right-0 z-40 mt-1 w-52 animate-fade-in rounded-md border border-line bg-surface p-1 shadow-sheet">
            <Link role="menuitem" to={PATHS.orders} onClick={menu.close} className="block rounded-sm px-3 py-2 text-sm hover:bg-ink/5">Mis pedidos</Link>
            {user.role === 'admin' && (
              <Link role="menuitem" to={PATHS.admin} onClick={menu.close} className="block rounded-sm px-3 py-2 text-sm hover:bg-ink/5">Panel de administración</Link>
            )}
            <button role="menuitem" type="button" onClick={() => { menu.close(); onLogout() }} className="flex w-full items-center gap-2 rounded-sm px-3 py-2 text-left text-sm text-danger hover:bg-danger/5">
              <LogOut className="size-4" aria-hidden /> Cerrar sesión
            </button>
          </div>
        </>
      )}
    </div>
  )
}
