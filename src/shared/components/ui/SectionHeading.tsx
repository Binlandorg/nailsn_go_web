import type { ReactNode } from 'react'
import { SparkleIcon } from '../icons/icons'
import { cn } from '../../utils/cn'
import { Reveal } from './Reveal'
import styles from './SectionHeading.module.css'

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  tone?: 'dark' | 'light'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'dark',
  className,
}: SectionHeadingProps) {
  return (
    <header className={cn(styles.heading, styles[align], styles[tone], className)}>
      <Reveal variant="fade">
        <p className={styles.eyebrow}>
          <SparkleIcon className={styles.sparkle} />
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={100}>
        <h2 className={styles.title}>{title}</h2>
      </Reveal>
      {description && (
        <Reveal delay={200}>
          <p className={styles.description}>{description}</p>
        </Reveal>
      )}
    </header>
  )
}
