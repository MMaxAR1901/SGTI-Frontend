/**
 * Configuración central de contacto de SGTI.
 * Único lugar donde viven teléfonos, WhatsApp, correos, horario y dirección:
 * cualquier componente que necesite estos datos debe importarlos de aquí
 * (o usar los helpers de `modules/landing/vm/contact-links.ts`).
 */
export const CONTACT = {
  company: {
    shortName: 'SGTI',
    legalName: 'SGTI - Soluciones Gráficas, Tecnológicas e Industriales',
  },
  phone: {
    /** Formato E.164 para enlaces `tel:`. */
    e164: '+525541208800',
    display: '+52 (55) 4120-8800',
  },
  whatsapp: {
    /** Número internacional sin "+" para `wa.me`. */
    number: '5215541208800',
    messages: {
      general: 'Hola SGTI, me gustaría cotizar un proyecto',
      urgent: 'Hola SGTI, solicito cotización urgente',
    },
  },
  email: {
    quotes: 'cotizaciones@sgti.com.mx',
    general: 'contacto@sgti.com.mx',
  },
  address: 'Parque Industrial Valle de México, Naves de Manufactura #12, CDMX / EDOMEX.',
  businessHours: 'LUNES A VIERNES: 08:30 - 18:30 HRS',
} as const

export type ContactConfig = typeof CONTACT
