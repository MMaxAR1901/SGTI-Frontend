/** API pública del módulo landing. */
export * from './model/landing.types'
export { SERVICES, SERVICE_SPEC_FIELDS } from './data/services.data'
export { SECTION_IDS, MAIN_NAV, FOOTER_COLUMNS } from './data/navigation.data'
export { landingService, LANDING_CONTENT } from './data/landing.service'
export { buildWhatsAppUrl, buildTelUrl, buildMailtoUrl, CONTACT_LINKS } from './vm/contact-links'
export { LandingPage } from './view/LandingPage'
export { LandingLayout } from './view/layout/LandingLayout'
