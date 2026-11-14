import { DEFAULT_TENANT_ID, TENANTS } from './data/tenant.data'
import type { Tenant } from './model/tenant.types'

/**
 * Resuelve el tenant actual:
 *  1. ?tenant=xxx (útil en desarrollo)
 *  2. subdominio (xxx.sgti.mx)
 *  3. VITE_DEFAULT_TENANT
 */
export function resolveTenantId(location: Location = window.location): string {
  const fromQuery = new URLSearchParams(location.search).get('tenant')
  if (fromQuery && TENANTS[fromQuery]) return fromQuery

  const [sub] = location.hostname.split('.')
  if (sub && TENANTS[sub]) return sub

  return DEFAULT_TENANT_ID
}

export function resolveTenant(): Tenant {
  return TENANTS[resolveTenantId()] ?? TENANTS[DEFAULT_TENANT_ID]
}
