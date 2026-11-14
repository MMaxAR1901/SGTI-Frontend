import { useCallback, useState, type FormEvent } from 'react'
import type { Validator } from '@/lib/validators'

type Rules<T> = { [K in keyof T]?: Validator<T[K]>[] }
type Errors<T> = Partial<Record<keyof T, string>>

/**
 * Formulario controlado y tipado, sin dependencias.
 * const form = useForm({ email: '' }, { email: [required(), email()] })
 */
export function useForm<T extends Record<string, unknown>>(initial: T, rules: Rules<T> = {}) {
  const [values, setValues] = useState<T>(initial)
  const [errors, setErrors] = useState<Errors<T>>({})
  const [submitting, setSubmitting] = useState(false)

  const validateField = useCallback(
    <K extends keyof T>(key: K, value: T[K]) => {
      for (const rule of rules[key] ?? []) {
        const msg = rule(value)
        if (msg) return msg
      }
      return undefined
    },
    [rules],
  )

  const setField = useCallback(
    <K extends keyof T>(key: K, value: T[K]) => {
      setValues((v) => ({ ...v, [key]: value }))
      setErrors((e) => (e[key] ? { ...e, [key]: validateField(key, value) } : e))
    },
    [validateField],
  )

  const validate = useCallback(() => {
    const next: Errors<T> = {}
    for (const key of Object.keys(rules) as (keyof T)[]) {
      const msg = validateField(key, values[key])
      if (msg) next[key] = msg
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }, [rules, validateField, values])

  /** Helper para inputs nativos: {...bind('email')} */
  const bind = <K extends keyof T>(key: K) => ({
    name: String(key),
    value: values[key] as unknown as string,
    error: errors[key],
    onChange: (e: { target: { value: string } }) => setField(key, e.target.value as T[K]),
    onBlur: () => setErrors((er) => ({ ...er, [key]: validateField(key, values[key]) })),
  })

  const handleSubmit = (onValid: (values: T) => void | Promise<void>) => async (e?: FormEvent) => {
    e?.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    try {
      await onValid(values)
    } finally {
      setSubmitting(false)
    }
  }

  return { values, errors, setField, setErrors, validate, bind, handleSubmit, submitting, reset: () => setValues(initial) }
}
