import { photos } from '../../../config/photos'
import { site } from '../../../config/site'
import { Button } from '../../../shared/components/ui/Button'
import { Reveal } from '../../../shared/components/ui/Reveal'
import { ScriptText } from '../../../shared/components/ui/ScriptText'
import { Sparkle } from '../../../shared/components/decorations/Sparkle'
import { SpinningBadge } from '../../../shared/components/decorations/SpinningBadge'
import { ClockIcon, InstagramIcon, MapPinIcon, WhatsappIcon } from '../../../shared/components/icons/icons'
import styles from './BookingSection.module.css'

export function BookingSection() {
  return (
    <section id="contacto" className={styles.section}>
      <div className="container">
        <Reveal variant="zoom">
          <div className={styles.card}>
            <Sparkle size={34} tone="white" className={styles.sparkleA} />
            <Sparkle size={18} tone="bubblegum" delay={600} className={styles.sparkleB} />

            <div className={styles.content}>
              <p className={styles.eyebrow}>Reservas abiertas</p>
              <h2 className={styles.title}>
                ¿Lista para <ScriptText tone="white">brillar?</ScriptText>
              </h2>
              <p className={styles.lead}>
                Escríbenos y elegimos juntas el día, la hora y el diseño. Te respondemos rapidito ♡
              </p>

              <div className={styles.ctas}>
                <Button href={site.whatsapp.url} target="_blank" rel="noreferrer" variant="light" size="lg" icon={<WhatsappIcon />}>
                  Reservar por WhatsApp
                </Button>
                <Button href={site.instagram.url} target="_blank" rel="noreferrer" variant="outlineLight" size="lg" icon={<InstagramIcon />}>
                  Escríbenos por DM
                </Button>
              </div>

              <ul className={styles.info}>
                <li>
                  <ClockIcon />
                  <span>
                    {site.schedule[0].days} · {site.schedule[0].hours}
                  </span>
                </li>
                <li>
                  <MapPinIcon />
                  <a href={site.mapsUrl} target="_blank" rel="noreferrer">
                    {site.address}
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.visual}>
              <figure className={styles.photo}>
                <img src={photos.polishBottles} alt="Colección de esmaltes" loading="lazy" />
              </figure>
              <figure className={styles.photoSmall}>
                <img src={photos.pinkFlatlay} alt="Delineador y labial sobre fondo rosa" loading="lazy" />
              </figure>
              <SpinningBadge
                className={styles.badge}
                href={site.instagram.url}
                label="Síguenos en Instagram"
                text="Nails & Go • Studio • Glam • "
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
