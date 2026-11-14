import { createStore } from '@/lib/createStore'
import type { AuthUser } from '../model/auth.types'

export const useAuthStore = createStore<{ user: AuthUser | null }>({ user: null }, { persist: 'sgti.auth' })
