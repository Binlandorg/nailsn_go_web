# Nails & Go Studio — web

Landing de una página para Nails & Go Studio, preparada por Binland como propuesta. Rama `propuesta/demo-binland`, portada desde la demo estática de `binland-project/demos/nails-and-go`.

## Stack

React 19 + TypeScript (strict) + Vite 8, React Router 7 (modo librería), CSS Modules y React Compiler. Organizado por features en `src/features`.

## Estructura

| Carpeta | Contenido |
|---|---|
| `src/app` | `App.tsx` (rutas), `AppLayout.tsx` (header, footer y barra fija comunes), `ScrollManager.tsx` (scroll al inicio y a anclas al cambiar de ruta) y estilos globales (`styles/tokens.css`, `base.css`, `ui.css`) |
| `src/pages` | Páginas que componen secciones: `HomePage` y `ServicesPage` |
| `src/config` | Datos del negocio (`site.ts`) y fotos (`photos.ts`) |
| `src/features/<sección>` | `components/` (un componente por archivo), `data/` (contenido tipado) e `index.ts` (exporta la sección) |
| `src/shared/components` | Piezas reutilizables: `brand`, `ui`, `icons`, `decorations` |
| `src/shared/hooks` | `useInView`, `useReveal`, `useCarouselDots`, `useRotatingIndex`, `useDocumentTitle`, `useMediaQuery` |
| `src/shared/utils` | `cn`, `buttonClass`, `whatsapp` |

Imports con el alias `@/` → `src/` (configurado en `tsconfig.app.json` y `vite.config.ts`). Solo los archivos de la misma carpeta se importan con `./`.

```bash
pnpm install
pnpm dev
pnpm build
pnpm lint
pnpm preview
```

## Rutas

| Ruta | Página | Notas |
|---|---|---|
| `/` | `HomePage` | Landing completa |
| `/servicios` | `ServicesPage` | Catálogo por categoría (`?categoria=unas`, `pedicure`, `pestanas-cejas`, `faciales`, `depilacion`), panel de detalle y formulario de reserva |

Los enlaces del menú usan `/#seccion`, así funcionan desde cualquier ruta. Para despliegue como SPA están `vercel.json` (Vercel) y `public/_redirects` (Netlify), que redirigen todo a `index.html`.

## Secciones

| Orden | Sección | Feature |
|---|---|---|
| — | Barra de anuncios (marquee, solo escritorio) | `navigation` |
| 1 | Portada a pantalla completa con fotos del interior en fundido, accesos rápidos a categorías, horario y dirección | `hero` |
| — | Banda de servicios (marquee, solo escritorio) | `shared/components/ui/GlamBand` |
| 2 | Servicios: 5 tarjetas de categoría con fotos que rotan (Uñas destacada) y botón "Ver todos los servicios" | `services` |
| 3 | Galería (fotos referenciales, filtros, carrusel continuo en móvil y antes/después) | `gallery` |
| 4 | Testimonios (bloque de espera con enlace a reseñas hasta tener testimonios confirmados) | `testimonials` |
| 5 | El estudio (foto del mural con el lema, puntos fuertes, clips e higiene) | `studio` |
| 6 | Promociones (ruleta y combos) | `promotions` |
| 7 | Reservas (formulario que abre WhatsApp) | `contact` |
| 8 | Preguntas frecuentes | `faq` |
| 9 | Ubicación y horario | `contact` |
| — | Header (menú hamburguesa en móvil y tablet), barra inferior móvil, botón flotante de WhatsApp en escritorio y footer | `navigation`, `contact` |

## Dónde se edita cada cosa

