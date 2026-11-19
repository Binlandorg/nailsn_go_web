import { photos } from '@/config/photos'
import { site } from '@/config/site'
import { PinIcon } from '@/shared/components/icons/icons'
import { SectionHead } from '@/shared/components/ui/SectionHead'
import { useReveal } from '@/shared/hooks/useReveal'
import { Pending } from './Pending'
import styles from './LocationSection.module.css'

export function LocationSection() {
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
        <ul className={`card ${styles.info}`}>
          <li>
            <h3>WhatsApp</h3>
            <a href={`https://wa.me/${site.whatsapp.number}`} target="_blank" rel="noopener">
              {site.whatsapp.display}
            </a>
          </li>
          <li>
            <h3>Instagram</h3>
            <a href={site.instagram.url} target="_blank" rel="noopener">
              {site.instagram.handle}
            </a>
          </li>
          <li>
            <h3>Dirección</h3>
            <Pending value={site.address} />
            {site.mapsUrl && (
              <a className={styles.directions} href={site.mapsUrl} target="_blank" rel="noopener">
                Cómo llegar
              </a>
            )}
          </li>
          <li>
            <h3>Horario</h3>
            <Pending value={site.schedule} />
          </li>
        </ul>
        <div className={styles.location}>
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
      </div>
    </section>
  )
}
