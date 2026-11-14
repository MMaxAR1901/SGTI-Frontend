import { useId, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { cn } from '@/lib/cn'
import { useEscapeKey, useLockBodyScroll } from '@/shared/hooks'
import { IconButton } from './IconButton'

interface DrawerProps {
  open: boolean
  onClose: () => void
  title: string
  children: ReactNode
  footer?: ReactNode
  side?: 'right' | 'left'
  className?: string
}

export function Drawer({ open, onClose, title, children, footer, side = 'right', className }: DrawerProps) {
  const titleId = useId()
  useLockBodyScroll(open)
  useEscapeKey(open, onClose)
  if (!open) return null

  return createPortal(
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 animate-fade-in bg-ink/40" onClick={onClose} aria-hidden />
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={cn(
          'absolute top-0 flex h-full w-full max-w-md flex-col bg-surface shadow-sheet',
          side === 'right' ? 'right-0 animate-drawer-in' : 'left-0',
          className,
        )}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-3">
          <h2 id={titleId} className="text-lg font-semibold">{title}</h2>
          <IconButton label="Cerrar" icon={<X className="size-5" />} onClick={onClose} className="-mr-2" />
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-4">{children}</div>
        {footer && <div className="border-t border-line px-5 py-4">{footer}</div>}
      </aside>
    </div>,
    document.body,
  )
}
