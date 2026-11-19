import type { Category } from '@/features/services/data/services'
import { CategoryPhotos } from './CategoryPhotos'
import styles from './ServicesCatalog.module.css'

interface CategoryBannerProps {
  category: Category
  count: number
}

export function CategoryBanner({ category, count }: CategoryBannerProps) {
  return (
    <div className={styles.banner}>
      <CategoryPhotos key={category.id} photos={category.photos} delayMs={0} />
      <span className={styles.shade} aria-hidden="true" />
      <div className={styles.bannerBody}>
        <h3 className={styles.bannerTitle}>{category.name}</h3>
        <p className={styles.bannerText}>{category.tagline}</p>
        <p className={styles.bannerCount}>
          {count} {count === 1 ? 'servicio' : 'servicios'}
        </p>
      </div>
    </div>
  )
}
