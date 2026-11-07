import { Button } from '../../../shared/components/ui/Button'
import { Reveal } from '../../../shared/components/ui/Reveal'
import { ScriptText } from '../../../shared/components/ui/ScriptText'
import { SectionHeading } from '../../../shared/components/ui/SectionHeading'
import { Sparkle } from '../../../shared/components/decorations/Sparkle'
import { ArrowRightIcon } from '../../../shared/components/icons/icons'
import { services } from '../data/services'
import { ServiceCard } from './ServiceCard'
import styles from './ServicesSection.module.css'

export function ServicesSection() {
  return (
    <section id="servicios" className={styles.section}>
      <Sparkle size={28} tone="bubblegum" className={styles.sparkleA} />
      <Sparkle size={18} delay={1200} className={styles.sparkleB} />

      <div className="container">
        <div className={styles.header}>
          <SectionHeading
            eyebrow="Nuestros servicios"
            title={
              <>
                Servicios con <ScriptText>mucho glam</ScriptText>
              </>
            }
          />
          <Reveal delay={250} className={styles.aside}>
            <p>
              Cada set empieza con una conversación: tu estilo, tu ocasión y lo que te hace sentir tú. Nosotras
              ponemos la técnica y el brillo.
            </p>
            <Button href="#contacto" variant="secondary" icon={<ArrowRightIcon />}>
              Pedir mi cita
            </Button>
          </Reveal>
        </div>

        <ul className={styles.grid}>
          {services.map((service, index) => (
            <li key={service.id} className={styles.item}>
              <Reveal delay={(index % 3) * 120}>
                <ServiceCard service={service} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
