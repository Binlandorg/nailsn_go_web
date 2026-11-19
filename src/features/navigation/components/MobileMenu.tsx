import { useEffect, useRef, type KeyboardEvent, type RefObject } from 'react'
import { createPortal } from 'react-dom'
import { site } from '@/config/site'
import { CloseIcon, InstagramIcon, TikTokIcon } from '@/shared/components/icons/icons'
import { Button } from '@/shared/components/ui/Button'
import { useLockBodyScroll } from '@/shared/hooks/useLockBodyScroll'
import { navLinks } from '@/features/navigation/data/navLinks'
import styles from './MobileMenu.module.css'

interface MobileMenuProps {
  id: string
  open: boolean
  onClose: () => void
  returnFocusRef: RefObject<HTMLButtonElement | null>
}

const focusableSelector = 'a[href], button:not([disabled])'

export function MobileMenu({ id, open, onClose, returnFocusRef }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const wasOpen = useRef(false)
  useLockBodyScroll(open)

  useEffect(() => {
    if (open) {
      panelRef.current?.querySelector<HTMLElement>(focusableSelector)?.focus()
    } else if (wasOpen.current) {
      returnFocusRef.current?.focus()
    }
    wasOpen.current = open
  }, [open, returnFocusRef])

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      event.preventDefault()
      onClose()
      return
    }
    if (event.key !== 'Tab' || !panelRef.current) return
    const items = Array.from(panelRef.current.querySelectorAll<HTMLElement>(focusableSelector))
    if (!items.length) return
    const first = items[0]
    const last = items[items.length - 1]
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  return createPortal(
    <div
      className={styles.overlay}
      data-open={open}
      hidden={!open}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        ref={panelRef}
        id={id}
        className={styles.panel}
        role="dialog"
        aria-modal="true"
        aria-label="Menú"
        onKeyDown={onKeyDown}
      >
        <div className={styles.top}>
          <p className={styles.label}>Menú</p>
          <button className={styles.close} type="button" aria-label="Cerrar menú" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <nav aria-label="Secciones">
          <ul className={styles.links}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={onClose}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.social}>
          <a href={site.instagram.url} target="_blank" rel="noopener" aria-label={`Instagram ${site.instagram.handle}`}>
            <InstagramIcon />
          </a>
          <a href={site.tiktok.url} target="_blank" rel="noopener" aria-label={`TikTok ${site.tiktok.handle}`}>
            <TikTokIcon />
          </a>
        </div>
        <Button href="#reservar" block onClick={onClose}>
          Reservar
        </Button>
      </div>
    </div>,
    document.body,
  )
}
