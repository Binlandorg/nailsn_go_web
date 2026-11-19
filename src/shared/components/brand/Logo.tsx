import { cn } from '@/shared/utils/cn'
import styles from './Logo.module.css'

interface LogoProps {
  tone?: 'dark' | 'light'
  placement?: 'header' | 'footer'
}

export function Logo({ tone = 'dark', placement = 'header' }: LogoProps) {
  return (
    <span className={cn(styles.brand, tone === 'light' && styles.light, placement === 'header' && styles.header)}>
      <span className={styles.word}>
        N
        <span className={styles.a}>
          A
          <svg className={styles.brush} viewBox="0 0 20 28" aria-hidden="true">
            <path d="M3 27L13 9" />
            <rect x="11" y="1" width="6" height="10" rx="1.5" transform="rotate(30 14 6)" />
          </svg>
        </span>
        ILS &amp; GO
      </span>
      <span className={styles.sub}>studio</span>
    </span>
  )
}
