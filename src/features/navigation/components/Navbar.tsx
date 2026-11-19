import { useEffect, useState } from 'react'
import { Logo } from '../../../shared/components/brand/Logo'
import { Button } from '../../../shared/components/ui/Button'
import { CloseIcon, InstagramIcon, MenuIcon, WhatsappIcon } from '../../../shared/components/icons/icons'
import { useLockBodyScroll } from '../../../shared/hooks/useLockBodyScroll'
import { useScrolled } from '../../../shared/hooks/useScrolled'
import { cn } from '../../../shared/utils/cn'
import { bookingChannel, bookingUrl, hasWhatsapp, site } from '../../../config/site'
import { navLinks } from '../data/navLinks'
import styles from './Navbar.module.css'

export function Navbar() {
  const scrolled = useScrolled()
  const [menuOpen, setMenuOpen] = useState(false)
  useLockBodyScroll(menuOpen)

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <>
      <header className={cn(styles.header, scrolled && styles.scrolled)}>
        <nav className={cn('container', styles.nav)} aria-label="Principal">
          <Logo />

          <ul className={styles.links}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.link}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noreferrer"
              className={styles.iconLink}
              aria-label="Instagram de Nails & Go Studio"
            >
              <InstagramIcon />
            </a>
            <Button href={bookingUrl()} target="_blank" rel="noreferrer" className={styles.cta}>
              Agenda tu cita
            </Button>
            <button
              type="button"
              className={styles.toggle}
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </nav>
      </header>

      <div id="mobile-menu" className={cn(styles.mobileMenu, menuOpen && styles.mobileMenuOpen)} inert={!menuOpen}>
        <ul className={styles.mobileLinks}>
          {navLinks.map((link, index) => (
            <li key={link.href} style={{ transitionDelay: menuOpen ? `${120 + index * 60}ms` : '0ms' }}>
              <a href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.mobileActions}>
          <Button
            href={bookingUrl()}
            size="lg"
            icon={hasWhatsapp ? <WhatsappIcon /> : <InstagramIcon />}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            Agendar por {bookingChannel}
          </Button>
        </div>
      </div>
    </>
  )
}
