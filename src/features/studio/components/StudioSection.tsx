import { photos } from '../../../config/photos'
import { PlayIcon, ShieldIcon } from '../../../shared/components/icons/icons'
import { Badge } from '../../../shared/components/ui/Badge'
import split from '../../../shared/components/ui/Split.module.css'
import { useReveal } from '../../../shared/components/ui/useReveal'
import styles from './StudioSection.module.css'

const clips = ['Video vertical del estudio', 'Video vertical de un servicio']

function Clip({ caption }: { caption: string }) {
  const { ref, revealClass } = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} className={`${styles.clip} ${revealClass}`}>
      <PlayIcon />
      <span>Clip próximamente</span>
      <small>{caption}</small>
    </div>
  )
}

export function StudioSection() {
  const { ref: photoRef, revealClass: photoReveal } = useReveal<HTMLElement>()
  const { ref: hygieneRef, revealClass: hygieneReveal } = useReveal<HTMLDivElement>()

  return (
    <section className={`section ${styles.studio}`} id="estudio" aria-labelledby="estudio-title">
      <div className="wrap">
        <div className={split.inner}>
          <figure ref={photoRef} className={`${split.photo} ${styles.mainPhoto} ${photoReveal}`}>
            <img
              src={photos.interior.src}
              alt="Zona de pedicure con sillones de terciopelo lila, tinas y la frase Good Nails en la pared rosa"
              width={photos.interior.width}
              height={photos.interior.height}
              loading="lazy"
            />
          </figure>
          <div className={split.text}>
            <p className="eyebrow">El estudio</p>
            <h2 id="estudio-title">
              Un espacio para <em>consentirte</em>
            </h2>
            <p>
              Sillones de terciopelo, tonos rosa y luz suave. Nuestra zona de pedicure spa está pensada para que te relajes mientras cuidamos tus manos y pies.
            </p>
            <ul className={styles.ticks}>
              <li>Sillones spa con tina para pedicure</li>
              <li>Recepción con jardín vertical</li>
              <li>Atención con cita por WhatsApp</li>
            </ul>
          </div>
        </div>
        <div className={styles.extra}>
          <figure className={`${styles.clip} ${styles.clipPhoto}`}>
            <img src={photos.interior.src} alt="Zona de pedicure con sillones de terciopelo lila" width={photos.interior.width} height={photos.interior.height} loading="lazy" />
          </figure>
          {clips.map((caption) => (
            <Clip key={caption} caption={caption} />
          ))}
          <div ref={hygieneRef} className={`${styles.hygiene} ${hygieneReveal}`}>
            <ShieldIcon />
            <h3>Higiene y esterilización</h3>
            <p>Aquí contaremos cómo limpiamos y esterilizamos las herramientas y qué material usamos en cada servicio.</p>
            <Badge />
          </div>
        </div>
      </div>
    </section>
  )
}
