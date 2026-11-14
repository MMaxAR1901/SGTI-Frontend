import type { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/modules/auth'
import { PATHS, type RouteGuard } from './route-types'

export function RouteGuardGate({ guard, children }: { guard?: RouteGuard; children: ReactNode }) {
  const { user } = useAuth()
  const location = useLocation()

  if (guard === 'guest' && user) return <Navigate to={user.role === 'admin' ? PATHS.admin : PATHS.home} replace />
  if ((guard === 'auth' || guard === 'admin') && !user)
    return <Navigate to={PATHS.login} state={{ from: location.pathname }} replace />
  if (guard === 'admin' && user?.role !== 'admin') return <Navigate to={PATHS.home} replace />

  return <>{children}</>
}
