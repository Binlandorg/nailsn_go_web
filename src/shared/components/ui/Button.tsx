import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../utils/cn'
import styles from './Button.module.css'

type ButtonVariant = 'primary' | 'secondary' | 'light' | 'outlineLight'
type ButtonSize = 'md' | 'lg'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <a className={cn(styles.button, styles[variant], styles[size], className)} {...props}>
      <span className={styles.label}>{children}</span>
      {icon && <span className={styles.icon}>{icon}</span>}
    </a>
  )
}
