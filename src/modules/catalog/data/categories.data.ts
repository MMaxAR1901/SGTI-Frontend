import type { Category } from '../model/catalog.types'

export const CATEGORIES: Category[] = [
  { id: 'tarjetas', name: 'Tarjetas', description: 'De presentación, premium y con acabados especiales.', art: 'cards' },
  { id: 'lonas', name: 'Lonas y banners', description: 'Exterior e interior, con ojillos o bastilla.', art: 'banner' },
  { id: 'vinil', name: 'Vinil', description: 'Impreso, de corte y microperforado para escaparates.', art: 'vinyl' },
  { id: 'stickers', name: 'Stickers y etiquetas', description: 'Troquelados, en hoja o en rollo.', art: 'stickers' },
  { id: 'impresos', name: 'Volantes y folletos', description: 'Flyers, trípticos y menús.', art: 'flyers' },
  { id: 'senaletica', name: 'Señalética', description: 'Letreros, roll-ups y displays.', art: 'sign' },
  { id: 'empaques', name: 'Empaques', description: 'Cajas plegadizas y bolsas personalizadas.', art: 'box' },
  { id: 'diseno', name: 'Diseño', description: 'Logotipos, identidad y adaptación de artes.', art: 'design' },
]

export const getCategory = (id: string) => CATEGORIES.find((c) => c.id === id)
