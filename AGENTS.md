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

The entire site is one page (`pages/index.js`), composed from section components rendered in order: `Nav`, `Hero`, `AboutExperience`, `AboutTestimonial`, `AboutTraits`, `AboutContact`, `Work` (a list of per-project carousel rows, each a `WorkCase`), then `Footer`. The work-case pages (e.g. `pages/work/catalog.js`) open with `HeroCase` instead of `Hero`. `components/layout.js` is a thin wrapper that renders the “Skip to content” link (targeting the `#content` main landmark) and children; `pages/_document.js` holds the static `<head>` (favicons, theme color) shared across pages; fonts are self-hosted via `next/font/google` in `pages/_app.js`. Per-page and site-wide SEO/metadata live as thematic JSON in `data/seo/` (`site.json` defaults plus one file per page), consumed by the `components/seo` component which each page spreads (`<Seo {...seo} />`).

### Component convention

Each component lives in its own folder under `components/`:
- `index.js` — re-exports the default from the implementation file (`export { default } from './name'`)
- `<name>.js` — the component. Class names are plain Lean BEM strings (`className="logo_experience"`), composed with the shared utility classes (`grid`, `content`, `content_column`/`content_columns`/`content_divisor`/`content_divisors`, and the `-last` modifier). Use `classnames` (aliased `cn`) only for conditional classes (e.g. `cn('nav', { open: isOpen })`); otherwise write the literal string.
- `<name>.scss` — a **global** stylesheet (NOT a CSS Module), imported once in `pages/_app.js`.

### Content lives in the markup

Author content — visible copy, headings, summaries, credits, and image `alt` text — **directly in the JSX where it renders**, never collected into a separate JS data array/object that gets `.map()`’d into markup elsewhere. A reader should find a section’s words by opening its component, not by cross-referencing a `const` at the top of the file. This keeps content where it renders and the JS minimal.

- **Do** spell each item out at its call site — see `components/about/*`, `components/what/what.js`, and `components/work/work.js` (every case is written as a `<CasePreview>` with literal `<Slide>`/`<Mockup>`/`<Colophon>` children, each `alt` and summary inline).
- **Don’t** gather prose/`alt` text into a `cases`/`SHARING`-style array and render it through a `.map`. Presentational **helper components** that take content as props/children at the call site are encouraged (`Mockup`, `Slide`, `Media`, `Phone`); the anti-pattern is the separated *data array of content*, not props as such. A short identifier tied to chrome (a logo slug, a year) may stay an attribute, like `<Logo type="vtex" />`.
- A behavior-only `.map` over a count or over DOM nodes is fine — it carries no content (e.g. the setup-carousel dots map `[0, 1, 2, 3]`; `Motion` maps observed groups).

**Stays as data** (configuration/technical metadata, not body content): intrinsic image dimensions (`components/work/mockup-sizes.js`) and the `sizes`/`src` strings for `next/image`; per-page SEO/head metadata (`data/seo/*.json`); the small navigation link config in `components/nav/nav.js` (the `to`/`href`/`spy`/`sub` flags); and arrays consumed by a third-party API (e.g. the `Typewriter` `strings` in `components/hero/hero.js`).

### Interactive controls

A small set of reusable controls lives under `components/`, each following the convention above (`index.js` + `<name>.js` + global `<name>.scss`). They take a `classes` prop (extra class names, composed via `cn`) and forward the rest of their props to the underlying element, so consumers can pass `aria-label`, `onClick`, etc. Defaults and prop shapes are declared with `PropTypes`/`defaultProps`, matching `components/anchor`.

- `Button` — a link styled as a button (`<a>` with a trailing arrow icon). Props: `href`, `size` (`small` default, or `medium`), `disabled` (renders `aria-disabled` + `tabIndex={-1}` and drops `href` instead of using the non-interactive `disabled` attribute). `children` is the label.
- `ButtonIcon` — a square 24px icon `<button type="button">` wrapping an icon. Props: `icon` (`arrow` default, or `plus`), `disabled`; `aria-label` is **required**.
- `ButtonMenu` — the hamburger/close toggle (`<button type="button">` with two `<span>` bars that cross into an X). Props: `open` (drives the `-open` modifier and `aria-expanded`), `disabled`; `aria-label` is **required**. `Nav` consumes it via `classes="nav_button"`, which owns only the fixed placement while appearance/animation come from the component.
- `ButtonDot` — a pagination dot (`<button type="button">` with a `::before` dot that grows on hover/focus/active). Props: `active` (drives the `-active` modifier); `aria-label` is **required**.

Each control owns its `:hover`/`:active`/`:focus-visible` states (focus rings via `--color-focus-ring`/`--border-focus`), animates only `transform`/`opacity`, and guards transitions behind `@media (prefers-reduced-motion: no-preference)`. Shared tokens (`--radius-small`, `--button-size`, `--color-surface-dim`, `--color-subtle`) live in `styles/global.scss` and `styles/colors.scss`.

