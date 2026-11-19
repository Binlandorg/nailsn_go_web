import { useInView } from '@/shared/hooks/useInView'
import { cn } from '@/shared/utils/cn'
import styles from '@/shared/components/ui/Reveal.module.css'

export function useReveal<T extends Element>() {
  const { ref, inView } = useInView<T>({ threshold: 0 })
  return { ref, revealClass: cn(styles.reveal, inView && styles.visible) }
}
