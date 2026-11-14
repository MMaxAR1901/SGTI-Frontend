import { useCallback, useState } from 'react'

/** Estado de un carrusel circular de `length` elementos. */
export function useCarousel(length: number) {
  const [rawIndex, setIndex] = useState(0)
  // Si cambia el número de slides, el índice nunca queda fuera de rango.
  const index = length > 0 ? Math.min(rawIndex, length - 1) : 0

  const next = useCallback(() => {
    if (length > 0) setIndex((i) => (Math.min(i, length - 1) + 1) % length)
  }, [length])

  const prev = useCallback(() => {
    if (length > 0) setIndex((i) => (Math.min(i, length - 1) - 1 + length) % length)
  }, [length])

  const goTo = useCallback(
    (i: number) => {
      if (i >= 0 && i < length) setIndex(i)
    },
    [length],
  )

  const reset = useCallback(() => setIndex(0), [])

  return { index, next, prev, goTo, reset, hasMany: length > 1 }
}

export type CarouselVM = ReturnType<typeof useCarousel>