| Qué | Archivo |
|---|---|
| WhatsApp, Instagram, dirección, horario, mapa, enlace de reseñas | `src/config/site.ts` (los valores `null` se muestran como "Por confirmar") |
| Fotos | `src/assets/photos/` y `src/config/photos.ts` |
| Fotos de la portada | `heroSlides` en `src/config/photos.ts` (cada foto con `src`, `alt` y `position`; se suman más al arreglo). No usar fotos con el letrero: el logo ya está en el header |
| Accesos rápidos de la portada | `src/features/hero/data/quickLinks.ts` |
| Servicios, categorías, duración y precios | `src/features/services/data/services.ts` (alimenta tarjetas, página /servicios, panel y formulario) |
| Categorías: nombre, frase corta y fotos que rotan | `categories` en `src/features/services/data/services.ts`; las URLs de fotos están en `referencePhotos` de `src/config/photos.ts` |
| Fotos de trabajos | `src/features/gallery/data/gallery.ts` (campo `image`); hoy usa fotos referenciales de Unsplash (`referencePhotos` en `src/config/photos.ts`) |
| Puntos fuertes del estudio | `src/features/studio/data/highlights.ts` |
| Mensajes de la barra de anuncios | `announcements` en `src/config/site.ts` |
| Testimonios | `src/features/testimonials/data/testimonials.ts` (solo se muestran los que tienen `confirmed: true`) |
| Premios de la ruleta y combos | `src/features/promotions/data/promotions.ts` |
| Preguntas frecuentes | `src/features/faq/data/faq.ts` |
| Menú | `src/features/navigation/data/navLinks.ts` |
| Colores, fuentes y medidas | `src/app/styles/tokens.css` |
| Estilos globales (wrap, section, eyebrow, badge, link) | `src/app/styles/ui.css` |

## Sistema de diseño

- Tipografía: Outfit 800 para títulos (escala fija h1/h2/h3), Montserrat para texto. Great Vibes solo en la palabra "aesthetic" del hero. El logo usa sus propias fuentes y no se toca.
- Encabezados de sección: un solo componente `SectionHead` (kicker rosa en mayúsculas + título + subtítulo corto).
- Botón primario rosa `--pink-strong` sólido con texto blanco (hover `--pink-text`) y secundario con borde rosa; misma altura, radio y sombra (`shared/components/ui/Button`).
- Tarjetas e imágenes: radio `--radius` y sombra `--shadow` (clase global `.card`).
- Secciones con el mismo espaciado (`--section-y`) y fondos alternados blanco cálido / rosa pastel automáticos (`ui.css`).
- Una sola animación de entrada (`useReveal`: fade + leve subida); marquee y sparkles discretos.
- Portada: fundido de 1,5 s cada 7 s con zoom sutil (`HeroSlideshow`). Con `prefers-reduced-motion` queda una sola foto fija.
- Carruseles de imágenes (galería en móvil) se desplazan solos y lento en bucle (`useAutoScroll`, clones con `aria-hidden`), se pausan al tocar, al pasar el mouse o con foco, y se pueden deslizar a mano. Los carruseles con texto no se mueven solos.

## Marca

- Logo oficial: letrero circular "NAILS & GO studio" con pincel rosa sobre la "A" (Josefin Sans dorado y Quicksand).
- Colores (todos en `tokens.css`, sin hex sueltos en los módulos):
  - `--pink` #E8409A, rosa neón del letrero: acentos, palabra "aesthetic", iconos, bordes decorativos, chips activos, focos.
  - `--pink-strong` #CC2F86: fondo de botones y bordes de botones secundarios (blanco encima: 4,9:1).
  - `--pink-text` #B8277A: texto rosa pequeño sobre fondos claros (kickers, enlaces, precios), para cumplir AA (≥ 5,2:1).
  - Ciruela #3B2236 para textos, blanco cálido #F7F4F2 y rosa pastel #FBEEF5 de fondo. Dorado #C8A96B solo en el logo y los sparkles.
- El letrero exterior ("Nails & Go Beauty Studio" con N cursiva) y los banners ("Nails N' Go") usan otras versiones de la marca.

## Datos tomados de la versión 1 (rama `propuesta/salon-spa`), por confirmar con la dueña

- Dirección Retablo 729, Comas, Lima Norte, y horario lunes a domingo desde las 10:00.
- Facebook "Nails n GO" y mensajes de Instagram como respaldo.
- Ficha de Google Maps "Nails n' GO" (coordenadas -11.9323528, -77.0582215): enlace en Ubicación y en "Ver reseñas en Google"; mapa embebido sin API key. No se usan fotos ni textos de reseñas de Google.
- Fotos de uñas de Unsplash en la galería: referenciales, se reemplazan por trabajos reales.

## Pendiente con el estudio

- Permiso para usar fotos y marca. Las fotos actuales son referenciales; la fachada fue mejorada con IA.
- Confirmar dirección, horario y la ficha de Google Maps.
- Lista final de servicios, descripciones, duración y precios.
- Fotos reales de trabajos, antes y después, y clips verticales del estudio.
- Fotos del local en alta resolución para la portada en escritorio (las actuales miden 473 a 765 px de ancho y se ven blandas a pantalla completa).
- Testimonios reales con autorización.
- Condiciones de la ruleta y combos.
- Respuestas de preguntas frecuentes y proceso de higiene.
