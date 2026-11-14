import { Suspense, useEffect, type ComponentType, type ReactNode } from 'react'
import { createBrowserRouter, useLocation, type RouteObject } from 'react-router-dom'
import { AdminLayout, AuthLayout, StoreLayout } from '@/app/layouts'
// Import directo (no vía index.ts) para no arrastrar LandingPage fuera de su chunk lazy.
import { LandingLayout } from '@/modules/landing/view/layout/LandingLayout'
import { PageLoader } from '@/shared/ui'
import { useDocumentTitle } from '@/shared/hooks'
import { analytics } from '@/lib/analytics'
import { routeRegistry } from './route-registry'
import { RouteGuardGate } from './route-guards'
import { NotFoundPage } from './lazy-components'
import type { AppRoute, LayoutKey } from './route-types'

const layouts: Record<LayoutKey, ComponentType> = {
  landing: LandingLayout,
  store: StoreLayout,
  auth: AuthLayout,
  admin: AdminLayout,
}

function RoutePage({ route, children }: { route: AppRoute; children: ReactNode }) {
  const location = useLocation()
  useDocumentTitle(route.title)
  useEffect(() => {
    window.scrollTo({ top: 0 })
    analytics.pageView(location.pathname, route.title)
  }, [location.pathname, route.title])
  return <>{children}</>
}

function toRouteObject(route: AppRoute): RouteObject {
  const Page = route.component
  const element = (
    <RouteGuardGate guard={route.guard}>
      <RoutePage route={route}>
        <Suspense fallback={<PageLoader />}>
          <Page />
        </Suspense>
      </RoutePage>
    </RouteGuardGate>
  )
  return route.path === '' ? { index: true, element } : { path: route.path, element }
}

function buildRoutes(): RouteObject[] {
  const byLayout = (Object.keys(layouts) as LayoutKey[]).map((key) => {
    const Layout = layouts[key]
    return {
      element: <Layout />,
      children: routeRegistry.filter((r) => r.layout === key).map(toRouteObject),
    } satisfies RouteObject
  })

  const Store = layouts.store
  return [
    {
      path: '/',
      children: [
        ...byLayout,
        {
          element: <Store />,
          children: [
            {
              path: '*',
              element: (
                <Suspense fallback={<PageLoader />}>
                  <NotFoundPage />
                </Suspense>
              ),
            },
          ],
        },
      ],
    },
  ]
}

export const router = createBrowserRouter(buildRoutes())
