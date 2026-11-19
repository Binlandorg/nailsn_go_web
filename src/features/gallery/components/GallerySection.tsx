import { site } from '../../../config/site'
import { Button } from '../../../shared/components/ui/Button'
import { Reveal } from '../../../shared/components/ui/Reveal'
import { ScriptText } from '../../../shared/components/ui/ScriptText'
import { SectionHeading } from '../../../shared/components/ui/SectionHeading'
import { InstagramIcon } from '../../../shared/components/icons/icons'
import { galleryPosts } from '../data/gallery'
import { GalleryItem } from './GalleryItem'
import styles from './GallerySection.module.css'

export function GallerySection() {
  return (
    <section id="galeria" className={styles.section}>
      <div className="container">
        <SectionHeading
          align="center"
          eyebrow={site.instagram.handle}
          title={
            <>
              Síguenos en <ScriptText>Instagram</ScriptText>
            </>
          }
          description={`Diseños, promos y el día a día del salón. Más de ${site.instagram.followers.replace('+', '')} personas ya nos siguen.`}
        />

        <ul className={styles.grid}>
          {galleryPosts.map((post, index) => (
            <li key={post.id} className={post.size ? styles[post.size] : undefined}>
              <Reveal variant="zoom" delay={(index % 4) * 90} className={styles.reveal}>
                <GalleryItem post={post} />
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className={styles.cta}>
          <Button
            href={site.instagram.url}
            target="_blank"
            rel="noreferrer"
            size="lg"
            icon={<InstagramIcon />}
          >
            Síguenos en Instagram
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
