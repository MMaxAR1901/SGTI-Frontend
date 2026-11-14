import { PATHS } from '@/app/router/route-types'
import type { FooterColumn } from '../model/layout.types'

export const promoMessages = [
  'Envío gratis en pedidos desde $1,500',
  'Prueba digital sin costo antes de imprimir',
]

export const footerColumns: FooterColumn[] = [
  {
    title: 'Productos',
    links: [
      { label: 'Tarjetas de presentación', to: PATHS.category('tarjetas') },
      { label: 'Lonas y banners', to: PATHS.category('lonas') },
      { label: 'Vinil y rotulación', to: PATHS.category('vinil') },
      { label: 'Stickers y etiquetas', to: PATHS.category('stickers') },
      { label: 'Señalética', to: PATHS.category('senaletica') },
    ],
  },
  {
    title: 'Ayuda',
    links: [
      { label: 'Cómo preparar tu archivo', to: PATHS.catalog },
      { label: 'Tiempos de entrega', to: PATHS.catalog },
      { label: 'Cotizar un proyecto', to: PATHS.quote },
      { label: 'Mis pedidos', to: PATHS.orders },
    ],
  },
]
