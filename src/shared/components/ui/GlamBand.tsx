import { Fragment } from 'react'
import { SparkleIcon } from '../icons/icons'
import { Marquee } from './Marquee'
import styles from './GlamBand.module.css'

const words = ['Uñas', 'Cejas', 'Pestañas', 'Micropigmentación', 'Faciales', 'Depilación']

function BandWords() {
  return words.map((word) => (
    <Fragment key={word}>
      <span className={styles.word}>{word}</span>
      <SparkleIcon className={styles.sparkle} />
    </Fragment>
  ))
}

export function GlamBand() {
  return (
    <div className={styles.band} aria-hidden="true">
      <Marquee duration={38} reverse className={styles.back}>
        <BandWords />
      </Marquee>
      <Marquee duration={30} className={styles.front}>
        <BandWords />
      </Marquee>
    </div>
  )
}
