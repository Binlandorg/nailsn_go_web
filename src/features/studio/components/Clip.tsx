import { PlayIcon } from '@/shared/components/icons/icons'
import { useReveal } from '@/shared/hooks/useReveal'
import styles from './StudioSection.module.css'

export function Clip({ caption }: { caption: string }) {
  const { ref, revealClass } = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} className={`${styles.clip} ${revealClass}`}>
      <PlayIcon />
      <span>Clip próximamente</span>
      <small>{caption}</small>
    </div>
  )
}
