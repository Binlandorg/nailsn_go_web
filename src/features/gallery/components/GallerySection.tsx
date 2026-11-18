import { useState } from 'react'
import { SectionHead } from '../../../shared/components/ui/SectionHead'
import { CategoryIcon } from '../../services/components/CategoryIcon'
import { categories, type CategoryId } from '../../services/data/services'
import { gallery } from '../data/gallery'
import { BeforeAfter } from './BeforeAfter'
import styles from './GallerySection.module.css'

type Filter = CategoryId | 'todas'

const filters: { id: Filter; name: string }[] = [{ id: 'todas', name: 'Todas' }, ...categories]

export function GallerySection() {
  const [filter, setFilter] = useState<Filter>('todas')
  const items = gallery.filter((item) => filter === 'todas' || item.category === filter)

  return (
    <section className={`section ${styles.works}`} id="trabajos" aria-labelledby="trabajos-title">
      <div className="wrap">
        <SectionHead
          eyebrow="Trabajos"
          titleId="trabajos-title"
          title={
            <>
              Nuestros <em>trabajos</em>
            </>
          }
          sub="Muy pronto, fotos reales de lo que hacemos en el estudio."
          subClassName={styles.sub}
        />
        <div className={styles.filters} role="group" aria-label="Filtrar trabajos por categoría">
          {filters.map((option) => (
            <button
              key={option.id}
              className={styles.filter}
              type="button"
              aria-pressed={filter === option.id}
              onClick={() => setFilter(option.id)}
            >
              {option.name}
            </button>
          ))}
        </div>
        <ul className={styles.gallery}>
          {items.map((item) => (
            <li key={`${filter}-${item.title}`} className={styles.tile}>
              {item.image ? (
                <img src={item.image} alt={item.title} loading="lazy" />
              ) : (
                <>
                  <div className={styles.ring}>
                    <CategoryIcon id={item.category} />
                  </div>
                  <span className={styles.tileTitle}>{item.title}</span>
                  <span className={styles.tileNote}>Foto próximamente</span>
                </>
              )}
            </li>
          ))}
        </ul>
        <BeforeAfter />
      </div>
    </section>
  )
}
