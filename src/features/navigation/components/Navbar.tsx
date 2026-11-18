import { Logo } from '../../../shared/components/brand/Logo'
import { Button } from '../../../shared/components/ui/Button'
import { navLinks } from '../data/navLinks'
import styles from './Navbar.module.css'

export function Navbar() {
  return (
    <header className={styles.header}>
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
        <Button href="#reservar" size="sm" className={styles.cta}>
          Reservar
        </Button>
      </div>
    </header>
  )
}
