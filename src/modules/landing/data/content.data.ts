import type {
  Client,
  GalleryItem,
  HeroContent,
  ProcessStep,
  QuoteHighlight,
  Sector,
  Substrate,
} from '../model/landing.types'
import { IMAGES } from './images.data'

export const HERO: HeroContent = {
  eyebrow: 'DTF UV y manufactura industrial',
  titleLead: 'Soluciones gráficas e industriales de ',
  titleHighlight: 'máxima precisión.',
  description:
    'Guardas en acrílico, impresión DTF UV de alta adherencia, gran formato y bordado industrial con tolerancias exactas.',
  stats: [
    { value: '+15 años', label: 'Experiencia de planta' },
    { value: '24–48 h', label: 'Respuesta técnica' },
    { value: '100%', label: 'Garantía de sustrato' },
  ],
  image: {
    src: IMAGES.workshop,
    alt: 'Taller de manufactura industrial de precisión con impresora DTF UV',
  },
  imageCaption: { label: 'Corte CNC y DTF UV', detail: '±0.05 mm' },
}

/** Sustratos compatibles con DTF UV. */
export const SUBSTRATES: Substrate[] = [
  {
    icon: 'wine_bar',
    title: 'Vidrio y cerámica',
    description: 'Botellas, tarros y cristalería comercial con relieve táctil.',
  },
  {
    icon: 'construction',
    title: 'Metales y termos',
    description: 'Acero inoxidable, aluminio y gabinetes industriales.',
  },
  {
    icon: 'forest',
    title: 'Maderas y piel',
    description: 'MDF, maderas finas, cuero genuino y vinipiel.',
  },
  {
    icon: 'layers',
    title: 'Acrílicos y plásticos',
    description: 'Acrílico cristal, estireno y polímeros de ingeniería.',
  },
]

/** Pasos de "Cómo trabajamos". */
export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: 'Envía tu archivo',
    description: 'PDF con 3 mm de rebase. Si no lo tienes listo, lo adaptamos por ti.',
  },
  {
    title: 'Revisa la prueba digital',
    description: 'Validamos medidas, colores y rebases antes de producir.',
  },
  {
    title: 'Recibe tu pedido',
    description: 'Producción en planta y entrega o recolección en sucursal.',
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
  {
    icon: 'precision_manufacturing',
    name: 'Manufactura Industrial',
    focus: 'Guardas & Señalética',
  },
  { icon: 'conveyor_belt', name: 'Líneas de Ensamble', focus: 'Componentes Acrílicos' },
  { icon: 'storefront', name: 'Empresas Comerciales', focus: 'POP & Branding Retail' },
  { icon: 'campaign', name: 'Agencias Publicitarias', focus: 'Maquila en Gran Formato' },
  { icon: 'business', name: 'Cadenas & Franquicias', focus: 'Uniformes & Merchandising' },
]

/** Beneficios bajo el cotizador directo. */
export const QUOTE_HIGHLIGHTS: QuoteHighlight[] = [
  {
    icon: 'verified',
    title: 'Tolerancia Exacta',
    description: 'Precisión milimétrica y fichas técnicas.',
  },
  { icon: 'schedule', title: 'Respuesta Rápida', description: '< 15 min en horario de planta.' },
  {
    icon: 'local_shipping',
    title: 'Envíos a Todo México',
    description: 'Maquila y entrega local e industrial.',
  },
]
