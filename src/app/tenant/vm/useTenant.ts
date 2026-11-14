import { useTenantStore } from '../store/tenant.store'

export function useTenant() {
  const tenant = useTenantStore((s) => s.tenant)
  return { tenant }
}
