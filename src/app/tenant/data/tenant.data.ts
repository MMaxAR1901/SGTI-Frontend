import type { Tenant } from '../model/tenant.types'

/** Catálogo de tenants (white-label). En producción vendrá de la API. */
export const TENANTS: Record<string, Tenant> = {
  sgti: {
    id: 'sgti',
    name: 'SGTI',
    tagline: 'Soluciones gráficas',
    theme: {},
    contact: {
      phone: '55 1234 5678',
      whatsapp: '5215512345678',
      email: 'ventas@sgti.mx',
      address: 'Ciudad de México',
      hours: 'Lun a vie 9:00–19:00 · Sáb 9:00–14:00',
    },
    currency: 'MXN',
    freeShippingFrom: 1500,
    taxRate: 0.16,
  },
}

export const DEFAULT_TENANT_ID = import.meta.env.VITE_DEFAULT_TENANT ?? 'sgti'
