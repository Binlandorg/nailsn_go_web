import { useEffect, useRef } from 'react'
import { heroVideo, photos } from '@/config/photos'
import { site } from '@/config/site'
import { Sparkle } from '@/shared/components/decorations/Sparkle'
import { ArrowRightIcon, BrushIcon } from '@/shared/components/icons/icons'
import { Button } from '@/shared/components/ui/Button'
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
        <p className={styles.chip}>
          <BrushIcon />
          Uñas · Cejas · Pestañas
        </p>
        <Sparkle size={30} className={styles.sparkleA} />
        <Sparkle size={18} tone="white" delay={900} className={styles.sparkleB} />
      </div>
      <div className={styles.copy}>
        <p className={`eyebrow ${styles.kicker}`}>Salón spa · {site.area}</p>
        <h1 className={styles.title}>
          <span className={styles.line}>El salón más</span>
          <span className={styles.line}>
            <span className={styles.script}>aesthetic</span>
          </span>
          <span className={styles.line}>del Cono Norte.</span>
        </h1>
        <p className={styles.lead}>
          Uñas, pedicure spa, pestañas, cejas, faciales y depilación en un espacio pensado para que salgas sintiéndote increíble.
        </p>
        <p className={styles.leadMobile}>Uñas, pestañas, cejas y spa en un solo lugar.</p>
        <div className={styles.ctas}>
          <Button href="#reservar" className={styles.cta}>
            Reservar por WhatsApp
            <ArrowRightIcon className={styles.arrow} />
          </Button>
          <Button href="#servicios" variant="outline" className={styles.secondary}>
            Ver servicios
          </Button>
        </div>
      </div>
    </section>
  )
}
