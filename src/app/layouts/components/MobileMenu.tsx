import { Link } from 'react-router-dom'
import { PATHS } from '@/app/router/route-types'
import type { AuthUser } from '@/modules/auth'
import { Drawer } from '@/shared/ui'
import { categoryNav, primaryNav } from '../config/navigation'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
  user: AuthUser | null
  onLogout: () => void
}

export function MobileMenu({ open, onClose, user, onLogout }: MobileMenuProps) {
  const linkClass = 'block rounded-md px-2 py-2.5 text-[15px] hover:bg-ink/5'
  return (
    <Drawer open={open} onClose={onClose} title="Menú" side="left">
      <nav className="flex flex-col gap-6">
        <ul>
          {primaryNav.map((i) => (
            <li key={i.to}><Link to={i.to} onClick={onClose} className={`${linkClass} font-medium`}>{i.label}</Link></li>
          ))}
        </ul>
        <div>
          <p className="mb-1 px-2 text-sm text-muted">Categorías</p>
          <ul>
            {categoryNav.map((i) => (
              <li key={i.to}><Link to={i.to} onClick={onClose} className={linkClass}>{i.label}</Link></li>
            ))}
          </ul>
        </div>
        <div className="border-t border-line pt-4">
          {user ? (
            <>
              <Link to={PATHS.orders} onClick={onClose} className={linkClass}>Mis pedidos</Link>
              {user.role === 'admin' && <Link to={PATHS.admin} onClick={onClose} className={linkClass}>Panel de administración</Link>}
              <button type="button" onClick={() => { onClose(); onLogout() }} className={`${linkClass} w-full text-left text-danger`}>Cerrar sesión</button>
            </>
          ) : (
            <Link to={PATHS.login} onClick={onClose} className={`${linkClass} font-medium`}>Ingresar o crear cuenta</Link>
          )}
        </div>
      </nav>
    </Drawer>
  )
}
