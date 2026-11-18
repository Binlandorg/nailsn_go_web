import { useEffect, useRef, useState } from 'react'
import { ChevronIcon } from '../../../shared/components/icons/icons'
import { SectionHead } from '../../../shared/components/ui/SectionHead'
import { useReveal } from '../../../shared/components/ui/useReveal'
import { bookingText, whatsappLink } from '../../../shared/utils/whatsapp'
import { categories, servicesByCategory, type Category, type Service } from '../data/services'
import { CategoryIcon } from './CategoryIcon'
import { ServiceDialog } from './ServiceDialog'
import styles from './ServicesSection.module.css'

interface CategoryBlockProps {
  category: Category
  items: Service[]
  onOpen: (service: Service) => void
}

function CategoryBlock({ category, items, onOpen }: CategoryBlockProps) {
  const { ref, revealClass } = useReveal<HTMLElement>()
  return (
    <section
      ref={ref}
      className={`${styles.category} ${revealClass}`}
      id={`cat-${category.id}`}
      data-category={category.id}
      aria-labelledby={`cat-${category.id}-title`}
    >
      <div className={styles.head}>
        <CategoryIcon id={category.id} />
        <h3 id={`cat-${category.id}-title`}>{category.name}</h3>
      </div>
      <ul className={styles.list}>
        {items.map((service) => (
          <li key={service.id} className={styles.service}>
            <button className={styles.open} type="button" aria-haspopup="dialog" onClick={() => onOpen(service)}>
              <span className={styles.name}>{service.name}</span>
              <span className={styles.desc}>{service.description}</span>
              <span className={styles.priceMobile}>{service.price}</span>
              <ChevronIcon className={styles.chev} />
            </button>
            <div className={styles.meta}>
              <span>{service.duration}</span>
              <span className={styles.price}>{service.price}</span>
            </div>
            <a className={styles.cta} href={whatsappLink(bookingText(service.name))} target="_blank" rel="noopener">
              Reservar este servicio
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

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
    if (chip) nav.scrollTo({ left: chip.offsetLeft - 16, behavior: 'smooth' })
  }, [current])

  return (
    <section className={`section ${styles.services}`} id="servicios" aria-labelledby="servicios-title">
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
