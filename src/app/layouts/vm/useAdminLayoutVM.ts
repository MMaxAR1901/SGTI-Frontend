import { useNavigate } from 'react-router-dom'
import { PATHS } from '@/app/router/route-types'
import { useAuth } from '@/modules/auth'
import { useDisclosure } from '@/shared/hooks'

export function useAdminLayoutVM() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const sidebar = useDisclosure()

  const signOut = () => {
    logout()
    navigate(PATHS.home)
  }

  return { user, signOut, sidebar }
}
