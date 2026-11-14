import { CheckCircle2, Info, XCircle, X } from 'lucide-react'
import { createStore } from '@/lib/createStore'
import { cn } from '@/lib/cn'

type ToastTone = 'success' | 'error' | 'info'
interface ToastItem {
  id: number
  tone: ToastTone
  message: string
}

const useToasts = createStore<{ items: ToastItem[] }>({ items: [] })
let seq = 0

function push(tone: ToastTone, message: string, ms = 3500) {
  const id = ++seq
  useToasts.setState((s) => ({ items: [...s.items, { id, tone, message }] }))
  setTimeout(() => dismiss(id), ms)
}
function dismiss(id: number) {
  useToasts.setState((s) => ({ items: s.items.filter((t) => t.id !== id) }))
}

/** API imperativa: toast.success('Guardado') desde cualquier VM. */
export const toast = {
  success: (m: string) => push('success', m),
  error: (m: string) => push('error', m, 5000),
  info: (m: string) => push('info', m),
}

const icons = { success: CheckCircle2, error: XCircle, info: Info }
const tones = { success: 'text-success', error: 'text-danger', info: 'text-cyan-ink' }

export function Toaster() {
  const items = useToasts((s) => s.items)
  return (
    <div aria-live="polite" className="pointer-events-none fixed right-4 bottom-4 z-[60] flex w-full max-w-sm flex-col gap-2">
      {items.map((t) => {
        const Icon = icons[t.tone]
        return (
          <div key={t.id} className="pointer-events-auto flex animate-fade-in items-start gap-3 rounded-md border border-line bg-surface px-4 py-3 shadow-sheet">
            <Icon className={cn('mt-0.5 size-5 shrink-0', tones[t.tone])} aria-hidden />
            <p className="flex-1 text-sm">{t.message}</p>
            <button type="button" aria-label="Descartar" onClick={() => dismiss(t.id)} className="text-muted hover:text-ink">
              <X className="size-4" />
            </button>
          </div>
        )
      })}
    </div>
  )
}
