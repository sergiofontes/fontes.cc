# Repository Guidelines

This is the source for [fontes.cc](https://fontes.cc), Sérgio Fontes' personal portfolio site — a single-page Next.js app (pages router, plain JS).

## Commands

- `npm install` — install dependencies (requires Node.js >= 20.9.0)
- `npm run dev` — start the dev server at `http://localhost:3000`
- `npm run build` — production build
- `npm start` — run the production build
- `npx stylelint "**/*.scss"` — lint SCSS (no npm script is defined for this; config lives in `stylelint.config.js`)

There is no test suite and no JS linter configured for this project.

## Architecture

The entire site is one page (`pages/index.js`), composed from section components rendered in order: `Nav`, `Header`, `AboutExperience`, `AboutTestimonial`, `AboutTraits`, `AboutContact`, `Work` (wrapping `WorkPetPlate` and `WorkTropical`), then `Footer`. `components/layout.js` is a thin wrapper that exports `siteTitle` and renders children; `pages/_document.js` holds the static `<head>` (favicons, fonts, theme color) shared across pages.

### Component convention

Each component lives in its own folder under `components/`:
- `index.js` — re-exports the default from the implementation file (`export { default } from './name'`)
- `<name>.js` — the component. Class names are plain Lean BEM strings (`className="logo_experience"`), composed with the shared utility classes (`grid`, `content`, `content_column`/`content_columns`/`content_divisor`/`content_divisors`, and the `-last` modifier). Use `classnames` (aliased `cn`) only for conditional classes (e.g. `cn('nav', { open: isOpen })`); otherwise write the literal string.
- `<name>.scss` — a **global** stylesheet (NOT a CSS Module), imported once in `pages/_app.js`.

### Interactive controls

A small set of reusable controls lives under `components/`, each following the convention above (`index.js` + `<name>.js` + global `<name>.scss`). They take a `classes` prop (extra class names, composed via `cn`) and forward the rest of their props to the underlying element, so consumers can pass `aria-label`, `onClick`, etc. Defaults and prop shapes are declared with `PropTypes`/`defaultProps`, matching `components/anchor`.

- `Button` — a link styled as a button (`<a>` with a trailing arrow icon). Props: `href`, `size` (`small` default, or `medium`), `disabled` (renders `aria-disabled` + `tabIndex={-1}` and drops `href` instead of using the non-interactive `disabled` attribute). `children` is the label.
- `ButtonIcon` — a square 24px icon `<button type="button">` wrapping the arrow icon. Props: `disabled`; `aria-label` is **required**.
- `ButtonMenu` — the hamburger/close toggle (`<button type="button">` with two `<span>` bars that cross into an X). Props: `open` (drives the `-open` modifier and `aria-expanded`), `disabled`; `aria-label` is **required**. `Nav` consumes it via `classes="nav_button"`, which owns only the fixed placement while appearance/animation come from the component.
- `ButtonDot` — a pagination dot (`<button type="button">` with a `::before` dot that grows on hover/focus/active). Props: `active` (drives the `-active` modifier); `aria-label` is **required**.

Each control owns its `:hover`/`:active`/`:focus-visible` states (focus rings via `--color-focus-ring`/`--border-focus`), animates only `transform`/`opacity`, and guards transitions behind `@media (prefers-reduced-motion: no-preference)`. Shared tokens (`--radius-small`, `--button-size`, `--color-surface-dim`, `--color-subtle`) live in `styles/global.scss` and `styles/colors.scss`.

### Styling system (`styles/`)

Every SCSS file starts with `@import "scaffold"`, which pulls in `utils.scss` (Sass mixins/functions: `rem()`, `clearfix`, `size`, `fontless`/`fontful`, `buttonless`, `underline`, focus-ring mixins) and the `include-media` vendor partial (copied into `styles/vendor/`) used for breakpoint queries like `@include media(">tablet")`.

- `grid.scss` defines the responsive grid as CSS custom properties (`--columns`, `--gap`, `--gap-out`, `--column-max`, etc.), computed from Sass variables per breakpoint (mobile/tablet/desktop/desktoplarge/max) and consumed by the `.grid` class (a CSS grid with column count driven by `--columns`).
- `content.scss` defines the `.content` layout container and its `.content_column`/`.content_columns`/`.content_divisor`/`.content_divisors` element classes plus the `-last` modifier, which position section content within the grid via `--heading-start/width` and `--content-start/width` custom properties (responsive per breakpoint). HTML-element targets (`h2`, `h3`, `p`) stay nested under `.content`; the element classes are written flat (`.content_column`, not `.content .column`).
- `colors.scss`, `typography.scss`, `global.scss` provide design tokens and base/global rules; `pages/_app.js` is the single place that imports all of these plus every component stylesheet, `normalize.css`, and Swiper’s SCSS modules (core, keyboard, pagination, effect-cards).

When styling a new section, compose it with the `grid`/`content` utilities rather than inventing layout primitives, and `@import "scaffold"` for the shared mixins and breakpoints.

### SVGs and i18n

SVGs are imported directly as React components via `@svgr/webpack`. Under Next 16 (Turbopack by default) the loader is wired through `turbopack.rules` in `next.config.js`, with the legacy `webpack()` hook kept as a fallback. `next.config.js` also sets `i18n` to a single `en` locale (no actual translations exist).

---

## Front-end Guidelines

UI rules relevant to this static, animation-heavy portfolio. MUST/SHOULD/NEVER.

### Animation
- MUST: Honor `prefers-reduced-motion` (reduced variant or disable)
- MUST: Animate only `transform`/`opacity`; NEVER layout props (`top`/`left`/`width`/`height`) or `transition: all`
- MUST: Correct `transform-origin`; SVG transforms on a `<g>` wrapper with `transform-box: fill-box`
- SHOULD: CSS > WAAPI > JS libs; animate to clarify cause/effect or add deliberate delight

### Interaction & navigation
- MUST: Full keyboard support; visible `:focus-visible` rings; NEVER `outline: none` without a replacement
- MUST: Navigation via `<a>`/`next/link` (Cmd/Ctrl/middle-click); NEVER `<div onClick>`; Back/Forward restores scroll
- MUST: Hit target ≥24px (≥44px mobile); `touch-action: manipulation`; SHOULD set `-webkit-tap-highlight-color`
- NEVER: Disable zoom (`user-scalable=no`, `maximum-scale=1`)

### Layout
- MUST: Compose with the `grid`/`content` utilities; deliberate alignment, no accidental placement
- MUST: Verify mobile/laptop/ultra-wide; respect safe areas (`env(safe-area-inset-*)`); no stray scrollbars/overflows
- SHOULD: Optical alignment (±1px when perception beats geometry); flex/grid over JS measurement

### Content & accessibility
- MUST: Prefer native semantics (`button`/`a`/`label`) before ARIA; accurate `aria-label`, decorative `aria-hidden`
- MUST: Hierarchical `<h1>`–`<h6>`, "Skip to content" link, `scroll-margin-top` on anchor targets, `<title>` matches context
- MUST: Status cues not color-only; `…` (not `...`); non-breaking spaces in lockups (`⌘&nbsp;K`, brand names)
- MUST: Resilient to long content (`text-overflow`/clamp, `break-word`)
- SHOULD: Curly quotes (already used in copy); `text-wrap: balance` to avoid widows/orphans; `translate="no"` on brand/identifiers

### Performance
- MUST: Prevent CLS — explicit image dimensions; preload above-fold images, lazy-load the rest
- MUST: Profile with CPU/network throttling; avoid reflow thrash (batch layout reads/writes)
- SHOULD: Fonts via `<link rel="preload"/preconnect">` with `font-display: swap` (Google Fonts loaded in `_document.js`)

### Design & theming
- MUST: Meet contrast (prefer [APCA](https://apcacontrast.com/)); increase it on `:hover`/`:active`/`:focus`
- SHOULD: `<meta name="theme-color">` matches background (set in `_document.js`); layered shadows; nested radii (child ≤ parent)
