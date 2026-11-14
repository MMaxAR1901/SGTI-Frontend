export type QuoteStatus = 'new' | 'quoted' | 'won' | 'lost'

export interface QuoteRequest {
  id: string
  createdAt: string
  status: QuoteStatus
  projectType: string
  quantity: string
  dimensions: string
  dueDate: string
  description: string
  fileNames: string[]
  name: string
  email: string
  phone: string
  company: string
}

export type QuoteInput = Omit<QuoteRequest, 'id' | 'createdAt' | 'status'>
