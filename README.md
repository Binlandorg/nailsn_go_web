# Nails & Go Studio — web

Landing de Nails & Go Studio (Nails n' GO), salón spa en Retablo 729, Comas, Lima Norte. Instagram: [@nailsn_go](https://www.instagram.com/nailsn_go/).

## Stack

React 19 + TypeScript + Vite 8, CSS Modules y React Compiler. Organizado por features en `src/features`.

```bash
pnpm install
pnpm dev
pnpm build
pnpm lint
```

## Dónde se edita cada cosa

| Qué | Archivo |
|---|---|
| Contacto, horario, dirección, WhatsApp | `src/config/site.ts` |
| Promociones y precios | `src/features/services/data/services.ts` |
| Fotos | `src/config/photos.ts` |
| Paleta y tokens | `src/app/styles/tokens.css` |
| SEO y datos de negocio (JSON-LD) | `index.html` |

## Paleta (60-30-10)

| Proporción | Rol | Tokens |
|---|---|---|
| 60% | Neutro | `--color-white`, `--color-cream`, `--color-blush` |
| 30% | Marca | `--color-rose`, `--color-mauve`, `--color-plum` |
| 10% | Acento (solo CTA de reserva) | `--color-accent` |
| Detalle | Metal | `--color-gold`, `--gradient-gold` |

## Reservas

`bookingUrl(servicio)` en `src/config/site.ts` arma el enlace de WhatsApp con el mensaje del servicio elegido. Mientras `whatsapp.phone` esté vacío, todos los botones llevan al DM de Instagram.

## Pendientes

- [ ] Número de WhatsApp del salón (formato `51XXXXXXXXX` en `site.whatsapp.phone`).
- [ ] Horario completo (en Instagram solo se ve "L-D 10…").
- [ ] Confirmar si la dirección es Jr., Av. o Calle Retablo 729 y el enlace exacto de Google Maps.
- [ ] Confirmar las promociones vigentes y actualizarlas cada mes.
- [ ] Lista de servicios con precio regular (además de las promos).
- [ ] Logo en SVG o PNG para reemplazar el logo provisional.
- [ ] Fotos originales del salón, equipo y trabajos, con permiso de uso, para reemplazar las de Unsplash.
- [ ] Reseñas reales (Google o capturas con permiso) para una sección de opiniones.
- [ ] URL del Facebook y dominio final (para `og:url`, canonical e imagen `og:image`).
- [ ] Navegación con flechas entre pestañas de promociones.
