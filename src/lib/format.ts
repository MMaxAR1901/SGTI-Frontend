const currency = new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' })
const number = new Intl.NumberFormat('es-MX')
const date = new Intl.DateTimeFormat('es-MX', { day: '2-digit', month: 'short', year: 'numeric' })

export const formatCurrency = (value: number) => currency.format(value)
export const formatNumber = (value: number) => number.format(value)
export const formatDate = (value: string | Date) => date.format(new Date(value))

export function pluralize(count: number, singular: string, plural = `${singular}s`) {
  return `${formatNumber(count)} ${count === 1 ? singular : plural}`
}
