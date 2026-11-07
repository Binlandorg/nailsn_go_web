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
            Nail studio · Solo con cita
          </p>

          <h1 className={styles.title}>
            <span className={styles.line}>
              <span>Uñas que</span>
            </span>
            <span className={styles.line}>
              <ScriptText className={styles.script}>enamoran,</ScriptText>
            </span>
            <span className={styles.line}>
              <span>
                estilo que <mark className={styles.highlight}>brilla.</mark>
              </span>
            </span>
          </h1>

          <p className={styles.lead}>
            Manicure, pedicure y nail art con mucho glam. Diseños hechos a tu medida, en un espacio
            pensado para que te consientas sin prisa — y salgas lista para tu próximo post.
          </p>

          <div className={styles.ctas}>
            <Button href="#contacto" size="lg" icon={<ArrowRightIcon />}>
              Reserva tu cita
            </Button>
            <Button href="#servicios" size="lg" variant="secondary">
              Ver servicios
            </Button>
          </div>

          <HeroStats />
        </div>

        <HeroVisual />
      </div>
    </section>
  )
}
