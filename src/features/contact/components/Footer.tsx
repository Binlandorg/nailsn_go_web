import { bookingUrl, fullAddress, hasWhatsapp, site } from '../../../config/site'
import { Logo } from '../../../shared/components/brand/Logo'
import { HeartIcon, InstagramIcon, WhatsappIcon } from '../../../shared/components/icons/icons'
import { navLinks } from '../../navigation/data/navLinks'
import styles from './Footer.module.css'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brand}>
          <Logo tone="light" />
          <p className={styles.tagline}>{site.tagline}.</p>
          <div className={styles.socials}>
            <a href={site.instagram.url} target="_blank" rel="noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
            {hasWhatsapp && (
              <a href={bookingUrl()} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <WhatsappIcon />
              </a>
            )}
          </div>
        </div>

        <nav aria-label="Pie de página">
          <h3 className={styles.heading}>Explora</h3>
          <ul className={styles.list}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className={styles.heading}>Horario</h3>
          <ul className={styles.list}>
            {site.schedule.map((slot) => (
              <li key={slot.days} className={styles.slot}>
                <span>{slot.days}</span>
                <span>{slot.hours}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={styles.heading}>Contacto</h3>
          <ul className={styles.list}>
            {hasWhatsapp && (
              <li>
                <a href={bookingUrl()} target="_blank" rel="noreferrer">
                  {site.whatsapp.display}
                </a>
              </li>
            )}
            <li>
              <a href={site.instagram.url} target="_blank" rel="noreferrer">
                {site.instagram.handle}
              </a>
            </li>
            <li>
              <a href={site.mapsUrl} target="_blank" rel="noreferrer">
                {fullAddress}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className={styles.bigWord} aria-hidden="true">
        Nails &amp; Go
      </p>

      <div className={`container ${styles.bottom}`}>
        <span>
          © {year} {site.name}
        </span>
        <span className={styles.love}>
          Hecho con <HeartIcon /> en Comas
        </span>
      </div>
    </footer>
  )
}
