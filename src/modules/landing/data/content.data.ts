import type {
  Client,
  GalleryItem,
  HeroContent,
  QuoteHighlight,
  Sector,
  Substrate,
} from '../model/landing.types'
import { IMAGES } from './images.data'

export const HERO: HeroContent = {
  eyebrow: 'Tecnología DTF UV & Manufactura Industrial',
  titleLead: 'Soluciones Gráficas e Industriales de ',
  titleHighlight: 'Máxima Precisión.',
  description:
    'Fabricación de guardas en acrílico, impresión DTF UV directa de alta adherencia, gran formato y bordados industriales con tolerancias exactas.',
  stats: [
    { value: '+15 Años', label: 'Experiencia de Planta' },
    { value: '24-48 h', label: 'Respuesta Técnica', highlight: true },
    { value: '100%', label: 'Garantía de Sustrato' },
  ],
  image: {
    src: IMAGES.workshop,
    alt: 'Taller de manufactura industrial de precisión con impresora DTF UV',
  },
  imageCaption: { label: 'Corte CNC & DTF UV', detail: '±0.05 mm precisión' },
}

/** Sustratos compatibles con DTF UV. */
export const SUBSTRATES: Substrate[] = [
  {
    icon: 'wine_bar',
    title: 'Vidrio & Cerámica',
    description: 'Botellas, tarros y cristalería comercial con relieve táctil.',
  },
  {
    icon: 'construction',
    title: 'Metales & Termos',
    description: 'Acero inoxidable, aluminio y gabinetes industriales.',
  },
  { icon: 'forest', title: 'Maderas & Piel', description: 'MDF, maderas finas, cuero genuino y vinipiel.' },
  {
    icon: 'layers',
    title: 'Acrílicos & Plásticos',
    description: 'Acrílico cristal, estireno y polímeros de ingeniería.',
  },
]

/** Muestrario de materiales y acabados. */
export const GALLERY: GalleryItem[] = [
  {
    image: { src: IMAGES.acrylicGuards, alt: 'Guardas de acrílico para maquinaria' },
    title: 'Guardas para Maquinaria',
    description: 'Acrílico 6mm termoformado de alta resistencia.',
  },
  {
    image: { src: IMAGES.dtfMetals, alt: 'Impresión DTF UV sobre termos metálicos' },
    title: 'Termos & Metales',
    description: 'Relieve tridimensional táctil con curado UV.',
  },
  {
    image: { src: IMAGES.embroidery, alt: 'Bordado industrial en uniformes' },
    title: 'Uniformes de Planta',
    description: 'Bordado computarizado sobre camisolas y gorras.',
  },
  {
    image: { src: IMAGES.laserCnc, alt: 'Corte láser CNC de letras 3D' },
    title: 'Letras 3D & Displays',
    description: 'Corte milimétrico para señalización arquitectónica.',
  },
]

/** Clientes mostrados en el carrusel infinito (marquee). */
export const CLIENTS: Client[] = [
  { name: 'KRAUS & CO', sector: 'Automotriz Tier 1', icon: 'directions_car' },
  { name: 'AEROVANCE', sector: 'Manufactura Aeroespacial', icon: 'flight_takeoff' },
  { name: 'NOVAPHARMA LABS', sector: 'Grado Químico & Sala Limpia', icon: 'medication' },
  { name: 'STEELTECH MX', sector: 'Metalmecánica & Maquila', icon: 'precision_manufacturing' },
  { name: 'GRUPO VANGUARD', sector: 'Retail & Puntos de Venta', icon: 'storefront' },
  { name: 'ENERGETIX CORP', sector: 'Equipamiento Industrial', icon: 'bolt' },
]

/** Sectores estratégicos atendidos. */
export const SECTORS: Sector[] = [
  { icon: 'precision_manufacturing', name: 'Manufactura Industrial', focus: 'Guardas & Señalética' },
  { icon: 'conveyor_belt', name: 'Líneas de Ensamble', focus: 'Componentes Acrílicos' },
  { icon: 'storefront', name: 'Empresas Comerciales', focus: 'POP & Branding Retail' },
  { icon: 'campaign', name: 'Agencias Publicitarias', focus: 'Maquila en Gran Formato' },
  { icon: 'business', name: 'Cadenas & Franquicias', focus: 'Uniformes & Merchandising' },
]

/** Beneficios bajo el cotizador directo. */
export const QUOTE_HIGHLIGHTS: QuoteHighlight[] = [
  { icon: 'verified', title: 'Tolerancia Exacta', description: 'Precisión milimétrica y fichas técnicas.' },
  { icon: 'schedule', title: 'Respuesta Rápida', description: '< 15 min en horario de planta.' },
  {
    icon: 'local_shipping',
    title: 'Envíos a Todo México',
    description: 'Maquila y entrega local e industrial.',
  },
]
