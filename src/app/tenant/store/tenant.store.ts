import { createStore } from '@/lib/createStore'
import { resolveTenant } from '../tenant-resolver'
import type { Tenant } from '../model/tenant.types'

export const useTenantStore = createStore<{ tenant: Tenant }>({ tenant: resolveTenant() })
