import { site } from '@/config/site'
import { ArrowRightIcon } from '@/shared/components/icons/icons'
import { Button } from '@/shared/components/ui/Button'
import { HeroSlideshow } from './HeroSlideshow'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.card}>
          <HeroSlideshow />
        </div>
        <div className={styles.copy}>
          <p className={`eyebrow ${styles.kicker}`}>Salón spa · {site.area}</p>
          <h1 className={styles.title}>
            <span className={styles.line}>El salón más</span>
            <span className={styles.line}>
              <span className={styles.script}>aesthetic</span>
            </span>
            <span className={styles.line}>del Cono Norte.</span>
          </h1>
          <p className={styles.lead}>Uñas, pedicure spa, pestañas, cejas, faciales y depilación en un espacio pensado para que salgas sintiéndote increíble.</p>
          <div className={styles.ctas}>
            <Button href="#reservar" className={styles.cta}>
              Reservar por WhatsApp
              <ArrowRightIcon className={styles.arrow} />
            </Button>
            <Button href="#servicios" variant="outline" className={styles.secondary}>
              Ver servicios
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
