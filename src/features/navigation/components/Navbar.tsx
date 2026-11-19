import { useRef, useState } from 'react'
import { site } from '@/config/site'
import { Logo } from '@/shared/components/brand/Logo'
import { InstagramIcon, MenuIcon } from '@/shared/components/icons/icons'
import { Button } from '@/shared/components/ui/Button'
import { Link } from 'react-router'
import { navLinks } from '@/features/navigation/data/navLinks'
import { AnnouncementBar } from './AnnouncementBar'
import { MobileMenu } from './MobileMenu'
import styles from './Navbar.module.css'

const menuId = 'menu-movil'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  return (
    <header className={styles.header}>
      <AnnouncementBar />
      <div className={`wrap ${styles.inner}`}>
        <Link className={styles.logo} to="/" aria-label="Nails & Go Studio, inicio">
          <Logo />
        </Link>
        <nav className={styles.nav} aria-label="Principal">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className={styles.actions}>
          <a className={styles.ig} href={site.instagram.url} target="_blank" rel="noopener" aria-label={`Instagram ${site.instagram.handle}`}>
            <InstagramIcon />
          </a>
          <Button href="#reservar" size="sm" className={styles.cta}>
            Reservar
          </Button>
          <button
            ref={toggleRef}
            className={styles.menu}
            type="button"
            aria-label="Abrir menú"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </button>
        </div>
      </div>
      <MobileMenu id={menuId} open={open} onClose={() => setOpen(false)} returnFocusRef={toggleRef} />
    </header>
  )
}
