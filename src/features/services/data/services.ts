export type CategoryId = 'unas' | 'pedicure' | 'pestanas-cejas' | 'faciales' | 'depilacion'

export interface Category {
  id: CategoryId
  name: string
}

export interface Service {
  id: string
  category: CategoryId
  name: string
  description: string
  detail: string
  duration: string
  price: string
}

export const categories: Category[] = [
  { id: 'unas', name: 'Uñas' },
  { id: 'pedicure', name: 'Pedicure spa' },
  { id: 'pestanas-cejas', name: 'Pestañas y cejas' },
  { id: 'faciales', name: 'Faciales' },
  { id: 'depilacion', name: 'Depilación' },
]

export const services: Service[] = [
  {
    id: 'manicure',
    category: 'unas',
    name: 'Manicure',
    description: 'Limpieza, forma y esmaltado para unas manos impecables.',
    detail: 'Cuidado completo de tus manos: limpieza, forma de uñas y esmaltado en el color que elijas.',
    duration: 'Por confirmar',
    price: 'Consultar precio',
  },
  {
    id: 'sistema-unas',
    category: 'unas',
    name: 'Sistema de uñas',
    description: 'Uñas resistentes y con el largo que quieres.',
    detail: 'Aplicación de sistema de uñas para lograr largo, forma y resistencia. Pregunta por los tipos disponibles.',
    duration: 'Por confirmar',
    price: 'Consultar precio',
  },
  {
    id: 'disenos',
    category: 'unas',
    name: 'Diseños y decoración',
    description: 'Francesa, pedrería y diseños para darle tu estilo.',
    detail: 'Agrega a tu manicure o sistema un acabado especial: francesa, pedrería o un diseño a tu gusto.',
    duration: 'Por confirmar',
    price: 'Consultar precio',
  },
  {
    id: 'pedicure-spa',
    category: 'pedicure',
    name: 'Pedicure spa',
    description: 'En sillón spa con tina, para descansar mientras te atendemos.',
    detail: 'Cuidado de pies en nuestros sillones spa con tina: limpieza, forma de uñas y esmaltado, en un ambiente para relajarte.',
    duration: 'Por confirmar',
    price: 'Consultar precio',
  },
  {
    id: 'extensiones-pestanas',
    category: 'pestanas-cejas',
    name: 'Extensiones de pestañas',
    description: 'Una mirada definida desde que te levantas.',
    detail: 'Aplicación de extensiones de pestañas para dar largo y volumen a tu mirada. Pregunta por los estilos disponibles.',
    duration: 'Por confirmar',
    price: 'Consultar precio',
  },
  {
    id: 'micropigmentacion-cejas',
    category: 'pestanas-cejas',
    name: 'Micropigmentación de cejas',
    description: 'Cejas con forma y color que enmarcan tu rostro.',
    detail: 'Técnica de micropigmentación para definir la forma y el color de tus cejas.',
    duration: 'Por confirmar',
    price: 'Consultar precio',
  },
  {
    id: 'tratamientos-faciales',
    category: 'faciales',
    name: 'Tratamientos faciales',
    description: 'Limpieza y cuidado para una piel luminosa.',
    detail: 'Tratamientos de limpieza y cuidado facial según lo que necesite tu piel.',
    duration: 'Por confirmar',
    price: 'Consultar precio',
  },
  {
    id: 'micropigmentacion-labios',
    category: 'faciales',
    name: 'Micropigmentación de labios',
    description: 'Color y definición natural para tus labios.',
    detail: 'Técnica de micropigmentación para dar color y definición a tus labios.',
    duration: 'Por confirmar',
    price: 'Consultar precio',
  },
  {
    id: 'depilacion',
    category: 'depilacion',
    name: 'Depilación',
    description: 'Piel suave con un servicio rápido y cuidadoso.',
    detail: 'Depilación por zonas. Pregunta por las zonas y el método disponibles.',
    duration: 'Por confirmar',
    price: 'Consultar precio',
  },
]

export const categoryName = (id: CategoryId) => categories.find((c) => c.id === id)?.name ?? ''

export const servicesByCategory = categories
  .map((category) => ({ category, items: services.filter((s) => s.category === category.id) }))
  .filter((group) => group.items.length > 0)
