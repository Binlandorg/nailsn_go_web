import { Fragment } from 'react'
import { HeartIcon } from '../../../shared/components/icons/icons'
import { Marquee } from '../../../shared/components/ui/Marquee'
import { announcements } from '../data/navLinks'
import styles from './AnnouncementBar.module.css'

export function AnnouncementBar() {
  return (
    <aside className={styles.bar} aria-label="Novedades">
      <Marquee duration={36} pauseOnHover>
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
