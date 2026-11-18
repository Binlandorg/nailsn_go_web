import { photos } from '../../../config/photos'
import { Badge } from '../../../shared/components/ui/Badge'
import split from '../../../shared/components/ui/Split.module.css'
import { useReveal } from '../../../shared/components/ui/useReveal'
import { combos, roulettePrizes } from '../data/promotions'
import styles from './PromotionsSection.module.css'

export function PromotionsSection() {
  const { ref: photoRef, revealClass: photoReveal } = useReveal<HTMLElement>()

  return (
    <section className={`section ${styles.promotions}`} id="promociones" aria-labelledby="promo-title">
      <div className="wrap">
        <div className={`${split.inner} ${split.reverse}`}>
          <figure ref={photoRef} className={`${split.photo} ${styles.zoom} ${photoReveal}`}>
            <img
              src={photos.recepcion.src}
              alt="Ruleta de premios de Nails & Go Studio sobre el mostrador de recepción"
              width={photos.recepcion.width}
              height={photos.recepcion.height}
              loading="lazy"
            />
          </figure>
          <div className={split.text}>
            <p className="eyebrow">Promociones</p>
            <h2 id="promo-title">
              Gira la <em>ruleta</em> en tu visita
            </h2>
            <p>En recepción te espera nuestra ruleta de premios. Podrías ganar un detalle extra para tu cita.</p>
            <ul className={styles.prizes} aria-label="Algunos premios de la ruleta">
              {roulettePrizes.map((prize) => (
                <li key={prize}>{prize}</li>
              ))}
            </ul>
            <p className="fine">Pregunta por las condiciones en recepción.</p>
            <div className={styles.combo}>
              <h3>{combos.title}</h3>
              <p>{combos.example}</p>
              {!combos.confirmed && <Badge />}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
