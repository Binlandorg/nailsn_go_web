import { useEffect, type RefObject } from 'react'

interface AutoScrollOptions {
  enabled: boolean
  secondsPerLoop?: number
  resumeDelay?: number
}

export function useAutoScroll<T extends HTMLElement>(
  trackRef: RefObject<T | null>,
  originals: number,
  { enabled, secondsPerLoop = 50, resumeDelay = 2500 }: AutoScrollOptions,
) {
  useEffect(() => {
    const track = trackRef.current
    if (!track || !enabled || originals < 2) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    let last = 0
    let position = track.scrollLeft
    let paused = false
    let resumeTimer = 0

    const loopWidth = () => {
      const first = track.children[0] as HTMLElement | undefined
      const clone = track.children[originals] as HTMLElement | undefined
      return first && clone ? clone.offsetLeft - first.offsetLeft : 0
    }

    const step = (time: number) => {
      const width = loopWidth()
      const delta = last ? time - last : 0
      last = time
      if (!paused && width > track.clientWidth) {
        if (Math.abs(track.scrollLeft - position) > 2) position = track.scrollLeft
        position += (width / (secondsPerLoop * 1000)) * delta
        if (position >= width) position -= width
        track.scrollLeft = position
      } else {
        position = track.scrollLeft
        if (position >= width && width > 0) {
          position -= width
          track.scrollLeft = position
        }
      }
      frame = requestAnimationFrame(step)
    }

    const pause = () => {
      paused = true
      window.clearTimeout(resumeTimer)
    }
    const resumeLater = () => {
      window.clearTimeout(resumeTimer)
      resumeTimer = window.setTimeout(() => {
        paused = false
        position = track.scrollLeft
      }, resumeDelay)
    }
    const onFocusOut = (event: FocusEvent) => {
      if (!track.contains(event.relatedTarget as Node | null)) resumeLater()
    }

    track.addEventListener('pointerdown', pause)
    track.addEventListener('pointerup', resumeLater)
    track.addEventListener('pointercancel', resumeLater)
    track.addEventListener('mouseenter', pause)
    track.addEventListener('mouseleave', resumeLater)
    track.addEventListener('touchstart', pause, { passive: true })
    track.addEventListener('touchend', resumeLater)
    track.addEventListener('focusin', pause)
    track.addEventListener('focusout', onFocusOut)
    frame = requestAnimationFrame(step)

    return () => {
      cancelAnimationFrame(frame)
      window.clearTimeout(resumeTimer)
      track.removeEventListener('pointerdown', pause)
      track.removeEventListener('pointerup', resumeLater)
      track.removeEventListener('pointercancel', resumeLater)
      track.removeEventListener('mouseenter', pause)
      track.removeEventListener('mouseleave', resumeLater)
      track.removeEventListener('touchstart', pause)
      track.removeEventListener('touchend', resumeLater)
      track.removeEventListener('focusin', pause)
      track.removeEventListener('focusout', onFocusOut)
    }
  }, [trackRef, originals, enabled, secondsPerLoop, resumeDelay])
}
