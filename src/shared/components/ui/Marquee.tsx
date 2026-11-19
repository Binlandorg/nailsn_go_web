import type { CSSProperties, ReactNode } from 'react'
import { cn } from '@/shared/utils/cn'
import styles from './Marquee.module.css'

interface MarqueeProps {
  children: ReactNode
  duration?: number
  reverse?: boolean
  pauseOnHover?: boolean
  className?: string
}

export function Marquee({ children, duration = 30, reverse = false, pauseOnHover = false, className }: MarqueeProps) {
  return (
    <div
      className={cn(styles.marquee, pauseOnHover && styles.pausable, className)}
      style={{ '--marquee-duration': `${duration}s` } as CSSProperties}
    >
      <div className={cn(styles.track, reverse && styles.reverse)}>
        <div className={styles.group}>{children}</div>
        <div className={styles.group} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}
