import type { Service, ServiceSpecField } from '../model/landing.types'
import { IMAGES } from './images.data'

/** Orden, etiqueta e ícono de los campos de la ficha técnica del modal. */
export const SERVICE_SPEC_FIELDS: ServiceSpecField[] = [
  { key: 'substrates', label: 'Sustratos Compatibles', icon: 'layers' },
  { key: 'tech', label: 'Resolución & Tecnología', icon: 'memory' },
  { key: 'tolerances', label: 'Ancho Máximo & Tolerancias', icon: 'straighten' },
  { key: 'durability', label: 'Durabilidad Estimada', icon: 'verified_user' },
]

/**
 * Catálogo técnico de especialidades. Para agregar un servicio nuevo basta con
 * añadir un objeto aquí: la tarjeta, el modal y el enlace de WhatsApp se generan solos.
 */
export const SERVICES: Service[] = [
  {
    id: 'gran-formato',
    icon: 'print',
    name: 'Gran formato y digital',
    summary:
      'Lonas frontlit, viniles autoadhesivos de alta durabilidad y señalización corporativa de gran impacto.',
    ctaLabel: 'Consultar especificaciones',
    featured: false,
    detail: {
      title: 'Gran Formato & Digital',
      category: 'Publicidad & Señalética Industrial',
      whatsappMessage: 'Hola SGTI, deseo cotizar el servicio de Gran Formato y Digital',
      images: [
        {
          url: IMAGES.workshop,
          caption:
            'Impresión de alta resolución en lona frontlit 13oz con acabado mate antirreflejante',
        },
        {
          url: IMAGES.dtfMetals,
          caption:
            'Vinil autoadhesivo de polímero fundido con laminado mate para muros y vehículos',
        },
        {
          url: IMAGES.laserCnc,
          caption:
            'Backlight film traslúcido para cajas de luz corporativas y señalización nocturna',
        },
      ],
      specs: {
        substrates:
          'Lona frontlit 13oz, mesh microperforada, vinil microperforado, backlight film traslúcido y estireno cal. 30 a 60.',
        tech: 'Plotters industriales con cabezales piezoeléctricos de 1440 DPI reales y tintas resistentes a rayos UV.',
        tolerances:
          'Ancho de tiraje continuo hasta 3.20 metros en una sola pieza; sellado y dobladillo por alta frecuencia térmica.',
        durability: '3 a 5 años en exposición exterior continua bajo radiación solar severa.',
      },
      variants: [
        {
          title: 'Lona Frontlit Reforzada',
          description:
            'Dobladillo térmico perimetral y ojillos metálicos vulcanizados a cada 50 cm para tensión uniforme.',
        },
        {
          title: 'Vinil de Alta Adherencia',
          description:
            'Adhesivo permanente base solvente con laminación UV mate para flotillas y superficies porosas.',
        },
        {
          title: 'Banner Roll-up Display',
          description:
            'Montaje en mecanismo retráctil de aluminio anodizado con maletín de transporte reforzado.',
        },
      ],
    },
  },
  {
    id: 'dtf-uv',
    icon: 'auto_awesome',
    name: 'Impresión DTF UV',
    summary:
      'Transferencia directa sobre cualquier sustrato con relieve 3D táctil y barniz de alta durabilidad sin límite de color.',
    ctaLabel: 'Ver detalles tecnológicos',
    featured: true,
    detail: {
      title: 'Impresión DTF UV Industrial',
      category: 'Tecnología Direct-to-Film UV',
      whatsappMessage: 'Hola SGTI, deseo cotizar el servicio de Impresión DTF UV',
      images: [
        {
          url: IMAGES.dtfMetals,
          caption: 'Aplicación en termos metálicos con relieve táctil 3D y brillo focalizado',
        },
        {
          url: IMAGES.workshop,
          caption: 'Mesa de curado UV instantáneo por lámparas LED duales de alto rendimiento',
        },
        {
          url: IMAGES.acrylicGuards,
          caption: 'Transferencia directa sobre acrílico con adhesivo grado estructural',
        },
      ],
      specs: {
        substrates:
          'Acero inoxidable, vidrio, cerámica, maderas curadas, acrílico, fibra de carbono y plásticos ABS/PETG.',
        tech: 'Canales CMYK + Tinta Blanca de alta densidad + Barniz UV con lámparas frías de polimerización LED.',
        tolerances:
          'Resolución de micro-detalle de 2400 DPI con tolerancias de registro de ±0.03 mm entre capas.',
        durability:
          'Excelente resistencia al frote, lavavajillas mecánico, alcoholes ligeros y abrasión química moderada.',
      },
      variants: [
        {
          title: 'Relieve Táctil + Barniz',
          description:
            'Múltiples capas de barniz transparente localizado para crear textura 3D palpable al tacto.',
        },
        {
          title: 'Fondo Opaco con Tinta Blanca',
          description:
            'Base 100% sólida de blanco que asegura colores vibrantes aun sobre bases oscuras o transparentes.',
        },
        {
          title: 'Stickers DTF UV de Transferencia',
          description:
            'Entregados en pliegos o cortados individualmente para aplicación manual instantánea por presión.',
        },
      ],
    },
  },
  {
    id: 'serigrafia',
    icon: 'format_paint',
    name: 'Serigrafía técnica',
    summary:
      'Tirajes medianos y masivos con tintas epóxicas resistentes al calor, la intemperie y solventes químicos.',
    ctaLabel: 'Consultar especificaciones',
    featured: false,
    detail: {
      title: 'Serigrafía Técnica Industrial',
      category: 'Maquila & Procesos Especiales',
      whatsappMessage: 'Hola SGTI, deseo cotizar Serigrafía Técnica para un proyecto industrial',
      images: [
        {
          url: IMAGES.dtfMetals,
          caption: 'Serigrafía técnica sobre gabinetes metálicos con tinta epóxica bicomponente',
        },
        {
          url: IMAGES.embroidery,
          caption: 'Impresión en prendas textiles con tintas plastisol libres de ftalatos',
        },
      ],
      specs: {
        substrates:
          'Polímeros técnicos, policarbonato, aluminio anodizado, tela poliéster y cartón industrial.',
        tech: 'Mallas de poliéster monofilamento tensadas a 28 N/cm con tintas epóxicas, vinílicas o plastisoles.',
        tolerances:
          'Repetibilidad garantizada con matrices micrométricas en tirajes desde 100 hasta 50,000 unidades.',
        durability:
          'Inmune a solventes industriales, aceites de corte, calor térmico y exposición prolongada.',
      },
      variants: [
        {
          title: 'Epóxica Bicomponente para Metal',
          description:
            'Curado térmico en horno para máxima adherencia en carcasas de maquinaria y racks.',
        },
        {
          title: 'Serigrafía Textil Plastisol',
          description: 'Tirajes medianos con tacto suave y curado en túnel infrarrojo a 160°C.',
        },
        {
          title: 'Tinta Conductiva / Funcional',
          description:
            'Formulaciones especiales para teclados de membrana y carátulas de control operativo.',
        },
      ],
    },
  },
  {
    id: 'bordados',
    icon: 'dry_cleaning',
    name: 'Bordados industriales',
    summary:
      'Bordado computarizado de alta densidad para uniformes de planta, chalecos y camisolas de seguridad.',
    ctaLabel: 'Consultar especificaciones',
    featured: false,
    detail: {
      title: 'Bordados Industriales Computarizados',
      category: 'Textil & Seguridad Industrial',
      whatsappMessage: 'Hola SGTI, deseo cotizar Bordado Computarizado para uniformes',
      images: [
        {
          url: IMAGES.embroidery,
          caption: 'Bordado industrial de alta densidad sobre camisola de gabardina de uso rudo',
        },
        {
          url: IMAGES.workshop,
          caption: 'Línea de bordadoras multicabezal de 12 agujas para producción continua',
        },
      ],
      specs: {
        substrates:
          'Gabardina 100% algodón, mezclilla pesada, telas ripstop, nylon impermeable y gorras estructuradas.',
        tech: 'Bordadoras industriales Tajima multicabezal con sistema de corte automático de hilo superior e inferior.',
        tolerances:
          'Densidad calibrada de puntada (0.40 a 0.35 mm) con compensación de tensión según el tejido.',
        durability:
          'Hilos de poliéster trilobal 100% resistentes al cloro, lavados industriales y fricción mecánica.',
      },
      variants: [
        {
          title: 'Bordado Directo en Prenda',
          description:
            'Aplicado en pechera, mangas o espalda en camisolas, batas de laboratorio y chalecos brigadistas.',
        },
        {
          title: 'Parches Térmicos / Velcro',
          description:
            'Escudos bordados con orilla overlock (merrow) y respaldo termoadhesivo o velcro macho/hembra.',
        },
        {
          title: 'Bordado 3D con Espuma EVA',
          description:
            'Relieve volumétrico especial para gorras técnicas y prendas corporativas de alta gama.',
        },
      ],
    },
  },
  {
    id: 'corte-cnc',
    icon: 'precision_manufacturing',
    name: 'Corte láser y CNC',
    summary:
      'Corte y maquinado de precisión en acrílicos, MDF y polímeros técnicos para displays y piezas a medida.',
    ctaLabel: 'Consultar especificaciones',
    featured: false,
    detail: {
      title: 'Corte Láser & Mecanizado CNC',
      category: 'Maquinado & Prototipado Técnico',
      whatsappMessage: 'Hola SGTI, deseo cotizar Corte Láser o CNC en piezas especiales',
      images: [
        {
          url: IMAGES.laserCnc,
          caption:
            'Corte por fibra láser y CO2 en placas de acrílico cristal y compuestos técnicos',
        },
        {
          url: IMAGES.acrylicGuards,
          caption: 'Ruteado CNC de alta precisión en paneles poliméricos y estireno',
        },
      ],
      specs: {
        substrates:
          'Acrílico cristal y de color (2mm a 25mm), MDF, madera contrachapada, estireno, policarbonato y PVC espumado.',
        tech: 'Láser de CO2 de 150W asistido por gas nitrógeno y router CNC de 3 ejes con husillo refrigerado por agua.',
        tolerances:
          'Tolerancia geométrica dimensional de ±0.05 mm con repetibilidad de posicionamiento de 0.02 mm.',
        durability:
          'Cantos pulidos a flama o mecánicos, sin microfisuras por tensión térmica residual.',
      },
      variants: [
        {
          title: 'Corte y Grabado Láser CO2',
          description:
            'Bordes pulidos a espejo sin necesidad de retrabajo posterior en acrílicos ópticos.',
        },
        {
          title: 'Ruteado Tridimensional CNC',
          description:
            'Cajeado, biselado de bordes y perforación de barrenos calibrados para ensamble mecánico.',
        },
        {
          title: 'Letras en Bloque 3D para Fachadas',
          description:
            'Logos tridimensionales con pernos roscados traseros para fijación oculta a muros.',
        },
      ],
    },
  },
  {
    id: 'guardas',
    icon: 'shield',
    name: 'Guardas en acrílico',
    summary:
      'Diseño y fabricación de mamparas de seguridad y protecciones perimetrales para líneas de ensamble.',
    ctaLabel: 'Consultar especificaciones',
    featured: false,
    detail: {
      title: 'Guardas de Protección en Acrílico & Policarbonato',
      category: 'Seguridad Industrial & Maquinaria',
      whatsappMessage: 'Hola SGTI, deseo cotizar Guardas de Protección en Acrílico para planta',
      images: [
        {
          url: IMAGES.acrylicGuards,
          caption: 'Guarda termoformada con bisagras industriales y mirilla de alta transparencia',
        },
        {
          url: IMAGES.workshop,
          caption: 'Ensamble de mamparas de seguridad con perfilería de aluminio estructural',
        },
      ],
      specs: {
        substrates:
          'Acrílico colado alto impacto (4mm a 12mm), policarbonato compacto irrompible y PETG termoformable.',
        tech: 'Doblado térmico por hilo de nicrom, maquinado CNC de ranuras para enclavamientos de seguridad e interlocks.',
        tolerances:
          'Tolerancias de ensamble de ±0.1 mm cumpliendo directivas de protección en maquinaria industrial.',
        durability:
          'Alta resistencia mecánica al choque de rebabas, virutas metálicas y salpicaduras de aceites refrigerantes.',
      },
      variants: [
        {
          title: 'Guarda Abatible con Microswitch',
          description:
            'Perforaciones preparadas para sensores de parada de emergencia y bisagras de poliamida.',
        },
        {
          title: 'Mampara Perimetral para Ensamble',
          description:
            'Modulares desmontables para líneas de producción con perfil de aluminio ranurado 40x40.',
        },
        {
          title: 'Protección Curva Termoformada',
          description:
            'Piezas sin esquinas vivas que ofrecen visibilidad limpia de 180° hacia el punto de operación.',
        },
      ],
    },
  },
]
