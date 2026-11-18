import { WhatsAppIcon } from '../../../shared/components/icons/icons'
import { Button } from '../../../shared/components/ui/Button'
import { whatsappLink } from '../../../shared/utils/whatsapp'
import styles from './QuickActions.module.css'

export function QuickActions() {
  const link = whatsappLink()
  return (
    <>
      <nav className={styles.bar} aria-label="Acciones rápidas">
        <Button href="#reservar" className={styles.book}>
          Reservar
        </Button>
        <a className={styles.wa} href={link} target="_blank" rel="noopener" aria-label="Escríbenos por WhatsApp">
          <WhatsAppIcon />
        </a>
      </nav>
      <a className={styles.float} href={link} target="_blank" rel="noopener" aria-label="Escríbenos por WhatsApp">
        <WhatsAppIcon />
      </a>
    </>
  )
}
