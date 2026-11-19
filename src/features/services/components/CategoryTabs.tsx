import { useEffect, useRef, type KeyboardEvent } from 'react'
import { categories, type CategoryId } from '@/features/services/data/services'
import styles from './ServicesCatalog.module.css'

interface CategoryTabsProps {
  current: CategoryId
  onChange: (id: CategoryId) => void
}

export function CategoryTabs({ current, onChange }: CategoryTabsProps) {
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const list = listRef.current
    const tab = list?.querySelector<HTMLButtonElement>(`#tab-${current}`)
    if (!list || !tab) return
    const left = tab.offsetLeft - (list.clientWidth - tab.offsetWidth) / 2
    list.scrollTo({ left: Math.max(0, left), behavior: 'smooth' })
  }, [current])

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return
    event.preventDefault()
    const index = categories.findIndex((c) => c.id === current)
    const step = event.key === 'ArrowRight' ? 1 : -1
    const next = categories[(index + step + categories.length) % categories.length]
    onChange(next.id)
    listRef.current?.querySelector<HTMLButtonElement>(`#tab-${next.id}`)?.focus()
  }

  return (
    <div ref={listRef} className={styles.tabs} role="tablist" aria-label="Categorías de servicios" onKeyDown={onKeyDown}>
      {categories.map((category) => {
        const active = category.id === current
        return (
          <button
            key={category.id}
            id={`tab-${category.id}`}
            className={styles.tab}
            type="button"
            role="tab"
            aria-selected={active}
            aria-controls="catalogo-panel"
            tabIndex={active ? 0 : -1}
            onClick={() => onChange(category.id)}
          >
            {category.name}
          </button>
        )
      })}
    </div>
  )
}
