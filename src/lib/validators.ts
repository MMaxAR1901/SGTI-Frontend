export type Validator<V> = (value: V) => string | undefined

export const required =
  (message = 'Este campo es obligatorio'): Validator<unknown> =>
  (v) =>
    v === undefined || v === null || (typeof v === 'string' && v.trim() === '') ? message : undefined

export const email =
  (message = 'Escribe un correo válido, por ejemplo nombre@empresa.com'): Validator<string> =>
  (v) =>
    !v || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? undefined : message

export const phoneMx =
  (message = 'Escribe un teléfono de 10 dígitos'): Validator<string> =>
  (v) =>
    !v || /^\d{10}$/.test(v.replace(/\D/g, '')) ? undefined : message

export const minLength =
  (n: number, message = `Usa al menos ${n} caracteres`): Validator<string> =>
  (v) =>
    !v || v.length >= n ? undefined : message

export const postalCodeMx =
  (message = 'El código postal tiene 5 dígitos'): Validator<string> =>
  (v) =>
    !v || /^\d{5}$/.test(v) ? undefined : message
