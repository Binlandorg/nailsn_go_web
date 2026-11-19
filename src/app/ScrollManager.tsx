import { useEffect } from 'react'
import { useLocation } from 'react-router'

const maxFrames = 30

export function ScrollManager() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      return
    }
    const id = decodeURIComponent(hash.slice(1))
    let frame = 0
    let raf = 0
    const tryScroll = () => {
      const target = document.getElementById(id)
      if (target) {
        target.scrollIntoView({ block: 'start' })
        return
      }
      if (frame++ < maxFrames) raf = window.requestAnimationFrame(tryScroll)
    }
    tryScroll()
    return () => window.cancelAnimationFrame(raf)
  }, [pathname, hash, key])

  return null
}
