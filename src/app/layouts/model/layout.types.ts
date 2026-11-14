import type { LucideIcon } from 'lucide-react'

export interface NavItem {
  label: string
  to: string
  icon?: LucideIcon
  /** Coincidencia exacta para el estado activo. */
  end?: boolean
}

export interface FooterColumn {
  title: string
  links: NavItem[]
}
