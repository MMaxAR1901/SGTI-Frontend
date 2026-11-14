import type { ProcessStep } from '../model/home.types'

export const PROCESS_STEPS: ProcessStep[] = [
  { title: 'Configura tu producto', description: 'Elige material, medida, acabado y cantidad. El precio se actualiza al momento.' },
  { title: 'Sube tu archivo', description: 'PDF, AI, PSD o imagen. Si no lo tienes listo, puedes enviarlo después.' },
  { title: 'Aprueba la prueba digital', description: 'Revisamos medidas, resolución y rebases, y te mandamos una prueba sin costo.' },
  { title: 'Producimos y entregamos', description: 'Imprimimos y enviamos a todo México, o lo recoges en sucursal.' },
]

export const FILE_TIPS = [
  { title: 'Rebase de 3 mm', body: 'Extiende el fondo 3 mm por lado para que el corte no deje filos blancos.' },
  { title: '300 dpi al tamaño real', body: 'Imágenes con menos resolución se ven pixeladas al imprimir.' },
  { title: 'Textos en curvas', body: 'Convierte tipografías a contornos o incrústalas en el PDF.' },
  { title: 'Modo CMYK', body: 'Los colores RGB de pantalla cambian al imprimirse; conviértelos antes.' },
]
