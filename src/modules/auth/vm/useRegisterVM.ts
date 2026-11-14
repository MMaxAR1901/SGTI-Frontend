import { useNavigate } from 'react-router-dom'
import { PATHS } from '@/app/router/route-types'
import { email, minLength, phoneMx, required } from '@/lib/validators'
import { useForm } from '@/shared/hooks'
import { toast } from '@/shared/ui'
import { useAuth } from './useAuth'

export function useRegisterVM() {
  const { register } = useAuth()
  const navigate = useNavigate()

  const form = useForm(
    { name: '', email: '', phone: '', company: '', password: '' },
    {
      name: [required('Escribe tu nombre')],
      email: [required('Escribe tu correo'), email()],
      phone: [required('Escribe un teléfono de contacto'), phoneMx()],
      password: [required('Crea una contraseña'), minLength(8)],
    },
  )

  const onSubmit = form.handleSubmit(async (values) => {
    await register(values)
    toast.success('Cuenta creada')
    navigate(PATHS.home, { replace: true })
  })

  return { form, onSubmit }
}
