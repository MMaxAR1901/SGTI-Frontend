type EventName =
  | 'page_view'
  | 'view_item'
  | 'add_to_cart'
  | 'remove_from_cart'
  | 'begin_checkout'
  | 'purchase'
  | 'quote_requested'
  | 'login'
  | 'sign_up'

type EventPayload = Record<string, string | number | boolean | undefined>

/**
 * Fachada de analítica. Hoy registra en consola en desarrollo;
 * conecta aquí GA4, Segment, App Insights, etc. sin tocar los módulos.
 */
export const analytics = {
  track(event: EventName, payload: EventPayload = {}) {
    if (import.meta.env.DEV) console.debug('[analytics]', event, payload)
  },
  pageView(path: string, title?: string) {
    this.track('page_view', { path, title })
  },
}
