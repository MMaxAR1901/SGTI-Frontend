import { delay, hasApi, http } from '@/lib/http'
import type { AuthUser, LoginInput, RegisterInput } from '../model/auth.types'

/**
 * Servicio de autenticación. Sin VITE_API_URL funciona en modo demo:
 * cualquier correo entra; los que empiezan con "admin@" obtienen rol admin.
 */
export const authService = {
  async login(input: LoginInput): Promise<AuthUser> {
    if (hasApi) return http<AuthUser>('/auth/login', { method: 'POST', body: JSON.stringify(input) })
    await delay()
    const isAdmin = input.email.toLowerCase().startsWith('admin@')
    const name = input.email.split('@')[0].replace(/[._-]/g, ' ')
    return {
      id: crypto.randomUUID(),
      name: name.charAt(0).toUpperCase() + name.slice(1),
      email: input.email,
      role: isAdmin ? 'admin' : 'customer',
    }
  },

  async register(input: RegisterInput): Promise<AuthUser> {
    if (hasApi) return http<AuthUser>('/auth/register', { method: 'POST', body: JSON.stringify(input) })
    await delay()
    return { id: crypto.randomUUID(), name: input.name, email: input.email, phone: input.phone, company: input.company, role: 'customer' }
  },
}
