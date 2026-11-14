import { useLocation, useNavigate } from 'react-router-dom'
import { PATHS } from '@/app/router/route-types'
import { email, minLength, required } from '@/lib/validators'
import { useForm } from '@/shared/hooks'
import { toast } from '@/shared/ui'
import { useAuth } from './useAuth'

export function useLoginVM() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = (location.state as { from?: string } | null)?.from

  const form = useForm(
    { email: '', password: '' },
    { email: [required('Escribe tu correo'), email()], password: [required('Escribe tu contraseña'), minLength(6)] },
  )

  const onSubmit = form.handleSubmit(async (values) => {
    try {
      const user = await login(values)
      toast.success(`Hola, ${user.name.split(' ')[0]}`)
      navigate(from ?? (user.role === 'admin' ? PATHS.admin : PATHS.home), { replace: true })
    } catch {
      toast.error('Correo o contraseña incorrectos. Revisa los datos e intenta de nuevo.')
    }
  })

  return { form, onSubmit }
}
