import { Link } from 'react-router-dom'
import { PATHS } from '@/app/router/route-types'
import { Button, Input } from '@/shared/ui'
import { useLoginVM } from '../vm/useLoginVM'

export function LoginPage() {
  const { form, onSubmit } = useLoginVM()
  return (
    <div>
      <h1 className="text-3xl font-semibold">Ingresa a tu cuenta</h1>
      <p className="mt-2 text-muted">Consulta tus pedidos, pruebas digitales y archivos.</p>
      <form onSubmit={onSubmit} noValidate className="mt-8 flex flex-col gap-4">
        <Input label="Correo" type="email" autoComplete="email" {...form.bind('email')} />
        <Input label="Contraseña" type="password" autoComplete="current-password" {...form.bind('password')} />
        <Button type="submit" size="lg" loading={form.submitting} fullWidth className="mt-2">Ingresar</Button>
      </form>
      <p className="mt-6 text-sm text-muted">
        ¿Primera vez aquí?{' '}
        <Link to={PATHS.register} className="font-medium text-ink underline underline-offset-2">Crea una cuenta</Link>
      </p>
      <p className="mt-8 rounded-md bg-cyan/8 px-3 py-2 text-[13px] text-cyan-ink">
        Modo demo: cualquier correo funciona. Usa uno que empiece con <b>admin@</b> para ver el panel.
      </p>
    </div>
  )
}
