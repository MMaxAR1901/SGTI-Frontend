import { useSyncExternalStore } from 'react'
import { storage } from './storage'

type Listener = () => void
type SetState<T> = (partial: Partial<T> | ((state: T) => Partial<T>)) => void

export interface Store<T> {
  getState: () => T
  setState: SetState<T>
  subscribe: (listener: Listener) => () => void
}

interface Options {
  /** Clave de localStorage para persistir el estado. */
  persist?: string
}

/**
 * Store mínimo sin dependencias (patrón Zustand).
 * Cada módulo crea el suyo en su carpeta `data/` y lo expone vía su `vm/`.
 */
export function createStore<T extends object>(initial: T, options: Options = {}) {
  let state: T = options.persist ? { ...initial, ...storage.get(options.persist, {}) } : initial
  const listeners = new Set<Listener>()

  const store: Store<T> = {
    getState: () => state,
    setState: (partial) => {
      const next = typeof partial === 'function' ? partial(state) : partial
      state = { ...state, ...next }
      if (options.persist) storage.set(options.persist, state)
      listeners.forEach((l) => l())
    },
    subscribe: (listener) => {
      listeners.add(listener)
      return () => listeners.delete(listener)
    },
  }

  function useStore(): T
  function useStore<S>(selector: (state: T) => S): S
  function useStore<S>(selector?: (state: T) => S) {
    const select = selector ?? ((s: T) => s as unknown as S)
    return useSyncExternalStore(store.subscribe, () => select(store.getState()))
  }

  return Object.assign(useStore, store)
}
