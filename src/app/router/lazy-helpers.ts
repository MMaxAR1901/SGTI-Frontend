import { lazy, type ComponentType } from 'react'

/**
 * `React.lazy` sólo acepta exports por defecto. Este helper permite
 * cargar exports con nombre: lazyNamed(() => import('./X'), 'XPage').
 */
export function lazyNamed<M extends Record<string, unknown>, K extends keyof M>(
  loader: () => Promise<M>,
  name: K,
) {
  return lazy(async () => {
    const mod = await loader()
    return { default: mod[name] as ComponentType }
  })
}

/** Reintenta una carga dinámica fallida (p. ej. tras un deploy con chunks nuevos). */
export async function retryImport<T>(loader: () => Promise<T>, retries = 2): Promise<T> {
  try {
    return await loader()
  } catch (err) {
    if (retries <= 0) throw err
    await new Promise((r) => setTimeout(r, 500))
    return retryImport(loader, retries - 1)
  }
}
