import { Outlet } from 'react-router-dom'
import { useLandingLayoutVM } from '../../vm/useLandingLayoutVM'
import { useNavBarVM } from '../../vm/useNavBarVM'
import { FloatingWhatsApp, Footer, NavBar, TopBar } from '../components'

/**
 * Layout de la landing: aplica el tema SGTI (`.theme-sgti`) y monta
 * TopBar + NavBar + contenido + Footer + botón flotante de WhatsApp.
 */
export function LandingLayout() {
  const vm = useLandingLayoutVM()
  const nav = useNavBarVM()

  return (
    <div className="theme-sgti bg-background font-body-md text-on-surface flex min-h-screen flex-col antialiased">
      <TopBar {...vm.topBar} />
      <NavBar {...nav} />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer {...vm.footer} />
      <FloatingWhatsApp href={vm.floatingWhatsAppHref} />
    </div>
  )
}
