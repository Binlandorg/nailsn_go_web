import type { CategoryId } from '../../services/data/services'

export interface GalleryItem {
  category: CategoryId
  title: string
  image?: string
}

export const gallery: GalleryItem[] = [
  { category: 'unas', title: 'Manicure' },
  { category: 'unas', title: 'Diseños' },
  { category: 'unas', title: 'Sistema de uñas' },
  { category: 'pedicure', title: 'Pedicure spa' },
  { category: 'pestanas-cejas', title: 'Pestañas' },
  { category: 'pestanas-cejas', title: 'Cejas' },
  { category: 'faciales', title: 'Facial' },
  { category: 'depilacion', title: 'Depilación' },
]
