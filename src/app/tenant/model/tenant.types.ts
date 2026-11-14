export interface TenantTheme {
  /** Sobrescribe --color-magenta (acento de acción). */
  accent?: string
  accentInk?: string
}

export interface TenantContact {
  phone: string
  whatsapp: string
  email: string
  address: string
  hours: string
}

export interface Tenant {
  id: string
  name: string
  tagline: string
  theme: TenantTheme
  contact: TenantContact
  currency: 'MXN'
  /** Envío gratis a partir de este subtotal. */
  freeShippingFrom: number
  taxRate: number
}
