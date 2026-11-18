export interface FaqItem {
  question: string
  answer: string | null
}

export const faq: FaqItem[] = [
  { question: '¿Cuánto dura cada servicio?', answer: null },
  { question: '¿Qué cuidados debo tener después del servicio?', answer: null },
  { question: '¿Qué medios de pago aceptan? ¿Yape o Plin?', answer: null },
  { question: '¿Cómo cancelo o reprogramo mi cita?', answer: null },
]
