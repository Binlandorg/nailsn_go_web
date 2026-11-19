import { photos } from '../../../config/photos'
import { Sparkle } from '../../../shared/components/decorations/Sparkle'
import { HeartIcon } from '../../../shared/components/icons/icons'
import { Reveal } from '../../../shared/components/ui/Reveal'
import styles from './StudioCollage.module.css'

export function StudioCollage() {
  return (
    <div className={styles.collage}>
      <Reveal variant="left" className={styles.tall}>
        <img src={photos.gelProcess} alt="Manicurista aplicando gel" loading="lazy" />
      </Reveal>

      <Reveal variant="zoom" delay={200} className={styles.square}>
        <img src={photos.polishBottles} alt="Esmaltes de colores" loading="lazy" />
      </Reveal>

      <Reveal variant="tilt" delay={400} className={styles.note}>
        <HeartIcon className={styles.noteIcon} />
        <p className={styles.noteScript}>consiéntete</p>
        <p className={styles.noteText}>uñas · cejas · pestañas</p>
      </Reveal>

      <Sparkle size={30} className={styles.sparkleA} />
      <Sparkle size={16} tone="rose" delay={900} className={styles.sparkleB} />
    </div>
  )
}
