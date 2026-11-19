const placeUrl =
  'https://www.google.com/maps/place/Nails+n%27+GO/@-11.9323528,-77.0582215,17z/data=!4m6!3m5!1s0x9105d165167889a1:0xe5cdda9da473d7c9!8m2!3d-11.9323528!4d-77.0582215!16s%2Fg%2F11wfxpdq3n'

export const site = {
  name: 'Nails & Go Studio',
  tagline: 'Good Day, Good Nails, Good Mood.',
  area: 'Comas, Lima Norte',
  whatsapp: {
    number: '51984151390',
    display: '984 151 390',
    greeting: 'Hola Nails & Go Studio, quisiera reservar una cita',
  },
  instagram: {
    handle: '@nailsn_go',
    url: 'https://www.instagram.com/nailsn_go/',
    dm: 'https://ig.me/m/nailsn_go',
  },
  tiktok: {
    handle: '@nailsn_go',
    url: 'https://www.tiktok.com/@nailsn_go',
  },
  facebook: {
    name: 'Nails n GO',
  },
  address: 'Retablo 729, Comas, Lima Norte' as string | null,
  schedule: 'Lunes a domingo, desde las 10:00' as string | null,
  scheduleShort: 'Lunes a domingo desde 10:00' as string | null,
  addressShort: 'Retablo 729, Comas' as string | null,
  mapsUrl: placeUrl as string | null,
  mapsEmbedUrl: 'https://www.google.com/maps?q=-11.9323528,-77.0582215&z=17&output=embed' as string | null,
  reviewsUrl: placeUrl as string | null,
  pending: 'Por confirmar',
  demoNote: 'Demo preparada por Binland. Imágenes referenciales.',
}

export const announcements = [
  'Retablo 729, Comas',
  'Abierto de lunes a domingo',
  'Uñas · Cejas · Pestañas · Faciales',
  'Pregunta por las promociones del mes',
]
