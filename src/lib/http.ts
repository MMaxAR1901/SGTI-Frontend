import { reportError } from './globalErrorTracking'

const BASE_URL = import.meta.env.VITE_API_URL ?? ''

export class HttpError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message)
  }
}

/** ¿Hay backend configurado? Si no, los servicios usan datos mock. */
export const hasApi = Boolean(BASE_URL)

export async function http<T>(path: string, init: RequestInit = {}): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...init,
    headers: { 'Content-Type': 'application/json', ...init.headers },
  })
  if (!res.ok) {
    const err = new HttpError(res.status, `La solicitud a ${path} falló (${res.status})`)
    reportError(err, { path })
    throw err
  }
  return res.status === 204 ? (undefined as T) : ((await res.json()) as T)
}

/** Simula latencia de red para los servicios mock. */
export const delay = (ms = 350) => new Promise((r) => setTimeout(r, ms))
