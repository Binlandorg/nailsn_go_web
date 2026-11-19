import { useEffect, useState } from 'react'

export function useRotatingIndex(length: number, intervalMs: number, delayMs: number, enabled: boolean) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!enabled || length < 2) return
    let timer = 0
    const start = window.setTimeout(() => {
      setIndex((i) => (i + 1) % length)
      timer = window.setInterval(() => setIndex((i) => (i + 1) % length), intervalMs)
    }, intervalMs + delayMs)
    return () => {
      window.clearTimeout(start)
      window.clearInterval(timer)
    }
  }, [length, intervalMs, delayMs, enabled])

  return enabled ? index : 0
}
