import type { CategoryPhoto } from '@/features/services/data/services'
import { useMediaQuery } from '@/shared/hooks/useMediaQuery'
import { useRotatingIndex } from '@/shared/hooks/useRotatingIndex'
import styles from './CategoryPhotos.module.css'

interface CategoryPhotosProps {
  photos: CategoryPhoto[]
  delayMs: number
}

const rotateMs = 6000

export function CategoryPhotos({ photos, delayMs }: CategoryPhotosProps) {
  const reduced = useMediaQuery('(prefers-reduced-motion: reduce)')
  const index = useRotatingIndex(photos.length, rotateMs, delayMs, !reduced)
  const visible = reduced ? photos.slice(0, 1) : photos

  return (
    <div className={styles.photos} aria-hidden="true">
      {visible.map((photo, i) => (
        <img
          key={photo.src}
          className={styles.photo}
          data-active={i === index}
          src={photo.src}
          alt=""
          loading="lazy"
          decoding="async"
        />
      ))}
    </div>
  )
}
