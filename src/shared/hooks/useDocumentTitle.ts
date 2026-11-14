import { useEffect } from 'react'
import { useTenant } from '@/app/tenant'

export function useDocumentTitle(title?: string) {
  const { tenant } = useTenant()
  useEffect(() => {
    document.title = title ? `${title} · ${tenant.name}` : `${tenant.name} · ${tenant.tagline}`
  }, [title, tenant])
}
