import { Outlet } from 'react-router-dom'
import { CropMarks, InkStrip } from '@/shared/ui'
import { Logo } from '../components'

export function AuthLayout() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="flex flex-col px-6 py-8 sm:px-12">
        <Logo />
        <main id="main" className="flex flex-1 items-center">
          <div className="w-full max-w-sm py-12">
            <Outlet />
          </div>
        </main>
      </div>
      <aside className="relative hidden items-center justify-center overflow-hidden bg-ink lg:flex">
        <div className="relative w-[62%] max-w-md">
          <CropMarks className="text-white/50" inset={-18} size={18} />
          <div className="aspect-[3/4] rounded-[2px] bg-paper p-10 shadow-2xl">
            <div className="flex h-full flex-col justify-between">
              <InkStrip />
              <p className="font-display text-4xl leading-[1.05] font-semibold text-ink">
                Tu pedido, de la pantalla al papel sin sorpresas.
              </p>
              <p className="text-sm text-muted">
                Revisamos cada archivo y te enviamos una prueba digital antes de imprimir.
              </p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}
