import type { SVGProps } from 'react'
import type { CategoryId } from '@/features/services/data/services'

const paths: Record<CategoryId, string[]> = {
  unas: ['M18 42V22a6 6 0 0 1 12 0v20', 'M18 26h12', 'M21 16c0-6 3-10 3-10s3 4 3 10'],
  pedicure: ['M8 30h32v4a8 8 0 0 1-8 8H16a8 8 0 0 1-8-8z', 'M14 30c0-8 4-14 10-14s10 6 10 14', 'M20 10c0-2 2-4 4-4s4 2 4 4'],
  'pestanas-cejas': ['M6 26s7-10 18-10 18 10 18 10-7 10-18 10S6 26 6 26z', 'M12 15l-2-4M20 12l-1-4M28 12l1-4M36 15l2-4'],
  faciales: ['M19 20h.01M29 20h.01', 'M19 27c3 2 7 2 10 0', 'M12 42c3-4 7-6 12-6s9 2 12 6'],
  depilacion: ['M14 40c2-10 4-22 10-30 6 8 8 20 10 30', 'M18 30h12'],
}

const circles: Partial<Record<CategoryId, { cx: number; cy: number; r: number }>> = {
  'pestanas-cejas': { cx: 24, cy: 26, r: 5 },
  faciales: { cx: 24, cy: 22, r: 12 },
}

export function CategoryIcon({ id, ...props }: { id: CategoryId } & SVGProps<SVGSVGElement>) {
  const circle = circles[id]
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
      {circle && <circle {...circle} />}
      {paths[id].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  )
}
