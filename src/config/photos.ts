import fachada from '../assets/photos/fachada.webp'
import interior from '../assets/photos/interior.webp'
import recepcion from '../assets/photos/recepcion.webp'

export const photos = {
  fachada: { src: fachada, width: 1024, height: 1007 },
  interior: { src: interior, width: 473, height: 1020 },
  recepcion: { src: recepcion, width: 765, height: 1020 },
} as const

export const heroVideo = {
  vertical: '/video/hero-vertical.mp4',
  horizontal: '/video/hero-horizontal.mp4',
} as const
