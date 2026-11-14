import { useState, type FormEvent } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { PATHS } from '@/app/router/route-types'
import { useAuth } from '@/modules/auth'
import { useCartCount, useCartDrawer } from '@/modules/cart'
import { useDisclosure } from '@/shared/hooks'

export function useStoreHeaderVM() {
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const [query, setQuery] = useState(params.get('q') ?? '')
  const mobileMenu = useDisclosure()
  const cartDrawer = useCartDrawer()
  const cartCount = useCartCount()
  const { user, logout } = useAuth()

  const submitSearch = (e: FormEvent) => {
    e.preventDefault()
    const q = query.trim()
    navigate(q ? `${PATHS.catalog}?q=${encodeURIComponent(q)}` : PATHS.catalog)
    mobileMenu.close()
  }

  return { query, setQuery, submitSearch, mobileMenu, cartDrawer, cartCount, user, logout }
}
