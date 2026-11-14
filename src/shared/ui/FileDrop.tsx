import { useRef, useState, type DragEvent } from 'react'
import { FileUp, X } from 'lucide-react'
import { cn } from '@/lib/cn'

interface FileDropProps {
  label: string
  hint?: string
  accept?: string
  multiple?: boolean
  maxSizeMb?: number
  files: File[]
  onChange: (files: File[]) => void
  error?: string
}

const sizeLabel = (bytes: number) =>
  bytes > 1024 * 1024 ? `${(bytes / 1024 / 1024).toFixed(1)} MB` : `${Math.ceil(bytes / 1024)} KB`

/** Zona para soltar archivos de diseño (PDF, AI, PNG…). */
export function FileDrop({ label, hint, accept, multiple = true, maxSizeMb = 50, files, onChange, error }: FileDropProps) {
  const input = useRef<HTMLInputElement>(null)
  const [dragging, setDragging] = useState(false)
  const [localError, setLocalError] = useState<string>()

  const add = (list: FileList | null) => {
    if (!list) return
    const incoming = Array.from(list)
    const tooBig = incoming.find((f) => f.size > maxSizeMb * 1024 * 1024)
    if (tooBig) {
      setLocalError(`"${tooBig.name}" pesa más de ${maxSizeMb} MB. Comprime el archivo o envíalo por enlace.`)
      return
    }
    setLocalError(undefined)
    onChange(multiple ? [...files, ...incoming] : incoming.slice(0, 1))
  }

  const onDrop = (e: DragEvent) => {
    e.preventDefault()
    setDragging(false)
    add(e.dataTransfer.files)
  }

  const message = error ?? localError

  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-medium">{label}</span>
      <button
        type="button"
        onClick={() => input.current?.click()}
        onDragOver={(e) => {
          e.preventDefault()
          setDragging(true)
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
        className={cn(
          'flex flex-col items-center gap-2 rounded-md border border-dashed px-4 py-8 text-center transition-colors',
          dragging ? 'border-cyan bg-cyan/5' : message ? 'border-danger' : 'border-line-strong hover:border-ink',
        )}
      >
        <FileUp className="size-6 text-muted" aria-hidden />
        <span className="text-sm">
          <span className="font-medium underline underline-offset-2">Elige un archivo</span> o suéltalo aquí
        </span>
        {hint && <span className="text-[13px] text-muted">{hint}</span>}
      </button>
      <input ref={input} type="file" accept={accept} multiple={multiple} hidden onChange={(e) => add(e.target.files)} />
      {message && <p className="text-[13px] text-danger">{message}</p>}
      {files.length > 0 && (
        <ul className="flex flex-col gap-1.5">
          {files.map((f, i) => (
            <li key={`${f.name}-${i}`} className="flex items-center justify-between rounded-md bg-ink/4 px-3 py-2 text-sm">
              <span className="truncate">{f.name}</span>
              <span className="flex items-center gap-3">
                <span className="text-xs text-muted tabular-nums">{sizeLabel(f.size)}</span>
                <button type="button" aria-label={`Quitar ${f.name}`} onClick={() => onChange(files.filter((_, j) => j !== i))} className="text-muted hover:text-danger">
                  <X className="size-4" />
                </button>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
