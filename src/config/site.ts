// Datos de contacto de la marca.
// TODO: reemplazar los valores de ejemplo por los reales del estudio.
export const site = {
  name: 'Nails & Go Studio',
  tagline: 'Uñas con actitud, hechas a tu medida',
  instagram: {
    handle: '@nailsandgo.studio',
    url: 'https://www.instagram.com/',
  },
  whatsapp: {
    display: '+00 000 000 000',
    url: 'https://wa.me/',
  },
  address: 'Dirección del estudio, Ciudad',
  mapsUrl: 'https://maps.google.com/',
  schedule: [
    { days: 'Lunes a viernes', hours: '10:00 – 20:00' },
    { days: 'Sábados', hours: '09:00 – 18:00' },
    { days: 'Domingos', hours: 'Solo con cita' },
  ],
} as const
