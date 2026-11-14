import { useState } from 'react'
import { analytics } from '@/lib/analytics'
import { email, phoneMx, required } from '@/lib/validators'
import { useAuth } from '@/modules/auth'
import { CATEGORIES } from '@/modules/catalog'
import { useForm } from '@/shared/hooks'
import { toast } from '@/shared/ui'
import { quotesService } from '../data/quotes.service'
import type { QuoteRequest } from '../model/quote.types'

export const PROJECT_TYPES = [
  ...CATEGORIES.map((c) => ({ value: c.id, label: c.name })),
  { value: 'otro', label: 'Otro / combinación' },
]

export function useQuoteVM() {
  const { user } = useAuth()
  const [files, setFiles] = useState<File[]>([])
  const [submitted, setSubmitted] = useState<QuoteRequest>()

  const form = useForm(
    {
      projectType: '',
      quantity: '',
      dimensions: '',
      dueDate: '',
      description: '',
      name: user?.name ?? '',
      email: user?.email ?? '',
      phone: user?.phone ?? '',
      company: user?.company ?? '',
    },
    {
      projectType: [required('Elige el tipo de proyecto')],
      quantity: [required('Indica una cantidad aproximada')],
      description: [required('Cuéntanos qué necesitas')],
      name: [required('Escribe tu nombre')],
      email: [required('Escribe tu correo'), email()],
      phone: [phoneMx()],
    },
  )

  const onSubmit = form.handleSubmit(async (values) => {
    try {
      const quote = await quotesService.create({ ...values, fileNames: files.map((f) => f.name) })
      analytics.track('quote_requested', { type: values.projectType })
      setSubmitted(quote)
    } catch {
      toast.error('No pudimos enviar tu solicitud. Revisa tu conexión e intenta de nuevo.')
    }
  })

  const restart = () => {
    form.reset()
    setFiles([])
    setSubmitted(undefined)
  }

  return { form, files, setFiles, onSubmit, submitted, restart, minDate: new Date().toISOString().slice(0, 10) }
}
