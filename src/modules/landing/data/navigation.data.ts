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

/** Enlaces del menú principal (header y menú móvil). */
export const MAIN_NAV: NavLink[] = [
  { label: 'Servicios', href: anchor(SECTION_IDS.catalog) },
  { label: 'Tecnología', href: anchor(SECTION_IDS.technology) },
  { label: 'Nosotros', href: anchor(SECTION_IDS.about) },
]

export const LEGAL_LINKS: NavLink[] = [
  { label: 'Aviso de privacidad', href: '#aviso-privacidad' },
  { label: 'Términos y condiciones', href: '#terminos' },
]

/** Columnas de enlaces del footer. */
export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Servicios',
    links: [
      { label: 'Gran formato', href: anchor(SECTION_IDS.catalog) },
      { label: 'Impresión DTF UV', href: anchor(SECTION_IDS.technology) },
      { label: 'Serigrafía técnica', href: anchor(SECTION_IDS.catalog) },
      { label: 'Bordado industrial', href: anchor(SECTION_IDS.catalog) },
      { label: 'Corte láser y CNC', href: anchor(SECTION_IDS.catalog) },
      { label: 'Guardas en acrílico', href: anchor(SECTION_IDS.catalog) },
    ],
  },
]
