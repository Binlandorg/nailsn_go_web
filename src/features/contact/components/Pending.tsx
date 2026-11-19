import { site } from '@/config/site'
import styles from './LocationSection.module.css'

export function Pending({ value }: { value: string | null }) {
  return value ? <p>{value}</p> : <p className={styles.pending}>{site.pending}</p>
}
