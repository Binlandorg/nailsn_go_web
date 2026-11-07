import { ArrowUpRightIcon, ClockIcon, HeartIcon } from '../../../shared/components/icons/icons'
import { cn } from '../../../shared/utils/cn'
import type { Service } from '../data/services'
import styles from './ServiceCard.module.css'

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className={cn(styles.card, service.featured && styles.featured)}>
      <div className={styles.media}>
        <img src={service.image} alt={service.name} loading="lazy" width={400} height={300} />
        <span className={styles.duration}>
          <ClockIcon />
          {service.duration}
        </span>
        {service.featured && (
          <span className={styles.ribbon}>
            <HeartIcon />
            Favorito
          </span>
        )}
      </div>

      <div className={styles.body}>
        <h3 className={styles.name}>{service.name}</h3>
        <p className={styles.description}>{service.description}</p>

        <footer className={styles.footer}>
          <p className={styles.price}>
            <span>desde</span>
            {service.price}
          </p>
          <a href="#contacto" className={styles.book} aria-label={`Reservar ${service.name}`}>
            <ArrowUpRightIcon />
          </a>
        </footer>
      </div>
    </article>
  )
}
