import { Marquee } from '../../../shared/components/ui/Marquee'
import { ScriptText } from '../../../shared/components/ui/ScriptText'
import { SectionHeading } from '../../../shared/components/ui/SectionHeading'
import { Sparkle } from '../../../shared/components/decorations/Sparkle'
import { testimonials } from '../data/testimonials'
import { TestimonialCard } from './TestimonialCard'
import styles from './TestimonialsSection.module.css'

// la segunda fila va en orden inverso para que nunca coincidan las mismas tarjetas
const rows = [testimonials, testimonials.toReversed()]

export function TestimonialsSection() {
  return (
    <section id="opiniones" className={styles.section}>
      <Sparkle size={36} tone="white" className={styles.sparkleA} />
      <Sparkle size={20} delay={700} className={styles.sparkleB} />

      <div className="container">
        <SectionHeading
          align="center"
          eyebrow="Opiniones"
          title={
            <>
              Lo que dicen <ScriptText>nuestras clientas</ScriptText>
            </>
          }
        />
      </div>

      <div className={styles.rows}>
        {rows.map((row, index) => (
          <Marquee key={index} duration={44} reverse={index % 2 === 1} pauseOnHover className={styles.row}>
            {row.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </Marquee>
        ))}
      </div>
    </section>
  )
}
