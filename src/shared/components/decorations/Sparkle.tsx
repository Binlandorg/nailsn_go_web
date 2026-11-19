import type { CSSProperties } from 'react'
import { SparkleIcon } from '@/shared/components/icons/icons'
import { cn } from '@/shared/utils/cn'
import styles from './Sparkle.module.css'

interface SparkleProps {
  size?: number
  delay?: number
  tone?: 'gold' | 'neon' | 'white'
  className?: string
  style?: CSSProperties
}

export function Sparkle({ size = 20, delay = 0, tone = 'gold', className, style }: SparkleProps) {
  return (
    <SparkleIcon
      className={cn(styles.sparkle, styles[tone], className)}
      width={size}
      height={size}
      style={{ animationDelay: `${delay}ms`, ...style }}
    />
  )
}
