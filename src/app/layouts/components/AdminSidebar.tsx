import { NavLink } from 'react-router-dom'
import { cn } from '@/lib/cn'
import { adminNav } from '../config/navigation'
import { Logo } from './Logo'

export function AdminSidebar({ open, onNavigate }: { open: boolean; onNavigate: () => void }) {
  return (
    <aside
      className={cn(
        'fixed inset-y-0 left-0 z-40 flex w-64 flex-col bg-ink text-white transition-transform lg:translate-x-0',
        open ? 'translate-x-0' : '-translate-x-full',
      )}
    >
      <div className="flex h-16 items-center px-5">
        <Logo inverted />
      </div>
      <nav aria-label="Administración" className="flex-1 px-3 py-4">
        <ul className="flex flex-col gap-0.5">
          {adminNav.map(({ to, label, icon: Icon, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                onClick={onNavigate}
                className={({ isActive }) =>
                  cn(
                    'flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors',
                    isActive ? 'bg-white/10 text-white' : 'text-white/65 hover:bg-white/5 hover:text-white',
                  )
                }
              >
                {Icon && <Icon className="size-4" aria-hidden />}
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
