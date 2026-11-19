import { site } from '../../../config/site'

export const heroStats = [
  { value: site.instagram.followers, label: 'seguidores en Instagram' },
  { value: 'L–D', label: 'atención toda la semana' },
  { value: '3 en 1', label: 'uñas, mirada y rostro' },
]

export const currentMonth = new Intl.DateTimeFormat('es-PE', { month: 'long' }).format(new Date())
