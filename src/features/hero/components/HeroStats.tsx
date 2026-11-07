import { heroStats } from '../data/heroContent'
import styles from './HeroStats.module.css'

export function HeroStats() {
  return (
    <dl className={styles.stats}>
      {heroStats.map((stat, index) => (
        <div key={stat.label} className={styles.stat} style={{ animationDelay: `${1 + index * 0.12}s` }}>
          <dt className={styles.label}>{stat.label}</dt>
          <dd className={styles.value}>{stat.value}</dd>
        </div>
      ))}
    </dl>
  )
}
