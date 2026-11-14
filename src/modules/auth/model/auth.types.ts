export type UserRole = 'customer' | 'admin'

export interface AuthUser {
  id: string
  name: string
  email: string
  phone?: string
  company?: string
  role: UserRole
}

export interface LoginInput {
  email: string
  password: string
}

export interface RegisterInput extends LoginInput {
  name: string
  phone: string
  company: string
}
