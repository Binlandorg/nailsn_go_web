import { Button } from '../../../shared/components/ui/Button'
import { Reveal } from '../../../shared/components/ui/Reveal'
import { ScriptText } from '../../../shared/components/ui/ScriptText'
import { SectionHeading } from '../../../shared/components/ui/SectionHeading'
import { ArrowRightIcon } from '../../../shared/components/icons/icons'
import { highlights } from '../data/highlights'
import { HighlightItem } from './HighlightItem'
import { StudioCollage } from './StudioCollage'
import styles from './StudioSection.module.css'

export function StudioSection() {
  return (
    <section id="estudio" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <StudioCollage />

        <div className={styles.content}>
          <SectionHeading
            eyebrow="Nuestro estudio"
            title={
              <>
                Tu momento <ScriptText>para brillar</ScriptText>
              </>
            }
            description="En Nails & Go creemos que unas uñas bonitas cambian el día. Por eso cuidamos cada detalle: la música, el café, la técnica y, sobre todo, cómo te vas sintiendo."
          />

          <ul className={styles.highlights}>
            {highlights.map((highlight, index) => (
              <li key={highlight.title}>
                <Reveal delay={index * 100}>
                  <HighlightItem highlight={highlight} />
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal delay={300}>
            <Button href="#contacto" icon={<ArrowRightIcon />}>
              Quiero mi cita
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
