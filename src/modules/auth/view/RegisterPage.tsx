import { Link } from 'react-router-dom'
import { PATHS } from '@/app/router/route-types'
import { Button, Input } from '@/shared/ui'
import { useRegisterVM } from '../vm/useRegisterVM'

export function RegisterPage() {
  const { form, onSubmit } = useRegisterVM()
  return (
    <div>
      <h1 className="text-3xl font-semibold">Crea tu cuenta</h1>
      <p className="mt-2 text-muted">Guarda tus datos de envío y repite pedidos en un clic.</p>
      <form onSubmit={onSubmit} noValidate className="mt-8 flex flex-col gap-4">
        <Input label="Nombre completo" autoComplete="name" required {...form.bind('name')} />
        <Input label="Correo" type="email" autoComplete="email" required {...form.bind('email')} />
        <div className="grid gap-4 sm:grid-cols-2">
          <Input label="Teléfono" type="tel" autoComplete="tel" required {...form.bind('phone')} />
          <Input label="Empresa" hint="Opcional" autoComplete="organization" {...form.bind('company')} />
        </div>
        <Input label="Contraseña" type="password" autoComplete="new-password" hint="Mínimo 8 caracteres" required {...form.bind('password')} />
        <Button type="submit" size="lg" loading={form.submitting} fullWidth className="mt-2">Crear cuenta</Button>
      </form>
      <p className="mt-6 text-sm text-muted">
        ¿Ya tienes cuenta?{' '}
        <Link to={PATHS.login} className="font-medium text-ink underline underline-offset-2">Ingresa</Link>
      </p>
    </div>
  )
}
