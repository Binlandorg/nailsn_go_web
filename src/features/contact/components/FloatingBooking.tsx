import { bookingChannel, bookingUrl, hasWhatsapp } from '../../../config/site'
import { InstagramIcon, WhatsappIcon } from '../../../shared/components/icons/icons'
import { useScrolled } from '../../../shared/hooks/useScrolled'
import { cn } from '../../../shared/utils/cn'
import styles from './FloatingBooking.module.css'

export function FloatingBooking() {
  const visible = useScrolled(560)

  return (
    <a
      href={bookingUrl()}
      target="_blank"
      rel="noreferrer"
      className={cn(styles.floating, visible && styles.visible)}
      aria-hidden={!visible}
      tabIndex={visible ? undefined : -1}
    >
      {hasWhatsapp ? <WhatsappIcon /> : <InstagramIcon />}
      Agenda por {bookingChannel}
    </a>
  )
}
