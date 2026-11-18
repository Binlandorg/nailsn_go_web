# Nails & Go Studio — web

Landing de una página para Nails & Go Studio, preparada por Binland como propuesta. Rama `propuesta/demo-binland`, portada desde la demo estática de `binland-project/demos/nails-and-go`.

## Stack

React 19 + TypeScript + Vite 8, CSS Modules y React Compiler. Organizado por features en `src/features`.

```bash
pnpm install
pnpm dev
pnpm build
pnpm lint
pnpm preview
```

## Secciones

| Orden | Sección | Feature |
|---|---|---|
| 1 | Portada (video con foto de respaldo) | `hero` |
| 2 | Servicios por categoría con panel de detalle | `services` |
| 3 | Trabajos (galería con filtros y antes/después) | `gallery` |
| 4 | Testimonios | `testimonials` |
| 5 | El estudio (foto, clips e higiene) | `studio` |
| 6 | Promociones (ruleta y combos) | `promotions` |
| 7 | Reservas (formulario que abre WhatsApp) | `contact` |
| 8 | Preguntas frecuentes | `faq` |
| 9 | Ubicación y horario | `contact` |
| — | Header, barra inferior móvil, botón flotante de WhatsApp y footer | `navigation`, `contact` |

## Dónde se edita cada cosa

| Qué | Archivo |
|---|---|
| WhatsApp, Instagram, dirección, horario, mapa, enlace de reseñas | `src/config/site.ts` (los valores `null` se muestran como "Por confirmar") |
| Fotos | `src/assets/photos/` y `src/config/photos.ts` |
| Videos de portada | `public/video/hero-vertical.mp4` (móvil) y `public/video/hero-horizontal.mp4` (escritorio) |
| Servicios, categorías, duración y precios | `src/features/services/data/services.ts` (alimenta tarjetas, panel y formulario) |
| Fotos de trabajos | `src/features/gallery/data/gallery.ts` (campo `image`) |
| Testimonios | `src/features/testimonials/data/testimonials.ts` |
| Premios de la ruleta y combos | `src/features/promotions/data/promotions.ts` |
| Preguntas frecuentes | `src/features/faq/data/faq.ts` |
| Menú | `src/features/navigation/data/navLinks.ts` |
| Colores, fuentes y medidas | `src/app/styles/tokens.css` |
| Estilos globales (wrap, section, eyebrow, badge, link) | `src/app/styles/ui.css` |

## Marca

- Logo oficial: letrero circular "NAILS & GO studio" con pincel rosa sobre la "A" (Josefin Sans dorado y Quicksand).
- Colores: rosa del negocio #D84DCE (botones y acentos), #A0309A (texto rosa), dorado #C8A96B, ciruela #3B2236 para textos, blanco cálido #F7F4F2.
- El letrero exterior ("Nails & Go Beauty Studio" con N cursiva) y los banners ("Nails N' Go") usan otras versiones de la marca.

## Pendiente con el estudio

- Permiso para usar fotos y marca. Las fotos actuales son referenciales; la fachada fue mejorada con IA.
- Dirección, horario, mapa y enlace a reseñas de Google.
- Lista final de servicios, descripciones, duración y precios.
- Fotos reales de trabajos, antes y después, y clips verticales del estudio.
- Videos de portada.
- Testimonios reales con autorización.
- Condiciones de la ruleta y combos.
- Respuestas de preguntas frecuentes y proceso de higiene.
