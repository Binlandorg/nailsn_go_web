export type ServiceCategoryId = 'unas' | 'mirada' | 'rostro'

export interface Promo {
  id: string
  name: string
  note?: string
  price: number
}

export interface ServiceCategory {
  id: ServiceCategoryId
  label: string
  summary: string
  promos: Promo[]
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'unas',
    label: 'Uñas',
    summary: 'Manicure, pedicure, acrílicas, rubber y soft gel.',
    promos: [
      { id: 'mani-pedi-uv', name: 'Manicure UV + Pedicure UV', note: 'Color entero', price: 59 },
      { id: 'acri-french', name: 'Acri French', price: 59 },
      { id: 'rubber-pedi', name: 'Rubber + Pedicure UV', note: 'Color entero', price: 79 },
      { id: 'soft-gel', name: 'Soft gel + Cat eye', price: 54 },
    ],
  },
  {
    id: 'mirada',
    label: 'Cejas y pestañas',
    summary: 'Lifting, laminado, extensiones y visagismo.',
    promos: [
      { id: 'lifting', name: 'Lifting + Laminado + Perfilado de cejas', price: 69 },
      { id: 'visagismo', name: 'Visagismo + Depilación de cejas + Bozo', note: 'Con hilo', price: 59 },
      { id: 'ext-clasicas', name: 'Extensiones clásicas + Perfilado de cejas', price: 64 },
      { id: 'ext-rimel', name: 'Extensiones rímel + Laminado de cejas', price: 89 },
    ],
  },
  {
    id: 'rostro',
    label: 'Faciales y depilación',
    summary: 'Tratamientos faciales, dermaplaning y depilación con cera.',
    promos: [
      { id: 'dermaplaning', name: 'Dermaplaning + Jelly mask', price: 39 },
      { id: 'facial', name: 'Tratamiento facial profundo + Depilación de ceja y bozo', note: 'Con hilo', price: 85 },
      { id: 'piernas', name: 'Depilación de piernas completas', note: 'Con cera', price: 80 },
      { id: 'axilas', name: 'Depilación de axilas', note: 'Con cera', price: 20 },
    ],
  },
]

export const formatPrice = (price: number) => `S/${price}`
