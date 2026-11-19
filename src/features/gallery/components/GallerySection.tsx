import { useState } from 'react'
import { site } from '@/config/site'
import { InstagramIcon } from '@/shared/components/icons/icons'
import { Button } from '@/shared/components/ui/Button'
import { SectionHead } from '@/shared/components/ui/SectionHead'
import { CategoryIcon } from '@/features/services/components/CategoryIcon'
import { categories, type CategoryId } from '@/features/services/data/services'
import { gallery } from '@/features/gallery/data/gallery'
import { BeforeAfter } from './BeforeAfter'
import styles from './GallerySection.module.css'

type Filter = CategoryId | 'todas'

const filters: { id: Filter; name: string }[] = [{ id: 'todas', name: 'Todas' }, ...categories]

export function GallerySection() {
  const [filter, setFilter] = useState<Filter>('todas')
  const items = gallery.filter((item) => (filter === 'todas' ? Boolean(item.image) : item.category === filter))

  return (
    <section className="section" id="trabajos" aria-labelledby="trabajos-title">
      <div className="wrap">
        <SectionHead
          eyebrow="Galería"
          titleId="trabajos-title"
          title={
            <>
              Inspírate con <em>nuestros diseños</em>
            </>
          }
          sub="Ideas para tu próxima cita. Pronto, fotos reales de lo que hacemos en el estudio."
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
            <li
              key={`${filter}-${item.title}`}
              className={`${styles.tile} ${item.image ? styles.photo : ''} ${item.size === 'tall' ? styles.tall : ''}`}
            >
              {item.image ? (
                <>
                  <img src={item.image} alt={item.alt ?? item.title} loading="lazy" />
                  <span className={styles.caption}>{item.title}</span>
                </>
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
        <div className={styles.footer}>
          <p className={styles.note}>Imágenes referenciales</p>
          <Button href={site.instagram.url} target="_blank" rel="noopener" variant="outline" className={styles.ig}>
            Síguenos en Instagram
            <InstagramIcon className={styles.igIcon} />
          </Button>
        </div>
        <BeforeAfter />
      </div>
    </section>
  )
}
