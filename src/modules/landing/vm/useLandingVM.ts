import { useEffect, useState } from 'react'
import { reportError } from '@/lib/globalErrorTracking'
import { LANDING_CONTENT, landingService } from '../data/landing.service'
import type { LandingContent } from '../model/landing.types'
import { useSpecModalVM } from './useSpecModalVM'

/**
 * ViewModel de la página: carga el contenido (local o API) y expone el modal.
 * Arranca con el contenido local para que la página pinte sin parpadeo.
 */
export function useLandingVM() {
  const [content, setContent] = useState<LandingContent>(LANDING_CONTENT)

  useEffect(() => {
    let alive = true
    landingService
      .getContent()
      .then((data) => alive && setContent(data))
      .catch((err) => reportError(err, { scope: 'landing' }))
    return () => {
      alive = false
    }
  }, [])

  const specModal = useSpecModalVM(content.services)

  return { ...content, specModal }
}
