import { useCallback, useEffect, useMemo, useState } from 'react'
import { useLockBodyScroll } from '@/shared/hooks'
import type { Service, ServiceId } from '../model/landing.types'
import { SERVICE_SPEC_FIELDS } from '../data/services.data'
import { buildWhatsAppUrl } from './contact-links'
import { useCarousel } from './useCarousel'

/**
 * Estado del modal de especificaciones técnicas:
 * servicio seleccionado, carrusel, teclado (Esc / ← / →), bloqueo de scroll y CTA de WhatsApp.
 */
export function useSpecModalVM(services: Service[]) {
  const [selectedId, setSelectedId] = useState<ServiceId | null>(null)
  const service = useMemo(
    () => services.find((s) => s.id === selectedId) ?? null,
    [services, selectedId],
  )
  const isOpen = service !== null
  const images = service?.detail.images ?? []
  const carousel = useCarousel(images.length)
  const { reset, next, prev } = carousel

  const open = useCallback(
    (id: ServiceId) => {
      reset()
      setSelectedId(id)
    },
    [reset],
  )
  const close = useCallback(() => setSelectedId(null), [])

  useLockBodyScroll(isOpen)

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') next()
      else if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen, close, next, prev])

  const specs = useMemo(
    () =>
      service
        ? SERVICE_SPEC_FIELDS.map((field) => ({ ...field, value: service.detail.specs[field.key] }))
        : [],
    [service],
  )

  return {
    isOpen,
    service,
    open,
    close,
    carousel,
    currentImage: images[carousel.index] ?? null,
    images,
    specs,
    whatsappUrl: service ? buildWhatsAppUrl(service.detail.whatsappMessage) : '',
    whatsappLabel: service ? `Cotizar ${service.detail.title} en WhatsApp` : '',
  }
}

export type SpecModalVM = ReturnType<typeof useSpecModalVM>
