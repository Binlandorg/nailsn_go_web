import { photos } from '../../../config/photos'

export interface Service {
  id: string
  name: string
  description: string
  duration: string
  price: string
  image: string
  featured?: boolean
}

// TODO: ajustar precios y duraciones reales.
export const services: Service[] = [
  {
    id: 'manicure',
    name: 'Manicure clásica',
    description: 'Limado, cutícula y esmaltado tradicional con un acabado impecable.',
    duration: '45 min',
    price: '$15',
    image: photos.nudeManicure,
  },
  {
    id: 'gel',
    name: 'Semipermanente',
    description: 'Color intenso y brillo espejo que dura hasta tres semanas.',
    duration: '60 min',
    price: '$25',
    image: photos.lilacGlitter,
  },
  {
    id: 'nail-art',
    name: 'Nail art glam',
    description: 'Diseños únicos a mano alzada: corazones, chrome, francesas y lo que imagines.',
    duration: '90 min',
    price: '$35',
    image: photos.colorArt,
    featured: true,
  },
  {
    id: 'acrilicas',
    name: 'Uñas acrílicas',
    description: 'Extensiones esculpidas con la forma y largo que siempre soñaste.',
    duration: '120 min',
    price: '$40',
    image: photos.gelProcess,
  },
  {
    id: 'pedicure',
    name: 'Pedicure spa',
    description: 'Baño relajante, exfoliación e hidratación profunda para tus pies.',
    duration: '60 min',
    price: '$25',
    image: photos.pedicure,
  },
  {
    id: 'soft-french',
    name: 'Soft french & baby boomer',
    description: 'El clásico elegante en versión degradada, sutil y siempre en tendencia.',
    duration: '75 min',
    price: '$30',
    image: photos.softFrench,
  },
]
