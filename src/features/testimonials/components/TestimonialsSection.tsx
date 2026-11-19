import { site } from '@/config/site'
import { Badge } from '@/shared/components/ui/Badge'
import { Button } from '@/shared/components/ui/Button'
import { SectionHead } from '@/shared/components/ui/SectionHead'
import { useCarouselDots } from '@/shared/hooks/useCarouselDots'
import { testimonials } from '@/features/testimonials/data/testimonials'
import styles from './TestimonialsSection.module.css'

export function TestimonialsSection() {
  const { trackRef, active, goTo } = useCarouselDots<HTMLUListElement>()

  return (
    <section className="section" id="testimonios" aria-labelledby="testimonios-title">
      <div className="wrap">
        <SectionHead
          eyebrow="Testimonios"
          titleId="testimonios-title"
          sub="Aquí irán las opiniones reales de nuestras clientas."
          title={
            <>
              Lo que dicen nuestras <em>clientas</em>
            </>
          }
        />
        <ul ref={trackRef} className={styles.list}>
          {testimonials.map((item) => (
            <li key={item.id} className={`card ${styles.card}`}>
              <span className={styles.quote} aria-hidden="true">
                &ldquo;
              </span>
              <p className={styles.text}>{item.quote}</p>
              <div className={styles.who}>
                <span className={styles.avatar} aria-hidden="true" />
                <span>{item.author}</span>
              </div>
              {!item.confirmed && <Badge>Por recopilar</Badge>}
            </li>
          ))}
        </ul>
        <div className={styles.dots} role="group" aria-label="Elegir testimonio">
          {testimonials.map((item, i) => (
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
        <div className="center">
          <Button
            href={site.reviewsUrl ?? '#'}
            variant="outline"
            target={site.reviewsUrl ? '_blank' : undefined}
            rel={site.reviewsUrl ? 'noopener' : undefined}
            aria-describedby={site.reviewsUrl ? undefined : 'resenas-nota'}
          >
            Ver reseñas en Google
          </Button>
          {!site.reviewsUrl && (
            <p className="fine" id="resenas-nota">
              Enlace pendiente.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
