import { ChevronIcon } from '@/shared/components/icons/icons'
import { buttonClass } from '@/shared/utils/buttonClass'
import { useReveal } from '@/shared/hooks/useReveal'
import { bookingText, whatsappLink } from '@/shared/utils/whatsapp'
import type { Category, Service } from '@/features/services/data/services'
import { CategoryIcon } from './CategoryIcon'
import styles from './ServicesSection.module.css'

interface CategoryBlockProps {
  category: Category
  items: Service[]
  active: boolean
  onOpen: (service: Service) => void
}

export function CategoryBlock({ category, items, active, onOpen }: CategoryBlockProps) {
  const { ref, revealClass } = useReveal<HTMLElement>()
  return (
    <section
      ref={ref}
      className={`${styles.category} ${revealClass}`}
      id={`cat-${category.id}`}
      data-active={active}
      aria-labelledby={`cat-${category.id}-title`}
    >
      <h3 id={`cat-${category.id}-title`} className={styles.catTitle}>
        {category.name}
        <span className={styles.count}>{items.length} {items.length === 1 ? 'servicio' : 'servicios'}</span>
      </h3>
      <ul className={styles.grid}>
        {items.map((service) => (
          <li key={service.id} className={`card ${styles.card}`}>
            <button className={styles.open} type="button" aria-haspopup="dialog" onClick={() => onOpen(service)}>
              <span className={styles.icon}>
                <CategoryIcon id={category.id} />
              </span>
              <span className={styles.name}>{service.name}</span>
              <span className={styles.desc}>{service.description}</span>
              <span className={styles.priceMobile}>{service.price}</span>
              <ChevronIcon className={styles.chev} />
            </button>
            <div className={styles.foot}>
              <span className={styles.price}>{service.price}</span>
              <a
                className={buttonClass({ variant: 'outline', size: 'sm', className: styles.cta })}
                href={whatsappLink(bookingText(service.name))}
                target="_blank"
                rel="noopener"
                aria-label={`Reservar ${service.name}`}
              >
                Reservar
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
