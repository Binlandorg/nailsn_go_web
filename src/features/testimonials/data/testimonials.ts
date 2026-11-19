export interface Testimonial {
  id: string
  quote: string
  author: string
  confirmed: boolean
}

export const testimonials: Testimonial[] = [
  { id: 't1', quote: 'Aquí irá un testimonio real de una clienta.', author: 'Nombre de la clienta 1', confirmed: false },
  { id: 't2', quote: 'Aquí irá un testimonio real de una clienta.', author: 'Nombre de la clienta 2', confirmed: false },
  { id: 't3', quote: 'Aquí irá un testimonio real de una clienta.', author: 'Nombre de la clienta 3', confirmed: false },
]
