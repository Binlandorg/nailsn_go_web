import { useState, type CSSProperties } from 'react'
import { CameraIcon } from '@/shared/components/icons/icons'
import { useReveal } from '@/shared/hooks/useReveal'
import styles from './BeforeAfter.module.css'

export function BeforeAfter() {
  const [pos, setPos] = useState(50)
  const { ref, revealClass } = useReveal<HTMLDivElement>()

  return (
    <div ref={ref} className={`${styles.wrap} ${revealClass}`}>
      <div className={styles.head}>
        <h3>Antes y después</h3>
        <p>Desliza para comparar.</p>
      </div>
      <div className={styles.compare} style={{ '--pos': `${pos}%` } as CSSProperties}>
        <div className={`${styles.side} ${styles.before}`}>
          <CameraIcon />
          <span className={styles.label}>Antes</span>
          <span className={styles.note}>Foto próximamente</span>
        </div>
        <div className={`${styles.side} ${styles.after}`} aria-hidden="true">
          <CameraIcon />
          <span className={styles.label}>Después</span>
          <span className={styles.note}>Foto próximamente</span>
        </div>
        <div className={styles.handle} aria-hidden="true">
          <span />
        </div>
        <label className="sr-only" htmlFor="compare-range">
          Comparar antes y después
        </label>
        <input
          className={styles.range}
          id="compare-range"
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(event) => setPos(Number(event.target.value))}
        />
      </div>
    </div>
  )
}
