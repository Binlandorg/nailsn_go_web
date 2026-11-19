import type { ReactNode } from 'react'
import { cn } from '@/shared/utils/cn'
import { useReveal } from '@/shared/hooks/useReveal'

interface SectionHeadProps {
  eyebrow: string
  titleId: string
  title: ReactNode
  sub?: ReactNode
  subClassName?: string
  className?: string
}

export function SectionHead({ eyebrow, titleId, title, sub, subClassName, className }: SectionHeadProps) {
  const { ref, revealClass } = useReveal<HTMLElement>()
  return (
    <header ref={ref} className={cn('section-head', revealClass, className)}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={titleId}>{title}</h2>
      {sub && <p className={cn('section-sub', subClassName)}>{sub}</p>}
    </header>
  )
}
