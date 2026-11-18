import { useState, type FormEvent } from 'react'
import { buttonClass } from '../../../shared/components/ui/buttonClass'
import { whatsappLink } from '../../../shared/utils/whatsapp'
import { servicesByCategory } from '../../services/data/services'
import styles from './BookingSection.module.css'

type FieldName = 'nombre' | 'servicio' | 'fecha' | 'hora'

const today = () => new Date().toISOString().slice(0, 10)

export function BookingSection() {
  const [invalid, setInvalid] = useState<FieldName[]>([])
  const [minDate] = useState(today)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const fields: FieldName[] = ['nombre', 'servicio', 'fecha', 'hora']
    const missing = fields.filter((name) => String(data.get(name) ?? '').trim() === '')
    setInvalid(missing)
    if (missing.length) {
      form.querySelector<HTMLElement>(`[name="${missing[0]}"]`)?.focus()
      return
    }
    const [y, m, d] = String(data.get('fecha')).split('-')
    const text = [
      'Hola Nails & Go Studio, quisiera reservar una cita.',
      `Nombre: ${data.get('nombre')}`,
      `Servicio: ${data.get('servicio')}`,
      `Fecha: ${d}/${m}/${y}`,
      `Hora: ${data.get('hora')}`,
    ].join('\n')
    window.open(whatsappLink(text), '_blank', 'noopener')
  }

  const isInvalid = (name: FieldName) => invalid.includes(name)

  return (
    <section className={`section ${styles.booking}`} id="reservar" aria-labelledby="reservar-title">
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.text}>
          <p className="eyebrow eyebrow-light">Reservas</p>
          <h2 id="reservar-title">
            Separa tu <em>cita</em>
          </h2>
          <p>Completa tus datos y te llevamos a WhatsApp con el mensaje listo. Te confirmamos la disponibilidad por ahí.</p>
        </div>
        <form className={styles.form} noValidate onSubmit={onSubmit}>
          <div className={styles.field}>
            <label htmlFor="f-nombre">Nombre</label>
            <input id="f-nombre" name="nombre" type="text" autoComplete="given-name" required aria-invalid={isInvalid('nombre')} />
          </div>
          <div className={styles.field}>
            <label htmlFor="f-servicio">Servicio</label>
            <select id="f-servicio" name="servicio" required defaultValue="" aria-invalid={isInvalid('servicio')}>
              <option value="">Elige un servicio</option>
              {servicesByCategory.map(({ category, items }) => (
                <optgroup key={category.id} label={category.name}>
                  {items.map((service) => (
                    <option key={service.id}>{service.name}</option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="f-fecha">Fecha</label>
              <input id="f-fecha" name="fecha" type="date" min={minDate} required aria-invalid={isInvalid('fecha')} />
            </div>
            <div className={styles.field}>
              <label htmlFor="f-hora">Hora</label>
              <input id="f-hora" name="hora" type="time" required aria-invalid={isInvalid('hora')} />
            </div>
          </div>
          {invalid.length > 0 && (
            <p className={styles.error} role="alert">
              Completa todos los campos para continuar.
            </p>
          )}
          <button className={buttonClass({ block: true })} type="submit">
            Reservar por WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}
