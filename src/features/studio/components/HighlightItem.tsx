import type { Highlight } from '../data/highlights'
import styles from './HighlightItem.module.css'

interface HighlightItemProps {
  highlight: Highlight
}

export function HighlightItem({ highlight }: HighlightItemProps) {
  const Icon = highlight.icon

  return (
    <div className={styles.item}>
      <span className={styles.icon}>
        <Icon />
      </span>
      <div>
        <h3 className={styles.title}>{highlight.title}</h3>
        <p className={styles.description}>{highlight.description}</p>
      </div>
    </div>
  )
}