### Styling system (`styles/`)

Every SCSS file starts with `@import "scaffold"`, which pulls in `utils.scss` (Sass mixins/functions: `rem()`, `clearfix`, `size`, `fontless`/`fontful`, `buttonless`, `underline`, focus-ring mixins) and the `include-media` vendor partial (copied into `styles/vendor/`) used for breakpoint queries like `@include media(">tablet")`.

- `grid.scss` defines the responsive grid as CSS custom properties (`--columns`, `--gap`, `--gap-out`, `--column-max`, etc.), computed from Sass variables per breakpoint (mobile/tablet/desktop/desktoplarge/max) and consumed by the `.grid` class (a CSS grid with column count driven by `--columns`).
- `content.scss` defines the `.content` layout container and its `.content_column`/`.content_columns`/`.content_divisor`/`.content_divisors` element classes plus the `-last` modifier, which position section content within the grid via `--heading-start/width` and `--content-start/width` custom properties (responsive per breakpoint). HTML-element targets (`h2`, `h3`, `p`) stay nested under `.content`; the element classes are written flat (`.content_column`, not `.content .column`).
- `colors.scss`, `typography.scss`, `global.scss` provide design tokens and base/global rules; `pages/_app.js` is the single place that imports all of these plus every component stylesheet and `normalize.css`.

When styling a new section, compose it with the `grid`/`content` utilities rather than inventing layout primitives, and `@import "scaffold"` for the shared mixins and breakpoints.

#### Composing a section

Reach for these classes **before** writing raw `grid-column`/breakpoint math — they already encode the responsive spans every section shares, so a new section rarely needs custom placement. Put the container class first, then the component's own BEM class, then modifiers (`class="experience_text content_body"`).

- Container: `grid content` on the `<section>`. The rotated/sticky `<h2>` is placed automatically by `.content`.
- `content_body` — the wide body/media column (body copy, galleries, carousels). Spans the content column on mobile and widens on tablet/desktop.
- `content_aside` — the narrow right-hand column (subtitle notes, colophon, logos). Add `-center` to vertically center it against its neighbouring media instead of top-aligning.
- `content_media` — an always-full-bleed element (gutter to gutter, every breakpoint).
- `content_rule` — the closing hairline; base spans wide (to the last content column), `-edge` runs to the trailing gutter.

Each utility owns its `grid-column` only — the component keeps its own `grid-row`, typography, and any single-breakpoint exception (e.g. a divider that goes full-bleed on mobile but narrows on desktop). When a placement genuinely diverges at one breakpoint, add a one-line `grid-column` override in the component scss (it wins on source order); don't fork the utility.

Several shared scaffolds live in their own component modules and are applied as extra classes the same way: `hero` (the dark, full-height home cover; the case cover `HeroCase` wears its `hero` class for the shared look and layers `hero-case` on top — both live in the single `components/hero/hero.scss`, so `HeroCase` ships no stylesheet of its own), `carousel` (the horizontal scroll-snap track used by `Work` and `Solution`), and `play`/`video` (the centered play badge and its link wrapper, used by `Work` and `Solution`). Shared interactive-control states (press, focus ring, hover surface) live as grouped selectors in `components/button/button.scss`.

### Reveal animation

`components/motion` (`Motion`, rendered once per page) reveals mockups on first scroll-in. Mark a group `motion` and its animated children `motion_item`; `Motion` indexes each child with a `--i` custom property, adds `-ready`, then `-in` once the group enters the viewport. `motion.scss` transitions each `motion_item` from offset/scaled/transparent into place, staggered by `--i` and tuned through the `--mk-*` custom properties (tuned values inline as `var()` fallbacks; sections like `What` override them locally). Guarded behind `prefers-reduced-motion` and only armed by JS, so reduced-motion and no-JS render the mockups in place.

### Images

Raster art (mockups, covers) uses `next/image`: each call ships the sharpest source it has (the highest `@Nx`) and Next serves it as AVIF/WebP, lazy by default, sized via an explicit `sizes` that matches the element's render width per breakpoint; above-the-fold covers pass `priority`. The visual composition — positioning, masks, drop shadows — is done in CSS over flat or transparent PNGs, so the assets stay plain. `components/work/mockup-sizes.js` holds each mockup's intrinsic `[width, height]` (required by `next/image` for the aspect ratio).

### SVGs and i18n

SVGs are imported directly as React components via `@svgr/webpack`. Under Next 16 (Turbopack by default) the loader is wired through `turbopack.rules` in `next.config.js`, with the legacy `webpack()` hook kept as a fallback. `next.config.js` also sets `i18n` to a single `en` locale (no actual translations exist).

### Implementing a section from a Figma design

