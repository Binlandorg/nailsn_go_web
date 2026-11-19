import { site } from '@/config/site'
import { Sparkle } from '@/shared/components/decorations/Sparkle'
import { ArrowRightIcon, ClockIcon, MapPinIcon } from '@/shared/components/icons/icons'
import { Button } from '@/shared/components/ui/Button'
import { selectCategory } from '@/features/services'
import { quickLinks } from '@/features/hero/data/quickLinks'
import { HeroSlideshow } from './HeroSlideshow'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      <HeroSlideshow />
      <div className={styles.veil} aria-hidden="true" />
      <Sparkle size={30} className={styles.sparkleA} />
      <Sparkle size={18} tone="white" delay={900} className={styles.sparkleB} />
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
          <nav className={styles.quick} aria-label="Accesos rápidos a servicios">
            {quickLinks.map((link) => (
              <a key={link.id} className={styles.quickLink} href="#servicios" onClick={() => selectCategory(link.id)}>
                {link.label}
              </a>
            ))}
          </nav>
          <ul className={styles.facts}>
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
