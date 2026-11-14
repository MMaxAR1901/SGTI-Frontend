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
      description: `${CONTACT.company.legalName}. Fabricantes y maquiladores de alta precisión en impresión digital, DTF UV, corte CNC, bordado corporativo y desarrollo de guardas para maquinaria.`,
      socials: [
        {
          href: CONTACT_LINKS.whatsapp,
          label: 'WhatsApp',
          icon: 'chat',
          filled: true,
          external: true,
        },
        { href: CONTACT_LINKS.generalEmail.href, label: 'Correo', icon: 'mail' },
        { href: CONTACT_LINKS.phone.href, label: 'Teléfono', icon: 'call' },
      ],
      columns: FOOTER_COLUMNS,
      contact: {
        address: CONTACT.address,
        phone: CONTACT.phone.display,
        email: CONTACT.email.general,
        hours: CONTACT.businessHours,
      },
      legalLinks: LEGAL_LINKS,
      copyright: `© ${new Date().getFullYear()} ${CONTACT.company.legalName}. Todos los derechos reservados.`,
    },
    floatingWhatsAppHref: CONTACT_LINKS.whatsappUrgent,
  }
}
