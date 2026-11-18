import { SectionHead } from '../../../shared/components/ui/SectionHead'
import { faq } from '../data/faq'
import styles from './FaqSection.module.css'

export function FaqSection() {
  return (
    <section className={`section ${styles.faq}`} id="preguntas" aria-labelledby="faq-title">
      <div className={`wrap ${styles.inner}`}>
        <SectionHead
          eyebrow="Preguntas frecuentes"
          titleId="faq-title"
          title={
            <>
              Antes de tu <em>cita</em>
            </>
          }
        />
        <div className={styles.accordion}>
          {faq.map((item) => (
            <details key={item.question} className={styles.item}>
              <summary>{item.question}</summary>
              <p className={item.answer ? undefined : styles.pending}>{item.answer ?? 'Por confirmar con el estudio.'}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
