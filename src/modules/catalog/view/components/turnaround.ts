export function turnaroundLabel(days: number) {
  if (days <= 1) return 'Listo en 24 h'
  return `Listo en ${days} días hábiles`
}
