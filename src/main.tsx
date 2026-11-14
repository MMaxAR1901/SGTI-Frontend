import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from '@/app/bootstrap'
import { initGlobalErrorTracking } from '@/lib/globalErrorTracking'
import './index.css'

initGlobalErrorTracking()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
