import { Fragment } from 'react'
import { SparkleIcon } from '@/shared/components/icons/icons'
import { Marquee } from './Marquee'
import styles from './GlamBand.module.css'

const words = ['Uñas', 'Pedicure spa', 'Pestañas', 'Cejas', 'Faciales', 'Depilación']

export function GlamBand() {
  return (
    <div className={styles.band} aria-hidden="true">
      <Marquee duration={60}>
        {words.map((word) => (
          <Fragment key={word}>
            <span className={styles.word}>{word}</span>
            <SparkleIcon className={styles.sparkle} />
          </Fragment>
        ))}
      </Marquee>
    </div>
  )
}
