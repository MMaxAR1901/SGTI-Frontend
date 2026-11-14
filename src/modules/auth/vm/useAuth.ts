import { useCallback } from 'react'
import { analytics } from '@/lib/analytics'
import { useAuthStore } from '../data/auth.store'
import { authService } from '../data/auth.service'
import type { LoginInput, RegisterInput } from '../model/auth.types'

export function useAuth() {
  const user = useAuthStore((s) => s.user)

  const login = useCallback(async (input: LoginInput) => {
    const u = await authService.login(input)
    useAuthStore.setState({ user: u })
    analytics.track('login', { role: u.role })
    return u
  }, [])

  const register = useCallback(async (input: RegisterInput) => {
    const u = await authService.register(input)
    useAuthStore.setState({ user: u })
    analytics.track('sign_up')
    return u
  }, [])

  const logout = useCallback(() => useAuthStore.setState({ user: null }), [])

  return { user, isAuthenticated: Boolean(user), login, register, logout }
}
