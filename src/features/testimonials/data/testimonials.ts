export interface Testimonial {
  id: string
  name: string
  service: string
  quote: string
}

// TODO: reemplazar por reseñas reales de clientas.
export const testimonials: Testimonial[] = [
  {
    id: 'valeria',
    name: 'Valeria M.',
    service: 'Nail art glam',
    quote: 'Llevé una captura de Pinterest y salió todavía más bonito. ¡Me preguntan por mis uñas todo el día!',
  },
  {
    id: 'camila',
    name: 'Camila R.',
    service: 'Semipermanente',
    quote: 'Me duró casi tres semanas perfecto. El estudio es precioso y te atienden con muchísimo cariño.',
  },
  {
    id: 'daniela',
    name: 'Daniela P.',
    service: 'Pedicure spa',
    quote: 'Una hora de puro relax. Salí como nueva y con los pies divinos para mis vacaciones.',
  },
  {
    id: 'sofia',
    name: 'Sofía L.',
    service: 'Uñas acrílicas',
    quote: 'Por fin encontré dónde hacerme las acrílicas sin que me lastimen. Súper prolijas y puntuales.',
  },
  {
    id: 'andrea',
    name: 'Andrea G.',
    service: 'Soft french',
    quote: 'Elegantes, finas y con ese toque glam que buscaba para mi boda. ¡Gracias, chicas!',
  },
  {
    id: 'lucia',
    name: 'Lucía T.',
    service: 'Manicure clásica',
    quote: 'Rápido, limpio y con un resultado impecable. Mi lugar fijo cada dos semanas.',
  },
]
