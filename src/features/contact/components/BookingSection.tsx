import { photos } from '../../../config/photos'
import { bookingChannel, bookingUrl, fullAddress, hasWhatsapp, site } from '../../../config/site'
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
            <Sparkle size={34} className={styles.sparkleA} />
            <Sparkle size={18} tone="rose" delay={600} className={styles.sparkleB} />

            <div className={styles.content}>
              <p className={styles.eyebrow}>Agenda tu cita</p>
              <h2 className={styles.title}>
                ¿Lista para <ScriptText tone="gold">consentirte?</ScriptText>
              </h2>
              <p className={styles.lead}>
                Escríbenos por {bookingChannel}, cuéntanos qué servicio o promo quieres y te confirmamos día y hora.
              </p>

              <div className={styles.ctas}>
                <Button
                  href={bookingUrl()}
                  target="_blank"
                  rel="noreferrer"
                  size="lg"
                  icon={hasWhatsapp ? <WhatsappIcon /> : <InstagramIcon />}
                >
                  Agendar por {bookingChannel}
                </Button>
                {hasWhatsapp && (
                  <Button
                    href={site.instagram.dm}
                    target="_blank"
                    rel="noreferrer"
                    variant="outlineLight"
                    size="lg"
                    icon={<InstagramIcon />}
                  >
                    Escríbenos por DM
                  </Button>
                )}
              </div>

              <ul className={styles.info}>
                {site.schedule.map((slot) => (
                  <li key={slot.days}>
                    <ClockIcon />
                    <span>
                      {slot.days} · {slot.hours}
                    </span>
                  </li>
                ))}
                <li>
                  <MapPinIcon />
                  <a href={site.mapsUrl} target="_blank" rel="noreferrer">
                    {fullAddress}
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.visual}>
              <figure className={styles.photo}>
                <img src={photos.polishBottles} alt="Colección de esmaltes" loading="lazy" width={420} height={420} />
              </figure>
              <figure className={styles.photoSmall}>
                <img src={photos.pinkFlatlay} alt="Maquillaje sobre fondo rosa" loading="lazy" width={200} height={200} />
              </figure>
              <SpinningBadge
                className={styles.badge}
                href={site.instagram.url}
                label="Síguenos en Instagram"
                text="Nails & Go • Studio • Comas • "
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
