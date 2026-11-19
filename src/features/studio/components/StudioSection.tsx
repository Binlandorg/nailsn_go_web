import { photos } from '@/config/photos'
import { site } from '@/config/site'
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
  const { ref: clipsRef, revealClass: clipsReveal } = useReveal<HTMLDivElement>()

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
            {highlights.map(({ title, description, icon: Icon, pending }) => (
              <li key={title} className={`card ${styles.item}`}>
                <span className={pending ? `${styles.hlIcon} ${styles.stroke}` : styles.hlIcon}>
                  <Icon />
                </span>
                <h3>
                  {title}
                  {pending ? <Badge /> : null}
                </h3>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div ref={clipsRef} className={`${styles.extra} ${clipsReveal}`}>
          {clips.map((caption) => (
            <Clip key={caption} caption={caption} />
          ))}
        </div>
      </div>
    </section>
  )
}
