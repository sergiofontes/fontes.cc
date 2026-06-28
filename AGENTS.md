# Repository Guidelines

This is the source for [fontes.cc](https://fontes.cc), Sérgio Fontes’ personal portfolio — a single-page Next.js app (pages router, plain JS).

## Commands

- `npm install` — deps (Node.js >= 20.9.0)
- `npm run dev` — dev server at `http://localhost:3000`
- `npm run build` — production build
- `npm start` — run the build
- `npx stylelint "**/*.scss"` — lint SCSS (no npm script; config in `stylelint.config.js`; recess property order enforced — vendor partials already error, ignore those)

No test suite, no JS linter.

## Architecture

The whole site is one page (`pages/index.js`): `Nav`, `Hero`, `AboutExperience`, `AboutTestimonial`, `AboutTraits`, `AboutContact`, `Work` (per-project carousel rows, each a `WorkCase`), `Footer`. Work-case pages (e.g. `pages/work/catalog.js`) open with `HeroCase` instead of `Hero`. `components/layout.js` wraps the “Skip to content” link (targets `#content`) and children; `pages/_document.js` holds the shared static `<head>` (favicons, theme color); fonts are self-hosted via `next/font/google` in `pages/_app.js`. SEO/metadata is thematic JSON in `data/seo/` (`site.json` defaults + one file per page), consumed by `components/seo` and spread per page (`<Seo {...seo} />`).

### Component convention

Each component is a folder under `components/`:
- `index.js` — re-exports the default (`export { default } from './name'`)
- `<name>.js` — the component. Class names are plain Lean BEM strings (`className="logo_experience"`) composed with the shared utilities (`grid`, `content`, `content_column`/`content_columns`/`content_divisor`/`content_divisors`, `-last`). Use `classnames` (aliased `cn`) only for conditional classes (`cn('nav', { open: isOpen })`).
- `<name>.scss` — a **global** stylesheet (NOT a CSS Module), imported once in `pages/_app.js` (the only place Next allows global CSS).

### Content lives in the markup

Author content — copy, headings, summaries, credits, `alt` text — **in the JSX where it renders**, never gathered into a separate data array `.map()`’d into markup elsewhere. A reader should find a section’s words by opening its component.

- **Do** spell each item out at its call site (`components/about/*`, `components/what/what.js`, `components/work/work.js`: every case a `<CasePreview>` with literal `<Slide>`/`<Mockup>`/`<Colophon>` children, `alt`/summary inline).
- **Don’t** collect prose/`alt` into a `cases`/`SHARING`-style array rendered through `.map`. Presentational helpers taking content as props/children are fine (`Mockup`, `Slide`, `Media`, `Phone`); the anti-pattern is the separated *data array of content*. A short chrome identifier may stay an attribute (`<Logo type="vtex" />`).
- A behavior-only `.map` over a count or DOM nodes is fine (setup-carousel dots `[0, 1, 2, 3]`; `Motion` over observed groups).

**Stays as data** (config/technical metadata): intrinsic image `width`/`height` and `sizes`/`src` for `next/image`; SEO (`data/seo/*.json`); the nav link config in `components/nav/nav.js` (`to`/`href`/`spy`/`sub`); arrays consumed by a third-party API (the `Typewriter` `strings` in `components/hero/hero.js`).

### Interactive controls

Reusable controls under `components/` follow the convention above and take a `classes` prop (extra classes via `cn`), forwarding the rest to the underlying element (`aria-label`, `onClick`, …). Defaults/prop shapes via `PropTypes` + default params (React 19 ignores `defaultProps` on function components), matching `components/anchor`.

- `Button` — link styled as a button (`<a>` + trailing arrow). `href`, `size` (`small`|`medium`), `disabled` (renders `aria-disabled` + `tabIndex={-1}`, drops `href`). `children` is the label.
- `ButtonIcon` — 24px square icon `<button>`. `icon` (`arrow`|`plus`), `disabled`; `aria-label` required.
- `ButtonMenu` — hamburger/close toggle (two `<span>` bars crossing into an X). `open` (drives `-open` + `aria-expanded`), `disabled`; `aria-label` required. `Nav` uses it via `classes="nav_button"` (placement only; appearance/animation in the component).
- `ButtonDot` — pagination dot (`::before` dot grows on hover/focus/active). `active` (drives `-active`); `aria-label` required.

Each control owns its `:hover`/`:active`/`:focus-visible` states (rings via `--color-focus-ring`/`--border-focus`). Shared tokens (`--radius-small`, `--button-size`, `--color-surface-dim`, `--color-subtle`) live in `styles/global.scss` / `styles/colors.scss`.

### Styling system (`styles/`)

Every SCSS file starts with `@import "scaffold"` → `utils.scss` (Sass mixins/functions: `rem()`, `clearfix`, `size`, `fontless`/`fontful`, `buttonless`, `underline`, focus-ring mixins) + the `include-media` vendor partial (`styles/vendor/`) for breakpoint queries (`@include media(">tablet")`). Breakpoints: **mobile ≤767, tablet 768–1200, desktop >1200** (`styles/vendor/include-media.scss`).

- `grid.scss` — the responsive grid as custom properties (`--columns`, `--gap`, `--gap-out`, `--column-max`, …) computed per breakpoint (mobile/tablet/desktop/desktoplarge/max), consumed by `.grid`.
- `content.scss` — the `.content` container + `.content_column`/`_columns`/`_divisor`/`_divisors` elements and `-last`, positioned via `--heading-start/width` and `--content-start/width`. HTML targets (`h2`, `h3`, `p`) stay nested under `.content`; element classes are flat (`.content_column`).
- `colors.scss`, `typography.scss`, `global.scss` — design tokens and base rules. `pages/_app.js` imports all of these + every component stylesheet + `normalize.css`.

#### Composing a section

Reach for these **before** raw `grid-column`/breakpoint math — they encode the responsive spans every section shares. Order: container class, then the component BEM class, then modifiers (`class="experience_text content_body"`).

- `grid content` on the `<section>` — the rotated/sticky `<h2>` is placed automatically.
- `content_body` — wide body/media column (copy, galleries, carousels).
- `content_aside` — narrow right-hand column (notes, colophon, logos); add `-center` to vertically center against neighbouring media.
- `content_media` — always full-bleed (gutter to gutter, every breakpoint).
- `content_rule` — closing hairline; base spans to the last content column, `-edge` runs to the trailing gutter.

Each utility owns its `grid-column` only; the component keeps its `grid-row`, typography, and any single-breakpoint exception (add a one-line `grid-column` override in the component scss — it wins on source order; don’t fork the utility). Custom grid children need `width: 100%` — `.grid` uses `justify-items: start`, so a child setting only `grid-column` collapses to content width (every `content` utility already sets it).

Shared scaffolds applied as extra classes the same way: `hero` (dark full-height home cover; `HeroCase` wears `hero` + layers `hero-case` on top, both in `components/hero/hero.scss`, so `HeroCase` ships no stylesheet), `carousel` (horizontal scroll-snap track, `Work`/`Solution`), `play`/`video` (centered play badge + link wrapper, `Work`/`Solution`). Shared control states (press, focus ring, hover surface) are grouped selectors in `components/button/button.scss`.

### Reveal animation

`components/motion` (`Motion`, rendered once per page) reveals mockups on first scroll-in. Mark a group `motion` and its children `motion_item`; `Motion` indexes each child with `--i`, adds `-ready`, then `-in` on viewport entry. `motion.scss` transitions each `motion_item` from offset/scaled/transparent into place, staggered by `--i`, tuned via `--mk-*` (inline `var()` fallbacks; sections like `What` override locally). Guarded behind `prefers-reduced-motion` and armed only by JS, so reduced-motion and no-JS render in place.

### Images

Raster art uses `next/image`: ship the sharpest source (highest `@Nx`), Next serves AVIF/WebP, lazy by default, with explicit `sizes` matching the render width per breakpoint; above-the-fold covers pass `priority`. Composition (positioning, masks) is CSS; drop shadows are usually CSS `filter`s over flat PNGs, but Work preview mockups bake the shadow into the PNG (larger canvas) so it survives the masked silhouette with no runtime `filter`. Each Work mockup declares intrinsic `width`/`height` at its `components/work/work.js` call site — baked mockups use the PNG’s native size with `left`/`top`/`size` pre-corrected so the artwork lands where the flat version sat.

### SVGs and i18n

SVGs import directly as React components via `@svgr/webpack` — wired through `turbopack.rules` in `next.config.js` (Next 16, Turbopack default), with the legacy `webpack()` hook as fallback. SVGR is viewBox-only (`dimensions: false`) — give icons explicit CSS size or Safari collapses them to 0 in flex. `next.config.js` sets `i18n` to a single `en` locale (no real translations). Inline SVGs that carry meaning need `role="img"` + `aria-label` (a bare `aria-label` isn’t reliably announced without the role).

### Implementing a section from a Figma design

Playbook for translating a Figma section into a faithful component (used rebuilding `AboutExperience`):

1. **Pull every breakpoint first.** Figma ships separate frames per layout. `get_design_context` each; if too large, `get_metadata` on the parent for child node IDs, then `get_screenshot` each. Responsive behavior only emerges from comparing frames.
2. **Map frames to MODES, not widths.** Figma frame widths ≠ project breakpoints. A Figma “720” frame describes the project’s **mobile** range; its “desktop” frame describes everything >1200. Verify by screenshotting *inside* each project range (e.g. 390/980/1280), never at the literal Figma widths.
3. **Translate grid spans via line numbers.** Figma’s `15px repeat(N,1fr) 15px` and the project grid share the gutter-columns-gutter line structure, so a Figma `col-[6/span 6]` maps onto project grid lines. Use `content.scss` custom properties where they line up (`grid-column: var(--content-start) / span calc(var(--content-width) * 2)`), fall back to literal line numbers otherwise; `/ -1` reaches the final line.
4. **Reuse before inventing.** Keep the `grid content` container and `<h2>`; reuse typography (`.label`), spacing (`--space-lg`/`--space-xl`), and color tokens (`--color-subtitle`, `--color-text`) instead of Figma’s raw px/hex. Name new classes in Lean BEM (`experience_logos`, `-current`).
5. **Assets.** Brand logos go through `components/logos` — add a `case` returning `<LogoX className="logo x" role="img" aria-label="X" />`. One-off marks import directly into the section. Size logos by overriding `height` scoped under the section, not the global `.logo`.
6. **DOM order for screen readers.** Order so the reading is correct (note → logo → period reads “currently, Stone, 2022–…”); never put `aria-label` on a list item wrapping readable text (it overrides the children).
7. **Verify, then prove it.** `npx stylelint` the changed files. Drive the dev server with Playwright (chromium installed) to screenshot the `#section` at the three mode widths; assert zero console/page errors, expected `role="img"` labels, no NEW horizontal overflow. The hero has pre-existing overflow at small widths — `git stash` and re-measure `scrollWidth` on the baseline before blaming your change.

## Comments

Default to **no comment**. One earns its place only for a real technical particularity — a browser quirk, workaround, constraint, or the math behind a magic number — that a reader couldn’t infer from the code. Never comment the obvious, restate a class/role, label a section/block, or describe design intent. Keep survivors to one terse line. Source annotations next to a value (`// 79px`) and functional directives (`// stylelint-disable`) stay. Structural/architectural explanation belongs here or in `CLAUDE.md`, not inline (reference it from code when useful, e.g. `// see AGENTS.md › Reveal animation`).

## Front-end Guidelines

MUST/SHOULD/NEVER for this static, animation-heavy portfolio.

- **Animation** — Honor `prefers-reduced-motion` (reduced variant or disable). Animate only `transform`/`opacity`, NEVER layout props or `transition: all`. Correct `transform-origin`; SVG transforms on a `<g>` with `transform-box: fill-box`. Prefer CSS > WAAPI > JS libs, to clarify cause/effect or add deliberate delight.
- **Interaction & navigation** — Full keyboard support; visible `:focus-visible` rings (NEVER `outline: none` without a replacement). Navigate via `<a>`/`next/link` (Cmd/Ctrl/middle-click work), NEVER `<div onClick>`; Back/Forward restores scroll. Hit target ≥24px (≥44px mobile); `touch-action: manipulation`; set `-webkit-tap-highlight-color`. NEVER disable zoom.
- **Layout** — Compose with `grid`/`content`; deliberate alignment. Verify mobile/laptop/ultra-wide; respect safe areas (`env(safe-area-inset-*)`); no stray scrollbars/overflows. Optical alignment (±1px), flex/grid over JS measurement.
- **Content & accessibility** — Native semantics (`button`/`a`/`label`) before ARIA; accurate `aria-label`, decorative `aria-hidden`. Hierarchical `<h1>`–`<h6>`; “Skip to content”; `scroll-margin-top` on anchor targets; `<title>` matches context. Status cues not color-only; `…` not `...`; non-breaking spaces in lockups (`⌘&nbsp;K`, brand names). Resilient to long content (`text-overflow`/clamp, `break-word`). Curly quotes; `text-wrap: balance` against widows; `translate="no"` on brand/identifiers.
- **Performance** — Prevent CLS (explicit image dimensions; preload above-fold, lazy-load the rest). Profile with CPU/network throttling; batch layout reads/writes. Fonts self-hosted via `next/font/google` in `pages/_app.js` (auto preload + `font-display: swap` + size-adjusted fallbacks); each family on `--font-body/title/hero`, re-rooted on `.global_fonts`.
- **Design & theming** — Meet contrast (prefer [APCA](https://apcacontrast.com/)); raise it on `:hover`/`:active`/`:focus`. `<meta name="theme-color">` matches background (`_document.js`); layered shadows; nested radii (child ≤ parent).
