import { useEffect, useRef, useState } from 'react'
import { SectionHead } from '@/shared/components/ui/SectionHead'
import { categories, servicesByCategory, type Service } from '@/features/services/data/services'
import { CategoryBlock } from './CategoryBlock'
import { ServiceDialog } from './ServiceDialog'
import styles from './ServicesSection.module.css'

export function ServicesSection() {
  const [selected, setSelected] = useState<Service | null>(null)
  const [current, setCurrent] = useState<string>(categories[0].id)
  const listRef = useRef<HTMLDivElement>(null)
  const chipsRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const list = listRef.current
    if (!list || !('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setCurrent((entry.target as HTMLElement).dataset.category ?? '')
        }
      },
      { rootMargin: '-35% 0px -55% 0px' },
    )
    list.querySelectorAll('[data-category]').forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const nav = chipsRef.current
    if (!nav || !window.matchMedia('(max-width: 767px)').matches) return
    const chip = nav.querySelector<HTMLElement>(`[href="#cat-${current}"]`)
    if (chip) {
      const left = nav.scrollLeft + chip.getBoundingClientRect().left - nav.getBoundingClientRect().left - 16
      nav.scrollTo({ left: Math.max(0, left), behavior: 'smooth' })
    }
  }, [current])

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
          sub="Toca un servicio para ver el detalle. Precios y duración por confirmar."
        />
        <nav ref={chipsRef} className={styles.chips} aria-label="Categorías de servicios">
          {categories.map((category) => (
            <a
              key={category.id}
              className={styles.chip}
              href={`#cat-${category.id}`}
              aria-current={current === category.id ? 'true' : undefined}
            >
              {category.name}
            </a>
          ))}
        </nav>
        <div ref={listRef} className={styles.categories}>
          {servicesByCategory.map(({ category, items }) => (
            <CategoryBlock key={category.id} category={category} items={items} onOpen={setSelected} />
          ))}
        </div>
      </div>
      <ServiceDialog service={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
