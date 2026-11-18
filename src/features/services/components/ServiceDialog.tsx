import { useEffect, useRef } from 'react'
import { CloseIcon } from '../../../shared/components/icons/icons'
import { Button } from '../../../shared/components/ui/Button'
import { bookingText, whatsappLink } from '../../../shared/utils/whatsapp'
import { categoryName, type Service } from '../data/services'
import styles from './ServiceDialog.module.css'

interface ServiceDialogProps {
  service: Service | null
  onClose: () => void
}

export function ServiceDialog({ service, onClose }: ServiceDialogProps) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (service && !dialog.open) dialog.showModal()
    if (!service && dialog.open) dialog.close()
  }, [service])

  return (
    <dialog
      ref={ref}
      className={styles.modal}
      aria-labelledby="modal-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      {service && (
        <div className={styles.inner}>
          <button className={styles.close} type="button" aria-label="Cerrar" onClick={onClose}>
            <CloseIcon />
          </button>
          <p className="eyebrow">{categoryName(service.category)}</p>
          <h2 id="modal-title" className={styles.title}>
            {service.name}
          </h2>
          <p className={styles.text}>{service.detail}</p>
          <dl className={styles.meta}>
            <div>
              <dt>Duración</dt>
              <dd>{service.duration}</dd>
            </div>
            <div>
              <dt>Precio</dt>
              <dd>{service.price}</dd>
            </div>
          </dl>
          <Button href={whatsappLink(bookingText(service.name))} target="_blank" rel="noopener" block>
            Reservar este servicio
          </Button>
        </div>
      )}
    </dialog>
  )
}
