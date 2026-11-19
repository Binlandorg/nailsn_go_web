import { useState } from 'react'
import { bookingUrl } from '../../../config/site'
import { Button } from '../../../shared/components/ui/Button'
import { Reveal } from '../../../shared/components/ui/Reveal'
import { ScriptText } from '../../../shared/components/ui/ScriptText'
import { SectionHeading } from '../../../shared/components/ui/SectionHeading'
import { Sparkle } from '../../../shared/components/decorations/Sparkle'
import { ArrowRightIcon } from '../../../shared/components/icons/icons'
import { cn } from '../../../shared/utils/cn'
import { serviceCategories, type ServiceCategoryId } from '../data/services'
import { PromoItem } from './PromoItem'
import styles from './ServicesSection.module.css'

export function ServicesSection() {
  const [activeId, setActiveId] = useState<ServiceCategoryId>(serviceCategories[0].id)
  const active = serviceCategories.find((category) => category.id === activeId) ?? serviceCategories[0]

  return (
    <section id="servicios" className={styles.section}>
      <Sparkle size={28} className={styles.sparkleA} />
      <Sparkle size={18} tone="rose" delay={1200} className={styles.sparkleB} />

      <div className="container">
        <div className={styles.header}>
          <SectionHeading
            eyebrow="Servicios y promociones"
            title={
              <>
                Promociones <ScriptText>del mes</ScriptText>
              </>
            }
          />
          <Reveal delay={250} className={styles.aside}>
            <p>Uñas, cejas, pestañas, faciales y depilación en un solo lugar. Elige tu promo y agenda en un mensaje.</p>
          </Reveal>
        </div>

        <div className={styles.board}>
          <div className={styles.tabs} role="tablist" aria-label="Categorías de servicios">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                role="tab"
                id={`tab-${category.id}`}
                aria-selected={category.id === activeId}
                aria-controls={`panel-${category.id}`}
                className={cn(styles.tab, category.id === activeId && styles.tabActive)}
                onClick={() => setActiveId(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div
            role="tabpanel"
            id={`panel-${active.id}`}
            aria-labelledby={`tab-${active.id}`}
            className={styles.panel}
          >
            <p className={styles.summary}>{active.summary}</p>
            <ul key={active.id} className={styles.list}>
              {active.promos.map((promo, index) => (
                <li key={promo.id} className={styles.listItem} style={{ animationDelay: `${index * 70}ms` }}>
                  <PromoItem promo={promo} />
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.footer}>
            <p>¿Buscas otro servicio o un diseño especial? Escríbenos y te cotizamos.</p>
            <Button href={bookingUrl()} target="_blank" rel="noreferrer" variant="secondary" icon={<ArrowRightIcon />}>
              Consultar otro servicio
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
