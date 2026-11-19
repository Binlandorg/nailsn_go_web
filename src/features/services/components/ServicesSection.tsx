import { useEffect, useState } from 'react'
import { SectionHead } from '@/shared/components/ui/SectionHead'
import { categories, servicesByCategory, type CategoryId, type Service } from '@/features/services/data/services'
import { categoryEvent } from '@/features/services/utils/selectCategory'
import { CategoryBlock } from './CategoryBlock'
import { ServiceDialog } from './ServiceDialog'
import styles from './ServicesSection.module.css'

export function ServicesSection() {
  const [selected, setSelected] = useState<Service | null>(null)
  const [current, setCurrent] = useState<CategoryId>(categories[0].id)

  useEffect(() => {
    const onSelect = (event: Event) => setCurrent((event as CustomEvent<CategoryId>).detail)
    window.addEventListener(categoryEvent, onSelect)
    return () => window.removeEventListener(categoryEvent, onSelect)
  }, [])

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
          sub="Toca un servicio para ver el detalle y reservarlo."
        />
        <div className={styles.chips} role="group" aria-label="Elegir categoría de servicios">
          {categories.map((category) => (
            <button
              key={category.id}
              className={styles.chip}
              type="button"
              aria-pressed={current === category.id}
              onClick={() => setCurrent(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className={styles.categories}>
          {servicesByCategory.map(({ category, items }) => (
            <CategoryBlock
              key={category.id}
              category={category}
              items={items}
              active={current === category.id}
              onOpen={setSelected}
            />
          ))}
        </div>
      </div>
      <ServiceDialog service={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
