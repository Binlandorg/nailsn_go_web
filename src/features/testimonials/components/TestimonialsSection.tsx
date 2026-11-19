import { site } from '@/config/site'
import { StarIcon } from '@/shared/components/icons/icons'
import { Button } from '@/shared/components/ui/Button'
import { SectionHead } from '@/shared/components/ui/SectionHead'
import { useCarouselDots } from '@/shared/hooks/useCarouselDots'
import { useReveal } from '@/shared/hooks/useReveal'
import { testimonials } from '@/features/testimonials/data/testimonials'
import styles from './TestimonialsSection.module.css'

const published = testimonials.filter((item) => item.confirmed)

export function TestimonialsSection() {
  const { trackRef, active, goTo } = useCarouselDots<HTMLUListElement>()
  const { ref: emptyRef, revealClass: emptyReveal } = useReveal<HTMLDivElement>()

  const reviewsButton = site.reviewsUrl ? (
    <Button href={site.reviewsUrl} variant="outline" target="_blank" rel="noopener" className={styles.reviews}>
      Ver reseñas en Google
    </Button>
  ) : null

  return (
    <section className="section" id="testimonios" aria-labelledby="testimonios-title">
      <div className="wrap">
        <SectionHead
          eyebrow="Testimonios"
          titleId="testimonios-title"
          title={
            <>
              Lo que dicen nuestras <em>clientas</em>
            </>
          }
        />
        {published.length > 0 ? (
          <>
            <ul ref={trackRef} className={styles.list}>
              {published.map((item) => (
                <li key={item.id} className={`card ${styles.card}`}>
                  <span className={styles.quote} aria-hidden="true">
                    &ldquo;
                  </span>
                  <p className={styles.text}>{item.quote}</p>
                  <div className={styles.who}>
                    <span className={styles.avatar} aria-hidden="true" />
                    <span>{item.author}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className={styles.dots} role="group" aria-label="Elegir testimonio">
              {published.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  className={styles.dot}
                  aria-label={`Ir a la tarjeta ${i + 1}`}
                  aria-current={active === i}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
            <div className="center">{reviewsButton}</div>
          </>
        ) : (
          <div ref={emptyRef} className={`card ${styles.empty} ${emptyReveal}`}>
            <div className={styles.stars} aria-hidden="true">
              {[0, 1, 2, 3, 4].map((n) => (
                <StarIcon key={n} />
              ))}
            </div>
            <p className={styles.emptyText}>Pronto verás aquí las opiniones de nuestras clientas.</p>
            <p className={styles.emptyHint}>Mientras tanto, puedes leer sus reseñas en Google.</p>
            {reviewsButton}
          </div>
        )}
      </div>
    </section>
  )
}
