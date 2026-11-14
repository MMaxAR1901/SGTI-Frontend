import type { FooterColumn, NavLink } from '../model/landing.types'

/** IDs de las secciones ancla de la landing. Úsalos en vez de strings sueltos. */
export const SECTION_IDS = {
  home: 'inicio',
  catalog: 'catalogo',
  technology: 'dtf-uv',
  quote: 'cotizador',
  about: 'nosotros',
  contact: 'contacto',
} as const

export const anchor = (id: string) => `#${id}`

/** Enlaces del menú principal (header). */
export const MAIN_NAV: NavLink[] = [
  { label: 'Inicio', href: anchor(SECTION_IDS.home) },
  { label: 'Catálogo de Servicios', href: anchor(SECTION_IDS.catalog) },
  { label: 'Tecnología & Materiales', href: anchor(SECTION_IDS.technology) },
  { label: 'Cotizador Rápido', href: anchor(SECTION_IDS.quote) },
  { label: 'Contacto', href: anchor(SECTION_IDS.contact) },
  { label: 'Nosotros', href: anchor(SECTION_IDS.about) },
]

export const LEGAL_LINKS: NavLink[] = [
  { label: 'Aviso de Privacidad', href: '#aviso-privacidad' },
  { label: 'Términos y Condiciones', href: '#terminos' },
]

/** Columnas de enlaces del footer. */
export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Servicios',
    links: [
      { label: 'Gran Formato', href: anchor(SECTION_IDS.catalog) },
      { label: 'DTF UV Industrial', href: anchor(SECTION_IDS.technology), highlight: true },
      { label: 'Serigrafía Técnica', href: anchor(SECTION_IDS.catalog) },
      { label: 'Bordado Computarizado', href: anchor(SECTION_IDS.catalog) },
      { label: 'Corte Láser & CNC', href: anchor(SECTION_IDS.catalog) },
      { label: 'Guardas de Acrílico', href: anchor(SECTION_IDS.catalog) },
    ],
  },
  {
    title: 'Corporativo',
    links: [
      { label: 'Inicio', href: anchor(SECTION_IDS.home) },
      { label: 'Tecnología & Maquinaria', href: anchor(SECTION_IDS.technology) },
      { label: 'Cotizador Rápido', href: anchor(SECTION_IDS.quote) },
      ...LEGAL_LINKS,
    ],
  },
]
