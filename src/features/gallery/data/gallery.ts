import { photos } from '../../../config/photos'

export interface GalleryPost {
  id: string
  image: string
  alt: string
  size?: 'tall' | 'wide'
}

export const galleryPosts: GalleryPost[] = [
  { id: 'pink', image: photos.pinkNails, alt: 'Manicure rosa chicle', size: 'tall' },
  { id: 'love', image: photos.loveNails, alt: 'Nail art de corazones' },
  { id: 'chrome', image: photos.goldChrome, alt: 'Uñas chrome dorado y negro' },
  { id: 'glitter', image: photos.lilacGlitter, alt: 'Semipermanente lila con glitter' },
  { id: 'art', image: photos.colorArt, alt: 'Nail art multicolor', size: 'tall' },
  { id: 'flatlay', image: photos.pinkFlatlay, alt: 'Flatlay de maquillaje en rosa', size: 'wide' },
  { id: 'dark', image: photos.darkChic, alt: 'Diseño carey y negro' },
  { id: 'french', image: photos.softFrench, alt: 'Soft french con detalle' },
]
