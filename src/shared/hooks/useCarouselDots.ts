import { useEffect, useRef, useState } from 'react'

export function useCarouselDots<T extends HTMLElement>() {
  const trackRef = useRef<T>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const onScroll = () => {
      const slides = Array.from(track.children) as HTMLElement[]
      const x = track.scrollLeft
      let best = 0
      slides.forEach((slide, i) => {
        const d = Math.abs(slide.offsetLeft - track.offsetLeft - x)
        const b = Math.abs(slides[best].offsetLeft - track.offsetLeft - x)
        if (d < b) best = i
      })
      setActive(best)
    }
    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [])

  const goTo = (index: number) => {
    const track = trackRef.current
    const slide = track?.children[index] as HTMLElement | undefined
    if (!track || !slide) return
    track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: 'smooth' })
  }

  return { trackRef, active, goTo }
}
