import type { ComponentType, SVGProps } from 'react'
import { BrushIcon, GemIcon, HeartIcon, MapPinIcon } from '../../../shared/components/icons/icons'

export interface Highlight {
  title: string
  description: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

export const highlights: Highlight[] = [
  {
    title: 'Todo en un solo lugar',
    description: 'Uñas, cejas, pestañas, micropigmentación, faciales y depilación.',
    icon: GemIcon,
  },
  {
    title: 'Promos cada mes',
    description: 'Combos pensados para que te consientas sin gastar de más.',
    icon: HeartIcon,
  },
  {
    title: 'Diseños de temporada',
    description: 'Traes tu idea o una captura y la conversamos en tu cita.',
    icon: BrushIcon,
  },
  {
    title: 'En el Cono Norte',
    description: 'Retablo 729, Comas. Atención de lunes a domingo.',
    icon: MapPinIcon,
  },
]
