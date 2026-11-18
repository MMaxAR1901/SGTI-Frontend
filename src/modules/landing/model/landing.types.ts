/**
 * Tipos del dominio de la landing de SGTI.
 * Sin lógica: describen la forma de los datos que hoy vienen de `data/*.data.ts`
 * y mañana pueden venir de una API con la misma forma.
 */

/** Nombre de un ícono de Material Symbols Outlined (p. ej. "print"). */
export type IconName = string

export interface ImageAsset {
  src: string
  alt: string
}

/* ─── Navegación ─────────────────────────────────────────────────────────── */

export interface NavLink {
  label: string
  /** Ancla interna (`#catalogo`) o URL. */
  href: string
}

export interface FooterLink extends NavLink {
  highlight?: boolean
}

export interface FooterColumn {
  title: string
  links: FooterLink[]
}

/* ─── Catálogo de servicios ──────────────────────────────────────────────── */

export type ServiceId = string

export interface ServiceImage {
  url: string
  caption: string
}

export interface ServiceSpecs {
  substrates: string
  tech: string
  tolerances: string
  durability: string
}

export type ServiceSpecKey = keyof ServiceSpecs

/** Etiqueta e ícono con que se presenta cada campo de especificación. */
export interface ServiceSpecField {
  key: ServiceSpecKey
  label: string
  icon: IconName
}

export interface ServiceVariant {
  title: string
  description: string
}

export interface Service {
  id: ServiceId
  icon: IconName
  /** Título corto mostrado en la tarjeta del catálogo. */
  name: string
  /** Descripción corta de la tarjeta. */
  summary: string
  /** Texto del enlace que abre el modal. */
  ctaLabel: string
  featured: boolean
  /** Ficha técnica que se muestra en el modal. */
  detail: {
    title: string
    category: string
    whatsappMessage: string
    images: ServiceImage[]
    specs: ServiceSpecs
    variants: ServiceVariant[]
  }
}

/* ─── Contenido de secciones ─────────────────────────────────────────────── */

export interface Stat {
  value: string
  label: string
  highlight?: boolean
}

export interface HeroContent {
  eyebrow: string
  titleLead: string
  titleHighlight: string
  description: string
  stats: Stat[]
  image: ImageAsset
  imageCaption: { label: string; detail: string }
}

/** Sustrato compatible (sección DTF UV). */
export interface Substrate {
  icon: IconName
  title: string
  description: string
}

export interface GalleryItem {
  image: ImageAsset
  title: string
  description: string
}

export interface Client {
  name: string
  sector: string
  icon: IconName
}

export interface Sector {
  icon: IconName
  name: string
  focus: string
}

/** Paso del proceso de trabajo ("Cómo trabajamos"). */
export interface ProcessStep {
  title: string
  description: string
}

export interface QuoteHighlight {
  icon: IconName
  title: string
  description: string
}

/** Todo el contenido que la página necesita; lo entrega `landingService`. */
export interface LandingContent {
  hero: HeroContent
  services: Service[]
  substrates: Substrate[]
  gallery: GalleryItem[]
  clients: Client[]
  sectors: Sector[]
  quoteHighlights: QuoteHighlight[]
  process: ProcessStep[]
}
