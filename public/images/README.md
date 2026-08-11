# Site images

Drop generated/licensed photos here. Filenames are referenced by the homepage sections:

| File | Used by | Recommended size | Notes |
|------|---------|------------------|-------|
| `hero.jpg` | Homepage hero background | 2400×1350 (16:9) | Moody dusk luxury office; a navy gradient shows until this exists. |
| `cta.jpg` | Homepage "Secure Your Financial Legacy" band | 2400×1000 (~21:9) | Glass towers at blue hour; navy gradient stand-in until added. |

The background is set via CSS `background-image`, so simply adding a file with the
matching name activates it — no code change needed. For best Core Web Vitals we can
later upgrade the hero to a `next/image` `<Image priority>` once the real file is in place.

JPG or WebP both work. Keep files reasonably compressed (< ~400 KB each).
