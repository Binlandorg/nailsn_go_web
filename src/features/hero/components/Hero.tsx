import { site } from '@/config/site'
import { ArrowRightIcon, ClockIcon, MapPinIcon } from '@/shared/components/icons/icons'
import { Button } from '@/shared/components/ui/Button'
import { HeroSlideshow } from './HeroSlideshow'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.media}>
        <HeroSlideshow />
        <div className={styles.veil} aria-hidden="true" />
      </div>
      <div className={`wrap ${styles.content}`}>
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
          {(site.scheduleShort || site.addressShort) && (
            <ul className={styles.info}>
              {site.scheduleShort && (
                <li>
                  <ClockIcon />
                  {site.scheduleShort}
                </li>
              )}
              {site.addressShort && (
                <li>
                  <MapPinIcon />
                  {site.addressShort}
                </li>
              )}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}
