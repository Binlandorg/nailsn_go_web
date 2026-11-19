import { site } from '@/config/site'
import { Logo } from '@/shared/components/brand/Logo'
import { InstagramIcon, TikTokIcon } from '@/shared/components/icons/icons'
import { navLinks } from '@/features/navigation/data/navLinks'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.brand}>
          <a className={styles.logo} href="#inicio" aria-label="Nails & Go Studio, volver arriba">
            <Logo tone="light" placement="footer" />
          </a>
          <p className={styles.tag}>{site.tagline}</p>
          <div className={styles.social}>
            <a className={styles.ig} href={site.instagram.url} target="_blank" rel="noopener" aria-label={`Instagram ${site.instagram.handle}`}>
              <InstagramIcon />
            </a>
            <a className={styles.ig} href={site.tiktok.url} target="_blank" rel="noopener" aria-label={`TikTok ${site.tiktok.handle}`}>
              <TikTokIcon />
            </a>
          </div>
        </div>
        <nav className={`${styles.col} ${styles.explore}`} aria-label="Secciones">
          <h2>Explora</h2>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.col}>
          <h2>Horario</h2>
          <p>{site.schedule ?? site.pending}</p>
        </div>
        <div className={styles.col}>
          <h2>Contacto</h2>
          <ul>
            <li>
              <a href={`https://wa.me/${site.whatsapp.number}`} target="_blank" rel="noopener">
                WhatsApp {site.whatsapp.display}
              </a>
            </li>
            <li>
              <a href={site.instagram.url} target="_blank" rel="noopener">
                Instagram {site.instagram.handle}
              </a>
            </li>
            <li>
              <a href={site.tiktok.url} target="_blank" rel="noopener">
                TikTok {site.tiktok.handle}
              </a>
            </li>
            <li>{site.address ?? site.pending}</li>
          </ul>
        </div>
      </div>
      <p className={styles.watermark} aria-hidden="true">
        Nails &amp; Go
      </p>
      <div className={`wrap ${styles.bottom}`}>
        <p>© {new Date().getFullYear()} {site.name}</p>
        <p>{site.demoNote}</p>
      </div>
    </footer>
  )
}
