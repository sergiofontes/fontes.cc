# Next.js 12→16 + React 17→19 Upgrade — Design

**Date:** 2026-06-15
**Status:** Approved

## Goal

Modernize fontes.cc from Next.js 12.1.0 / React 17.0.2 to the latest Next.js 16 /
React 19, in a single pass, with no architectural changes.

## Decisions

- **Big-bang to latest** — go straight to Next 16 + React 19 + latest deps, then
  verify by running the site. There is no test suite, so verification is manual.
- **Keep the Pages Router** — `pages/index.js`, `_app.js`, `_document.js` stay as-is.
  No `app/` migration. The site is a single page; the Pages Router is fully
  supported in Next 16.
- **No unrelated refactoring** — component convention, grid/content system, and
  Lean BEM class names are untouched.

## Current state (verified)

- Installed: `next@12.1.0`, `react@17.0.2`, `react-dom@17.0.2`.
- `next` is pinned to the floating `"latest"` tag in `package.json`.
- No data-fetching methods (`getInitialProps` / `getServerSideProps` /
  `getStaticProps`) anywhere.
- `<Link>` in `components/nav/nav.js` is from **`react-scroll`**, not `next/link`.
  There is no `next/link` migration to do.
- `next/head` is used in `pages/index.js` and `components/layout.js`; still
  supported under the Pages Router.
- Node 21.4.0 locally — satisfies Next 16's Node requirement.

## Change set

### 1. Dependency bumps — `package.json`

- `next`: `"latest"` → pinned `^16.x` (stop using the floating tag).
- `react` / `react-dom`: `17.0.2` → `^19.x`.
- `swiper`: `^8` → `^12`.
- `react-scroll`: → `^1.9.3` (declares React 19 peer support).
- `typewriter-effect`: → `^2.22` (React 17+ peer, fine for 19).
- `@svgr/webpack`: `^6` → `^8`.
- `sass` and the stylelint stack: refresh to current (low risk, optional — only if
  it does not introduce churn).

### 2. `next/image` API migration — `components/work/petplate.js`, `components/work/tropical.js`

Both files use the legacy Image API: `layout="fill"`. Next 13 redesigned
`next/image`.

- Replace `layout="fill"` with the `fill` boolean prop; remove the `layout` prop.
- Keep `placeholder="blur"` — blur data is auto-generated from the static PNG import.
- **Highest visual risk:** legacy `layout="fill"` rendered an extra wrapper
  `<span>`; the new `fill` does not. The `.image` parent must be `position:
  relative` with explicit sizing, and the `.display` rules may need adjustment.
  Verified by running the site.

### 3. Swiper v9+ module imports — `components/work/petplate.js`, `components/work/tropical.js`

- `import { EffectCards, Pagination, Keyboard } from 'swiper'` →
  `from 'swiper/modules'`.
- `swiper/react` import is unchanged.
- The `swiper/scss`, `swiper/scss/keyboard`, `swiper/scss/pagination`,
  `swiper/scss/effect-cards` imports in `pages/_app.js` are unchanged in v12.

### 4. `next.config.js` — Turbopack + SVGR

Next 16 makes Turbopack the default for `next dev` and `next build`. The current
SVGR integration is a `webpack()` hook, which Turbopack ignores — every
`import X from '*.svg'` (logos, icons, `symbol.svg`) would break.

- Add a Turbopack loader rule for SVG (`turbopack.rules` with `@svgr/webpack`,
  emitting as a JS module).
- Keep the existing `webpack()` hook as a fallback for any non-Turbopack path.
- The `i18n` config stays (still supported under the Pages Router).

### 6. `AGENTS.md` documentation update

Bring the repo guidelines in line with the post-upgrade reality, landing in the
same change set so the docs never describe a state that does not exist:

- Node requirement: `requires Node.js >= 12.22.0` → `>= 20.9.0` (Next 16 minimum).
- SVG note: the "SVGs and i18n" section currently says SVGs are imported via
  `@svgr/webpack` configured in `next.config.js`. Update it to mention that under
  Next 16 the loader is wired through Turbopack (`turbopack.rules`), with the
  `webpack()` hook kept as a fallback.
- Leave the architecture, component-convention, styling-system, and front-end
  guideline sections untouched — they remain accurate.

## Verification (no test suite)

1. `npm install` resolves cleanly with no unmet peer-dependency errors.
2. `npm run build` passes.
3. `npm run dev`, then manually confirm:
   - SVGs render (logos, nav arrow/symbol, all icons).
   - Both Swiper galleries work: cards effect, pagination dynamic bullets,
     keyboard navigation.
   - PetPlate and Tropical images fill their frames correctly (the `fill`
     migration).
   - `prefers-reduced-motion`, focus rings, and overall layout are intact across
     mobile/desktop widths.
4. `npx stylelint "**/*.scss"` still passes (only relevant if the stylelint stack
   is bumped).

## Out of scope

- App Router migration.
- Any redesign or content change.
- Adding a test suite.
