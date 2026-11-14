import { Outlet } from 'react-router-dom'
import { LogOut, Menu } from 'lucide-react'
import { Button, IconButton } from '@/shared/ui'
import { AdminSidebar } from '../components'
import { useAdminLayoutVM } from '../vm/useAdminLayoutVM'

export function AdminLayout() {
  const { user, signOut, sidebar } = useAdminLayoutVM()

  return (
    <div className="min-h-screen bg-paper">
      <AdminSidebar open={sidebar.isOpen} onNavigate={sidebar.close} />
      {sidebar.isOpen && <div className="fixed inset-0 z-30 bg-ink/40 lg:hidden" onClick={sidebar.close} aria-hidden />}
      <div className="lg:pl-64">
        <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-line bg-surface px-4 sm:px-6">
          <IconButton label="Abrir menú" icon={<Menu className="size-5" />} onClick={sidebar.open} className="-ml-2 lg:hidden" />
          <p className="text-sm text-muted">
            Sesión de <span className="font-medium text-ink">{user?.name}</span>
          </p>
          <Button variant="ghost" size="sm" className="ml-auto" leftIcon={<LogOut className="size-4" />} onClick={signOut}>
            Cerrar sesión
          </Button>
        </header>
        <main id="main" className="px-4 py-8 sm:px-6 lg:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
