import { site } from '../../../config/site'
import { Logo } from '../../../shared/components/brand/Logo'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <a className={styles.logo} href="#inicio" aria-label="Nails & Go Studio, volver arriba">
          <Logo tone="light" placement="footer" />
        </a>
        <p className={styles.tag}>{site.tagline}</p>
        <div className={styles.links}>
          <a href={site.instagram.url} target="_blank" rel="noopener">
            Instagram
          </a>
          <a href={`https://wa.me/${site.whatsapp.number}`} target="_blank" rel="noopener">
            WhatsApp
          </a>
        </div>
        <p className={styles.demo}>{site.demoNote}</p>
      </div>
    </footer>
  )
}
