import { photos } from '@/config/photos'
import { site } from '@/config/site'
import { ShieldIcon } from '@/shared/components/icons/icons'
import { Badge } from '@/shared/components/ui/Badge'
import { SectionHead } from '@/shared/components/ui/SectionHead'
import { useReveal } from '@/shared/hooks/useReveal'
import { highlights } from '@/features/studio/data/highlights'
import { Clip } from './Clip'
import styles from './StudioSection.module.css'

const clips = ['Video vertical del estudio', 'Video vertical de un servicio']

export function StudioSection() {
  const { ref: photoRef, revealClass: photoReveal } = useReveal<HTMLElement>()
  const { ref: listRef, revealClass: listReveal } = useReveal<HTMLUListElement>()
  const { ref: hygieneRef, revealClass: hygieneReveal } = useReveal<HTMLDivElement>()

  return (
    <section className="section" id="estudio" aria-labelledby="estudio-title">
      <div className="wrap">
        <SectionHead
          eyebrow="El estudio"
          titleId="estudio-title"
          title={
            <>
              Consiéntete <em>al máximo</em>
            </>
          }
          sub="Sillones de terciopelo, tonos rosa y luz suave. Un espacio pensado para que te relajes."
        />
        <div className={styles.inner}>
          <figure ref={photoRef} className={`${styles.mural} ${photoReveal}`}>
            <img
              src={photos.interior.src}
              alt="Zona de pedicure con sillones de terciopelo lila, tinas y la frase Good Nails en la pared rosa"
              width={photos.interior.width}
              height={photos.interior.height}
              loading="lazy"
            />
            <figcaption>{site.tagline}</figcaption>
          </figure>
          <ul ref={listRef} className={`${styles.highlights} ${listReveal}`}>
            {highlights.map(({ title, description, icon: Icon }) => (
              <li key={title} className="card">
                <span className={styles.hlIcon}>
                  <Icon />
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.extra}>
          {clips.map((caption) => (
            <Clip key={caption} caption={caption} />
          ))}
          <div ref={hygieneRef} className={`card ${styles.hygiene} ${hygieneReveal}`}>
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
