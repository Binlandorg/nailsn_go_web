import { SectionHead } from '@/shared/components/ui/SectionHead'
import { Button } from '@/shared/components/ui/Button'
import { useReveal } from '@/shared/hooks/useReveal'
import { categories, servicesPath } from '@/features/services/data/services'
import { CategoryCard } from './CategoryCard'
import styles from './ServicesSection.module.css'

const staggerMs = 1300

export function ServicesSection() {
  const { ref, revealClass } = useReveal<HTMLDivElement>()
  return (
    <section className="section" id="servicios" aria-labelledby="servicios-title">
      <div className="wrap">
        <SectionHead
          eyebrow="Servicios"
          titleId="servicios-title"
          title={
            <>
              Todo lo que te <em>encanta</em>, en un solo lugar
            </>
          }
          sub="Elige una categoría para ver sus servicios y reservar."
        />
        <div ref={ref} className={`${styles.tiles} ${revealClass}`}>
          {categories.map((category, i) => (
            <CategoryCard key={category.id} category={category} featured={i === 0} delayMs={i * staggerMs} />
          ))}
        </div>
        <div className="center">
          <Button to={servicesPath()} variant="outline">
            Ver todos los servicios
          </Button>
          <p className="fine">Imágenes referenciales.</p>
        </div>
      </div>
    </section>
  )
}
