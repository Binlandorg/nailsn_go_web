import type { ReactNode } from 'react'

export function Badge({ children = 'Por confirmar' }: { children?: ReactNode }) {
  return <span className="badge">{children}</span>
}
