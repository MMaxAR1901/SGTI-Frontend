import { useEffect, useState } from 'react'

/** Ejecuta una promesa dependiente de `deps` y expone data/loading/error. */
export function useAsync<T>(fn: () => Promise<T>, deps: unknown[]) {
  const [state, setState] = useState<{ data?: T; loading: boolean; error?: unknown }>({ loading: true })

  useEffect(() => {
    let alive = true
    setState((s) => ({ ...s, loading: true, error: undefined }))
    fn()
      .then((data) => alive && setState({ data, loading: false }))
      .catch((error) => alive && setState({ loading: false, error }))
    return () => {
      alive = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return state
}
