import { referencePhotos } from '@/config/photos'
import type { CategoryId } from '@/features/services/data/services'

export interface GalleryItem {
  category: CategoryId
  title: string
  image?: string
  alt?: string
  size?: 'tall' | 'wide'
}

export const gallery: GalleryItem[] = [
  { category: 'unas', title: 'Manicure rosa', image: referencePhotos.pinkNails, alt: 'Manicure rosa chicle', size: 'tall' },
  { category: 'unas', title: 'Nail art', image: referencePhotos.loveNails, alt: 'Nail art de corazones' },
  { category: 'unas', title: 'Chrome dorado', image: referencePhotos.goldChrome, alt: 'Uñas chrome dorado y negro' },
  { category: 'unas', title: 'Glitter lila', image: referencePhotos.lilacGlitter, alt: 'Esmaltado lila con glitter' },
  { category: 'unas', title: 'Diseños', image: referencePhotos.colorArt, alt: 'Nail art multicolor', size: 'tall' },
  { category: 'pedicure', title: 'Pedicure spa', image: referencePhotos.pedicure, alt: 'Pedicure con esmalte claro' },
  { category: 'unas', title: 'Soft french', image: referencePhotos.softFrench, alt: 'Soft french con detalle' },
  { category: 'unas', title: 'Carey', image: referencePhotos.darkChic, alt: 'Diseño carey y negro' },
  { category: 'unas', title: 'Nude', image: referencePhotos.nudeManicure, alt: 'Manicure en tono nude' },
  { category: 'unas', title: 'Esmaltado en gel', image: referencePhotos.gelProcess, alt: 'Proceso de esmaltado en gel' },
  { category: 'pestanas-cejas', title: 'Pestañas' },
  { category: 'pestanas-cejas', title: 'Cejas' },
  { category: 'faciales', title: 'Facial' },
  { category: 'depilacion', title: 'Depilación' },
]
