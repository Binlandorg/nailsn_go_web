import { photos } from '../../../config/photos'
import { bookingUrl } from '../../../config/site'
import { Sparkle } from '../../../shared/components/decorations/Sparkle'
import { SpinningBadge } from '../../../shared/components/decorations/SpinningBadge'
import { BrushIcon } from '../../../shared/components/icons/icons'
import { currentMonth } from '../data/heroContent'
import styles from './HeroVisual.module.css'

export function HeroVisual() {
  return (
    <div className={styles.visual}>
      <div className={styles.backdrop} aria-hidden="true" />

      <figure className={styles.main}>
        <img
          src={photos.pinkNails}
          alt="Manos con manicure rosa sobre fondo rosa"
          fetchPriority="high"
          width={560}
          height={700}
        />
      </figure>

      <figure className={styles.thumb}>
        <img src={photos.loveNails} alt="Nail art con corazones y la palabra love" width={240} height={240} />
      </figure>

      <div className={styles.bookingCard}>
        <span className={styles.bookingLabel}>
          <span className={styles.pulse} />
          Agenda abierta
        </span>
        <span className={styles.bookingMonth}>{currentMonth}</span>
      </div>

      <div className={styles.chip}>
        <BrushIcon />
        Uñas · Cejas · Pestañas
      </div>

      <SpinningBadge
        className={styles.badge}
        href={bookingUrl()}
        label="Agenda tu cita"
        text="Agenda tu cita • Nails & Go • "
      />

      <Sparkle size={34} className={styles.sparkleA} />
      <Sparkle size={18} tone="rose" delay={800} className={styles.sparkleB} />
      <Sparkle size={24} tone="white" delay={1600} className={styles.sparkleC} />
    </div>
  )
}
