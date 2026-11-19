import { Link } from 'react-router'
import { ArrowRightIcon } from '@/shared/components/icons/icons'
import { servicesOf, servicesPath, type Category } from '@/features/services/data/services'
import { CategoryPhotos } from './CategoryPhotos'
import styles from './ServicesSection.module.css'

interface CategoryCardProps {
  category: Category
  featured?: boolean
  delayMs: number
}

export function CategoryCard({ category, featured = false, delayMs }: CategoryCardProps) {
  const count = servicesOf(category.id).length
  return (
    <Link
      className={styles.tile}
      data-featured={featured}
      to={servicesPath(category.id)}
      aria-label={`${category.name}: ver ${count} ${count === 1 ? 'servicio' : 'servicios'}`}
    >
      <CategoryPhotos photos={category.photos} delayMs={delayMs} />
      <span className={styles.shade} aria-hidden="true" />
      <span className={styles.body}>
        <span className={styles.name}>{category.name}</span>
        <span className={styles.tagline}>{category.tagline}</span>
        <span className={styles.meta}>
          {count} {count === 1 ? 'servicio' : 'servicios'}
          <span className={styles.arrow} aria-hidden="true">
            <ArrowRightIcon />
          </span>
        </span>
      </span>
    </Link>
  )
}
