let initialized = false

export function reportError(error: unknown, context: Record<string, unknown> = {}) {
  // Punto único para enviar errores a un servicio externo (Sentry, App Insights…).
  console.error('[SGTI error]', error, context)
}

export function initGlobalErrorTracking() {
  if (initialized || typeof window === 'undefined') return
  initialized = true
  window.addEventListener('error', (e) => reportError(e.error ?? e.message, { source: 'window.error' }))
  window.addEventListener('unhandledrejection', (e) =>
    reportError(e.reason, { source: 'unhandledrejection' }),
  )
}
