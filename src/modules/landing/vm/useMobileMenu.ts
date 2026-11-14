import { useCallback, useEffect, useState } from 'react'
import { useLockBodyScroll } from '@/shared/hooks'

/** Breakpoint `lg` de Tailwind: desde aquí se muestra la navegación de escritorio. */
const DESKTOP_QUERY = '(min-width: 64rem)'

/**
 * Estado del menú hamburguesa: abrir/cerrar, Esc, bloqueo de scroll
 * y cierre automático al pasar a escritorio.
 */
export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen((v) => !v), [])

  useLockBodyScroll(isOpen)

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (e: KeyboardEvent) => e.key === 'Escape' && close()
    const mql = window.matchMedia(DESKTOP_QUERY)
    const onChange = (e: MediaQueryListEvent) => e.matches && close()
    window.addEventListener('keydown', onKeyDown)
    mql.addEventListener('change', onChange)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      mql.removeEventListener('change', onChange)
    }
  }, [isOpen, close])

  return { isOpen, open, close, toggle }
}

export type MobileMenuVM = ReturnType<typeof useMobileMenu>
