import { CONTACT } from '@/shared/config/contact.config'
import { FOOTER_COLUMNS, LEGAL_LINKS, SECTION_IDS } from '../data/navigation.data'
import { CONTACT_LINKS } from './contact-links'

/** Datos del "chrome" de la landing: barra superior, footer y botón flotante. */
export function useLandingLayoutVM() {
  return {
    topBar: {
      status: 'Planta & Taller Operativo 100%',
      phone: CONTACT_LINKS.phone,
      email: CONTACT_LINKS.quotesEmail,
      whatsapp: {
        href: CONTACT_LINKS.whatsapp,
        label: 'Cotizaciones Express en WhatsApp',
        shortLabel: 'WhatsApp',
      },
    },
    footer: {
      id: SECTION_IDS.contact,
      description: 'Soluciones gráficas, tecnológicas e industriales de máxima precisión.',
      columns: FOOTER_COLUMNS,
      contact: {
        address: CONTACT.address,
        phone: CONTACT_LINKS.phone,
        email: CONTACT_LINKS.generalEmail,
        hours: CONTACT.businessHours,
      },
      legalLinks: LEGAL_LINKS,
      copyright: `© ${new Date().getFullYear()} ${CONTACT.company.shortName}. Todos los derechos reservados.`,
    },
    floatingWhatsAppHref: CONTACT_LINKS.whatsappUrgent,
  }
}
