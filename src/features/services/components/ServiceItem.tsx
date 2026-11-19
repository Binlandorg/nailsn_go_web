import { ChevronIcon, ClockIcon } from '@/shared/components/icons/icons'
import { buttonClass } from '@/shared/utils/buttonClass'
import { bookingText, whatsappLink } from '@/shared/utils/whatsapp'
import type { Service } from '@/features/services/data/services'
import styles from './ServicesCatalog.module.css'

interface ServiceItemProps {
  service: Service
  onOpen: (service: Service) => void
}

export function ServiceItem({ service, onOpen }: ServiceItemProps) {
  return (
    <li className={styles.item}>
      <button className={styles.open} type="button" aria-haspopup="dialog" onClick={() => onOpen(service)}>
        <span className={styles.itemName}>{service.name}</span>
        <span className={styles.itemDesc}>{service.description}</span>
        <span className={styles.itemMeta}>
          <span className={styles.duration}>
            <ClockIcon />
            {service.duration}
          </span>
          <span className={styles.price}>{service.price}</span>
        </span>
        <ChevronIcon className={styles.chev} />
      </button>
      <a
        className={buttonClass({ size: 'sm', variant: 'outline', className: styles.book })}
        href={whatsappLink(bookingText(service.name))}
        target="_blank"
        rel="noopener"
        aria-label={`Reservar ${service.name} por WhatsApp`}
      >
        Reservar
      </a>
    </li>
  )
}
