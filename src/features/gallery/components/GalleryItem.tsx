import { site } from '../../../config/site'
import { HeartIcon } from '../../../shared/components/icons/icons'
import type { GalleryPost } from '../data/gallery'
import styles from './GalleryItem.module.css'

interface GalleryItemProps {
  post: GalleryPost
}

export function GalleryItem({ post }: GalleryItemProps) {
  return (
    <a href={site.instagram.url} target="_blank" rel="noreferrer" className={styles.item}>
      <img src={post.image} alt={post.alt} loading="lazy" />
      <span className={styles.overlay}>
        <HeartIcon className={styles.heart} />
        <span className={styles.caption}>Ver en Instagram</span>
      </span>
    </a>
  )
}
