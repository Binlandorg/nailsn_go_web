import { useEffect, useRef } from 'react'
import { heroVideo, photos } from '../../../config/photos'
import { Button } from '../../../shared/components/ui/Button'
import styles from './Hero.module.css'

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.removeAttribute('autoplay')
      video.pause()
    }
  }, [])

  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.media}>
        <video
          ref={videoRef}
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={photos.interior.src}
          aria-label="Zona de pedicure spa de Nails & Go Studio con sillones de terciopelo rosa"
        >
          <source media="(max-width: 959px)" src={heroVideo.vertical} type="video/mp4" />
          <source src={heroVideo.horizontal} type="video/mp4" />
        </video>
      </div>
      <div className={styles.text}>
        <h1 className={styles.title}>
          <span className={styles.line}>Good Day,</span>
          <span className={styles.line}>
            Good <em>Nails</em>,
          </span>
          <span className={styles.line}>Good Mood.</span>
        </h1>
        <p className={styles.sub}>
          Uñas, pedicure spa, pestañas, cejas, faciales y depilación en un espacio pensado para que salgas sintiéndote increíble.
        </p>
        <p className={styles.subMobile}>Uñas, pestañas, cejas y spa en un solo lugar.</p>
        <div className={styles.actions}>
          <Button href="#reservar" className={styles.cta}>
            Reservar por WhatsApp
          </Button>
          <a className={`link ${styles.more}`} href="#servicios">
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  )
}
