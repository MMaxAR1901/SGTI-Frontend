import { CONTACT } from '@/shared/config/contact.config'

/** Arma un enlace `wa.me` con mensaje precargado (opcional). */
export function buildWhatsAppUrl(message?: string, number: string = CONTACT.whatsapp.number) {
  const base = `https://wa.me/${number}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export function buildTelUrl(e164: string = CONTACT.phone.e164) {
  return `tel:${e164}`
}

export function buildMailtoUrl(email: string = CONTACT.email.general, subject?: string) {
  return subject ? `mailto:${email}?subject=${encodeURIComponent(subject)}` : `mailto:${email}`
}

/** Enlaces de contacto listos para usar en la vista. */
export const CONTACT_LINKS = {
  phone: { href: buildTelUrl(), label: CONTACT.phone.display },
  quotesEmail: { href: buildMailtoUrl(CONTACT.email.quotes), label: CONTACT.email.quotes },
  generalEmail: { href: buildMailtoUrl(CONTACT.email.general), label: CONTACT.email.general },
  whatsapp: buildWhatsAppUrl(),
  whatsappQuote: buildWhatsAppUrl(CONTACT.whatsapp.messages.general),
  whatsappUrgent: buildWhatsAppUrl(CONTACT.whatsapp.messages.urgent),
} as const
