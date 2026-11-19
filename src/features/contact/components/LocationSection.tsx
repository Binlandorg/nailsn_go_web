import { photos } from '@/config/photos'
import { site } from '@/config/site'
import { ClockIcon, InstagramIcon, MapPinIcon, PinIcon, WhatsAppIcon } from '@/shared/components/icons/icons'
import { Button } from '@/shared/components/ui/Button'
import { SectionHead } from '@/shared/components/ui/SectionHead'
import { useReveal } from '@/shared/hooks/useReveal'
import { whatsappLink } from '@/shared/utils/whatsapp'
import { Pending } from './Pending'
import styles from './LocationSection.module.css'

export function LocationSection() {
  const { ref: infoRef, revealClass: infoReveal } = useReveal<HTMLDivElement>()
  const { ref: mapRef, revealClass: mapReveal } = useReveal<HTMLDivElement>()
  const { ref: photoRef, revealClass: photoReveal } = useReveal<HTMLElement>()

  return (
    <section className="section" id="ubicacion" aria-labelledby="ubicacion-title">
      <div className="wrap">
        <SectionHead
          eyebrow="Ubicación y horario"
          titleId="ubicacion-title"
          sub="Estamos en Comas, Lima Norte. Escríbenos antes de venir."
          title={
            <>
              Te <em>esperamos</em>
            </>
          }
        />
        <div className={styles.layout}>
          <div ref={infoRef} className={`card ${styles.panel} ${infoReveal}`}>
            <ul className={styles.info}>
              <li>
                <a className={styles.row} href={whatsappLink()} target="_blank" rel="noopener">
                  <span className={styles.icon}>
                    <WhatsAppIcon />
                  </span>
                  <span className={styles.label}>WhatsApp</span>
                  <span className={styles.value}>{site.whatsapp.display}</span>
                </a>
              </li>
              <li>
                <a className={styles.row} href={site.instagram.url} target="_blank" rel="noopener">
                  <span className={styles.icon}>
                    <InstagramIcon />
                  </span>
                  <span className={styles.label}>Instagram</span>
                  <span className={styles.value}>{site.instagram.handle}</span>
                </a>
              </li>
              <li>
                {site.mapsUrl ? (
                  <a className={styles.row} href={site.mapsUrl} target="_blank" rel="noopener">
                    <span className={styles.icon}>
                      <MapPinIcon />
                    </span>
                    <span className={styles.label}>Dirección</span>
                    <span className={styles.value}>{site.address ?? site.pending}</span>
                  </a>
                ) : (
                  <div className={styles.row}>
                    <span className={styles.icon}>
                      <MapPinIcon />
                    </span>
                    <span className={styles.label}>Dirección</span>
                    <Pending value={site.address} />
                  </div>
                )}
              </li>
              <li>
                <div className={styles.row}>
                  <span className={styles.icon}>
                    <ClockIcon />
                  </span>
                  <span className={styles.label}>Horario</span>
                  <Pending value={site.schedule} />
                </div>
              </li>
            </ul>
            <div className={styles.actions}>
              {site.mapsUrl && (
                <Button href={site.mapsUrl} target="_blank" rel="noopener" block>
                  Cómo llegar
                </Button>
              )}
              {site.reviewsUrl && (
                <Button href={site.reviewsUrl} target="_blank" rel="noopener" variant="outline" block>
                  Ver reseñas en Google
                </Button>
              )}
            </div>
          </div>
          {site.mapsEmbedUrl ? (
            <div ref={mapRef} className={`${styles.map} ${mapReveal}`}>
              <iframe src={site.mapsEmbedUrl} title="Mapa de Google con la ubicación de Nails & Go Studio en Comas" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          ) : (
            <div ref={mapRef} className={`${styles.map} ${mapReveal}`} role="img" aria-label="Espacio para el mapa de Google, próximamente">
              <PinIcon className={styles.pin} />
              <span>Mapa de Google próximamente</span>
            </div>
          )}
        </div>
        <figure ref={photoRef} className={`${styles.photo} ${photoReveal}`}>
          <img
            src={photos.fachada.src}
            alt="Fachada del local de Nails & Go Studio de noche, con el letrero iluminado y el interior rosa visible"
            width={photos.fachada.width}
            height={photos.fachada.height}
            loading="lazy"
          />
          <figcaption>Así nos encuentras</figcaption>
        </figure>
      </div>
    </section>
  )
}
