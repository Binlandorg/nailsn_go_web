import { useEffect, useState } from 'react'
import { heroSlides } from '@/config/photos'
import { useMediaQuery } from '@/shared/hooks/useMediaQuery'
import styles from './HeroSlideshow.module.css'

const slideMs = 7000

export function HeroSlideshow() {
  const reduced = useMediaQuery('(prefers-reduced-motion: reduce)')
  const [index, setIndex] = useState(0)
  const slides = reduced ? heroSlides.slice(0, 1) : heroSlides

  useEffect(() => {
    if (reduced || heroSlides.length < 2) return
    const timer = window.setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), slideMs)
    return () => window.clearInterval(timer)
  }, [reduced])

  return (
    <div className={styles.slideshow} role="img" aria-label={slides[reduced ? 0 : index].alt}>
      {slides.map((slide, i) => (
        <img
          key={slide.src}
          className={styles.slide}
          data-active={reduced || i === index}
          src={slide.src}
          alt=""
          style={{ objectPosition: slide.position }}
          fetchPriority={i === 0 ? 'high' : 'low'}
          decoding="async"
        />
      ))}
    </div>
  )
}
