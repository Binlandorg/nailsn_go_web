import type { ReactNode } from 'react'
import { cn } from '../../utils/cn'
import { useReveal } from './useReveal'

interface RevealProps {
  children: ReactNode
  className?: string
}

export function Reveal({ children, className }: RevealProps) {
  const { ref, revealClass } = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} className={cn(revealClass, className)}>
      {children}
    </div>
  )
}
