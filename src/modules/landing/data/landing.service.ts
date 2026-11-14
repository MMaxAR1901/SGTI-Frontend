import { hasApi, http } from '@/lib/http'
import type { LandingContent, Service, ServiceId } from '../model/landing.types'
import { CLIENTS, GALLERY, HERO, QUOTE_HIGHLIGHTS, SECTORS, SUBSTRATES } from './content.data'
import { SERVICES } from './services.data'

/** Contenido estático (mock). También sirve como valor inicial mientras responde la API. */
export const LANDING_CONTENT: LandingContent = {
  hero: HERO,
  services: SERVICES,
  substrates: SUBSTRATES,
  gallery: GALLERY,
  clients: CLIENTS,
  sectors: SECTORS,
  quoteHighlights: QUOTE_HIGHLIGHTS,
}

/**
 * Fuente de datos de la landing.
 * Sin `VITE_API_URL` devuelve el contenido local; con API, consulta:
 *   GET /landing            → LandingContent
 *   GET /services/:id       → Service
 */
export const landingService = {
  async getContent(): Promise<LandingContent> {
    if (hasApi) return http<LandingContent>('/landing')
    return LANDING_CONTENT
  },

  async getService(id: ServiceId): Promise<Service | undefined> {
    if (hasApi) return http<Service>(`/services/${id}`)
    return SERVICES.find((s) => s.id === id)
  },
}
