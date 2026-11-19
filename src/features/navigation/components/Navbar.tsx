import { site } from '@/config/site'
import { Logo } from '@/shared/components/brand/Logo'
import { InstagramIcon } from '@/shared/components/icons/icons'
import { Button } from '@/shared/components/ui/Button'
import { navLinks } from '@/features/navigation/data/navLinks'
import { AnnouncementBar } from './AnnouncementBar'
import styles from './Navbar.module.css'

export function Navbar() {
  return (
    <header className={styles.header}>
      <AnnouncementBar />
      <div className={`wrap ${styles.inner}`}>
        <a className={styles.logo} href="#inicio" aria-label="Nails & Go Studio, inicio">
          <Logo />
        </a>
        <nav className={styles.nav} aria-label="Principal">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className={styles.actions}>
          <a className={styles.ig} href={site.instagram.url} target="_blank" rel="noopener" aria-label={`Instagram ${site.instagram.handle}`}>
            <InstagramIcon />
          </a>
          <Button href="#reservar" size="sm" className={styles.cta}>
            Reservar
          </Button>
        </div>
      </div>
    </header>
  )
}
