import { bookingUrl } from '../../../config/site'
import { ArrowUpRightIcon } from '../../../shared/components/icons/icons'
import { formatPrice, type Promo } from '../data/services'
import styles from './PromoItem.module.css'

interface PromoItemProps {
  promo: Promo
}

export function PromoItem({ promo }: PromoItemProps) {
  const price = formatPrice(promo.price)

  return (
    <article className={styles.item}>
      <div className={styles.text}>
        <h3 className={styles.name}>{promo.name}</h3>
        {promo.note && <p className={styles.note}>{promo.note}</p>}
      </div>
      <p className={styles.price}>{price}</p>
      <a
        href={bookingUrl(`${promo.name} (${price})`)}
        target="_blank"
        rel="noreferrer"
        className={styles.book}
      >
        Reservar
        <ArrowUpRightIcon />
      </a>
    </article>
  )
}
