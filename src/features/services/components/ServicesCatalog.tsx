import { useState } from 'react'
import { Link, useSearchParams } from 'react-router'
import { SectionHead } from '@/shared/components/ui/SectionHead'
import { categories, isCategoryId, servicesOf, type Service } from '@/features/services/data/services'
import { CategoryBanner } from './CategoryBanner'
import { CategoryTabs } from './CategoryTabs'
import { ServiceItem } from './ServiceItem'
import { ServiceDialog } from './ServiceDialog'
import styles from './ServicesCatalog.module.css'

export function ServicesCatalog() {
  const [params, setParams] = useSearchParams()
  const [selected, setSelected] = useState<Service | null>(null)
  const param = params.get('categoria')
  const current = categories.find((c) => c.id === (isCategoryId(param) ? param : categories[0].id)) ?? categories[0]
  const items = servicesOf(current.id)

  return (
    <section className={`section ${styles.catalog}`} id="catalogo" aria-labelledby="catalogo-title">
      <div className="wrap">
        <Link className={styles.back} to="/">
          ← Volver al inicio
        </Link>
        <SectionHead
          eyebrow="Servicios"
          titleId="catalogo-title"
          title={
            <>
              Elige tu <em>servicio</em>
            </>
          }
          sub="Toca un servicio para ver el detalle. Reservas por WhatsApp; precios y duración por confirmar."
        />
        <CategoryTabs
          current={current.id}
          onChange={(id) => setParams({ categoria: id }, { replace: true, preventScrollReset: true })}
        />
        <div className={styles.panel} role="tabpanel" id="catalogo-panel" aria-labelledby={`tab-${current.id}`}>
          <CategoryBanner category={current} count={items.length} />
          <ul className={styles.list}>
            {items.map((service) => (
              <ServiceItem key={service.id} service={service} onOpen={setSelected} />
            ))}
          </ul>
        </div>
        <p className="fine">Imágenes referenciales.</p>
      </div>
      <ServiceDialog service={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
