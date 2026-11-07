import type { CSSProperties, ReactNode } from 'react'
import { useInView } from '../../hooks/useInView'
import { cn } from '../../utils/cn'
import styles from './Reveal.module.css'

type RevealVariant = 'up' | 'left' | 'right' | 'zoom' | 'fade' | 'tilt'

interface RevealProps {
  children: ReactNode
  variant?: RevealVariant
  delay?: number
  className?: string
}

/** Anima su contenido la primera vez que entra en pantalla. */
export function Reveal({ children, variant = 'up', delay = 0, className }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={cn(styles.reveal, styles[variant], inView && styles.visible, className)}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  )
}
