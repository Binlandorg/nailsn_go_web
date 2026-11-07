import { cn } from '../../utils/cn'
import styles from './Logo.module.css'

interface LogoProps {
  tone?: 'dark' | 'light'
  className?: string
}

export function Logo({ tone = 'dark', className }: LogoProps) {
  return (
    <a href="#inicio" className={cn(styles.logo, styles[tone], className)} aria-label="Nails & Go Studio, ir al inicio">
      <svg className={styles.brush} viewBox="0 0 24 24" aria-hidden="true">
        <rect x="13" y="1.5" width="6" height="9" rx="2" transform="rotate(40 16 6)" />
        <path d="M11.2 9.6 14 12.4 8.6 19c-.9 1-2.3 1.2-3.2.4-.9-.8-.8-2.3.2-3.2z" />
      </svg>
      <span className={styles.word}>Nails &amp; Go</span>
      <span className={styles.script}>Studio</span>
    </a>
  )
}
