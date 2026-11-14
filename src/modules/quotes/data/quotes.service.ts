import { delay, hasApi, http } from '@/lib/http'
import type { QuoteInput, QuoteRequest } from '../model/quote.types'
import { useQuotesStore } from './quotes.store'

export const quotesService = {
  async create(input: QuoteInput): Promise<QuoteRequest> {
    if (hasApi) return http<QuoteRequest>('/quotes', { method: 'POST', body: JSON.stringify(input) })
    await delay(700)
    const quote: QuoteRequest = {
      ...input,
      id: `COT-${2211 + Math.floor(Math.random() * 800)}`,
      createdAt: new Date().toISOString(),
      status: 'new',
    }
    useQuotesStore.setState((s) => ({ quotes: [quote, ...s.quotes] }))
    return quote
  },

  async list(): Promise<QuoteRequest[]> {
    if (hasApi) return http<QuoteRequest[]>('/admin/quotes')
    await delay(150)
    return useQuotesStore.getState().quotes
  },
}
