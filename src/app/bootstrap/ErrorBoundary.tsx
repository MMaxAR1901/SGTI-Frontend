import { Component, type ErrorInfo, type ReactNode } from 'react'
import { reportError } from '@/lib/globalErrorTracking'

interface State {
  error: Error | null
}

export class ErrorBoundary extends Component<{ children: ReactNode }, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    reportError(error, { componentStack: info.componentStack })
  }

  render() {
    if (!this.state.error) return this.props.children
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
        <h1 className="text-2xl font-semibold">La página no pudo cargarse</h1>
        <p className="max-w-md text-muted">
          Ocurrió un error inesperado. Recarga la página; si persiste, escríbenos y lo revisamos.
        </p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="h-10 rounded-md bg-ink px-4 font-medium text-white"
        >
          Recargar página
        </button>
      </div>
    )
  }
}
