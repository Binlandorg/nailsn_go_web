export const site = {
  name: 'Nails & Go Studio',
  shortName: 'Nails n’ GO',
  tagline: 'Salón spa de uñas, cejas y pestañas en Comas, Lima Norte',
  instagram: {
    handle: '@nailsn_go',
    url: 'https://www.instagram.com/nailsn_go/',
    dm: 'https://ig.me/m/nailsn_go',
    followers: '+5 mil',
  },
  facebook: {
    name: 'Nails n GO',
  },
  whatsapp: {
    phone: '',
    display: '',
  },
  address: {
    street: 'Retablo 729',
    district: 'Comas',
    city: 'Lima',
    region: 'Lima Norte',
  },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Nails+%26+Go+Studio+Retablo+729+Comas',
  schedule: [{ days: 'Lunes a domingo', hours: 'Desde las 10:00' }],
} as const

export const fullAddress = `${site.address.street}, ${site.address.district}, ${site.address.region}`

export const hasWhatsapp = site.whatsapp.phone.length > 0

export function bookingUrl(service?: string) {
  if (!hasWhatsapp) return site.instagram.dm
  const text = service
    ? `Hola Nails & Go, quiero agendar una cita para: ${service}. ¿Qué horarios tienen disponibles?`
    : 'Hola Nails & Go, quiero agendar una cita. ¿Qué horarios tienen disponibles?'
  return `https://wa.me/${site.whatsapp.phone}?text=${encodeURIComponent(text)}`
}

export const bookingChannel = hasWhatsapp ? 'WhatsApp' : 'Instagram'
