import { cn } from '@/shared/utils/cn'
import styles from '@/shared/components/ui/Button.module.css'

export interface ButtonStyleProps {
  variant?: 'primary' | 'outline'
  size?: 'md' | 'sm'
  block?: boolean
  className?: string
}

export const buttonClass = ({ variant = 'primary', size = 'md', block, className }: ButtonStyleProps = {}) =>
  cn(styles.button, variant === 'outline' && styles.outline, size === 'sm' && styles.sm, block && styles.block, className)
