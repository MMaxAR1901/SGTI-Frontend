import { useEffect, type ReactNode } from 'react'
import { useTenant } from '../vm/useTenant'

/** Aplica el tema del tenant como variables CSS sobre los tokens de Tailwind. */
export function TenantProvider({ children }: { children: ReactNode }) {
  const { tenant } = useTenant()

  useEffect(() => {
    const root = document.documentElement
    const { accent, accentInk } = tenant.theme
    if (accent) root.style.setProperty('--color-magenta', accent)
    if (accentInk) root.style.setProperty('--color-magenta-ink', accentInk)
    root.dataset.tenant = tenant.id
  }, [tenant])

  return <>{children}</>
}
