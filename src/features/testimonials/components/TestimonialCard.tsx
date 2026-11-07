import { StarIcon } from '../../../shared/components/icons/icons'
import type { Testimonial } from '../data/testimonials'
import styles from './TestimonialCard.module.css'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className={styles.card}>
      <div className={styles.stars} aria-label="5 de 5 estrellas">
        {Array.from({ length: 5 }, (_, index) => (
          <StarIcon key={index} />
        ))}
      </div>
      <blockquote className={styles.quote}>“{testimonial.quote}”</blockquote>
      <figcaption className={styles.author}>
        <span className={styles.avatar} aria-hidden="true">
          {testimonial.name.charAt(0)}
        </span>
        <span>
          <strong>{testimonial.name}</strong>
          <span className={styles.service}>{testimonial.service}</span>
        </span>
      </figcaption>
    </figure>
  )
}
