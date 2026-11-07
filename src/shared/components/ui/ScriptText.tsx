import type { ReactNode } from 'react'
import { cn } from '../../utils/cn'
import styles from './ScriptText.module.css'

interface ScriptTextProps {
  children: ReactNode
  tone?: 'fuchsia' | 'bubblegum' | 'white'
  className?: string
}

/** Palabra en caligrafía que acompaña a los títulos en sans bold. */
export function ScriptText({ children, tone = 'fuchsia', className }: ScriptTextProps) {
  return <span className={cn(styles.script, styles[tone], className)}>{children}</span>
}
