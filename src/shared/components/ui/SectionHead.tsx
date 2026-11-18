import type { ReactNode } from 'react'

interface SectionHeadProps {
  eyebrow: string
  titleId: string
  title: ReactNode
  sub?: ReactNode
  subClassName?: string
}

export function SectionHead({ eyebrow, titleId, title, sub, subClassName }: SectionHeadProps) {
  return (
    <header className="section-head">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={titleId}>{title}</h2>
      {sub && <p className={subClassName ? `section-sub ${subClassName}` : 'section-sub'}>{sub}</p>}
    </header>
  )
}
