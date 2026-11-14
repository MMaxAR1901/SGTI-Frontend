import { createStore } from '@/lib/createStore'
import type { QuoteRequest } from '../model/quote.types'

export const useQuotesStore = createStore<{ quotes: QuoteRequest[] }>(
  {
    quotes: [
      {
        id: 'COT-2210',
        createdAt: new Date(Date.now() - 86_400_000).toISOString(),
        status: 'new',
        projectType: 'senaletica',
        quantity: '12 letreros',
        dimensions: '60 × 40 cm',
        dueDate: '',
        description: 'Señalética interior para oficinas: salas, baños y rutas de evacuación.',
        fileNames: ['plano-oficina.pdf'],
        name: 'Laura Méndez',
        email: 'laura@ejemplo.mx',
        phone: '5511122233',
        company: 'Coworking Norte',
      },
    ],
  },
  { persist: 'sgti.quotes' },
)
