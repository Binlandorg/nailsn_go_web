import { bookingUrl, site } from '../../../config/site'
import { Button } from '../../../shared/components/ui/Button'
import { ScriptText } from '../../../shared/components/ui/ScriptText'
import { ArrowRightIcon, SparkleIcon } from '../../../shared/components/icons/icons'
import { HeroStats } from './HeroStats'
import { HeroVisual } from './HeroVisual'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.blobPink} aria-hidden="true" />
      <div className={styles.blobNude} aria-hidden="true" />

      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={styles.badge}>
            <SparkleIcon className={styles.badgeIcon} />
            Salón spa · {site.address.district}, {site.address.region}
          </p>

          <h1 className={styles.title}>
            <span className={styles.line}>
              <span>El salón</span>
            </span>
            <span className={styles.line}>
              <ScriptText className={styles.script}>más aesthetic</ScriptText>
            </span>
            <span className={styles.line}>
              <span>
                del <mark className={styles.highlight}>Cono Norte.</mark>
              </span>
            </span>
          </h1>

          <p className={styles.lead}>
            Expertas en uñas, cejas y pestañas. También micropigmentación, faciales y depilación, con promociones
            nuevas cada mes. Consiéntete al máximo.
          </p>

          <div className={styles.ctas}>
            <Button href={bookingUrl()} target="_blank" rel="noreferrer" size="lg" icon={<ArrowRightIcon />}>
              Agenda tu cita
            </Button>
            <Button href="#servicios" size="lg" variant="secondary">
              Ver promociones
            </Button>
          </div>

          <HeroStats />
        </div>

        <HeroVisual />
      </div>
    </section>
  )
}
