import { Fragment } from 'react'
import { announcements } from '@/config/site'
import { HeartIcon } from '@/shared/components/icons/icons'
import { Marquee } from '@/shared/components/ui/Marquee'
import styles from './AnnouncementBar.module.css'

export function AnnouncementBar() {
  return (
    <aside className={styles.bar} aria-label="Novedades">
      <Marquee duration={34} pauseOnHover className={styles.marquee}>
        {announcements.map((text) => (
          <Fragment key={text}>
            <span className={styles.item}>{text}</span>
            <HeartIcon className={styles.heart} />
          </Fragment>
        ))}
      </Marquee>
    </aside>
  )
}
