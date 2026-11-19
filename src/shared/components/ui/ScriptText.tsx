import type { ReactNode } from 'react'
import { cn } from '../../utils/cn'
import styles from './ScriptText.module.css'

interface ScriptTextProps {
  children: ReactNode
  tone?: 'mauve' | 'rose' | 'gold' | 'white'
  className?: string
}

export function ScriptText({ children, tone = 'mauve', className }: ScriptTextProps) {
  return <span className={cn(styles.script, styles[tone], className)}>{children}</span>
}
