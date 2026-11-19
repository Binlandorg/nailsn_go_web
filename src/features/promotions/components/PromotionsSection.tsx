import { photos } from '@/config/photos'
import { Badge } from '@/shared/components/ui/Badge'
import { SectionHead } from '@/shared/components/ui/SectionHead'
import { useReveal } from '@/shared/hooks/useReveal'
import { combos, roulettePrizes } from '@/features/promotions/data/promotions'
import styles from './PromotionsSection.module.css'

export function PromotionsSection() {
  const { ref: photoRef, revealClass: photoReveal } = useReveal<HTMLElement>()
  const { ref: bodyRef, revealClass: bodyReveal } = useReveal<HTMLDivElement>()

  return (
    <section className="section" id="promociones" aria-labelledby="promo-title">
      <div className="wrap">
        <SectionHead
          eyebrow="Promociones"
          titleId="promo-title"
          title={
            <>
              Gira la <em>ruleta</em> en tu visita
            </>
          }
          sub="En recepción te espera nuestra ruleta de premios. Podrías ganar un detalle extra para tu cita."
        />
        <div className={styles.inner}>
          <figure ref={photoRef} className={`${styles.photo} ${photoReveal}`}>
            <img
              src={photos.recepcion.src}
              alt="Ruleta de premios de Nails & Go Studio sobre el mostrador de recepción"
              width={photos.recepcion.width}
              height={photos.recepcion.height}
              loading="lazy"
            />
          </figure>
          <div ref={bodyRef} className={`${styles.body} ${bodyReveal}`}>
            <div className={`card ${styles.block}`}>
              <h3>Premios de la ruleta</h3>
              <ul className={styles.prizes} aria-label="Algunos premios de la ruleta">
                {roulettePrizes.map((prize) => (
                  <li key={prize}>{prize}</li>
                ))}
              </ul>
              <p className="fine">Pregunta por las condiciones en recepción.</p>
            </div>
            <div className={`card ${styles.block}`}>
              <h3>{combos.title}</h3>
              <p className={styles.text}>{combos.example}</p>
              {!combos.confirmed && <Badge />}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
