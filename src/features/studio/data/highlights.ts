import type { ComponentType, SVGProps } from 'react'
import { BrushIcon, GemIcon, HeartIcon, ShieldIcon } from '@/shared/components/icons/icons'

export interface Highlight {
  title: string
  description: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  pending?: boolean
}

export const highlights: Highlight[] = [
  {
    title: 'Todo en un solo lugar',
    description: 'Uñas, pedicure spa, pestañas, cejas, faciales y depilación.',
    icon: GemIcon,
  },
  {
    title: 'Pedicure spa',
    description: 'Sillones con tina para que te relajes mientras te atendemos.',
    icon: HeartIcon,
  },
  {
    title: 'Diseños a tu gusto',
    description: 'Trae tu idea o una captura y la conversamos en tu cita.',
    icon: BrushIcon,
  },
  {
    title: 'Higiene y esterilización',
    description: 'Cómo limpiamos y esterilizamos las herramientas en cada servicio.',
    icon: ShieldIcon,
    pending: true,
  },
]
