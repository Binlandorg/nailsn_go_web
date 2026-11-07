import { useId } from 'react'
import { HeartIcon } from '../icons/icons'
import { cn } from '../../utils/cn'
import styles from './SpinningBadge.module.css'

interface SpinningBadgeProps {
  text: string
  href: string
  label: string
  className?: string
}

/** Sello circular con texto girando, estilo sticker de Instagram. */
export function SpinningBadge({ text, href, label, className }: SpinningBadgeProps) {
  const pathId = useId()

  return (
    <a href={href} className={cn(styles.badge, className)} aria-label={label}>
      <svg className={styles.ring} viewBox="0 0 120 120" aria-hidden="true">
        <defs>
          <path id={pathId} d="M60 60m-46 0a46 46 0 1 1 92 0a46 46 0 1 1-92 0" />
        </defs>
        <text className={styles.text}>
          <textPath href={`#${pathId}`}>{text}</textPath>
        </text>
      </svg>
      <span className={styles.center}>
        <HeartIcon />
      </span>
    </a>
  )
}
