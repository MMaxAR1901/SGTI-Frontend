import type { ReactNode } from 'react'
import { TenantProvider } from '@/app/tenant'
import { Toaster } from '@/shared/ui'
import { ErrorBoundary } from './ErrorBoundary'

/** Punto único para registrar providers globales (tema, i18n, query client…). */
export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ErrorBoundary>
      <TenantProvider>
        {children}
        <Toaster />
      </TenantProvider>
    </ErrorBoundary>
  )
}
