import type { ComponentType, SVGProps } from 'react'
import { BoltIcon, BrushIcon, GemIcon, ShieldIcon } from '../../../shared/components/icons/icons'

export interface Highlight {
  title: string
  description: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

export const highlights: Highlight[] = [
  {
    title: 'Higiene impecable',
    description: 'Instrumental esterilizado y limas de un solo uso en cada cita.',
    icon: ShieldIcon,
  },
  {
    title: 'Productos premium',
    description: 'Geles y esmaltes de alta gama que cuidan tu uña natural.',
    icon: GemIcon,
  },
  {
    title: 'Diseño a tu medida',
    description: 'Traes la idea —o una captura— y la hacemos realidad.',
    icon: BrushIcon,
  },
  {
    title: 'Glam & Go',
    description: 'Puntualidad real: sales perfecta y a tiempo para tu plan.',
    icon: BoltIcon,
  },
]
