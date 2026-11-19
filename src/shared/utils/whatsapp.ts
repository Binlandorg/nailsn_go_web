import { site } from '@/config/site'

export const whatsappLink = (text: string = site.whatsapp.greeting) =>
  `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(text)}`

export const bookingText = (service: string) => `Hola Nails & Go Studio, quisiera reservar: ${service}.`
