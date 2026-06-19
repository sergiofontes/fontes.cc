# SEO data (`data/seo/`)

Thematic JSON holding every piece of SEO/metadata that used to live inline in
`pages/*.js`. The `components/seo` component reads these and emits the `<title>`,
description, canonical, Open Graph, Twitter Card, and JSON-LD tags. Pages just
spread their file: `<Seo {...seo} />`.

JSON can’t carry comments, so the “why” notes that were in the code live here
instead.

## Files

### `site.json` — site-wide defaults
Consumed by `components/seo/seo.js` for values shared across every page:

- `url` — origin used to build the canonical/`og:url` from each page’s `path`.
- `name` — `og:site_name`.
- `image` — default social card; also the per-page `og:image`/`twitter:image`
  fallback when a page doesn’t set its own.
- `imageWidth` / `imageHeight` — the social card is `1200×628`; emitted as
  `og:image:width`/`height` so crawlers don’t have to fetch the file to size it.
- `locale` — `og:locale` (`en_US`).

### `home.json` — the homepage
`title`, `description`, `path`, `type`, plus a `jsonLd` graph with two nodes:

- **`Person`** — the identity entity. `sameAs` points at the LinkedIn and GitHub
  profiles so search engines can tie the social accounts to “Sérgio Fontes” and
  build a knowledge panel.
- **`WebSite`** — references the `Person` as its `author` via `@id`, so the two
  nodes link into one graph.

### `catalog.json` — the `/work/catalog` case
`title`, `description`, `path`, `type: "article"`, and a `CreativeWork` `jsonLd`
describing the case study (with `author` → the same `Person`).

## Adding a page

1. Drop a `data/seo/<page>.json` with at least `title`, `description`, `path`
   (and `type`/`image`/`jsonLd` as needed — anything omitted falls back to the
   `Seo` defaults / `site.json`).
2. In the page: `import seo from "../../data/seo/<page>.json";` then
   `<Seo {...seo} />`.

## Notes

- **No de-duplication.** JSON can’t reference values, so a string like the
  description appears both as a top-level field and inside `jsonLd`. That’s
  inherent to the format — keep the copies in sync when editing.
- **Image dimensions** in `site.json` only match the default `preview.png`. If a
  page sets a differently-sized `image`, move the width/height onto that page’s
  file (and have `Seo` read them per page).
