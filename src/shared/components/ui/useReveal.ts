import { useInView } from '../../hooks/useInView'
import { cn } from '../../utils/cn'
import styles from './Reveal.module.css'

export function useReveal<T extends Element>() {
  const { ref, inView } = useInView<T>({ threshold: 0 })
  return { ref, revealClass: cn(styles.reveal, inView && styles.visible) }
}
