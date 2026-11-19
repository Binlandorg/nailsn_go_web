import type { CategoryId } from '@/features/services/data/services'

export const categoryEvent = 'servicios:categoria'

export function selectCategory(id: CategoryId) {
  window.dispatchEvent(new CustomEvent<CategoryId>(categoryEvent, { detail: id }))
}
