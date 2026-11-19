import { bookingUrl } from '../../../config/site'
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
            eyebrow="El salón"
            title={
              <>
                Consiéntete <ScriptText>al máximo</ScriptText>
              </>
            }
            description="Somos un salón spa en Comas, expertas en uñas, cejas y pestañas. Un espacio aesthetic para que salgas lista para tu próximo plan."
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
            <Button href={bookingUrl()} target="_blank" rel="noreferrer" icon={<ArrowRightIcon />}>
              Agenda tu cita
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