A repeatable playbook for translating a Figma section into a faithful, code-fitting component. Followed end-to-end when rebuilding `AboutExperience`.

**1 — Pull every breakpoint first.** Figma sections ship as separate frames per layout (e.g. `390` / `720` / `1280`). Use `get_design_context` on each frame; when a frame is too large to return, `get_metadata` on the parent to find the per-breakpoint child node IDs, then `get_screenshot` each. Read all three before writing anything — the responsive behavior (logos stacking vs. rowing, label rotation, divider span) only emerges from comparing frames.

**2 — Map Figma frames to layout MODES, not widths.** Figma frame widths are NOT the project breakpoints. The project switches at `tablet: 767px` and `desktop: 1200px` (`styles/vendor/include-media.scss`), giving three modes: mobile `≤767`, tablet `768–1200`, desktop `>1200`. So a Figma “tablet” frame drawn at `720px` actually describes the project’s **mobile** range, and its “desktop” frame describes everything `>1200`. Treat the three frames as the three modes in order, and when verifying, screenshot at a width *inside* each project range (e.g. `390` / `980` / `1280`) — never at the literal Figma frame widths.

**3 — Translate grid spans via line numbers.** Figma’s generated grid (`15px repeat(N,1fr) 15px`) and the project grid (`0/gap-delta repeat(--columns) 0/gap-delta`) share the same gutter-columns-gutter line structure, so a Figma `col-[6/span 6]` maps directly onto the project’s grid lines. Express placements with the `content.scss` custom properties where they line up (`grid-column: var(--content-start) / span calc(var(--content-width) * 2)`) and fall back to literal line numbers per breakpoint when a span has no clean token (`grid-column: 3 / span 7`). `/ -1` reaches the final line (full-bleed-to-gutter dividers).

**4 — Custom grid children need `width: 100%`.** `.grid` sets `place-items: stretch start` → `justify-items: start`, so a direct grid child that only sets `grid-column` collapses to content width (an empty divider `<span>` renders as a zero-width, invisible line). Every shared `content` utility sets `width: 100%` for this reason; mirror it on any new grid child.

**5 — Reuse before inventing.** Keep the shared `grid content` container and `<h2>` (they already give the rotated/sticky heading-to-body relationship across breakpoints). Reuse typography classes (`.label`), spacing tokens (`--space-lg`/`--space-xl`), and color tokens (`--color-subtitle`, `--color-text`) instead of hardcoding the px/hex values Figma emits. Name new classes in Lean BEM (`experience_logos`, `experience_logo`, `-current`).

**6 — Assets.** Company/brand logos go through `components/logos` — add a `case` returning `<LogoX className="logo x" role="img" aria-label="X" />`. One-off marks/annotations (e.g. the handwritten “currently” note) are imported directly into the section component. Size logos by overriding `height` (auto width) scoped under the section, not by touching the global `.logo`.

**7 — Accessibility.** Give meaningful inline SVGs `role="img"` + `aria-label` (a bare `aria-label` on an `<svg>` isn’t reliably announced without the role). Never put `aria-label` on a list item that wraps readable text — it overrides the children. Order the DOM so the screen-reader reading is correct (note → logo → period reads “currently, Stone, 2022–…”).

**8 — Verify visually, then prove it.** `npx stylelint` the changed files (recess property order is enforced — vendor partials already error, ignore those). Drive the running dev server with Playwright (`npm i playwright` in a scratch dir, `chromium` already installed) to screenshot the `#section` element at the three mode widths, and assert: zero console/page errors, expected `role="img"` labels, and no NEW horizontal overflow. The page has pre-existing overflow at small widths from the hero — confirm a section isn’t the cause by `git stash`-ing the change and re-measuring `scrollWidth` on the baseline before blaming your code.

## Comments

- Inline code comments capture only the non-obvious **why** — the reason a value, guard, or workaround exists. Keep them lean.
- Don’t state the obvious (what the code plainly does), restate a class/role, or duplicate guidance that already lives in this file or `CLAUDE.md`.
- Structural and architectural explanation — how modules fit together, conventions, the responsive system behind a section — belongs here (or in `CLAUDE.md`), not in inline comments. Reference it from code when useful (e.g. `// see AGENTS.md › Reveal animation`).

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
- SHOULD: Fonts self-hosted via `next/font/google` in `pages/_app.js` (auto preload + `font-display: swap` + size-adjusted fallbacks); each family is exposed on a `--font-body/title/hero` custom property and re-rooted on the `.global_fonts` wrapper

### Design & theming
- MUST: Meet contrast (prefer [APCA](https://apcacontrast.com/)); increase it on `:hover`/`:active`/`:focus`
- SHOULD: `<meta name="theme-color">` matches background (set in `_document.js`); layered shadows; nested radii (child ≤ parent)
