const ALLOWED_PROTOCOLS = new Set(['http:', 'https:', 'mailto:', 'tel:'])

/**
 * Devuelve la URL sólo si usa un protocolo seguro; en otro caso "#".
 * Úsalo con cualquier href que venga del backend o del usuario.
 */
export function safeUrl(raw: string | null | undefined): string {
  if (!raw) return '#'
  if (raw.startsWith('/') && !raw.startsWith('//')) return raw
  try {
    const url = new URL(raw)
    return ALLOWED_PROTOCOLS.has(url.protocol) ? url.toString() : '#'
  } catch {
    return '#'
  }
}
