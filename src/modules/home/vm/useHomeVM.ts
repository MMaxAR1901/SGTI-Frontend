import { CATEGORIES, catalogService, useAsync } from '@/modules/catalog'

export function useHomeVM() {
  const { data: featured = [], loading } = useAsync(() => catalogService.featured(), [])
  return { featured, loading, categories: CATEGORIES }
}
